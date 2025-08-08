import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

// ✅ Export the auth options so we can use them in other files (e.g., layout.tsx)
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// ✅ Create the handler
const handler = NextAuth(authOptions);

// ✅ Export the handler for Next.js API routes
export { handler as GET, handler as POST };
