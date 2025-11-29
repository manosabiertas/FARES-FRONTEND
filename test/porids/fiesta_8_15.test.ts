import { traerContemplacionesSemana } from '../../lib/traerContemplacionesSemanaPorIds';

describe('Fiesta fija 8-15', () => {
  const idsEsperados = [59118];
  const years = [2025, 2026];
  for (const year of years) {
    describe(`Año ${year}`, () => {
      const fecha = new Date(Date.UTC(year, 7, 15));
      const contemSemana = traerContemplacionesSemana(fecha);
      const idsSemana = Array.isArray(contemSemana.contemplaciones) ? contemSemana.contemplaciones.map(c => c.id) : [];
      for (const id of idsEsperados) {
        it(`El id ${id} está presente en la fecha de la fiesta fija 8-15 (${year})`, () => {
          if (!idsSemana.includes(id)) {
            console.warn(`Para la fiesta 8-15 (${year}), los ids presentes en la fecha son:`, idsSemana);
          }
          expect(idsSemana).toContain(id);
        });
      }
    });
  }
});
