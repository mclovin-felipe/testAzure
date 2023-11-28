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
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",

  },
  secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
