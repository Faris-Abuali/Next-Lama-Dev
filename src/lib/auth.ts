import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "../db/models";
import { authConfig } from "./auth.config";
import { LoginCredentials } from "@/types/auth";
import loginByCredentials from "./loginByCredentials"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      authorize: async (credentials) => {
        console.log({ credentials })
        try {
          const user = await loginByCredentials(credentials as unknown as LoginCredentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account?.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false; // Returning false prevents the user from authenticating
          // even if github auth was successful
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});