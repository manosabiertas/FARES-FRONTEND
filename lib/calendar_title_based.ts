// Cálculos litúrgicos usando contemplaciones_clean_title_based.json
// Este archivo implementa la lógica basada en títulos y metadatos limpios

import contemplacionesDataRaw from './contemplaciones.json'
import celebrationIndexCiclosRaw from './celebration_index_ciclos.json'
import gospelIndexRaw from './gospel_index.json'

// Verificar que los datos se cargaron correctamente
const contemplacionesData = contemplacionesDataRaw as any
const celebrationIndex = celebrationIndexCiclosRaw as Record<string, number[]>
const gospelIndex = gospelIndexRaw as Record<string, number[]>
if (!contemplacionesData) {
  console.error('ERROR: contemplaciones.json no se cargó correctamente')
}

export type Season = 'Advent' | 'Christmas' | 'Lent' | 'Easter' | 'Ordinary Time' | 'Triduum'


export interface SeasonInfo {
  season: Season
  start: Date
  end: Date
  keyDates: {
    easter: Date
    ashWednesday: Date
    pentecost: Date
  }
}

export interface Contemplacion {
  id: number
  // ciclo: 'A' | 'B' | 'C'
  // tiempo_liturgico: string
  titulo: string
  // lecturas: string[]
  // lecturas_normalizadas: string[]
  resumen: string
  link: string
  //dominical: boolean
  //fecha?: string
  //celebracion_clave?: string
}

export type Ciclo = 'A' | 'B' | 'C';

export interface ContemplacionesSemana {
  fecha: Date
  fechaDomingo: string
  temporada: Season
  ciclo: Ciclo
  celebracion_clave: string | null
  contemplaciones: Contemplacion[]
}

/**
 * Calcula la fecha de Pascua (domingo de Pascua) para un año dado usando el algoritmo de Meeus/Jones.
 */
function easterDate(year: number): Date {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31) // 3=March, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Date.UTC(year, month - 1, day))
}

function addDays(d: Date, days: number): Date {
  const nd = new Date(d.getTime())
  nd.setUTCDate(nd.getUTCDate() + days)
  return nd
}

function subDays(d: Date, days: number): Date {
  return addDays(d, -days)
}

/**
 * Normaliza una fecha a medianoche UTC para comparaciones
 
function normalizeDate(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()))
}
  */

/**
 * Compara si dos fechas son el mismo día (ignorando horas)
 */
function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate()
}

/**
 * Calcula el inicio del Adviento para un año calendario: cuarto domingo antes de Navidad (25 de diciembre).
 */
function adventStart(year: number): Date {
  const dec25 = new Date(Date.UTC(year, 11, 25))
  const dow = dec25.getUTCDay() // 0=Sun
  const daysToLastSunday = dow
  const lastSunday = subDays(dec25, daysToLastSunday)
  const fourthSundayBefore = subDays(lastSunday, 21)
  return fourthSundayBefore
}

/**
 * Calcula el Miércoles de Ceniza (46 días antes de Pascua)
 */
function ashWednesday(year: number): Date {
  const e = easterDate(year)
  return subDays(e, 46)
}

/**
 * Calcula pentecostes  (49 días despues de Pascuas)
 */
function pentecost(year: number): Date {
  const e = easterDate(year)
  return addDays(e, 49)
}

/**
 * Determina el año litúrgico para una fecha determinada.
 * El año litúrgico comienza el primer día del Adviento.
 */
function liturgicalYearForDate(date: Date): number {
  const year = date.getUTCFullYear()
  const advStart = adventStart(year)
  if (date >= advStart) return year + 1
  return year
}

/**
 * Devuelve información de la temporada litúrgica para una fecha dada.
 */
function getLiturgicalSeason(date: Date): SeasonInfo {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const ly = liturgicalYearForDate(d)
  const easter = easterDate(ly)
  const ash = ashWednesday(ly)
  const pent = pentecost(ly)

  const advStart = adventStart(ly - 1)
  const christmasStart = new Date(Date.UTC(ly - 1, 11, 25))
  const christmasEnd = new Date(Date.UTC(ly, 0, 13))

  const lentStart = ash
  const lentEnd = subDays(easter, 1)

  const triduumStart = subDays(easter, 3)
  const triduumEnd = subDays(easter, 1)

  const easterStart = easter
  const easterEnd = pent

  const ordinary1Start = christmasEnd
  const ordinary1End = subDays(ash, 1)
  const ordinary2Start = addDays(pent, 1)
  const ordinary2End = subDays(adventStart(ly), 1)

  if (d >= advStart && d < christmasStart) {
    return { season: 'Advent', start: advStart, end: subDays(christmasStart, 1), keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= christmasStart && d <= christmasEnd) {
    return { season: 'Christmas', start: christmasStart, end: christmasEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= lentStart && d <= lentEnd) {
    return { season: 'Lent', start: lentStart, end: lentEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= triduumStart && d <= triduumEnd) {
    return { season: 'Triduum', start: triduumStart, end: triduumEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= easterStart && d <= easterEnd) {
    return { season: 'Easter', start: easterStart, end: easterEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }

  if ((d >= ordinary1Start && d <= ordinary1End) || (d >= ordinary2Start && d <= ordinary2End)) {
    const start = d <= ordinary1End ? ordinary1Start : ordinary2Start
    const end = d <= ordinary1End ? ordinary1End : ordinary2End
    return { season: 'Ordinary Time', start, end, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }

  return { season: 'Ordinary Time', start: ordinary1Start, end: ordinary2End, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
}

/**
 * Obtiene el ciclo litúrgico (A, B, C) para un año litúrgico dado
 */
function getCicloLiturgico(year: number): Ciclo {
  const cycles = ['C', 'A', 'B'] as const
  return cycles[year % 3]
}

/**
 * Mapea las temporadas internas a los nombres usados en el JSON de contemplaciones
 */
function mapSeasonToSpanish(season: Season): string {
  const mapping: Record<Season, string> = {
    'Advent': 'Adviento',
    'Christmas': 'Navidad',
    'Lent': 'Cuaresma',
    'Easter': 'Pascua',
    'Ordinary Time': 'Tiempo Ordinario',
    'Triduum': 'Triduo'
  }
  return mapping[season]
}

/**
 * Obtiene la fecha del domingo de la semana actual o siguiente
 * Si la fecha es domingo, retorna la misma fecha
 * Si es otro día, retorna el domingo siguiente
 */
function getDomingoDeEstaSemana(fecha: Date): Date {
  const fechaCopia = new Date(fecha.getTime())
  const diaSemana = fechaCopia.getUTCDay() // 0 = Domingo, 1 = Lunes, etc.

  if (diaSemana === 0) {
    return fechaCopia
  }

  const diasHastaDomingo = 7 - diaSemana
  return addDays(fechaCopia, diasHastaDomingo)
}

/**
 * Formatea una fecha en español (UTC)
 */
function formatearFechaEspanol(fecha: Date): string {
  const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

  const diaSemana = dias[fecha.getUTCDay()]
  const dia = fecha.getUTCDate()
  const mes = meses[fecha.getUTCMonth()]
  const año = fecha.getUTCFullYear()

  // Capitalizar primera letra
  return `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}, ${dia} de ${mes} de ${año}`
}

/**
 * Calcula el número de domingo dentro de Adviento (1-4)
 */
function calcularDomingoAdviento(fecha: Date, seasonInfo: SeasonInfo): number | null {
  const inicio = seasonInfo.start
  const diasDesdeInicio = Math.floor((fecha.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24))
  const semanas = Math.floor(diasDesdeInicio / 7)

  if (semanas >= 0 && semanas < 4) {
    return semanas + 1 // 1, 2, 3, 4
  }
  return null
}


/**
 * Calcula el número de domingo dentro de Cuaresma (1-5) o domingos especiales
*/
function calcularDomingoCuaresma(fecha: Date, seasonInfo: SeasonInfo): string | null {
  const ashWed = seasonInfo.keyDates.ashWednesday
  const easter = seasonInfo.keyDates.easter

  // Domingo de Ramos es el domingo antes de Pascua
  const domingoRamos = subDays(easter, 7)
  if (isSameDay(fecha, domingoRamos)) {
    return 'DOMINGO_RAMOS'
  }

  // Calcular domingos desde Miércoles de Ceniza
  const primerDomingoCuaresma = addDays(ashWed, 4 - ashWed.getUTCDay() + (ashWed.getUTCDay() === 0 ? 7 : 0))
  const diasDesdePrimero = Math.floor((fecha.getTime() - primerDomingoCuaresma.getTime()) / (1000 * 60 * 60 * 24))
  const semanas = Math.floor(diasDesdePrimero / 7)

  if (semanas >= 0 && semanas < 5) {
    return `CUA${semanas + 1}` // CUA1, CUA2, CUA3, CUA4, CUA5
  }

  return null
}

/**
 * Calcula el número de domingo dentro de Pascua (2-7) o solemnidades especiales
*/
function calcularDomingoPascua(fecha: Date, seasonInfo: SeasonInfo): string | null {
  const easter = seasonInfo.keyDates.easter
  const pentecost = seasonInfo.keyDates.pentecost

  // Domingo de Pascua (Resurrección)
  if (isSameDay(fecha, easter)) {
    return 'PASCUA'
  }

  // Pentecostés
  if (isSameDay(fecha, pentecost)) {
    return 'PENTECOSTES'
  }

  // Domingos entre Pascua y Pentecostés
  const diasDesdePascua = Math.floor((fecha.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24))
  const semanas = Math.floor(diasDesdePascua / 7)

  if (semanas > 0 && semanas < 7) {
    return `PAS${semanas + 1}` // PAS2, PAS3, PAS4, PAS5, PAS6, PAS7
  }

  return null
}

/**
 * Calcula el número de domingo en Tiempo Ordinario
*/
function calcularDomingoOrdinario(fecha: Date, seasonInfo: SeasonInfo): string | null {
  const ly = liturgicalYearForDate(fecha)
  //  const easter = easterDate(ly)
  const pent = pentecost(ly)
  const ash = ashWednesday(ly)

  // Verificar si estamos en TO antes o después de Pascua
  if (fecha < ash) {
    // Tiempo Ordinario I (después de Navidad/Bautismo, antes de Cuaresma)
    // Encontrar el Bautismo del Señor (domingo después del 6 de enero)
    const epifania = new Date(Date.UTC(ly, 0, 6))
    let bautismoSenor = epifania
    // Si epifanía no es domingo, buscar el siguiente domingo
    while (bautismoSenor.getUTCDay() !== 0) {
      bautismoSenor = addDays(bautismoSenor, 1)
    }
    // El Bautismo es el domingo después de Epifanía
    if (isSameDay(bautismoSenor, epifania)) {
      bautismoSenor = addDays(bautismoSenor, 7)
    }

    // Contar domingos desde el Bautismo del Señor
    let domingo = bautismoSenor
    let numeroDomingo = 1

    while (domingo < ash) {
      if (isSameDay(fecha, domingo)) {
        return `ORD${numeroDomingo}`
      }
      domingo = addDays(domingo, 7)
      numeroDomingo++
    }
  } else {
    // Tiempo Ordinario II (después de Pentecostés)
    // La numeración litúrgica cuenta DESDE EL FINAL hacia atrás
    // Cristo Rey es siempre el Domingo 34 del Tiempo Ordinario
    // El domingo anterior a Cristo Rey es el 33, etc.

    const advientoInicio = adventStart(ly)

    // Encontrar el primer domingo después de Pentecostés
    let primerDomingoTO2 = addDays(pent, 1)
    while (primerDomingoTO2.getUTCDay() !== 0) {
      primerDomingoTO2 = addDays(primerDomingoTO2, 1)
    }

    // Contar TODOS los domingos del TO II (desde Pentecostés hasta Adviento)
    let domingosTOII: Date[] = []
    let domingo = primerDomingoTO2
    while (domingo < advientoInicio) {
      domingosTOII.push(new Date(domingo))
      domingo = addDays(domingo, 7)
    }

    // La numeración termina en 34 (Cristo Rey) y cuenta hacia atrás
    const totalDomingosTOII = domingosTOII.length
    const numeroFinal = 34 // Cristo Rey es siempre el último
    const numeroInicial = numeroFinal - totalDomingosTOII + 1

    // Buscar en qué posición está la fecha
    for (let i = 0; i < domingosTOII.length; i++) {

      if (isSameDay(fecha, domingosTOII[i])) {
        const numeroDomingo = numeroInicial + i

        // Cristo Rey tiene su propia clave
        if (numeroDomingo === 34) {
          return 'CRISTO_REY'
        }

        return `ORD${numeroDomingo}`
      }
    }
  }

  return null
}

/**
 * Obtiene la clave de celebración para un domingo dado
*/
function getCelebracionClave(fecha: Date, seasonInfo: SeasonInfo, ciclo: Ciclo): string | null {
  switch (seasonInfo.season) {
    case 'Advent': {
      const numDomingo = calcularDomingoAdviento(fecha, seasonInfo)
      return numDomingo ? `ADV${numDomingo}.${ciclo}` : null
    }
    case 'Lent': {
      return calcularDomingoCuaresma(fecha, seasonInfo) + '.' + ciclo
    }

    case 'Easter': {
      return calcularDomingoPascua(fecha, seasonInfo) + '.' + ciclo
    }

    case 'Ordinary Time': {
      return calcularDomingoOrdinario(fecha, seasonInfo) + '.' + ciclo
    }

    default:
      return null
  }
}

/** 
 * Imprime en la consola 
 */
export function consoleLog(...parameters: any[]): void {
  if (typeof window !== 'undefined') {
    console.log(...parameters);
  }
}

/**
 * Obtiene las contemplaciones para la semana actual basándose en la celebración litúrgica
 * Usa el índice de celebraciones del JSON limpio para búsqueda eficiente
 */
export function traerContemplacionesSemana(fecha?: Date): ContemplacionesSemana {
  //const celebracionesFijas: Contemplacion[] = [];
  //const entries = contemplacionesData;
  //inicializa la datos de tiempo 
  const hoy = fecha || new Date()
  //calcular la temporada 
  const seasonInfo = getLiturgicalSeason(hoy)
  //calcula el año en base al calendario liturgico
  const year = liturgicalYearForDate(hoy)
  //calcula el ciclo del año liturgico 
  const ciclo = getCicloLiturgico(year)
  // Calcular el domingo correspondiente
  const fechaDomingo = getDomingoDeEstaSemana(hoy)
  const fechaDomingoFormateada = formatearFechaEspanol(fechaDomingo)
  const año = fechaDomingo.getUTCFullYear()
  const mes = fechaDomingo.getUTCMonth() + 1
  const dia = fechaDomingo.getUTCDate()
  consoleLog('[traerContemplacionesSemana] Fecha:' + hoy.toISOString().split('T')[0])
  consoleLog('[traerContemplacionesSemana] Entries disponibles:', contemplacionesData?.length || 0)
  // Por fecha exacta
  let idsEncontrados: number[] = buscarContemplacionesPorFechaCompleta(año, mes, dia);
  const celebracionClave = getCelebracionClave(fechaDomingo, seasonInfo, ciclo);
  if (0 === idsEncontrados.length) {
    // Recorrer todos los días de la semana (lunes a domingo)
    const diasSemana: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const d = addDays(fechaDomingo, -i);
      diasSemana.unshift(d); // lunes primero, domingo último
    }
    consoleLog("Dias semana:", diasSemana);
    // Acumular todos los IDs únicos de cada día
    for (const d of diasSemana) {
      const m = d.getUTCMonth() + 1;
      const day = d.getUTCDate();
      // Por día-mes
      const idsFecha = buscarContemplacionesPorFecha(m, day);
      idsEncontrados.push(...idsFecha);
    }
    consoleLog('Celebracion Clave:', celebracionClave);
    consoleLog("IDs encontrados :", idsEncontrados);
    // Si no hay ninguno, usar la lógica de celebración clave
    if (celebracionClave) {
      const idsCiclo = celebrationIndex[`${celebracionClave}`] || [];

      consoleLog("IDS ciclo :", idsCiclo);

      idsEncontrados = [...idsEncontrados, ...idsCiclo];
    }
  }
  // Eliminar duplicados
  //idsEncontrados = Array.from(new Set(idsEncontrados));
  consoleLog('[traerContemplacionesSemana] IDs encontrados:', idsEncontrados.length);
  // Ordenar las contemplaciones según el orden de idsEncontrados
  const contemplaciones: Contemplacion[] = idsEncontrados
    .map((id) => {
      const c = contemplacionesData.find((c: any) => c.id === id)
      return c ? { ...c, fecha: fechaDomingoFormateada } : null
    })
    .filter((c): c is Contemplacion => c !== null)
  consoleLog('[traerContemplacionesSemana] Contemplaciones encontradas:', contemplaciones.length);
  return {
    fecha: hoy,
    fechaDomingo: fechaDomingoFormateada,
    temporada: seasonInfo.season,
    ciclo,
    celebracion_clave: celebracionClave,
    contemplaciones
  }
}


/**
 * Busca contemplaciones adicionales por IDs específicos
 * para fechas exactas según Calendario Fares Lecturas
 */
function buscarContemplacionesPorFecha(mes: number, dia: number): number[] {
  const contemplacionesPorFecha: Record<string, number[]> = {
    // Fiestas fijas que se repiten cada año
    '1-1': [11221, 37297, 86378], //  Solemnidad de Santa María, Madre de Dios: 1 de enero
    //'1-6':[], //  Epifanía del Señor: 6 de enero
    //'3-19':[], //Solemnidad de San José: 19 de marzo
    //'3-25':[], //Anunciación del Señor: 25 de marzo
    '6-24': [78774],  // Sagrado Corazón
    //'6-29':[], //Solemnidad de San Pedro y San Pablo: 29 de junio
    '8-15': [59118],  // Asunción
    '11-1': [58851],  // Todos los Santos
    '11-9': [68580],  // Dedicación Basílica de Letrán
    '12-8': [66726, 17615],  // Inmaculada Concepción
    '12-25': [98245, 33270, 49797, 12905],// Navidad

  }

  return contemplacionesPorFecha[`${mes}-${dia}`] ?? []
}


/**
 * Busca contemplaciones por fecha exacta 
 * @param año 
 * @param mes 
 * @param dia 
 * @returns 
 */
function buscarContemplacionesPorFechaCompleta(año: number, mes: number, dia: number): number[] {
  return [];
  // Mapa de contemplaciones por fecha exacta (año-mes-día) con IDs
  // Basado en Calendario Fares Lecturas
  const contemplacionesPorFechaCompleta: Record<string, number[]> = {
    // 2025
    '2025-11-23': [69729, 31911, 84587, 40394],  // Cristo Rey C
    '2025-11-30': [97251, 72864, 20640, 75502],  // Adviento 1 A
    '2025-12-7': [66726, 15233, 93052],  // Adviento 2 A
    '2025-12-14': [66726, 17615, 72698, 79652, 68874, 60128],  // Adviento 3 A
    '2025-12-21': [85000, 88395, 56283],  // Adviento 4 A
    '2025-12-28': [98245, 33270, 49797, 12905, 61208, 74938, 76284],  // Sagrada Familia
    // 2026
    '2026-1-4': [11221, 37297, 86378, 20911, 52798],  // 2º Domingo después de Navidad
    '2026-1-11': [7610, 71816, 66432],  // Bautismo del Señor
    '2026-1-18': [94897, 98210, 90919, 22007],  // 2º Domingo Tiempo Ordinario
    '2026-1-25': [55225, 71889, 40127, 49415],  // 3er Domingo Tiempo Ordinario
  }
  consoleLog(`Fecha por dia ${año}-${mes}-${dia}`)
  return contemplacionesPorFechaCompleta[`${año}-${mes}-${dia}`] ?? []
}

