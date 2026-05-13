import { Wrench, Shield, Star, Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { servicios } from "@/app/config"

const iconos: Record<string, React.ReactNode> = {
  Wrench:  <Wrench  size={24} />,
  Shield:  <Shield  size={24} />,
  Star:    <Star    size={24} />,
  Clock:   <Clock   size={24} />,
  MapPin:  <MapPin  size={24} />,
  Phone:   <Phone   size={24} />,
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Lo que ofrecemos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Soluciones profesionales adaptadas a las necesidades de tu negocio o hogar.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <Card key={i} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-sm bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {iconos[s.icono] ?? <Wrench size={24} />}
                </div>
                <CardTitle className="text-lg text-gray-900">{s.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
                <Badge variant="secondary" className="text-blue-600 bg-blue-50">
                  {s.precio}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contacto"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Pedir presupuesto gratis
          </a>
        </div>
      </div>
    </section>
  )
}
