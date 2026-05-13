"use client"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { empresa } from "@/app/config"

const links = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Servicios",   href: "#servicios" },
  { label: "Nosotros",    href: "#nosotros" },
  { label: "Opiniones",   href: "#opiniones" },
  { label: "Contacto",    href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="font-bold text-xl text-blue-600">
          {empresa.nombre}
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Teléfono desktop */}
        <a href={`tel:${empresa.telefono}`}
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          <Phone size={15} />
          {empresa.telefono}
        </a>

        {/* Hamburger mobile */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-700 py-1 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href={`tel:${empresa.telefono}`}
            className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-full">
            <Phone size={15} /> {empresa.telefono}
          </a>
        </div>
      )}
    </header>
  )
}
