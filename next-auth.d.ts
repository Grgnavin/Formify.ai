import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the id property to user
      username: string; // Add username to user
    } & DefaultSession["user"]; // Extend default properties (e.g., name, email, image)
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string; // Add username to JWT
  }
}
