# Vimra

Vimra is a comprehensive course generation application designed to streamline the creation and management of educational content. Leveraging technologies such as MongoDB, Stripe, OpenAI, Prisma, Next.js, and Tailwind CSS, Vimra offers a robust platform for educators and content creators.
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)  ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white) ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white) 

## Features

- **Course Creation**![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) : Easily generate and manage courses with a user-friendly interface.
- **Payment Integration**![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white): Secure payment processing powered by Stripe.
- **AI Assistance**![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white) : Utilize OpenAI for content suggestions and enhancements.
- **Database Management**![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) : Efficient data handling with MongoDB and Prisma.
- **Responsive Design**![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white): Sleek and responsive user interface built with Next.js and Tailwind CSS.


## Relevance of the Project

Vimra addresses the growing need for dynamic, AI-assisted educational platforms in an era of digital learning. The platform is ideal for:

1. **Educators**: Simplifying course creation and monetization.
2. **Institutions**: Offering flexible content management.
3. **Learners**: Providing an intuitive and engaging interface.

By leveraging cutting-edge technologies, Vimra aims to:

- Reduce the effort and time required to create and publish courses.
- Enhance content quality using AI suggestions.
- Enable secure and scalable payment processing.
- Provide a modern and responsive user interface.

---

## Technologies Used

### **Frontend:**
- **Next.js**: 
  - Used for building a high-performance, server-side rendered (SSR) frontend.
  - Provides routing and dynamic page rendering for better SEO and speed.
- **Tailwind CSS**: 
  - A utility-first CSS framework for creating visually appealing and responsive designs.

### **Backend:**
- **Node.js**: 
  - Powers the backend with non-blocking, event-driven architecture.
- **Prisma**: 
  - An ORM (Object-Relational Mapping) tool to interact with the MongoDB database.
  - Ensures smooth database operations with type safety and schema migrations.
- **OpenAI API**: 
  - Provides AI-powered content generation and enhancement capabilities.
- **Stripe API**: 
  - Integrates secure payment gateways for course purchases and subscriptions.

### **Database:**
- **MongoDB**:
  - A NoSQL database used for storing user data, courses, and payment information.
  - Chosen for its scalability and flexibility in handling unstructured data.

### **Payment Integration:**
- **Stripe**:
  - Facilitates secure payment processing, including subscriptions, invoicing, and refunds.

### **AI Integration:**
- **OpenAI**:
  - Used to generate course content, suggest enhancements, and provide AI-driven features.

---

## Features

1. **Course Generation**:
   - AI-driven content suggestions to speed up the creation process.
   - Customizable course structures tailored to different educational needs.

2. **Payment Integration**:
   - Secure and seamless payment options via Stripe.
   - Subscription-based or one-time payment models for courses.

3. **Content Management**:
   - Add, update, and delete courses in a centralized dashboard.
   - Flexible database for handling large datasets.

4. **User-Friendly Design**:
   - Intuitive and responsive UI built with Next.js and Tailwind CSS.
   - Optimized for both desktop and mobile users.

5. **AI Assistance**:
   - OpenAI-backed features for generating course outlines, lessons, and quizzes.
   - Automatic grammar and content improvement.

---

## Prerequisites

Before setting up Vimra, ensure you have:

- **Node.js** (v14.x or higher) and npm (v6.x or higher) installed.
- Access to a MongoDB instance (e.g., MongoDB Atlas).
- Stripe and OpenAI API keys for full functionality.

---

## Installation Guide

### **1. Clone the Repository**
```bash
git clone https://github.com/83Gh0st/Vimra.git
cd Vimra
```

---

### **2. Install Dependencies**
```bash
npm install
```

---

### **3. Set Up Environment Variables**
Create a `.env` file in the project root directory and add the following variables:

```env
# Database
DATABASE_URL=your_mongodb_connection_string

# Stripe API
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# Youtube API
YOUTUBE_API_KEY=your_openai_api_key
```

**Explanation:**
- `DATABASE_URL`: Connection string to your MongoDB database.
- `STRIPE_SECRET_KEY` & `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Keys to enable secure payment processing with Stripe.
- `OPENAI_API_KEY`: Key to access OpenAI's GPT-powered AI features.
- `YOUTUBE_API_KEY`: Key to access youtube's features.

---

### **4. Generate Prisma Client**
```bash
npx prisma generate
```

---

### **5. Run Database Migrations**
```bash
npx prisma db push
```

---

### **6. Start Development Server**
```bash
npm run dev
```

Access the application at `http://localhost:3000`.

---

## Obtaining API Keys

### **MongoDB**
1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and retrieve the connection string.
3. Replace `<username>`, `<password>`, and `<database_name>` with your credentials in the connection string.

### **Stripe**
1. Register at [Stripe](https://stripe.com).
2. Navigate to the "Developers" section.
3. Copy your Secret Key and Publishable Key.

### **OpenAI**
1. Create an account at [OpenAI](https://www.openai.com).
2. Access your API key from the dashboard.

---

## Testing

Vimra includes test cases to ensure functionality. To run tests:

```bash
npm run test
```

---

## Deployment

For production deployment, use platforms with VPS. Ensure the following:

1. Add the environment variables to your hosting provider.
2. Use `npm run build` to create an optimized production build.
3. Deploy the build to your chosen platform.

---

## Folder Structure

```
Vimra/
├── components/       # Reusable React components
├── pages/            # Next.js pages (routes)
├── prisma/           # Prisma schema and migrations
├── public/           # Static assets
├── styles/           # Tailwind CSS configurations
├── utils/            # Utility functions
├── .env              # Environment variables
├── package.json      # Project metadata and dependencies
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For inquiries or support, reach out to [83Gh0st](https://github.com/83Gh0st). 
