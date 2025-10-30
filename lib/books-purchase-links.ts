// Books with purchase links and bibliographic information
// This data maps book titles to their purchase links and full bibliographic references
export interface BookPurchaseInfo {
  title: string // Used for matching with file names
  bibliographicInfo: string // Full bibliographic reference to display
  purchaseLink?: string // Optional purchase link
}

export const booksPurchaseLinks: BookPurchaseInfo[] = [
  {
    title: "La oración en los Ejercicios Ignacianos",
    bibliographicInfo: "La oración en los Ejercicios Ignacianos, Fares, D.J., Bonum, Buenos Aires 2002. ISBN: 9789505076406"
  },
  {
    title: "Educar es difícil, posible y bello",
    bibliographicInfo: "Educar es difícil, posible y bello, Rossi, A. – Fares, D.J. – Salaberry, H., Bonum, Buenos Aires 2002. ISBN: 9789505076338"
  },
  {
    title: "Pequenios Gestos Con Gran Amor",
    bibliographicInfo: "Pequeños gestos con gran Amor, Rossi, A. – Fares, D.J., Bonum, Buenos Aires 2004. ISBN: 9789505077083",
    purchaseLink: "https://www.editorialbonum.com.ar/productos/pequenos-gestos-con-gran-amor-angel-rossi-diego-fares/"
  },
  {
    title: "La contemplación en los Ejercicios Ignacianos",
    bibliographicInfo: "La contemplación en los Ejercicios Ignacianos, Fares, D.J., Bonum, Buenos Aires 2006. ISBN: 9789505079445"
  },
  {
    title: "Peregrinar Con el Corazon Lleno de Rostros",
    bibliographicInfo: "Peregrinos en camino - Las manos vacías, el corazón lleno de rostros, Rossi, A. – Fares, D.J., Bonum, Buenos Aires 2013. ISBN: 9789876670081",
    purchaseLink: "https://www.editorialbonum.com.ar/productos/peregrinos-en-el-camino-angel-rossi-diego-fares/"
  },
  {
    title: "Papa Francesco è Come un Bambú",
    bibliographicInfo: "Papa Francesco è come un bambù. Alle radici della cultura dell'incontro, Fares, D.J., Ancora-La Civiltà Cattolica, Roma 2014. ISBN: 9788851413538",
    purchaseLink: "https://www.ancoralibri.it/scheda-libro/diego-fares/papa-francesco-e-come-un-bambu-9788851413538-1462.html"
  },
  {
    title: "Papa Francisco La Cutura Del Encuentro",
    bibliographicInfo: "Papa Francisco. La cultura del encuentro, Fares, D.J., Edhasa, Barcelona 2014. ISBN: 9789876283274",
    purchaseLink: "https://www.edhasa.com.ar/product/papa-francisco/"
  },
  {
    title: "EL Olor Del Pastor",
    bibliographicInfo: "El olor del Pastor. El ministerio pastoral en la visión del Papa Francisco, Fares, D.J., Agape-Sal Terrae, Buenos Aires 2015. ISBN: 9788429325300",
    purchaseLink: "https://www.agape-libros.com.ar/Detalle/Libro/olor_del_pastor_el/23185"
  },
  {
    title: "The Heart of Pope Francis",
    bibliographicInfo: "The Heart of Pope Francis. How a New Culture of Encounter Is Changing the Church and the World, Fares, D.J., Crossroad Publishing Company, Estados Unidos 2015. ISBN: 9780824520748",
    purchaseLink: "https://crossroadpublishing.com/product/the-heart-of-pope-francis/"
  },
  {
    title: "Formar el corazón en esperanza",
    bibliographicInfo: "Formar el Corazón en la Esperanza. Propuestas para la formación de sacerdotes y consagrados/as, Fares, D.J., Bonum, Buenos Aires 2017. ISBN: 9789505076123",
    purchaseLink: "https://www.editorialbonum.com.ar/productos/formar-el-corazon-en-esperanza-diego-fares/"
  },
  {
    title: "Dichosos vosotros",
    bibliographicInfo: "Dichosos vosotros. Repensar las bienaventuranzas con el Papa Francisco, Fares, D.J. – Irigoy, M., Paulinas, Madrid 2017. ISBN: 9788416180721",
    purchaseLink: "https://paulinas.es/catalogo/dichosos-vosotros-repensar-las-bienaventuranzas-con-el-papa-francisco/"
  },
  {
    title: "Diez cosas que el Papa Francisco propone a los sacerdotes",
    bibliographicInfo: "Diez cosas que el Papa Francisco propone a los sacerdotes, Fares, D.J., Publicaciones Claretianas, Madrid 2017. ISBN: 9788479665838",
    purchaseLink: "http://www.publicacionesclaretianas.com/catalog/diez-cosas-que-el-papa-francisco-propone-los-sacerdotes"
  },
  {
    title: "Cuidar al pastor",
    bibliographicInfo: "Cuidar al pastor, Rossi, A. – Fares, D.J., Agape, Buenos Aires 2017. ISBN: 9789876404525",
    purchaseLink: "https://www.agape-libros.com.ar/Detalle/Libro/cuidar_al_pastor/24380"
  },
  {
    title: "Fares Apesebrar",
    bibliographicInfo: "Apesebrar el corazón. Contemplaciones de adviento, Fares, D.J., CreateSpace Independent Publishing Platform, Roma 2018. ISBN: 9781729753217",
    purchaseLink: "https://www.amazon.es/Apesebrar-el-coraz%C3%B3n-Contemplaciones-Adviento/dp/1729753213"
  },
  {
    title: "Contemplar el rostro de Cristo en los pobres",
    bibliographicInfo: "Contemplar el rostro de Cristo en los pobres, Fares, D.J., Ágape, Buenos Aires 2021. ISBN: 9789876406017",
    purchaseLink: "https://www.agape-libros.com.ar/Detalle/Libro/contemplar_el_rostro_de_cristo_en_los_pobres/28123"
  },
  {
    title: "Come Goccia su Una Spugna",
    bibliographicInfo: "Como gota de agua sobre la esponja. Francisco, maestro de discernimiento, Fares, D.J., Publicaciones Claretianas, Madrid 2021. ISBN: 9788479667122",
    purchaseLink: "http://www.publicacionesclaretianas.com/catalog/como-gota-de-agua-sobre-la-esponja"
  },
  {
    title: "San Jose la Ternura de un Padre",
    bibliographicInfo: "San José, la ternura de un padre, Fares, D.J. – Irigoy, M., Publicaciones Claretianas, Madrid 2022. ISBN: 9788479667597"
  },
  {
    title: "El secreto de la belleza",
    bibliographicInfo: "El secreto de la belleza. La entrega de sus testigos, Rossi, A. – Fares, D.J., Bonum, Buenos Aires 2024. ISBN: 9789876670036",
    purchaseLink: "https://www.agape-libros.com.ar/Detalle/Libro/secreto_de_la_belleza_el/22547"
  }
]

// Helper function to normalize text for comparison (remove accents, lowercase, etc)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[.,;:¿?¡!()]/g, "") // Remove punctuation
    .trim()
}

// Helper function to find book info by title in the filename
export function findBookInfo(filename: string): BookPurchaseInfo | undefined {
  const normalizedFilename = normalizeText(filename)

  // Find a book where the title appears in the filename
  const book = booksPurchaseLinks.find(book => {
    const normalizedTitle = normalizeText(book.title)
    return normalizedFilename.includes(normalizedTitle)
  })

  return book
}
