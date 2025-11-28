import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Contemplaciones correctas por evangelio en semanas específicas (porIds)', () => {
  it('Semana de 2026-01-18: solo deben estar los ids correctos para el evangelio Juan 1, 29-34', () => {
    const fecha = new Date(Date.UTC(2026, 0, 18));
    const idsCorrectos = [94897, 98210, 90919, 22007];
    const ids = traerContemplacionesSemanaPorIds(fecha);
    idsCorrectos.forEach(id => {
      expect(ids).toContain(id);
    });
    // No debe haber otros ids de ese evangelio
    const otros = ids.filter(id => !idsCorrectos.includes(id));
    expect(otros.length).toBe(ids.length - idsCorrectos.length);
  });

  it('Semana de 2026-01-25: solo deben estar los ids correctos para el evangelio Mateo 4, 12-23', () => {
    const fecha = new Date(Date.UTC(2026, 0, 25));
    const idsCorrectos = [55225, 71889, 40127, 49415];
    const ids = traerContemplacionesSemanaPorIds(fecha);
    idsCorrectos.forEach(id => {
      expect(ids).toContain(id);
    });
    const otros = ids.filter(id => !idsCorrectos.includes(id));
    expect(otros.length).toBe(ids.length - idsCorrectos.length);
  });

  it('Semana de 2026-02-01: solo deben estar los ids correctos para el evangelio Mateo 5, 1-12', () => {
    const fecha = new Date(Date.UTC(2026, 1, 1));
    const idsCorrectos = [58851, 97915, 24127, 89745];
    const ids = traerContemplacionesSemanaPorIds(fecha);
    idsCorrectos.forEach(id => {
      expect(ids).toContain(id);
    });
    const otros = ids.filter(id => !idsCorrectos.includes(id));
    expect(otros.length).toBe(ids.length - idsCorrectos.length);
  });

  it('Semana de 2026-02-08: solo deben estar los ids correctos para el evangelio Mateo 5, 13-16', () => {
    const fecha = new Date(Date.UTC(2026, 1, 8));
    const idsCorrectos = [21991, 92386, 52197];
    const ids = traerContemplacionesSemanaPorIds(fecha);
    idsCorrectos.forEach(id => {
      expect(ids).toContain(id);
    });
    const otros = ids.filter(id => !idsCorrectos.includes(id));
    expect(otros.length).toBe(ids.length - idsCorrectos.length);
  });
});
