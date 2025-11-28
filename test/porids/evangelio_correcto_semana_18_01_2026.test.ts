
import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 18-01-2026: solo deben estar las correctas para el evangelio Juan 1, 29-34', () => {
  it('devuelve solo los ids correctos para el 18-01-2026', () => {
    const fecha = new Date(Date.UTC(2026, 0, 18)); // 18 enero 2026
    const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
    const idsObtenidos = contemplaciones.map(c => c.id);
    const idsCorrectos = [94897, 98210, 90919, 22007];
    // Solo deben estar los ids correctos
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });
});
