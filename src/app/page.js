'use client'
import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Collapse from '@mui/material/Collapse';
import { useState } from "react";
import Home from '@/app/pages/home/page'
export default function HomePage() {
  const { data, session } = useSession();
  const [open, setOpen] = useState(false);
  if (data && data.user) {
    return (
      <main>
        <Home></Home>
      </main>
    )
  }else{
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
  
            <Button color={"secondary"} sx={{ borderRadius: 1000, color: 'black', backgroundColor: 'secondary.main' }} variant="contained" onClick={() => signIn("azure-ad")}>Ingresar</Button>
  
          </Box>
  
  
        </Stack>
  
      </Box>
    )
  }
 
}
