import { traerContemplacionesSemana } from '../lib/calendar_title_based'

describe('traerContemplacionesSemana - fechas exactas', () => {
  const casos = [
    // 2025
    { fecha: [2025, 11, 23], ids: [69729, 31911, 84587, 40394], nombre: 'Cristo Rey C' },
    { fecha: [2025, 11, 30], ids: [97251, 72864, 20640, 75502], nombre: 'Adviento 1 A' },
    { fecha: [2025, 12, 7], ids: [66726, 17615, 15233, 93052], nombre: 'Inmaculada Concepción + Adviento 2 A' }, // originales: 2025-12-07 (Adviento 2 A), 2025-12-07 (Inmaculada Concepción, original: 2025-12-08)
    { fecha: [2025, 12, 14], ids: [72698, 79652, 68874, 60128], nombre: 'Adviento 3 A' },
    { fecha: [2025, 12, 21], ids: [98245, 33270, 49797, 12905, 85000, 88395, 56283], nombre: 'Navidad + Adviento 4 A' }, // originales: 2025-12-21 (Adviento 4 A), 2025-12-21 (Navidad, original: 2025-12-25)
    { fecha: [2025, 12, 28], ids: [61208, 74938, 76284, 11221, 37297, 86378], nombre: 'Sagrada Familia + Santa María Madre de Dios' }, // originales: 2025-12-28 (Sagrada Familia), 2025-12-28 (Santa María Madre de Dios, original: 2026-01-01)

    // 2026
    { fecha: [2026, 1, 4], ids: [20911, 52798], nombre: '2º Domingo después de Navidad' },
    { fecha: [2026, 1, 11], ids: [7610, 71816, 66432], nombre: 'Bautismo del Señor' },
    { fecha: [2026, 1, 18], ids: [94897, 98210, 90919, 22007], nombre: '2º Domingo Tiempo Ordinario' },
    { fecha: [2026, 1, 25], ids: [55225, 71889, 40127, 49415], nombre: '3er Domingo Tiempo Ordinario' },
    // Fiestas fijas (mes-día, año cualquiera)
    { fecha: [2025, 10, 26], ids: [58851], nombre: 'Todos los Santos' }, // original: 2025-11-01
    { fecha: [2025, 11, 9], ids: [68580], nombre: 'Dedicación Basílica de Letrán' },
    { fecha: [2025, 6, 22], ids: [78774], nombre: 'Sagrado Corazón' }, // original: 2025-06-24
    { fecha: [2025, 8, 10], ids: [59118, 37494, 33475, 70868, 83173], nombre: 'Asunción' }, // original: 2025-08-15  +  ORD19.C 
  ]

  casos.forEach(({ fecha, ids, nombre }) => {
    it(`devuelve SOLO los IDs correctos para ${fecha[0]}-${fecha[1]}-${fecha[2]} (${nombre})`, () => {
      // Mes en Date.UTC es base 0
      const d = new Date(Date.UTC(fecha[0], fecha[1] - 1, fecha[2]))
      const resultado = traerContemplacionesSemana(d)
      const idsObtenidos = resultado.contemplaciones.map(c => c.id)
      expect(idsObtenidos).toEqual(ids)
      expect(idsObtenidos.length).toBe(ids.length)
    })
  })
})
