"use client"

import '@/app/globals.css';
import Providers from '../app/componets/Providers'

export default function RootLayout({ children,pageProps }) {
  return (
    <html lang="es">
       <body><Providers>{children}</Providers></body>
    </html>
  )
}