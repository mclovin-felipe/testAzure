"use client"
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <SessionProvider>{children}</SessionProvider>
    </html>
  )
}
