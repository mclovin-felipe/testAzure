import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";

const authOptions = {
    providers: [
        AzureADProvider({
          clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
          clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET,
          tenantId: process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID,
        }),
    ],
    pages: {
      signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, account }) {
          // IMPORTANT: Persist the access_token to the token right after sign in
          if (account) {
            token.idToken = account.id_token;
          }
          return token;
        },
      },
      
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, };