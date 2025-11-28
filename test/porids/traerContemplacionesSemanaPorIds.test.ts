import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';
import calendarIds from '../../lib/calendar_ids';

describe('traerContemplacionesSemanaPorIds', () => {
  it('devuelve los mismos ids que calendar_ids para una semana', () => {
    const fecha = new Date(Date.UTC(2025, 10, 23)); // 23 Nov 2025 (Cristo Rey C)
    const year = '2025';
    const d = new Date(Date.UTC(2025, 10, 23));
    d.setUTCDate(d.getUTCDate() - d.getUTCDay());
    const firstSunday = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    firstSunday.setUTCDate(firstSunday.getUTCDate() - firstSunday.getUTCDay());
    const diff = Math.floor((d.getTime() - firstSunday.getTime()) / (7 * 86400000));
    const weekKey = `${year}-${String(diff + 1).padStart(2, '0')}`;
    const expected = calendarIds[year][weekKey];
    const result = traerContemplacionesSemanaPorIds(fecha);
    expect(result).toEqual(expected);
  });

  it('devuelve un array vacío para una semana sin contemplaciones', () => {
    const fecha = new Date(Date.UTC(2025, 1, 15)); // 15 Feb 2025 (semana sin ids)
    const result = traerContemplacionesSemanaPorIds(fecha);
    expect(result).toEqual([]);
  });
});
