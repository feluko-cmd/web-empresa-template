"use client"
import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"
import { empresa } from "@/app/config"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Galería",   href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto",  href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src="/logo_crop.jpg" alt={empresa.nombre} fill className="object-cover scale-[1.12]" />
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`text-base font-medium transition-colors hover:text-primary ${scrolled ? 'text-gray-600' : 'text-gray-800'}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Teléfono desktop */}
        <a href={`tel:${empresa.telefono}`}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow">
          <Phone size={16} />
          {empresa.telefono}
        </a>

        {/* Hamburger mobile */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3 overflow-hidden"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-gray-700 py-2 font-medium hover:text-primary transition-colors border-b border-gray-50 last:border-0">
                {l.label}
              </a>
            ))}
            <a href={`tel:${empresa.telefono}`}
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-medium shadow-sm">
              <Phone size={18} /> {empresa.telefono}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
