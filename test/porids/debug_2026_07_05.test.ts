import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

test('Contemplaciones del 2026-07-05', () => {
  const fecha = new Date(Date.UTC(2026, 6, 5));
  const resultado = traerContemplacionesSemana(fecha);
  console.log('Resultado:', resultado.contemplaciones.map(c => c.id));
  expect(Array.isArray(resultado.contemplaciones)).toBe(true);
  expect(resultado.contemplaciones.length).toBeGreaterThan(1);
});
