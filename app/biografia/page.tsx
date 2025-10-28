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
    <div className="min-h-screen" style={{ backgroundColor: '#F7F2EF' }}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="title-playfair mb-6 text-balance text-slate-700">
              Una vida dedicada al servicio de Dios y su Pueblo
              <br />
            </h1>
            <p className="subtitle-lato max-w-2xl mx-auto text-pretty" style={{ color: '#5D5D5D' }}>
              Conocé la historia del Padre Diego Fares SJ y su legado espiritual
            </p>
          </div>
        </section>

        {/* Biography Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-4 lg:p-6">
              {/* Grid with image and first two paragraphs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-6">
                <div className="lg:col-span-1">
                  <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
                    <img src="/images/carousel.png" alt="Biografía" className="w-full h-auto object-cover" />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h2 className="title-playfair-medium text-slate-700 text-2xl lg:text-3xl mb-4">Biografía</h2>
                  <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                    <p>
                      Diego Javier Fares nació el 9 de agosto de 1955 en la ciudad de Mendoza,
                      Argentina, hijo de Raimundo y María Olga. Creció junto a sus hermanos
                      Ignacio Patricio, María Celina y María Inés. Estudió en el Colegio Marista
                      San José de Mendoza. Su cariño por San José lo acompañará a lo largo de
                      toda su vida.
                    </p>

                    <p>
                      En su adolescencia conoció la Compañía de Jesús a través del padre
                      Pangrazzi, su acompañante espiritual y, sobre todo, en el trabajo pastoral y
                      social en el barrio San Martín, donde residía y trabajaba el p. José María
                      Llorens, «Macuca»; conocido popularmente en la ciudad de Mendoza por su
                      inserción y trabajo con los más pobres. Así se despertó su llamado a la
                      vocación religiosa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rest of the paragraphs - full width */}
              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  En septiembre del año 1975 decide viajar a Buenos Aires para realizar los
                  Ejercicios de san Ignacio, conocer el noviciado jesuita y, de este modo,
                  disipar dudas. Lo recibe el entonces provincial Jorge Bergoglio. Fares
                  recuerda este encuentro con Bergoglio como el encuentro con una persona
                  «de una pieza» que le ofreció toda su amistad «en el Señor», la cual «duró
                  para siempre». Ese mismo año realiza la primera peregrinación juvenil a
                  Luján y la experiencia del pueblo de Dios «caminando» hacia la Virgen deja
                  una marca imborrable en su persona. Ingresa al Noviciado el 19 de febrero
                  de 1976 en San Miguel, provincia de Buenos Aires.
                </p>

                <p>
                  Su formación estará totalmente marcada por el grupo de jesuitas que en
                  torno a la persona del padre Miguel Ángel Fiorito, se forman en la
                  espiritualidad de los Ejercicios y la pastoral popular, entendida esta -en
                  medio de aquella coyuntura histórica- como un estar cerca del pueblo
                  mediante una opción no violenta. Bergoglio impulsó esta línea pastoral y
                  espiritual siendo ya Provincial de la Compañía, acompañado por los jesuitas
                  de entonces y luego como encargado de la formación en la etapa de estudios,
                  la promovió a los formandos, entre los que se encontraba Diego. Él lo
                  introduce también en las lecturas de Guardini y Hans Urs von Balthasar,
                  -y
                  lo envía a los barrios populares para formarse como pastor «con olor a
                  oveja». Más adelante, lo estimula y propone para dar Ejercicios Espirituales,
                  especialmente a religiosos, sacerdotes y seminaristas. Jorge Mario Bergoglio
                  será toda la vida -al decir de Fares- su director espiritual «último», es decir,
                  su referente definitivo.
                </p>

                <p>
                  El 21 de febrero de 1978, pronunció sus primeros votos en el Colegio
                  Máximo de San José, con Jorge Bergoglio como celebrante principal. Más
                  de una década después, tras completar la tercera probación, selló su
                  incorporación definitiva a la Compañía de Jesús con la profesión solemne el
                  15 de agosto de 1989, pronunciando los votos definitivos de pobreza,
                  castidad, obediencia y el cuarto voto de obediencia especial al Papa en
                  materia de misiones.
                </p>

                <p>
                  Entre 1978 y 1980 estudió Literatura y Humanidades en el Colegio
                  Máximo, y continuó con Filosofía durante el período 1980-1982. En 1982,
                  realizó su magisterio en el Colegio «Javier» de Guayaquil, Ecuador,
                  mostrando una admirable vocación pedagógica. Regresó para estudiar
                  Teología (1983-1985) en el Colegio Máximo, en la diócesis de San Miguel,
                  donde fue ordenado sacerdote el 12 de diciembre de 1986, por la imposición
                  de las manos de Mons. José Manuel Lorenzo. Completó una Licenciatura en
                  Teología en 1987. Posteriormente, se dedicó al trabajo de doctorado en la
                  Universidad del Salvador sobre la Fenomenología de la Verdad en Hans Urs
                  von Balthasar, tras un período de investigación en Roma durante los años
                  1992-1993, define en Argentina con la defensa de su tesis en el año 1995.
                </p>

                <p>
                  Una etapa significativa de su vida fue su paso por la capilla Nuestra Señora
                  de la Consolación de Sumampa, en la diócesis de San Miguel, primero como
                  estudiante jesuita (1984-1985) y luego como sacerdote. Allí dejó una
                  profunda huella de cariño y gratitud en la comunidad. Se empapó de la
                  piedad popular del pueblo sencillo, venido de las provincias al conurbano
                  bonaerense, compartiendo sus devociones e historias de vida.
                </p>

                <p>
                  Tras un incendio en abril de 1988 que destruyó un quincho próximo a la
                  capilla, salvándose tan sólo la imagen de Nuestra Señora de Sumampa,
                  Diego, con el trabajo conjunto de los vecinos del barrio San Calal, adquirió
                  un terreno en 1989 y lideró la construcción de una nueva iglesia, inaugurada
                  en 1990 en el actual partido de Malvinas Argentinas. En 1994, tras finalizar
                  su investigación doctoral en Roma, vuelve brevemente a Sumampa antes de
                  ser destinado a la iglesia Regina Martyrum, ubicada en barrio porteño de
                  Balvanera y así como también a la Facultad de Filosofía de los jesuitas en
                  San Miguel.
                </p>

                <p>
                  Como educador, se destacó como profesor de Filosofía en el Colegio
                  Máximo (1986-2015) y también dio clases en la Universidad Católica
                  Argentina, en la sede de Devoto. Su faceta pastoral se consolidó en la Iglesia
                  Regina Martyrum (1995-2015), donde asumió la dirección del Hogar de San
                  José (1996-2015), destinado a atender a personas en situación de calle.
                  También sirvió como capellán de la comunidad china (2006-2015), fue
                  presidente de la Fundación Obras de San José (2012-2015) y colaboró en la
                  Casa de la Bondad con el padre Ángel Rossi, cofundador de Manos Abiertas,
                  movimiento que refleja su compromiso con los más vulnerables. Sus
                  numerosas publicaciones reflejan la hondura de su pensamiento teológico y
                  pastoral, y fueron recomendadas por el propio Papa Francisco en el regreso
                  de su viaje a Brasil, cuando aconsejó a los periodistas que «leyeran los libros
                  de Diego».
                </p>

                <p>
                  Por encargo de la Compañía de Jesús, vivió su última etapa como escritor
                  en La Civiltà Cattolica en Roma (2015-2022). Gracias a su competencia
                  intelectual y su gran comunión espiritual con el pontífice, nos legó una visión
                  autorizada del pontificado de Francisco, dejando un impacto duradero en la
                  reflexión teológica global.
                </p>

                <p>
                  Diego Javier Fares falleció el 19 de julio de 2022 en Roma a los 66 años,
                  tras una larga enfermedad. Su funeral, concelebrado por el Papa Francisco el
                  21 de julio en la Curia General de los Jesuitas, fue un homenaje a su vida.
                  Este sitio web recoge su legado como educador, teólogo, pastor y escritor;
                  un testimonio vivo de su devoción a los pobres y su conexión espiritual con
                  Jorge Mario Bergoglio, inspirando a futuras generaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-playfair-medium text-center mb-8 text-slate-700">Su vida en imágenes</h2>

            <BiografiaGallery categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
