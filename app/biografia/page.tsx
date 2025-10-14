import Header from "@/components/header"
import Footer from "@/components/footer"
import BiografiaGallery from "@/components/biografia-gallery"
import BiographyCard from "@/components/biography-card"

import fs from "fs"
import path from "path"

type GalleryImage = { src: string; alt?: string }
type Category = { name: string; images: GalleryImage[] }

async function getLibraryCategories(): Promise<Category[]> {
  try {
    const publicDir = path.join(process.cwd(), "public", "images", "library")
    const entries = await fs.promises.readdir(publicDir, { withFileTypes: true })

    const folders = entries.filter((e) => e.isDirectory()).map((d) => d.name)

    const categories: Category[] = []

    for (const folder of folders) {
      const folderPath = path.join(publicDir, folder)
      const files = await fs.promises.readdir(folderPath)
      const images = files
        .filter((f) => /\.(jpe?g|png|webp|gif|svg)$/i.test(f))
        .map((f) => ({ src: `/images/library/${encodeURIComponent(folder)}/${encodeURIComponent(f)}`, alt: folder }))

      categories.push({ name: folder, images })
    }

    return categories
  } catch (err) {
    // If folder doesn't exist or error, return empty
    console.error("Error reading library images:", err)
    return []
  }
}

export default async function BiografiaPage() {
  const categories = await getLibraryCategories()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F7F2EF'}}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="title-playfair mb-6 text-balance text-slate-700">
              Una vida dedicada al servicio de Dios
              <br />y la Iglesia Argentina
            </h1>
            <p className="subtitle-lato max-w-2xl mx-auto text-pretty" style={{color: '#5D5D5D'}}>
              Conocé la historia del Padre Diego Fares SJ y su legado espiritual
            </p>
          </div>
        </section>

        <BiographyCard image="/images/carousel.png" title="Biografía">
          <p>
            El Padre Diego Fares SJ nació en Buenos Aires en 1955 y dedicó su vida al servicio de Dios y la
            Iglesia Argentina. Ingresó a la Compañía de Jesús siendo joven, donde desarrolló una profunda vocación
            por la contemplación y la enseñanza espiritual.
          </p>

          <p>
            Durante sus años de formación jesuita, se destacó por su capacidad de reflexión teológica y su don
            para la dirección espiritual. Fue ordenado sacerdote en 1985 y desde entonces se dedicó a acompañar a
            numerosas personas en su camino de fe, especialmente a través de los <strong>Ejercicios Espirituales de San Ignacio</strong>.
          </p>

          <p>
            Su ministerio se caracterizó por una profunda comprensión de la espiritualidad ignaciana y una
            particular habilidad para transmitir las enseñanzas de San Ignacio de Loyola de manera accesible y
            transformadora. Escribió numerosos artículos y libros sobre contemplación, discernimiento espiritual y
            la vida cristiana.
          </p>

          <p>
            El Padre Fares fue reconocido por su sabiduría pastoral y su capacidad para acompañar tanto a laicos
            como a religiosos en momentos cruciales de sus vidas espirituales. Su enfoque se centraba en ayudar a
            las personas a <strong>encontrar a Dios en todas las cosas</strong>, siguiendo el carisma ignaciano.
          </p>

          <p>
            Entre sus obras más destacadas se encuentran reflexiones sobre la oración contemplativa, meditaciones
            sobre los Evangelios y guías prácticas para la vida espiritual. Su legado continúa inspirando a
            quienes buscan profundizar en su relación con Dios.
          </p>

          <p>
            El Padre Diego Fares falleció en 2022, dejando tras de sí un rico patrimonio espiritual y el
            testimonio de una vida entregada completamente al servicio del Reino de Dios. Su memoria perdura en
            los corazones de todos aquellos que tuvieron la gracia de conocerlo y ser acompañados por él en su
            camino de fe.
          </p>
        </BiographyCard>

        {/* Gallery Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-playfair-medium text-center mb-8 text-slate-700">Galería de Recuerdos</h2>

            <BiografiaGallery categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
