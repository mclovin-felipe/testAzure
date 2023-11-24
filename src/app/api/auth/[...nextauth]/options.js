import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AzureADProvider from "next-auth/providers/azure-ad";
export const options = {
  providers: [
    AzureADProvider({
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID,
      authorization: { params: { scope: "openid profile user.Read email" } },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      console.log("JWT:", token, account);
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async signIn(user, account, profile) {
      console.log("Sign In:", user, account, profile);
      return true; // Permitir el inicio de sesión
    },
    async redirect(url, baseUrl) {
      console.log("Redirect:", url, baseUrl);
      return baseUrl;
    },
    async session(session, user) {
      console.log("Session:", session, user);
      return session;
    },
  },
};
