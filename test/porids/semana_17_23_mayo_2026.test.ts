import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 17 al 23 de mayo de 2026', () => {
  const fechas = [17,18,19,20,21,22,23].map(dia => new Date(Date.UTC(2026, 4, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
      expect(contemplaciones.length).toBeGreaterThan(1);
    });
  });
});
