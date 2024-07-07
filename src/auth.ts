import NextAuth, { Session, User } from "next-auth";
import { AdapterSession, AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import { syncUser } from "./services/authServices";
import axios from "axios";
const api_endpoint = process.env.NEXT_PUBLIC_API_URL;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user }: { user: User | (AdapterUser & { id?: string }) }) {
      return true;
    },

    async jwt({ token, user }: { token: JWT; user: User | AdapterUser }) {
      token._id ? (token._id as string) : "";
      if (
        user &&
        user.email &&
        user.email !== undefined &&
        user.email !== null &&
        user.email !== ""
      ) {
        const response = await syncUser({
          email: user.email,
          name: user.name ? user.name : null,
          imageUrl: user.image ? user.image : null,
        });
        console.log(response);
        if (response._id) {
          console.log("putting value in token");
          token._id = response._id;
        }
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: {
        user: User | AdapterUser;
      } & AdapterSession &
        Session & {
          _id?: string;
        };
      token: JWT;
    }) {
      session._id = (token._id as string) || "";
      return session;
    },
  },
});
