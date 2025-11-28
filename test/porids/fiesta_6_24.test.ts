import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 6-24', () => {
  const idsEsperados = [11221];
  const years = [2025];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 5, 24));
      const contemSemana = traerContemplacionesSemanaPorIds(fecha);
      const idsSemana = contemSemana.map(c => c.id);
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 6-24 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 6-24 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
