import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { empresa } from "./config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:       `${empresa.nombre} — ${empresa.slogan}`,
  description: empresa.descripcion,
  keywords:    `${empresa.nombre}, servicios, ${empresa.direccion}`,
  openGraph: {
    title:       empresa.nombre,
    description: empresa.descripcion,
    type:        "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
