import './input.css'
import { Inter } from 'next/font/google'
import Nav from './components/nav'
import Providers from './components/Providers'
import AppBar from './components/AppBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elecciones FALP',
  description: 'Sitio para Elecciones FALP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" >
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers></body>
    </html>
  )
}
