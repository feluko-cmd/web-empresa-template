import { CheckCircle } from "lucide-react"
import { empresa, stats } from "@/app/config"

const ventajas = [
  "Presupuesto sin compromiso en menos de 24h",
  "Profesionales certificados y con experiencia",
  "Garantía en todos nuestros trabajos",
  "Atención personalizada y cercana",
  "Precios transparentes, sin sorpresas",
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Quiénes somos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Profesionales en los que puedes confiar
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
                  <CheckCircle size={20} className="text-blue-600 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <a href="#contacto"
              className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg">
              Contactar ahora
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{s.valor}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
