/**
 * Devuelve las contemplaciones para una semana (domingo a sábado) usando calendar_ids.json
 * @param fecha Fecha dentro de la semana
 * @returns Array de IDs de contemplaciones
 */




type IdsDataType = {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        lectura: string;
        lecturaNormalizada: string;
        contemplaciones: number[];
        celebracion_clave?: string;
      };
    };
  };
};

import idsDataJson from './ids.json';
import contemplacionesData from './contemplaciones.json';

const idsData: IdsDataType = idsDataJson as unknown as IdsDataType;

// === FUNCIONES AUXILIARES COPIADAS DE base.tsx ===
export type Season = 'Advent' | 'Christmas' | 'Lent' | 'Easter' | 'Ordinary Time' | 'Triduum';

function addDays(d: Date, days: number): Date {
  const nd = new Date(d.getTime());
  nd.setUTCDate(nd.getUTCDate() + days);
  return nd;
}

function subDays(d: Date, days: number): Date {
  return addDays(d, -days);
}

function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate();
}

function adventStart(year: number): Date {
  const dec25 = new Date(Date.UTC(year, 11, 25));
  const dow = dec25.getUTCDay();
  const daysToLastSunday = dow;
  const lastSunday = subDays(dec25, daysToLastSunday);
  const fourthSundayBefore = subDays(lastSunday, 21);
  return fourthSundayBefore;
}

function easterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function ashWednesday(year: number): Date {
  const e = easterDate(year);
  return subDays(e, 46);
}

function pentecost(year: number): Date {
  const e = easterDate(year);
  return addDays(e, 49);
}

function liturgicalYearForDate(date: Date): number {
  const year = date.getUTCFullYear();
  const advStart = adventStart(year);
  if (date >= advStart) return year + 1;
  return year;
}

export interface SeasonInfo {
  season: Season;
  start: Date;
  end: Date;
  keyDates: {
    easter: Date;
    ashWednesday: Date;
    pentecost: Date;
  };
}

function getLiturgicalSeason(date: Date): SeasonInfo {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const ly = liturgicalYearForDate(d);
  const easter = easterDate(ly);
  const ash = ashWednesday(ly);
  const pent = pentecost(ly);

  const advStart = adventStart(ly - 1);
  const christmasStart = new Date(Date.UTC(ly - 1, 11, 25));
  const christmasEnd = new Date(Date.UTC(ly, 0, 13));

  const lentStart = ash;
  const lentEnd = subDays(easter, 1);

  const triduumStart = subDays(easter, 3);
  const triduumEnd = subDays(easter, 1);

  const easterStart = easter;
  const easterEnd = pent;

  const ordinary1Start = christmasEnd;
  const ordinary1End = subDays(ash, 1);
  const ordinary2Start = addDays(pent, 1);
  const ordinary2End = subDays(adventStart(ly), 1);

  if (d >= advStart && d < christmasStart) {
    return { season: 'Advent', start: advStart, end: subDays(christmasStart, 1), keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  if (d >= christmasStart && d <= christmasEnd) {
    return { season: 'Christmas', start: christmasStart, end: christmasEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  if (d >= lentStart && d <= lentEnd) {
    return { season: 'Lent', start: lentStart, end: lentEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  if (d >= triduumStart && d <= triduumEnd) {
    return { season: 'Triduum', start: triduumStart, end: triduumEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  if (d >= easterStart && d <= easterEnd) {
    return { season: 'Easter', start: easterStart, end: easterEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  if ((d >= ordinary1Start && d <= ordinary1End) || (d >= ordinary2Start && d <= ordinary2End)) {
    const start = d <= ordinary1End ? ordinary1Start : ordinary2Start;
    const end = d <= ordinary1End ? ordinary1End : ordinary2End;
    return { season: 'Ordinary Time', start, end, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
  }
  return { season: 'Ordinary Time', start: ordinary1Start, end: ordinary2End, keyDates: { easter, ashWednesday: ash, pentecost: pent } };
}

function getCicloLiturgico(year: number): Ciclo {
  const cycles = ['C', 'A', 'B'] as const;
  return cycles[year % 3];
}

function getDomingoDeEstaSemana(fecha: Date): Date {
  const fechaCopia = new Date(fecha.getTime());
  const diaSemana = fechaCopia.getUTCDay();
  if (diaSemana === 0) {
    return fechaCopia;
  }
  return addDays(fechaCopia, -diaSemana);
}




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
  resumen: string
  link: string
  fecha?: string
  lecturas?: string[] | string
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
 * Devuelve las contemplaciones para una fecha específica, incluyendo la fecha por la que fue elegida.
 * @param fecha Fecha a consultar
 * @returns Array de objetos { id: number, fecha: string }
 */
export function traerContemplacionesSemana(fecha: Date): ContemplacionesSemana {
  // Lógica real basada en base.tsx
  const hoy = fecha || new Date();
  const seasonInfo = getLiturgicalSeason(hoy);
  const yearLit = liturgicalYearForDate(hoy);
  const ciclo = getCicloLiturgico(yearLit);
  const fechaDomingo = getDomingoDeEstaSemana(hoy);
  const year = String(hoy.getUTCFullYear());
  const month = String(hoy.getUTCMonth() + 1).padStart(2, '0');
  const day = String(hoy.getUTCDate()).padStart(2, '0');
  const diaData = idsData[year]?.[month]?.[day];
  let contemplaciones: Contemplacion[] = [];
  if (diaData && Array.isArray(diaData.contemplaciones)) {
    contemplaciones = diaData.contemplaciones.map((id: number) => {
      const contem = (contemplacionesData as any[]).find(c => c.id === id);
      return contem ? { ...contem, fecha: `${year}-${month}-${day}` } : { id, fecha: `${year}-${month}-${day}` };
    });
  }
  // Celebracion clave: por ahora solo lo que venga de ids.json
  return {
    fecha: hoy,
    fechaDomingo: fechaDomingo.toISOString().slice(0, 10),
    temporada: seasonInfo.season,
    ciclo,
    celebracion_clave: diaData?.celebracion_clave ?? null,
    contemplaciones
  };
}
