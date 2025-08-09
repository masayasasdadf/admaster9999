import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const adminEmail = "admin@example.com";
        const clientEmail = "client@example.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "AdminPass!234";
        const clientPassword = process.env.CLIENT_PASSWORD || "ClientPass!234";
        let user: User | null = null;
        if (credentials.email === adminEmail && credentials.password === adminPassword) user = { id: "1", name: "Admin", email: adminEmail, role: "admin" } as any;
        if (credentials.email === clientEmail && credentials.password === clientPassword) user = { id: "2", name: "Client", email: clientEmail, role: "client" } as any;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) { if (user) (token as any).role = (user as any).role; return token; },
    async session({ session, token }) { (session as any).role = (token as any).role; return session; },
  },
};
