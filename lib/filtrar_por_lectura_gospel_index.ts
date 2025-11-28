import gospelIndex from "../lib/gospel_index.json";
import contemplacionesData from "../lib/contemplaciones.json";

/**
 * Filtra los ids de contemplaciones que tienen lecturas coincidentes con gospel_index.json
 * @param {number[]} ids - IDs de contemplaciones encontrados
 * @returns {{id: number, titulo: string, lecturas: string[]}[]} contemplaciones filtradas por lectura
 */
export function filtrarPorLecturaEnGospelIndex(ids: number[]) {
  // Normaliza una lectura (quita espacios, mayúsculas, etc)
  const normalizarLectura = (l) => l.replace(/\s+/g, '').replace(/,/g, ',').toUpperCase();

  // Construir un set de ids válidos según gospel_index
  const idsGospel = new Set<number>();
  for (const lectura in gospelIndex) {
    gospelIndex[lectura].forEach(id => idsGospel.add(id));
  }

  // Buscar contemplaciones y filtrar por ids
  return ids
    .map(id => {
      const c = contemplacionesData.find(c => c.id === id);
      if (!c) return null;
      // Normalizar lecturas
      const lecturas = Array.isArray(c.lecturas) ? c.lecturas : [c.lecturas];
      const lecturasNorm = lecturas.filter(Boolean).map(normalizarLectura);
      // Ver si alguna lectura normalizada está en gospel_index
      const coincide = lecturasNorm.some(ln => gospelIndex[ln] && gospelIndex[ln].includes(id));
      if (coincide) {
        return { id: c.id, titulo: c.titulo, lecturas };
      }
      return null;
    })
    .filter(Boolean);
}
