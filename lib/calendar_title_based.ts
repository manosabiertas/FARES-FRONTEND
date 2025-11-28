/**
 * Liturgical Calendar Logic - FARES
 *
 * Cómo ejecutar los tests:
 *
 * 1. Asegúrate de tener las dependencias instaladas:
 *    pnpm install   # o npm install
 *
 * 2. Ejecuta los tests con:
 *    npx jest test/calendar_title_based.test.ts --bail
 *
 * Esto validará la lógica de calendario y contemplaciones.
 */
/**
 * Determina si la fecha dada es el Bautismo del Señor.
 * El Bautismo del Señor es el domingo después del 6 de enero, o el lunes si el 6 cae en domingo.
 */
function esBautismoDelSenor(fechaDomingo: Date): boolean {
  const año = fechaDomingo.getUTCFullYear();
  const epifania = new Date(Date.UTC(año, 0, 6));
  let bautismo = addDays(epifania, 1);
  while (bautismo.getUTCDay() !== 0) {
    bautismo = addDays(bautismo, 1);
  }
  if (epifania.getUTCDay() === 0) {
    bautismo = addDays(epifania, 1);
  }
  return isSameDay(fechaDomingo, bautismo);
}
/**
 * Determina si la fecha dada es el segundo domingo después de Navidad.
 * Este domingo ocurre entre el 2 y el 5 de enero, si existe.
 */
function esSegundoDomingoDespuesDeNavidad(fechaDomingo: Date): boolean {
  const año = fechaDomingo.getUTCFullYear();
  const navidad = new Date(Date.UTC(año - 1, 11, 25));
  let primerDomingo = addDays(navidad, 1);
  while (primerDomingo.getUTCDay() !== 0) {
    primerDomingo = addDays(primerDomingo, 1);
  }
  const segundoDomingo = addDays(primerDomingo, 7);
  return (
    isSameDay(fechaDomingo, segundoDomingo) &&
    fechaDomingo.getUTCMonth() === 0 &&
    fechaDomingo.getUTCDate() >= 2 &&
    fechaDomingo.getUTCDate() <= 5
  );
}
/**
 * Determina si la fecha dada es el primer domingo después de Navidad.
 */
function esPrimerDomingoDespuesDeNavidad(fechaDomingo: Date): boolean {
  const año = fechaDomingo.getUTCFullYear();
  const navidad = new Date(Date.UTC(año, 11, 25));
  let primerDomingo = addDays(navidad, 1);
  while (primerDomingo.getUTCDay() !== 0) {
    primerDomingo = addDays(primerDomingo, 1);
  }
  return isSameDay(fechaDomingo, primerDomingo);
}

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
  titulo: string
  ciclo:string
  resumen: string
  link: string
  fecha?: string
  lecturas?: string[] | string
  dominical:boolean, 
  tiempo_liturgico:string
}

export type Ciclo = 'A' | 'B' | 'C';

export interface ContemplacionesSemana {
  fecha: Date
  fechaDomingo: string
  temporada: Season
  ciclo: Ciclo
  celebracion_clave: string | null
  contemplaciones: Contemplacion[]
  /** Contemplaciones filtradas por lectura según gospel_index (opcional, solo para debug) */
  contemplacionesFiltradasPorLectura?: { id: number, titulo: string, lecturas: string[] | string }[]
}

/**
 * Calcula la fecha de Pascua (domingo de Pascua) para un año dado usando el algoritmo de Meeus/Jones.
 */
export function easterDate(year: number): Date {
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

/**
 * Suma una cantidad de días a una fecha y retorna una nueva instancia de Date.
 */
export function addDays(d: Date, days: number): Date {
  const nd = new Date(d.getTime())
  nd.setUTCDate(nd.getUTCDate() + days)
  return nd
}

/**
 * Resta una cantidad de días a una fecha y retorna una nueva instancia de Date.
 */
export function subDays(d: Date, days: number): Date {
  return addDays(d, -days)
}

/**
 * Compara si dos fechas corresponden al mismo día (ignorando horas).
 */
export function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate()
}

/**
 * Calcula la fecha de inicio del Adviento para un año calendario (cuarto domingo antes de Navidad).
 */
export function adventStart(year: number): Date {
  const dec25 = new Date(Date.UTC(year, 11, 25))
  const dow = dec25.getUTCDay()
  const daysToLastSunday = dow
  const lastSunday = subDays(dec25, daysToLastSunday)
  const fourthSundayBefore = subDays(lastSunday, 21)
  return fourthSundayBefore
}

/**
 * Calcula la fecha del Miércoles de Ceniza (46 días antes de Pascua).
 */
export function ashWednesday(year: number): Date {
  const e = easterDate(year)
  return subDays(e, 46)
}

/**
 * Calcula la fecha de Pentecostés (49 días después de Pascua).
 */
export function pentecost(year: number): Date {
  const e = easterDate(year)
  return addDays(e, 49)
}

// Determina el año litúrgico para una fecha determinada.
// El año litúrgico comienza el primer día del Adviento.
/**
 * Determina el año litúrgico para una fecha determinada.
 * El año litúrgico comienza el primer día del Adviento.
 */
export function liturgicalYearForDate(date: Date): number {
  const year = date.getUTCFullYear()
  const advStart = adventStart(year)
  if (date >= advStart) return year + 1
  return year
}

/**
 * Devuelve información de la temporada litúrgica para una fecha dada.
 */
/**
 * Devuelve información de la temporada litúrgica para una fecha dada.
 */
export function getLiturgicalSeason(date: Date): SeasonInfo {
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
/**
 * Obtiene el ciclo litúrgico (A, B, C) para un año litúrgico dado.
 */
export function getCicloLiturgico(year: number): Ciclo {
  const cycles = ['C', 'A', 'B'] as const
  return cycles[year % 3]
}

/**
 * Mapea las temporadas internas a los nombres usados en el JSON de contemplaciones
 */
/**
 * Mapea las temporadas internas a los nombres usados en el JSON de contemplaciones.
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
 * Obtiene la fecha del domingo de la semana actual o anterior
 * Si la fecha es domingo, retorna la misma fecha
 * Si es otro día, retorna el domingo anterior
 */
/**
 * Obtiene la fecha del domingo de la semana actual o anterior.
 * Si la fecha es domingo, retorna la misma fecha; si es otro día, retorna el domingo anterior.
 */
export function getDomingoDeEstaSemana(fecha: Date): Date {
  // Retorna el domingo anterior o igual a la fecha dada (domingo como primer día de la semana)
  const fechaCopia = new Date(fecha.getTime());
  const diaSemana = fechaCopia.getUTCDay(); // 0 = Domingo, 1 = Lunes, ...
  // Si es domingo, retorna la misma fecha
  if (diaSemana === 0) {
    return fechaCopia;
  }
  // Si no, retrocede hasta el domingo anterior
  return addDays(fechaCopia, -diaSemana);
}

/**
 * Formatea una fecha en español (UTC)
 */
/**
 * Formatea una fecha en español (UTC) en formato: "Domingo, 1 de enero de 2025".
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
/**
 * Calcula el número de domingo dentro de Adviento (1-4).
 * Retorna null si la fecha no corresponde a un domingo de Adviento.
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
/**
 * Calcula el número de domingo dentro de Cuaresma (1-5) o domingos especiales.
 * Retorna un string identificador o null si no corresponde.
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
/**
 * Calcula el número de domingo dentro de Pascua (2-7) o solemnidades especiales.
 * Retorna un string identificador o null si no corresponde.
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
/**
 * Calcula el número de domingo en Tiempo Ordinario.
 * Retorna un string identificador o null si no corresponde.
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
/**
 * Obtiene la clave de celebración para un domingo dado según la temporada y el ciclo.
 */
export function getCelebracionClave(fecha: Date, seasonInfo: SeasonInfo, ciclo: Ciclo): string | null {
  // ASCENSION: jueves 39 días después de Pascua
  const ascension = addDays(seasonInfo.keyDates.easter, 39);
  if (isSameDay(fecha, ascension)) {
    return `ASCENSION.${ciclo}`;
  }
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

    case 'Christmas': {
      return calcularDomingoNavidad(fecha, seasonInfo) + '.' + ciclo;
    }

    case 'Ordinary Time': {
      return calcularDomingoOrdinario(fecha, seasonInfo) + '.' + ciclo
    }

    default:
      return null;
  }
}


/**
 * Calcula el número de domingo dentro de Navidad (Christmas)
 * Devuelve 'SAGRADA_FAMILIA' si corresponde, o NAV1, NAV2, ...
 */
/**
 * Calcula el número de domingo dentro de Navidad (Christmas).
 * Devuelve 'SAGRADA_FAMILIA' si corresponde, o NAV1, NAV2, ...
 */
function calcularDomingoNavidad(fecha: Date, seasonInfo: SeasonInfo): string | null {

  // Primer domingo después de Navidad = SAGRADA_FAMILIA
  if (esPrimerDomingoDespuesDeNavidad(fecha)) {
    return 'SAGRADA_FAMILIA';
  }
  if (esSegundoDomingoDespuesDeNavidad(fecha)) {
    return `SEGUNDO_DOMINGO_NAVIDAD`;

  }
  if (esBautismoDelSenor(fecha)) {
    return `BAUTISMO_DEL_SEÑOR`;
  }

  // Calcular domingos desde el 25 de diciembre
  const inicio = seasonInfo.start;
  let domingo = inicio;
  let numeroDomingo = 1;
  while (domingo <= seasonInfo.end) {
    if (isSameDay(fecha, domingo)) {
      return `NAV${numeroDomingo}`;
    }
    domingo = addDays(domingo, 7);
    numeroDomingo++;
  }
  return null;
}



/**
 * Obtiene las contemplaciones para la semana actual basándose en la celebración litúrgica
 * Usa el índice de celebraciones del JSON limpio para búsqueda eficiente
 */
/**
 * Obtiene las contemplaciones para la semana actual basándose en la celebración litúrgica.
 * Usa el índice de celebraciones del JSON limpio para búsqueda eficiente.
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
  // Por fecha exacta
  let idsEncontrados: number[] = [];
  const celebracionClave = getCelebracionClave(fechaDomingo, seasonInfo, ciclo);

  // IDs de ciclo del domingo
  let idsCiclo: number[] = [];
  if (celebracionClave) {
    idsCiclo = celebrationIndex[`${celebracionClave}`] || [];
  }

  // IDs de contemplaciones de toda la semana (no solo fijas, sino también por ciclo para cada día)
  const diasSemana: Date[] = [];
  for (let i = 0; i < 7; i++) {
    diasSemana.push(addDays(fechaDomingo, i));
  }
  let idsSemana: number[] = [];
  for (const d of diasSemana) {
    // Por ciclo (si el día es domingo, usar celebracion_clave; si no, calcular la clave para ese día)
    let claveDia: string | null = null;
    const seasonInfoDia = getLiturgicalSeason(d);
    const cicloDia = getCicloLiturgico(liturgicalYearForDate(d));
    claveDia = getCelebracionClave(d, seasonInfoDia, cicloDia);
    if (claveDia && celebrationIndex[claveDia]) {
      idsSemana.push(...celebrationIndex[claveDia]);
    }
    // Por fecha exacta (fiestas fijas)
    const m = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    const idsFecha = buscarContemplacionesPorFecha(m, day);
    idsSemana.push(...idsFecha);
  }
  // Eliminar duplicados manteniendo el primer orden de aparición
  idsSemana = Array.from(new Set(idsSemana));
  console.log('Paso 1: idsSemana:', idsSemana);
  // Ordenar las contemplaciones según el orden de idsSemana
  const contemplaciones: Contemplacion[] = idsSemana
    .map((id) => {
      const c = contemplacionesData.find((c: any) => c.id === id)
      return c ? { ...c, fecha: fechaDomingoFormateada } : null
    })
    .filter((c): c is Contemplacion => c !== null)
  console.log('Paso 2: contemplaciones:', contemplaciones.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })));

  // Filtrar por lecturas en gospel_index
  // Importar dinámicamente para evitar ciclo de dependencias
  let contemplacionesFiltradas = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { filtrarPorLecturaEnGospelIndex } = require('./filtrar_por_lectura_gospel_index');
    contemplacionesFiltradas = filtrarPorLecturaEnGospelIndex(idsSemana);
    console.log('Paso 3: contemplaciones filtradas por gospel_index:', contemplacionesFiltradas);
  } catch (e) {
    console.warn('No se pudo importar o ejecutar filtrarPorLecturaEnGospelIndex:', e);
  }

  return {
    fecha: hoy,
    fechaDomingo: fechaDomingoFormateada,
    temporada: seasonInfo.season,
    ciclo,
    celebracion_clave: celebracionClave,
    contemplaciones,
    contemplacionesFiltradasPorLectura: contemplacionesFiltradas
  }
}

/** La funcion acepta los ids encontrados ,  separa las lecturas tomando los valores desde contemplaciones json 
 * normaliza las lecturas , obtiene los ids de las contemplaciones que estan indicadas en  gospel_inde.json tomando como indice 
 * la lectura normalizada y  filtra los id de las contemplaciones dejando solo los que encuentra coinciden con los encontrados en 
 * gospel_index.json 
 */


/**
 * Busca contemplaciones adicionales por IDs específicos
 * para fechas exactas según Calendario Fares Lecturas
 */
/**
 * Busca contemplaciones adicionales por IDs específicos para fechas exactas según el calendario.
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