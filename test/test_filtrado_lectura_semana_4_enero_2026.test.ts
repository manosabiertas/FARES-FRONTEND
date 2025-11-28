import { traerContemplacionesSemana } from "../lib/calendar_title_based";

// Semana del 4 al 10 de enero de 2026 (domingo a sábado)
for (let i = 0; i < 7; i++) {
  const fecha = new Date(Date.UTC(2026, 0, 4 + i));
  const resultado = traerContemplacionesSemana(fecha);
  console.log(`\nFecha: ${fecha.toISOString()} (${fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })})`);
  console.log("Paso 1: idsSemana:", resultado.contemplaciones.map(c => c.id));
  console.log("Paso 2: contemplaciones:", resultado.contemplaciones.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })));
  console.log("Paso 3: contemplaciones filtradas por gospel_index:", resultado.contemplacionesFiltradasPorLectura);
}
