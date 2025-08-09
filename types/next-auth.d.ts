import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session { role?: "admin" | "client"; }
  interface User { role?: "admin" | "client"; }
}
