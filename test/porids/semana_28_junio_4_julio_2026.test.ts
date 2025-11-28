import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 28 de junio al 4 de julio de 2026', () => {
  const fechas = [28,29,30].map(dia => new Date(Date.UTC(2026, 5, dia)))
    .concat([1,2,3,4].map(dia => new Date(Date.UTC(2026, 6, dia))));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
    });
  });
});
