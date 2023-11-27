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
  session: {
    strategy: "jwt",

  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)