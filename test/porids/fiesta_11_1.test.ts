import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 11-1', () => {
  const idsEsperados = [58851];
  const years = [2025];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 10, 1));
      const contemSemana = traerContemplacionesSemana(fecha);
      const idsSemana = contemSemana.contemplaciones.map(c => c.id);
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 11-1 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 11-1 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
