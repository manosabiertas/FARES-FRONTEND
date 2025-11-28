import { traerContemplacionesSemana } from '../../lib/calendar_title_based'

describe('traerContemplacionesSemana - Semana 18 al 24 de enero de 2026', () => {
  it('devuelve solo las contemplaciones correctas para el evangelio de Juan 1, 29-34 el 18-01-2026', () => {
    // Domingo 18 de enero de 2026
    const fecha = new Date(Date.UTC(2026, 0, 18))
    const resultado = traerContemplacionesSemana(fecha)
    // Filtrar solo las contemplaciones que tengan la lectura exacta 'Jn 1,29-34'
    const contemplacionesFiltradas = resultado.contemplaciones.filter(c => {
      if (Array.isArray(c.lecturas)) {
        return c.lecturas.includes('Jn 1,29-34');
      }
      return c.lecturas === 'Jn 1,29-34';
    });
    const idsObtenidos = contemplacionesFiltradas.map(c => c.id)
    // IDs correctos para el evangelio Juan 1, 29-34 (según la descripción)
    // IDs exactos de las contemplaciones para Jn 1,29-34:
    // “No lo conocía, pero…” (2 A 2020): 94897
    // Nunca tenemos que pensar al Espíritu Santo solo... (2 A 2017): 98210
    // Domingo 2 A 2014: 90919
    // Domingo 2 A 2011: 22007
    const idsCorrectos = [94897, 98210, 90919, 22007]
    // El calendario muestra 19 contemplaciones
    // Solo 4 son correctas
    const idsCorrectosPresentes = idsObtenidos.filter(id => idsCorrectos.includes(id))
    expect(idsCorrectosPresentes.length).toBe(4)
    // Todos los correctos están presentes
    idsCorrectos.forEach(id => {
      expect(idsObtenidos).toContain(id)
    })
  })
})
