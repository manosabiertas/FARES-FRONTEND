import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';


describe('Contemplaciones correctas por evangelio en días específicos (porIds)', () => {
  it('18-01-2026: solo deben estar los ids correctos para el evangelio Juan 1, 29-34', () => {
    const fecha = new Date(Date.UTC(2026, 0, 18));
    const resultado = traerContemplacionesSemana(fecha);
    const idsObtenidos = resultado.contemplaciones.map(c => c.id);
    const idsCorrectos = [94897, 98210, 90919, 22007];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });

  it('25-01-2026: solo deben estar los ids correctos para el evangelio Mateo 4, 12-23', () => {
    const fecha = new Date(Date.UTC(2026, 0, 25));
    const resultado = traerContemplacionesSemana(fecha);
    const idsObtenidos = resultado.contemplaciones.map(c => c.id);
    const idsCorrectos = [55225, 71889, 40127, 49415];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });

  it('01-02-2026: solo deben estar los ids correctos para el evangelio Mateo 5, 1-12', () => {
    const fecha = new Date(Date.UTC(2026, 1, 1));
    const resultado = traerContemplacionesSemana(fecha);
    const idsObtenidos = resultado.contemplaciones.map(c => c.id);
    const idsCorrectos = [58851, 97915, 24127, 89745];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });

  it('08-02-2026: solo deben estar los ids correctos para el evangelio Mateo 5, 13-16', () => {
    const fecha = new Date(Date.UTC(2026, 1, 8));
    const resultado = traerContemplacionesSemana(fecha);
    const idsObtenidos = resultado.contemplaciones.map(c => c.id);
    const idsCorrectos = [21991, 92386, 52197];
    expect(idsObtenidos.sort((a, b) => a - b)).toEqual(idsCorrectos.sort((a, b) => a - b));
  });
});
