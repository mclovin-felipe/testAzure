import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AzureADProvider from "next-auth/providers/azure-ad";
import GoogleProvider from "next-auth/providers/google";
export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    AzureADProvider({
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID,
    }),
  ],
  callbacks: {
<<<<<<< HEAD
    async signIn(user, account, profile) {
      console.log("Sign In:", user, account, profile);
      return true;
    },
    async jwt({ token, account }) {
      console.log("JWT:", token, account);
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.accessToken = account.access_token
=======
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@falp.org")
>>>>>>> 14c1c235ba0e03ffb3f8a0e3a221c620d29ed97e
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
<<<<<<< HEAD
    async redirect(url, baseUrl) {
      console.log("Redirect:", url, baseUrl);
      return baseUrl;
    },
    async session(session, user) {
      console.log("Session:", session, user);
      return session;
    },
  },
=======
  }
>>>>>>> 14c1c235ba0e03ffb3f8a0e3a221c620d29ed97e
};
