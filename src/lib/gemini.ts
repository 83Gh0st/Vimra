import { VertexAIClient } from "@google-cloud/aiplatform";

// Initialize Vertex AI Client
const vertexAIClient = new VertexAIClient({
  projectId: process.env.GCP_PROJECT_ID, // Set this in your .env file
  location: "us-central1", // Choose the appropriate region for your model
});

interface OutputFormat {
  [key: string]: string | string[] | OutputFormat;
}

export async function strict_output(
  system_prompt: string,
  user_prompt: string | string[],
  output_format: OutputFormat,
  default_category: string = "",
  output_value_only: boolean = false,
  model: string = "gemini-1.5-flash", // Update to the appropriate Gemini model
  temperature: number = 1,
  num_tries: number = 3,
  verbose: boolean = false
) {
  const list_input: boolean = Array.isArray(user_prompt);
  const dynamic_elements: boolean = /<.*?>/.test(JSON.stringify(output_format));
  const list_output: boolean = /\[.*?\]/.test(JSON.stringify(output_format));

  let error_msg: string = "";

  for (let i = 0; i < num_tries; i++) {
    let output_format_prompt: string = `\nYou are to output ${
      list_output && "an array of objects in"
    } the following in json format: ${JSON.stringify(output_format)}.`;

    if (list_output) {
      output_format_prompt += `\nIf output field is a list, classify output into the best element of the list.`;
    }

    if (dynamic_elements) {
      output_format_prompt += `\nAny text enclosed by < and > indicates you must generate content to replace it.`;
    }

    if (list_input) {
      output_format_prompt += `\nGenerate an array of json, one json for each input element.`;
    }

    const prompt = system_prompt + output_format_prompt + error_msg + user_prompt;

    try {
      // Call Vertex AI with Gemini model
      const [response] = await vertexAIClient.predict({
        endpoint: `projects/${process.env.GCP_PROJECT_ID}/locations/us-central1/publishers/google/models/${model}`,
        instances: [{ content: prompt }],
        parameters: { temperature },
      });

      const res = response.predictions?.[0]?.content?.replace(/'/g, '"') ?? "";

      if (verbose) {
        console.log("Prompt sent:", prompt);
        console.log("\nVertex AI response:", res);
      }

      let output: any = JSON.parse(res);

      if (list_input) {
        if (!Array.isArray(output)) {
          throw new Error("Output format not in an array of JSON");
        }
      } else {
        output = [output];
      }

      for (let index = 0; index < output.length; index++) {
        for (const key in output_format) {
          if (/<.*?>/.test(key)) continue;

          if (!(key in output[index])) {
            throw new Error(`${key} not in JSON output`);
          }

          if (Array.isArray(output_format[key])) {
            const choices = output_format[key] as string[];
            if (Array.isArray(output[index][key])) {
              output[index][key] = output[index][key][0];
            }
            if (!choices.includes(output[index][key]) && default_category) {
              output[index][key] = default_category;
            }
            if (output[index][key].includes(":")) {
              output[index][key] = output[index][key].split(":")[0];
            }
          }
        }

        if (output_value_only) {
          output[index] = Object.values(output[index]);
          if (output[index].length === 1) {
            output[index] = output[index][0];
          }
        }
      }

      return list_input ? output : output[0];
    } catch (e) {
      error_msg = `\n\nResult: ${res}\n\nError message: ${e}`;
      console.log("An exception occurred:", e);
      console.log("Current invalid JSON format ", res);
    }
  }

  return [];
}
