import { traerContemplacionesSemana } from '../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 7 de junio de 2026', () => {
  const fecha = new Date(Date.UTC(2026, 5, 7));
  it(`devuelve las contemplaciones del día ${fecha.toISOString().slice(0,10)}`, () => {
    const resultado = traerContemplacionesSemana(fecha);
    expect(Array.isArray(resultado.contemplaciones)).toBe(true);
    expect(resultado.contemplaciones.length).toBeGreaterThan(0);
  });
});
