import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { empresa } from "./config"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: {
    default: `${empresa.nombre} | ${empresa.slogan}`,
    template: `%s | ${empresa.nombre}`
  },
  description: empresa.descripcion,
  keywords: ["repostería creativa", "tartas personalizadas", "cheesecake", "galletas rellenas", "Montellano", "Sevilla", "eventos", "bodas", "cumpleaños"],
  authors: [{ name: empresa.nombre }],
  creator: empresa.nombre,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tartadequeso.com",
    title: empresa.nombre,
    description: empresa.descripcion,
    siteName: empresa.nombre,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${empresa.nombre} - Repostería Artesanal`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: empresa.nombre,
    description: empresa.descripcion,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
