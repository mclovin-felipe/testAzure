
'use client'
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ButtonSing from "./button";
import falp from '../../../assets/logo-falp.gif'
import { useSession, signOut, signIn } from "next-auth/react";
import Home from '@/app/page'
import { useState } from "react";

const Page = () => {
    const { data, session } = useSession();
    const [open, setOpen] = useState(false);
    if (data && data.user) {
        console.log(data)
        return (
          <main>
            <Home></Home>
          </main>
        )
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
                    <Image src={falp} sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} />
                    <ButtonSing />

                </Box>


            </Stack>

        </Box>)
      }
}
export default Page;