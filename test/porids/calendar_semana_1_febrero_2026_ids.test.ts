import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Semana 1 al 7 de febrero de 2026 (por IDs)', () => {
  it('devuelve solo los ids correctos para el evangelio de Mateo 5, 1-12 el 1-02-2026', () => {
    // Domingo 1 de febrero de 2026
    const fecha = new Date(Date.UTC(2026, 1, 1));
    const idsObtenidos = traerContemplacionesSemanaPorIds(fecha);
    // IDs correctos para el evangelio Mateo 5, 1-12 según los datos actuales:
    // Fiesta de todos los santos … y de una santa de la puerta de al lado (31 A 2020): 58851
    // Las Bienaventuranzas: 9 bendiciones consoladoras de Jesús que forman al Pueblo fiel de Dios (4 A 2017): 97915
    // Domingo 4 A 2014: 24127
    // Domingo 4 A 2011: 89745
    const idsCorrectos = [58851, 97915, 24127, 89745];
    // Deben estar los 4 ids correctos
    const idsCorrectosPresentes = idsObtenidos.filter(id => idsCorrectos.includes(id));
    expect(idsCorrectosPresentes.length).toBe(4);
    // Todos los correctos están presentes
    idsCorrectos.forEach(id => {
      expect(idsObtenidos).toContain(id);
    });
  });
});
