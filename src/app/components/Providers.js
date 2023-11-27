'use client'
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { green, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Providers = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#004A91',
      },
      secondary: {
        main: "#fbb800",
      },
    },
  });
  return <SessionProvider><ThemeProvider theme={theme} >{children}</ThemeProvider></SessionProvider>;
};
export default Providers;
