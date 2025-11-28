/**
 * Devuelve las contemplaciones para una semana (domingo a sábado) usando calendar_ids.json
 * @param fecha Fecha dentro de la semana
 * @returns Array de IDs de contemplaciones
 */
import calendarIds from './calendar_ids';

export function traerContemplacionesSemanaPorIds(fecha: Date): number[] {
  const year = String(fecha.getUTCFullYear());
  // Buscar el domingo de la semana
  const d = new Date(Date.UTC(fecha.getUTCFullYear(), fecha.getUTCMonth(), fecha.getUTCDate()));
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  // Calcular clave de semana
  const firstSunday = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());
  const diff = Math.floor((d.getTime() - firstSunday.getTime()) / (7 * 86400000));
  const weekKey = `${year}-${String(diff + 1).padStart(2, '0')}`;
  return (calendarIds[year] && calendarIds[year][weekKey]) ? calendarIds[year][weekKey] : [];
}
