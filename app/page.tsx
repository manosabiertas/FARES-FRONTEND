import Header from "@/components/header"
import Footer from "@/components/footer"
import LiturgicalCalendar from "@/components/liturgical-calendar"
import ChatSection from "@/components/chat-section"
import PhotoCarousel from "@/components/photo-carousel"
import { Play } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F7F2EF'}}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="title-playfair mb-6 text-balance text-slate-700">
              Legado Espiritual del P. Diego Javier Fares SJ
            </h1>
            <p className="subtitle-lato max-w-2xl mx-auto text-pretty" style={{color: '#5D5D5D'}}>
              Vida, obra y enseñanzas que nos dejó como guía.
            </p>
          </div>
        </section>
        {/* Video Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Video local */}
              <div className="relative w-full bg-gray-900">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="images/biografia.png"
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600 mt-4">Video homenaje</p>
          </div>
        </section>

        {/* Content Grid - Carousel + Calendar */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column - Photo Carousel */}
              <div className="flex-1">
                <PhotoCarousel />
              </div>

              {/* Right Column - Calendar */}
              <div className="flex-1">
                <LiturgicalCalendar />
              </div>
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <ChatSection />
      </main>

      <Footer />
    </div>
  )
}
