import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { empresa, stats } from "@/app/config"

const ventajas = [
  "Recetas propias desarrolladas con pasión y cariño",
  "Ingredientes de calidad seleccionados en cada elaboración",
  "Más de 35 sabores entre cheesecakes y galletas rellenas",
  "Pedidos personalizados para bodas, cumpleaños y celebraciones",
  "Proceso fácil y rápido por WhatsApp",
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Repostería artesanal hecha con pasión
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              {empresa.descripcion}
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Nuestro compromiso es ofrecerte el mejor resultado posible, con total transparencia en precios y plazos. Cada cliente es único y merece una atención a medida.
            </p>

            <ul className="mt-8 space-y-3">
              {ventajas.map((v, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <a href="#contacto"
              className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg">
              Hacer un encargo
            </a>
          </div>

          {/* Foto + Stats */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image src="/nosotros.jpg" alt="Repostera de Tarta de Queso" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i}
                  className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{s.valor}</div>
                  <div className="text-gray-600 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
