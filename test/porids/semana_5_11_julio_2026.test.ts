import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 5 al 11 de julio de 2026', () => {
  const fechas = [5,6,7,8,9,10,11].map(dia => new Date(Date.UTC(2026, 6, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
    });
  });
});
