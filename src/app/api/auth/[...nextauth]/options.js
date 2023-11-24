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

    CredentialsProvider({
      id: "creddentials",
      name: "Donaciones",
      credentials: {
        username: {
          label: "Usuario",
          type: "text",
          placeholder: "Nombre de usuario",
        },
        password: { label: "Password", type: "passowrd" },
      },


      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Prueba",
          password: "123",
          email: "jsmith@example.com",
        };

        if (
          user.name === credentials.username &&
          user.password === credentials.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
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
