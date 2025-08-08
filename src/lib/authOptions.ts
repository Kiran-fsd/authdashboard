import { GoogleProvider } from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
};
