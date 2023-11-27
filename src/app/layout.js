"use client"
import { SessionProvider } from "next-auth/react";
export const metadata = {
  title: 'Portal Notificaciones',
  description: 'Creado para facilitar el envió de notificaciones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <SessionProvider>{children}</SessionProvider>
    </html>
  )
}
