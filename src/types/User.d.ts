import { PortFolio } from "@prisma/client";

// types.ts
export interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface User {
  id: string; // Consider using a more secure identifier type (e.g., UUID)
  name: string;
  email: string;
  role: string

  password: string; // Store password hashes securely (never plain text)
}

export type NextAuthConfig = {
  secret: string;
  adapter: ReturnType<typeof PrismaAdapter>;
  // Other NextAuth.js options (e.g., JWT options, etc.)
};


// types.ts
export interface Credentials {
  email: string;
  password: string;
}
export interface UserType {

  id: number;
  email: string;
  name: string
  role: string
  posts: Post[]
  portfolio: PortFolios
  createdAt: DateTime  // Add createdAt field
  updatedAt: DateTime
  profession: string
  // Other user fields
}

export type NextAuthConfig = {
  secret: string;
  adapter: ReturnType<typeof PrismaAdapter>;
  // Other NextAuth.js options (e.g., JWT options, etc.)
};
