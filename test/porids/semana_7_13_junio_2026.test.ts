import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 7 al 13 de junio de 2026', () => {
  const fechas = [7,8,9,10,11,12,13].map(dia => new Date(Date.UTC(2026, 5, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
      expect(contemplaciones.length).toBeGreaterThan(1);
    });
  });
});
