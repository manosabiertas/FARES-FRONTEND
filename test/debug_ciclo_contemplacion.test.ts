import { traerContemplacionesSemana } from "../lib/calendar_title_based";

// Test para mostrar ciclo, nombre y fecha de cada contemplacion para el caso problemático
const fechas = [
  new Date(Date.UTC(2023, 6, 2)), // Sunday in July (Ordinary Time)
  new Date(Date.UTC(2023, 6, 9)), // Another Sunday in July
  new Date(Date.UTC(2023, 11, 3)), // First Sunday of Advent
];

fechas.forEach(date => {
  const semana = traerContemplacionesSemana(date);
  console.log(`\nFecha de consulta: ${date.toISOString()} (ciclo esperado: ${semana.ciclo})`);
  semana.contemplaciones.forEach(c => {
    console.log(`  - id: ${c.id}, ciclo: ${c.ciclo}, titulo: ${c.titulo}, fecha: ${c.fecha}`);
  });
});
