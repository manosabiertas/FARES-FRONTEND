import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';


describe('Semana 18-24 enero 2026: solo deben estar las contemplaciones correctas para el evangelio Juan 1, 29-34', () => {
  it('devuelve solo los títulos correctos para el evangelio del domingo 18-01-2026', () => {
    const fecha = new Date(Date.UTC(2026, 0, 18)); // 18 enero 2026
    const ids = traerContemplacionesSemanaPorIds(fecha);
    const idsCorrectos = [94897, 98210, 90919, 22007];
    // Solo deben estar los ids correctos
    idsCorrectos.forEach(id => {
      expect(ids).toContain(id);
    });
    // No debe haber otros ids
    const otros = ids.filter(id => !idsCorrectos.includes(id));
    expect(otros).toEqual([]);
  });
});
