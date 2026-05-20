"use client"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const fotos = Array.from({ length: 23 }, (_, i) => `/img/galeria-${String(i + 1).padStart(2, "0")}.jpeg`)

export default function Galeria() {
  const [seleccionada, setSeleccionada] = useState<number | null>(null)

  function anterior() {
    setSeleccionada(prev => prev === null ? null : (prev - 1 + fotos.length) % fotos.length)
  }
  function siguiente() {
    setSeleccionada(prev => prev === null ? null : (prev + 1) % fotos.length)
  }
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") anterior()
    if (e.key === "ArrowRight") siguiente()
    if (e.key === "Escape") setSeleccionada(null)
  }

  return (
    <section id="galeria" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestras creaciones
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-heading text-gray-900">
            Galería
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cada pieza, hecha a mano con ingredientes de calidad. Haz clic en cualquier foto para verla.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {fotos.map((src, i) => (
            <button
              key={i}
              onClick={() => setSeleccionada(i)}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <Image
                src={src}
                alt={`Producto artesanal ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.tiktok.com/@tarta_de_quesoo"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-2 border-primary/30 text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
          >
            Ver más en TikTok
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {seleccionada !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSeleccionada(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Imagen */}
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative w-full max-w-2xl max-h-[85vh] mx-4"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={fotos[seleccionada]}
                alt={`Producto artesanal ${seleccionada + 1}`}
                width={800}
                height={800}
                className="object-contain w-full h-full max-h-[85vh] rounded-2xl"
              />
            </motion.div>

            {/* Cerrar */}
            <button
              onClick={() => setSeleccionada(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            {/* Anterior */}
            <button
              onClick={e => { e.stopPropagation(); anterior() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Siguiente */}
            <button
              onClick={e => { e.stopPropagation(); siguiente() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {seleccionada + 1} / {fotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
