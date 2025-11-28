import { traerContemplacionesSemana } from "../lib/calendar_title_based";

const fecha = new Date(Date.UTC(2025, 10, 30)); // 30 de noviembre de 2025
const resultado = traerContemplacionesSemana(fecha);

console.log(`Fecha: ${fecha.toISOString()} (Domingo 30 de noviembre de 2025)`);
resultado.contemplaciones.forEach(c => {
  if (c.lecturas) {
    const lecturas = Array.isArray(c.lecturas) ? c.lecturas.join(", ") : c.lecturas;
    console.log(`- id: ${c.id}, título: ${c.titulo}, lecturas: ${lecturas}`);
  } else {
    console.log(`- id: ${c.id}, título: ${c.titulo}, lecturas: (no especificado)`);
  }
});
