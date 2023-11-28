
'use client'
import { Box, Stack, Typography, Fade } from "@mui/material";
import Image from "next/image";
import ButtonSing from "./button";
import falp from '../../../assets/logo-falp.gif'
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from 'next/navigation'

const Page = () => {
    const { data, session } = useSession();
    if (data && data.user) {
        redirect('/')
      }else{
    return (
        <Box
            height={"100vh"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            bgcolor={'primary.main'}
            alignItems={"center"}

        >
            <Stack boxShadow={12} direction={'row'} height={"35vh"} >
                <Box flexDirection={'column'}
                    borderRadius={3}
                    width={400}
                    bgcolor={'white'}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Fade in={true} timeout={1300}>
                    <Image src={falp} alt="Logo de Falp" sizes="100vw" style={{ width: '100%', height: 'auto' }} priority/>
                    </Fade>
                    <ButtonSing />
                    

                </Box>


            </Stack>

        </Box>)
      }
}
export default Page;