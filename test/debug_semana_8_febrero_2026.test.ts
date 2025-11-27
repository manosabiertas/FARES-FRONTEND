import { traerContemplacionesSemana } from "../lib/calendar_title_based";

it("debug: muestra todos los ids de la semana del 8 al 14 de febrero de 2026", () => {
  const semana = traerContemplacionesSemana(new Date("2026-02-08"));
  // Mostrar todos los ids y títulos para depuración
  console.log(semana.contemplaciones.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })));
});
