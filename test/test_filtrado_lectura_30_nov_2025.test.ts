import { traerContemplacionesSemana } from "../lib/calendar_title_based";

const fecha = new Date(Date.UTC(2025, 10, 30)); // 30 de noviembre de 2025
const resultado = traerContemplacionesSemana(fecha);

console.log("Paso 1: idsSemana:", resultado.contemplaciones.map(c => c.id));
console.log("Paso 2: contemplaciones:", resultado.contemplaciones.map(c => ({ id: c.id, titulo: c.titulo, lecturas: c.lecturas })));
console.log("Paso 3: contemplaciones filtradas por gospel_index:", resultado.contemplacionesFiltradasPorLectura);
