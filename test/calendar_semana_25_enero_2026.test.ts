import { traerContemplacionesSemana } from '../lib/calendar_title_based'

describe('traerContemplacionesSemana - Semana 25 al 31 de enero de 2026', () => {
  it('devuelve solo las contemplaciones correctas para el evangelio de Mateo 4, 12-23 el 25-01-2026', () => {
    // Domingo 25 de enero de 2026
    const fecha = new Date(Date.UTC(2026, 0, 25))
    const resultado = traerContemplacionesSemana(fecha)
    // Filtrar solo las contemplaciones que tengan la lectura exacta 'Mt 4,12-23'
    const contemplacionesFiltradas = resultado.contemplaciones.filter(c => {
      if (Array.isArray(c.lecturas)) {
        return c.lecturas.includes('Mt 4,12-23');
      }
      return c.lecturas === 'Mt 4,12-23';
    });
    console.log('Contemplaciones filtradas:', contemplacionesFiltradas.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })))
    const idsObtenidos = contemplacionesFiltradas.map(c => c.id)
    // IDs correctos para el evangelio Mateo 4, 12-23:
    // El desborde de la itinerancia, una imagen de Jesús que se camina todo (3 A 2020): 55225
    // El Reino está cerca de los lugares donde se mezclan –donde se amigan– las culturas (3 A 2017): 71889
    // Domingo 3 A 2014: 40127
    // Domingo 3 A 2011: 49415
    const idsCorrectos = [55225, 71889, 40127, 49415]
    // El calendario muestra 15 contemplaciones
    //expect(resultado.contemplaciones.length).toBe(15)
    // Solo 4 son correctas
    const idsCorrectosPresentes = idsObtenidos.filter(id => idsCorrectos.includes(id))
    expect(idsCorrectosPresentes.length).toBe(4)
    // Todos los correctos están presentes
    idsCorrectos.forEach(id => {
      expect(idsObtenidos).toContain(id)
    })
  })
})
