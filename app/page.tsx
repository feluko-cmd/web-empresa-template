import Navbar      from "@/components/Navbar"
import Hero        from "@/components/Hero"
import Servicios   from "@/components/Servicios"
import Nosotros    from "@/components/Nosotros"
import Testimonios from "@/components/Testimonios"
import Contacto    from "@/components/Contacto"
import Footer      from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
