import { Phone, MessageCircle, ChevronDown, MapPin, Sparkles } from "lucide-react"
import { empresa } from "@/app/config"

export default function Hero() {
  return (
    <section id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background text-foreground overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/60 backdrop-blur text-xs rounded-full border border-primary/15 text-primary font-medium shadow-sm">
            <Sparkles size={12} />
            Repostería artesanal
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/60 backdrop-blur text-xs rounded-full border border-primary/15 text-muted-foreground font-medium shadow-sm">
            <MapPin size={12} className="text-primary" />
            Montellano, Sevilla
          </span>
        </div>

        {/* Titular */}
        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 text-foreground">
          {empresa.slogan}
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {empresa.descripcion}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${empresa.telefono}`}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <Phone size={18} />
            Llamar ahora
          </a>
          <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a href="#servicios"
            className="flex items-center justify-center gap-2 border-2 border-primary/20 text-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/5 transition-all">
            Ver la carta
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <a href="#servicios">
            <ChevronDown size={32} className="text-primary/60 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  )
}
