
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";
import Image from "next/image";
import ButtonSing from "./button";
const Page = () => {

    return (
        <Box
            height={"91.8vh"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            bgcolor={'primary.main'}
            alignItems={"center"}

        >
            <Stack boxShadow={12} direction={'row'} height={"35vh"} >
                <Box flexDirection={'column'} borderRadius={3} width={400} bgcolor={'white'} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}
                >
                    <Fade in={true} timeout={1300}>

                        {/* <Image src={require("../../../assets/logo-falp.gif")} height={"100%"} width={"100%"} /> */}
                    </Fade>
                    <ButtonSing />

                </Box>


            </Stack>

        </Box>)
}
export default Page;