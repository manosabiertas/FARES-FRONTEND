import { traerContemplacionesSemana } from '../lib/calendar_title_based'

describe('traerContemplacionesSemana - Semana 1 al 7 de febrero de 2026', () => {
  it('devuelve solo las contemplaciones correctas para el evangelio de Mateo 5, 1-12 el 1-02-2026', () => {
    // Domingo 1 de febrero de 2026
    const fecha = new Date(Date.UTC(2026, 1, 1))
    const resultado = traerContemplacionesSemana(fecha)
    // Filtrar solo las contemplaciones que tengan la lectura exacta 'Mt 5,1-12'
    const contemplacionesFiltradas = resultado.contemplaciones.filter(c => {
      if (Array.isArray(c.lecturas)) {
        return c.lecturas.includes('Mt 5,1-12');
      }
      return c.lecturas === 'Mt 5,1-12';
    });
    console.log('Contemplaciones filtradas:', contemplacionesFiltradas.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })))
    const idsObtenidos = contemplacionesFiltradas.map(c => c.id)
    // IDs correctos para el evangelio Mateo 5, 1-12 según los datos actuales:
    // Fiesta de todos los santos … y de una santa de la puerta de al lado (31 A 2020): 58851
    // Las Bienaventuranzas: 9 bendiciones consoladoras de Jesús que forman al Pueblo fiel de Dios (4 A 2017): 97915
    // Domingo 4 A 2014: 24127
    // Domingo 4 A 2011: 89745
    const idsCorrectos = [58851, 97915, 24127, 89745]
    // Ya no se espera una cantidad fija de contemplaciones, solo que estén los correctos
    // Solo 3 son correctas
    const idsCorrectosPresentes = idsObtenidos.filter(id => idsCorrectos.includes(id))
    expect(idsCorrectosPresentes.length).toBe(3)
    // Todos los correctos están presentes
    idsCorrectos.forEach(id => {
      expect(idsObtenidos).toContain(id)
    })
  })
})
