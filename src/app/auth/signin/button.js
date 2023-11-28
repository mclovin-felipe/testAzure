'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSession, signOut, signIn } from "next-auth/react";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const SigningButton = () => {
    const { data, session } = useSession();
    console.log(session, data);
    if (data && data.user) {
        return (
            <Stack flexDirection={'row'} alignContent={'center'} alignItems={'center'} >
                <Typography variant="body2" >Bienvenido/a {data.user.name.split(" ")[0]}</Typography>
                <Button
                    color="primary"
                    sx={{ borderRadius: 1000 }}
                    onClick={() => signOut()}><LogoutIcon sx={{ mr: 2 }} /> Salir</Button>
            </Stack>
        )
    }
    return (
        <Button onClick={() => signIn("azure-ad")} sx={{ borderRadius: 1000 }} ><LoginIcon sx={{ mr: 2 }} /> Ingresar</Button>
    )
}
export default SigningButton;