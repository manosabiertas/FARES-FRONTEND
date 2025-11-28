import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';
import idsData from '../../lib/ids.json';

describe('traerContemplacionesSemanaPorIds - semana completa', () => {
  it('devuelve las contemplaciones de todos los días de la semana del 28-11-2025', () => {
    // 28-11-2025 es viernes, buscamos el domingo de esa semana
    const fecha = new Date(Date.UTC(2025, 10, 28));
    const d = new Date(Date.UTC(2025, 10, 28));
    d.setUTCDate(d.getUTCDate() - d.getUTCDay()); // domingo
    const dias = [];
    for (let i = 0; i < 7; i++) {
      const actual = new Date(d);
      actual.setUTCDate(d.getUTCDate() + i);
      const yyyy = String(actual.getUTCFullYear());
      const mm = String(actual.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(actual.getUTCDate()).padStart(2, '0');
      const ids = idsData[yyyy]?.[mm]?.[dd]?.contemplaciones || [];
      dias.push(...ids);
    }
    // El resultado esperado es la unión de todos los ids de contemplaciones de la semana (sin duplicados)
    const expected = Array.from(new Set(dias));
    const result = traerContemplacionesSemanaPorIds(fecha);
    expect(result.sort((a, b) => a - b)).toEqual(expected.sort((a, b) => a - b));
  });
});
