import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 14 al 20 de junio de 2026', () => {
  const fechas = [14,15,16,17,18,19,20].map(dia => new Date(Date.UTC(2026, 5, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
    });
  });
});
