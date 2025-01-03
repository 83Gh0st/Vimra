import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./db"; // Ensure this points to your Prisma Client instance

// Extend the default session and JWT types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      credits: number;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    credits: number;
  }
}

// NextAuth configuration
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Update JWT with user information
    jwt: async ({ token }) => {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        },
      });

      if (dbUser) {
        token.id = dbUser.id;
        token.credits = dbUser.credits;
      }
      return token;
    },
    // Update session with JWT data
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.credits = token.credits;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: PrismaAdapter(prisma), // Use Prisma adapter for MongoDB
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
