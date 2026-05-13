"use client"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { empresa, mapaEmbed } from "@/app/config"

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Aquí conectarías con tu backend, Resend, Formspree, etc.
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Estamos aquí para ayudarte
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Contacta con nosotros
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cuéntanos lo que necesitas y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Datos de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Teléfono</div>
                <a href={`tel:${empresa.telefono}`} className="text-blue-600 hover:underline">
                  {empresa.telefono}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">WhatsApp</div>
                <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noreferrer"
                  className="text-green-600 hover:underline">
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <a href={`mailto:${empresa.email}`} className="text-blue-600 hover:underline">
                  {empresa.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Dirección</div>
                <span className="text-gray-500">{empresa.direccion}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Horario</div>
                <span className="text-gray-500">{empresa.horario}</span>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-4 rounded-2xl overflow-hidden h-48 shadow-sm">
              <iframe src={mapaEmbed} width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-gray-900">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Te respondemos en menos de 24 horas.</p>
                <button onClick={() => setEnviado(false)}
                  className="text-blue-600 hover:underline text-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input required type="text" placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={e => setForm({ ...form, nombre: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input type="tel" placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={e => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea required rows={5} placeholder="¿En qué podemos ayudarte?"
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none" />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                  <Send size={16} />
                  Enviar mensaje
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
