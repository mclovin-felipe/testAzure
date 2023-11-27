import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: "1062858556597-epgl271f7qsh8cpjn5jltt0hb2nqm9q6.apps.googleusercontent.com",
            clientSecret: "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",
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),

    ],
    session: {
        strategy: "jwt",

    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
