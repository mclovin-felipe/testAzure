'use client'
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import Card from "./components/card";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Collapse from '@mui/material/Collapse';
import { useState } from "react";
export default function Home() {
  const { data, session } = useSession();
  const [open, setOpen] = useState(false);
  if (data && data.user) {
    return (
      <main>
        <div className="flex flex-col space-y-3 p-3" >
          <h2 className="text-5xl font-bold  " >Bienvenidos</h2>
          <h3> En este sitio podras votar por el mejor compañero del año FALP</h3>
        </div>
        <div className="h-20 bg-blue-800  " ></div>
        <div className="flex flex-col  justify-center  bg-blue-800
      md:flex-row space-y-5 md:space-y-0 md:space-x-5 
       " >
          <Card tipo={1} />
          <Card tipo={2} />
        </div>
        <div className="h-20 bg-blue-800  "></div>

      </main>
    )
  }
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

            <Image src={require("../assets/logo-falp.gif")} height={"100%"} width={"100%"} />
          </Fade>
          <Button color={"secondary"} sx={{ borderRadius: 1000, color: 'black', backgroundColor: 'secondary.main' }} variant="contained" onClick={() => signIn("google")}>Ingresar</Button>

        </Box>


      </Stack>

    </Box>
  )
}
