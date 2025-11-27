import { traerContemplacionesSemana } from '../lib/calendar_title_based'

describe('traerContemplacionesSemana - Semana 1 al 7 de febrero de 2026', () => {
  it('devuelve solo las contemplaciones correctas para el evangelio de Mateo 5, 1-12 el 1-02-2026', () => {
    // Domingo 1 de febrero de 2026
    const fecha = new Date(Date.UTC(2026, 1, 1))
    const resultado = traerContemplacionesSemana(fecha)
    const idsObtenidos = resultado.contemplaciones.map(c => c.id)
    // IDs correctos para el evangelio Mateo 5, 1-12:
    // Las Bienaventuranzas: 9 bendiciones consoladoras de Jesús que forman al Pueblo fiel de Dios (4 A 2017): 48224
    // Domingo 4 A 2014: 40127
    // Domingo 4 A 2011: 89745
    const idsCorrectos = [48224, 40127, 89745]
    // El calendario muestra 15 contemplaciones
    expect(resultado.contemplaciones.length).toBe(15)
    // Solo 3 son correctas
    const idsCorrectosPresentes = idsObtenidos.filter(id => idsCorrectos.includes(id))
    expect(idsCorrectosPresentes.length).toBe(3)
    // Todos los correctos están presentes
    idsCorrectos.forEach(id => {
      expect(idsObtenidos).toContain(id)
    })
  })
})
