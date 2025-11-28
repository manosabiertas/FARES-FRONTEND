import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 12 al 18 de abril de 2026', () => {
  const fechas = [12,13,14,15,16,17,18].map(dia => new Date(Date.UTC(2026, 3, dia)));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
      expect(Array.isArray(contemplaciones)).toBe(true);
      expect(contemplaciones.length).toBeGreaterThan(1);
    });
  });
});
