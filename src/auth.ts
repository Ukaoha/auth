import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  events: {
    async signIn({ user }) {
      console.log("signIn", user.email);
    },
  },

  ...authConfig,
});
