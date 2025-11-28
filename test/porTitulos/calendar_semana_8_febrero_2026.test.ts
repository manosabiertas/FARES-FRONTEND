import { traerContemplacionesSemana } from "../../lib/calendar_title_based";

describe("Semana del 8 al 14 de febrero de 2026", () => {
  it("devuelve solo las contemplaciones correctas para Mt 5,13-16", () => {
    const semana = traerContemplacionesSemana(new Date("2026-02-08"));
    // Filtrar solo las contemplaciones que tengan la lectura exacta 'Mt 5,13-16'
    const contemplacionesFiltradas = semana.contemplaciones.filter(c => {
      if (Array.isArray(c.lecturas)) {
        return c.lecturas.includes('Mt 5,13-16');
      }
      return c.lecturas === 'Mt 5,13-16';
    });
    // IDs correctos para Mt 5,13-16 en ciclo A
    const idsCorrectos = [21991, 92386, 52197];
    // Solo deben estar estos tres
    expect(contemplacionesFiltradas.map(c => c.id).sort()).toEqual(idsCorrectos.sort());
  });
});
