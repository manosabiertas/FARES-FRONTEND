/**
 * calendar_ids.json generator
 * Agrupa los ids de contemplaciones por semana (domingo a sábado) para cada año, mes y semana,
 * usando solo ids.json y contemplaciones.json.
 * El resultado es un objeto: { [year]: { [weekNumber]: number[] } }
 */
import idsDataRaw from './ids.json';
import contemplacionesDataRaw from './contemplaciones.json';

// Type for ids.json structure
const idsData = idsDataRaw as any;
const contemplacionesData = contemplacionesDataRaw as any[];

function getSunday(date: Date): Date {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d;
}

function getAllDatesInYear(year: number): Date[] {
  const dates: Date[] = [];
  let d = new Date(Date.UTC(year, 0, 1));
  while (d.getUTCFullYear() === year) {
    dates.push(new Date(d));
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return dates;
}

function getWeekKey(date: Date): string {
  // YYYY-WW (ISO week, but Sunday as first day)
  // Ajuste: la primera semana completa de enero siempre es 'YYYY-01', aunque el domingo caiga en diciembre
  const year = date.getUTCFullYear();
  // Buscar el primer domingo que pertenezca a la semana que contiene el 1 de enero
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const firstWeekSunday = getSunday(jan1);
  let weekNumber = Math.floor((getSunday(date).getTime() - firstWeekSunday.getTime()) / (7 * 86400000)) + 1;
  // Si la semana empieza en diciembre, pero contiene el 1 de enero, sigue siendo la semana 1
  if (getSunday(date) < firstWeekSunday) weekNumber = 1;
  return `${year}-${String(weekNumber).padStart(2, '0')}`;
}

function getContemplacionesForDate(d: Date): number[] {
  const yyyy = String(d.getUTCFullYear());
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const diaData = idsData[yyyy]?.[mm]?.[dd];
  if (diaData && Array.isArray(diaData.contemplaciones)) {
    return diaData.contemplaciones;
  }
  return [];
}

function generateCalendarIds() {
  const calendarIds: Record<string, Record<string, number[]>> = {};
  for (const year of Object.keys(idsData)) {
    const yearNum = parseInt(year, 10);
    const dates = getAllDatesInYear(yearNum);
    if (!calendarIds[year]) calendarIds[year] = {};
    // Agrupar semanas de domingo a sábado
    let weekIdx = 1;
    let weekKey = `${year}-${String(weekIdx).padStart(2, '0')}`;
    let weekDays = [];
    for (const date of dates) {
      if (date.getUTCDay() === 0 && weekDays.length > 0) {
        // Nuevo domingo: guardar la semana anterior
        calendarIds[year][weekKey] = weekDays;
        weekIdx++;
        weekKey = `${year}-${String(weekIdx).padStart(2, '0')}`;
        weekDays = [];
      }
      weekDays.push(...getContemplacionesForDate(date));
    }
    // Guardar la última semana del año
    if (weekDays.length > 0) {
      calendarIds[year][weekKey] = weekDays;
    }
    // Eliminar duplicados por semana
    for (const week in calendarIds[year]) {
      calendarIds[year][week] = Array.from(new Set(calendarIds[year][week]));
    }
  }
  return calendarIds;
}

const calendarIds = generateCalendarIds();

export default calendarIds;
