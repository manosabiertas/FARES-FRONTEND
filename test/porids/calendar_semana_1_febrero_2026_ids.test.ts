import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';


describe('Contemplaciones del 01-02-2026: solo deben estar los ids correctos para el evangelio Mateo 5, 1-12', () => {
  it('devuelve solo los ids correctos para el 01-02-2026', () => {
    const fecha = new Date(Date.UTC(2026, 1, 1));
    const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
    const idsObtenidos = contemplaciones.map(c => c.id);
    const idsCorrectos = [58851, 97915, 24127, 89745];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });
});
