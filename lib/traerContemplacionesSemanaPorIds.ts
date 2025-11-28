/**
 * Devuelve las contemplaciones para una semana (domingo a sábado) usando calendar_ids.json
 * @param fecha Fecha dentro de la semana
 * @returns Array de IDs de contemplaciones
 */



import idsData from './ids.json';
import contemplacionesData from './contemplaciones.json';
import { Contemplacion } from './calendar_title_based';

/**
 * Devuelve las contemplaciones para una fecha específica, incluyendo la fecha por la que fue elegida.
 * @param fecha Fecha a consultar
 * @returns Array de objetos { id: number, fecha: string }
 */
export function traerContemplacionesSemanaPorIds(fecha: Date):Contemplacion[]{
  const year = String(fecha.getUTCFullYear());
  const month = String(fecha.getUTCMonth() + 1).padStart(2, '0');
  const day = String(fecha.getUTCDate()).padStart(2, '0');
  const diaData = idsData[year]?.[month]?.[day];
  if (diaData && Array.isArray(diaData.contemplaciones)) {
    return diaData.contemplaciones.map((id: number) => {
      const contem = (contemplacionesData as any[]).find(c => c.id === id);
      return contem ? { ...contem, fecha: `${year}-${month}-${day}` } : { id, fecha: `${year}-${month}-${day}` };
    });
  }
  return [];
}
