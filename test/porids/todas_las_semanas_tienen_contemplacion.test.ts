import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Todas las semanas entre 2025-01-01 y 2026-10-01 tienen al menos una contemplación', () => {
  // Buscar el primer domingo igual o posterior a 2025-01-01
  let fecha = new Date(Date.UTC(2025, 0, 1));
  while (fecha.getUTCDay() !== 0) {
    fecha = new Date(Date.UTC(fecha.getUTCFullYear(), fecha.getUTCMonth(), fecha.getUTCDate() + 1));
  }
  const fin = new Date(Date.UTC(2026, 9, 1)); // 2026-10-01
  while (fecha <= fin) {
    const fechaStr = fecha.toISOString().slice(0, 10);
    it(`Semana del domingo ${fechaStr}`, () => {
      const resultado = traerContemplacionesSemana(fecha);
      expect(Array.isArray(resultado.contemplaciones)).toBe(true);
      expect(resultado.contemplaciones.length).toBeGreaterThan(0);
    });
    // Avanzar 7 días
    fecha = new Date(Date.UTC(fecha.getUTCFullYear(), fecha.getUTCMonth(), fecha.getUTCDate() + 7));
  }
});
