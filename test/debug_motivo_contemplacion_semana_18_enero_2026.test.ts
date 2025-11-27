import { traerContemplacionesSemana } from "../lib/calendar_title_based";

const fecha = new Date(Date.UTC(2026, 0, 18));
const resultado = traerContemplacionesSemana(fecha);

console.log(`Fecha consultada: ${fecha.toISOString()} (Semana del 18 al 24 de enero de 2026)`);
resultado.contemplaciones.forEach(c => {
  // Motivo heurístico: por ciclo (domingo), por ciclo (otro día), por fecha exacta (fija)
  let motivo = "";
  if (c.fecha === resultado.fechaDomingo) {
    motivo = "Por ciclo del domingo (clave principal)";
  } else if (c.fecha && c.fecha !== resultado.fechaDomingo) {
    motivo = "Por ciclo de otro día de la semana";
  } else {
    motivo = "Por fecha exacta (fiesta fija)";
  }
  console.log(`- id: ${c.id}, ciclo: ${c.ciclo}, titulo: ${c.titulo}, fecha: ${c.fecha}, motivo: ${motivo}`);
});
