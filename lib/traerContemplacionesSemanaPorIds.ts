/**
 * Devuelve las contemplaciones para una semana (domingo a sábado) usando calendar_ids.json
 * @param fecha Fecha dentro de la semana
 * @returns Array de IDs de contemplaciones
 */

import calendarIds from './calendar_ids';

function getWeekKey(date: Date): string {
  const year = date.getUTCFullYear();
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const getSunday = (d: Date) => {
    const copy = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
    copy.setUTCDate(copy.getUTCDate() - copy.getUTCDay());
    return copy;
  };
  const firstWeekSunday = getSunday(jan1);
  let weekNumber = Math.floor((getSunday(date).getTime() - firstWeekSunday.getTime()) / (7 * 86400000)) + 1;
  if (getSunday(date) < firstWeekSunday) weekNumber = 1;
  return `${year}-${String(weekNumber).padStart(2, '0')}`;
}

export function traerContemplacionesSemanaPorIds(fecha: Date): number[] {
  const year = String(fecha.getUTCFullYear());
  const weekKey = getWeekKey(fecha);
  return (calendarIds[year] && calendarIds[year][weekKey]) ? calendarIds[year][weekKey] : [];
}
