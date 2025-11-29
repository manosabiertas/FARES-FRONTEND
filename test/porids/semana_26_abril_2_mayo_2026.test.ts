import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 26 de abril de 2026', () => {
  const fecha = new Date(Date.UTC(2026, 3, 26));
  it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
    const resultado = traerContemplacionesSemana(fecha);
    expect(Array.isArray(resultado.contemplaciones)).toBe(true);
    expect(resultado.contemplaciones.length).toBeGreaterThan(0);
  });
});
