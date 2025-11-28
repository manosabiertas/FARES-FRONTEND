import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 19 al 25 de abril de 2026', () => {
  const fechas = [19,20,21,22,23,24,25].map(dia => new Date(Date.UTC(2026, 3, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
      expect(contemplaciones.length).toBeGreaterThan(1);
    });
  });
});
