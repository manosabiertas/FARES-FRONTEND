import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 5 de julio de 2026', () => {
  const fecha = new Date(Date.UTC(2026, 6, 5));
  it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
    const resultado = traerContemplacionesSemana(fecha);
    expect(Array.isArray(resultado.contemplaciones)).toBe(true);
    expect(resultado.contemplaciones.length).toBeGreaterThan(1);
  });
});
