import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 26 de abril al 2 de mayo de 2026', () => {
  const fechas = [26,27,28,29,30].map(dia => new Date(Date.UTC(2026, 3, dia)))
    .concat([1,2].map(dia => new Date(Date.UTC(2026, 4, dia))));
  fechas.forEach((fecha) => {
    it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
      const resultado = traerContemplacionesSemana(fecha);
      expect(Array.isArray(resultado.contemplaciones)).toBe(true);
      expect(resultado.contemplaciones.length).toBeGreaterThan(1);
    });
  });
});
