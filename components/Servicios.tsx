import { Cookie, Cake, Heart, Gift, Sparkles, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { servicios } from "@/app/config"

const iconos: Record<string, React.ReactNode> = {
  Cookie:        <Cookie        size={24} />,
  Cake:          <Cake          size={24} />,
  Heart:         <Heart         size={24} />,
  Gift:          <Gift          size={24} />,
  Sparkles:      <Sparkles      size={24} />,
  MessageCircle: <MessageCircle size={24} />,
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestra carta
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            ¿Qué te apetece hoy?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cheesecakes y galletas rellenas artesanales en más de 35 sabores. Todo elaborado con amor y los mejores ingredientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <Card key={i} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0 shadow-sm bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconos[s.icono] ?? <Cookie size={24} />}
                </div>
                <CardTitle className="text-lg text-gray-900">{s.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
                <Badge variant="secondary" className="text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                  {s.precio}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contacto"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  )
}
