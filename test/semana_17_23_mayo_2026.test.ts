import { traerContemplacionesSemana } from '../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 17 de mayo de 2026', () => {
  const fecha = new Date(Date.UTC(2026, 4, 17));
  it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
    const resultado = traerContemplacionesSemana(fecha);
    expect(Array.isArray(resultado.contemplaciones)).toBe(true);
    expect(resultado.contemplaciones.length).toBeGreaterThan(0);
  });
});
