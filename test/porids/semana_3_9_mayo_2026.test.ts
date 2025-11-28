import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 3 al 9 de mayo de 2026', () => {
  const fechas = [3,4,5,6,7,8,9].map(dia => new Date(Date.UTC(2026, 4, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
    });
  });
});
