
import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('traerContemplacionesSemanaPorIds - día exacto', () => {
  it('devuelve las contemplaciones solo del día 28-11-2025', () => {
    const fecha = new Date(Date.UTC(2025, 10, 28));
    const contemplaciones = traerContemplacionesSemanaPorIds(fecha);
    const idsObtenidos = contemplaciones.map(c => c.id);
    // IDs esperados para ese día según ids.json
    const idsCorrectos = [];
    expect(idsObtenidos).toEqual(idsCorrectos);
  });
});
