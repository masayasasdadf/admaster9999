import { withAuth } from "next-auth/middleware";
export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl;
      if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) return true;
      if (!token) return false;
      const role = (token as any).role;
      if (pathname.startsWith("/admin")) return role === "admin";
      if (pathname.startsWith("/client")) return role === "client" || role === "admin";
      return true;
    },
  },
});
export const config = { matcher: ["/admin/:path*", "/client/:path*", "/login", "/api/auth/:path*"] };
