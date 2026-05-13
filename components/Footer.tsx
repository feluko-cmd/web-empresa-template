import { Phone, Mail, MapPin, Globe, Share2 } from "lucide-react"
import { empresa } from "@/app/config"

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto",  href: "#contacto" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Marca */}
          <div>
            <div className="text-white font-bold text-xl mb-3">{empresa.nombre}</div>
            <p className="text-sm leading-relaxed text-gray-400">{empresa.descripcion}</p>
            <div className="flex gap-3 mt-5">
              {empresa.instagram && (
                <a href={empresa.instagram} target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Globe size={16} />
                </a>
              )}
              {empresa.facebook && (
                <a href={empresa.facebook} target="_blank" rel="noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Share2 size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-white font-semibold mb-4">Navegación</div>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="text-white font-semibold mb-4">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href={`tel:${empresa.telefono}`} className="hover:text-white transition-colors">
                  {empresa.telefono}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href={`mailto:${empresa.email}`} className="hover:text-white transition-colors">
                  {empresa.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                {empresa.direccion}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {year} {empresa.nombre}. Todos los derechos reservados.</span>
          <span>Diseño web profesional</span>
        </div>
      </div>
    </footer>
  )
}
