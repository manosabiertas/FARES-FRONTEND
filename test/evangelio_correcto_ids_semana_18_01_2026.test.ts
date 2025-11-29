
import { traerContemplacionesSemana } from '../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones del 18-01-2026: solo deben estar los ids correctos para el evangelio Juan 1, 29-34', () => {
  it('devuelve solo los ids correctos para el 18-01-2026', () => {
    const fecha = new Date(Date.UTC(2026, 0, 18));
    const resultado = traerContemplacionesSemana(fecha);
    const idsObtenidos = resultado.contemplaciones.map(c => c.id);
    const idsCorrectos = [94897, 98210, 90919, 22007];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });
});
