'use client'
import { Button } from "@mui/material";
import { useSession, signOut, signIn } from "next-auth/react";
const ButtonSing = () => {
    return <Button color={"secondary"} sx={{ borderRadius: 1000, color: 'black', backgroundColor: 'secondary.main' }} variant="contained" onClick={() => signIn('azure-ad', { callbackUrl: 'https://test-azure-delta-two.vercel.app/api/auth/callback/azure-ad' })}>Ingresar</Button>
}
export default ButtonSing;