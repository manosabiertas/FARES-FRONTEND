import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 11-9', () => {
  const idsEsperados = [68580];
  const years = [2025];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 10, 9));
      const contemSemana = traerContemplacionesSemanaPorIds(fecha);
      const idsSemana = contemSemana.map(c => c.id);
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 11-9 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 11-9 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
