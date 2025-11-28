/**
 * Devuelve las contemplaciones para una semana (domingo a sábado) usando calendar_ids.json
 * @param fecha Fecha dentro de la semana
 * @returns Array de IDs de contemplaciones
 */



import idsData from './ids.json';
import contemplacionesData from './contemplaciones.json';


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
  const year = String(fecha.getUTCFullYear());
  const month = String(fecha.getUTCMonth() + 1).padStart(2, '0');
  const day = String(fecha.getUTCDate()).padStart(2, '0');
  const diaData = idsData[year]?.[month]?.[day];
    let contemplaciones: Contemplacion[] = [];
    if (diaData && Array.isArray(diaData.contemplaciones)) {
      contemplaciones = diaData.contemplaciones.map((id: number) => {
        const contem = (contemplacionesData as any[]).find(c => c.id === id);
        return contem ? { ...contem, fecha: `${year}-${month}-${day}` } : { id, fecha: `${year}-${month}-${day}` };
      });
    }
    return {
      fecha,
      fechaDomingo: `${year}-${month}-${day}`,
      temporada: 'Ordinary Time', // Ajustar según lógica real si se requiere
      ciclo: 'A', // Ajustar según lógica real si se requiere
      celebracion_clave: diaData?.celebracion_clave ?? null,
      contemplaciones
    };
}
