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
      authorization: { params: { scope: "openid profile user.Read email" } },
    }),


  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@falp.org")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
};
