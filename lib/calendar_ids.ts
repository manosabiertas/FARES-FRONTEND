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
  const year = date.getUTCFullYear();
  const firstSunday = getSunday(new Date(Date.UTC(year, 0, 1)));
  const diff = Math.floor((date.getTime() - firstSunday.getTime()) / (7 * 86400000));
  return `${year}-${String(diff + 1).padStart(2, '0')}`;
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
    for (const date of dates) {
      const weekKey = getWeekKey(getSunday(date));
      if (!calendarIds[year]) calendarIds[year] = {};
      if (!calendarIds[year][weekKey]) calendarIds[year][weekKey] = [];
      const ids = getContemplacionesForDate(date);
      calendarIds[year][weekKey].push(...ids);
    }
    // Remove duplicates per week
    for (const week in calendarIds[year]) {
      calendarIds[year][week] = Array.from(new Set(calendarIds[year][week]));
    }
  }
  return calendarIds;
}

const calendarIds = generateCalendarIds();

export default calendarIds;
