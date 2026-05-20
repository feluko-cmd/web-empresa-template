import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonios } from "@/app/config"

export default function Testimonios() {
  return (
    <section id="opiniones" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Lo que dicen de nosotros
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Opiniones de clientes
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            La satisfacción de nuestros clientes habla por sí sola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <Card key={i} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.estrellas }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{t.texto}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {t.nombre.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.nombre}</div>
                    <div className="text-gray-400 text-xs">{t.cargo}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Badge Google */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">4.9 / 5</span>
            <span className="text-sm text-gray-400">· +200 reseñas en Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
