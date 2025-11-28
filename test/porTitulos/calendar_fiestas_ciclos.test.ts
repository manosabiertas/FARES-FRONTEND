// Test para cada fiesta y ciclo según celebration_index_ciclos.json
import { traerContemplacionesSemana } from '../../lib/calendar_title_based'

import celebrationIndex from '../../lib/celebration_index_ciclos.json'

// Utilidades para calcular fechas litúrgicas
import {
  easterDate,
  pentecost,
  ashWednesday,
  adventStart,
  getCicloLiturgico,
  liturgicalYearForDate,
  getLiturgicalSeason,
  getDomingoDeEstaSemana,
  getCelebracionClave
} from '../../lib/calendar_title_based'

// Mapeo de claves a funciones de fecha
const fechaPorClave: Record<string, (año: number) => Date> = {
  'PASCUA': (año) => easterDate(año),
  'PENTECOSTES': (año) => pentecost(año),
  'ASCENSION': (año) => {
    // Ascensión: 39 días después de Pascua (jueves) o 6º domingo de Pascua (42 días después)
    // Aquí usamos jueves (tradicional)
    const pascua = easterDate(año)
    return new Date(Date.UTC(pascua.getUTCFullYear(), pascua.getUTCMonth(), pascua.getUTCDate() + 39))
  },
  'DOMINGO_RAMOS': (año) => {
    // Domingo anterior a Pascua
    const pascua = easterDate(año)
    return new Date(Date.UTC(pascua.getUTCFullYear(), pascua.getUTCMonth(), pascua.getUTCDate() - 7))
  },
  'SAGRADA_FAMILIA': (año) => {
    // Primer domingo después de Navidad
    const navidad = new Date(Date.UTC(año - 1, 11, 25))
    let primerDomingo = new Date(navidad.getTime())
    primerDomingo.setUTCDate(navidad.getUTCDate() + 1)
    while (primerDomingo.getUTCDay() !== 0) {
      primerDomingo.setUTCDate(primerDomingo.getUTCDate() + 1)
    }
    return primerDomingo
  },
  'SEGUNDO_DOMINGO_NAVIDAD': (año) => {
    // Segundo domingo después de Navidad (si existe)
    const navidad = new Date(Date.UTC(año - 1, 11, 25))
    let primerDomingo = new Date(navidad.getTime())
    primerDomingo.setUTCDate(navidad.getUTCDate() + 1)
    while (primerDomingo.getUTCDay() !== 0) {
      primerDomingo.setUTCDate(primerDomingo.getUTCDate() + 1)
    }
    const segundoDomingo = new Date(primerDomingo.getTime())
    segundoDomingo.setUTCDate(primerDomingo.getUTCDate() + 7)
    return segundoDomingo
  },
  'BAUTISMO_DEL_SEÑOR': (año) => {
    // Domingo después del 6 de enero, o lunes si el 6 cae en domingo
    const epifania = new Date(Date.UTC(año, 0, 6))
    let bautismo = new Date(epifania.getTime())
    bautismo.setUTCDate(epifania.getUTCDate() + 1)
    while (bautismo.getUTCDay() !== 0) {
      bautismo.setUTCDate(bautismo.getUTCDate() + 1)
    }
    if (epifania.getUTCDay() === 0) {
      bautismo.setUTCDate(epifania.getUTCDate() + 1)
    }
    return bautismo
  }
}

describe('traerContemplacionesSemana - fiestas especiales por ciclo', () => {
  Object.entries(celebrationIndex).forEach(([clave, ids]) => {
    // Solo fiestas especiales (no ORD, ADV, etc.)
    const match = clave.match(/^(PASCUA|PENTECOSTES|ASCENSION|DOMINGO_RAMOS|SAGRADA_FAMILIA|SEGUNDO_DOMINGO_NAVIDAD|BAUTISMO_DEL_SEÑOR)\.(A|B|C)$/)
    if (!match) return
    const [_, fiesta, ciclo] = match
    // Buscar un año donde el ciclo corresponda y la fiesta realmente se celebre
    let añoEncontrado: number | null = null
    let fecha: Date | null = null
    for (let año = 2023; año <= 2030; año++) {
      const cicloLit = getCicloLiturgico(año)
      if (cicloLit !== ciclo) continue
      const calcFecha = fechaPorClave[fiesta]
      if (!calcFecha) continue
      const f = calcFecha(año)
      // Validar precedencia litúrgica: para SAGRADA_FAMILIA y SEGUNDO_DOMINGO_NAVIDAD, solo si la clave generada para ese día es la esperada
      const claveGenerada = getCelebracionClave(f, getLiturgicalSeason(f), cicloLit)
      if (claveGenerada === clave) {
        añoEncontrado = año
        fecha = f
        break
      }
    }
    if (!añoEncontrado || !fecha) return
    it(`incluye los IDs esperados para ${clave} (${fecha.toISOString().slice(0,10)})`, () => {
      const { traerContemplacionesSemana } = require('../lib/calendar_title_based')
      const resultado = traerContemplacionesSemana(fecha)
      const idsObtenidos = resultado.contemplaciones.map((c: any) => c.id)
      ids.forEach((id: number) => {
        expect(idsObtenidos).toContain(id)
      })
    })
  })
})
