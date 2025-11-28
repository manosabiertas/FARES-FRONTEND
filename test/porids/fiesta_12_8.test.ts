import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 12-8', () => {
  const idsEsperados = [66726, 17615];
  const years = [2025];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 11, 8));
      const contemSemana = traerContemplacionesSemanaPorIds(fecha);
      const idsSemana = contemSemana.map(c => c.id);
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 12-8 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 12-8 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
