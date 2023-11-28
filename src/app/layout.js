"use client"

import Providers from '../app/componets/Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <body><Providers>{children}</Providers></body>
    </html>
  )
}