import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 12-25', () => {
  const idsEsperados = [98245, 33270, 49797, 12905];
  const years = [2025];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 11, 25));
      const contemSemana = traerContemplacionesSemana(fecha);
      const idsSemana = contemSemana.contemplaciones.map(c => c.id);
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 12-25 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 12-25 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
