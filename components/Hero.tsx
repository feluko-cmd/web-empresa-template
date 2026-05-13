import { Phone, MessageCircle, ChevronDown } from "lucide-react"
import { empresa } from "@/app/config"

export default function Hero() {
  return (
    <section id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">

        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 bg-white/20 backdrop-blur text-sm rounded-full border border-white/30">
          ⭐ Más de 500 clientes satisfechos
        </span>

        {/* Titular */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {empresa.slogan}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          {empresa.descripcion}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${empresa.telefono}`}
            className="flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <Phone size={18} />
            Llamar ahora
          </a>
          <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a href="#servicios"
            className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
            Ver servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <a href="#servicios">
            <ChevronDown size={32} className="text-white/60" />
          </a>
        </div>
      </div>
    </section>
  )
}
