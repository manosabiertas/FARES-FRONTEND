
const ids = require('./ids.json');

function getWeekDates(year) {
  // Semana 1: desde el 1 de enero hasta el sábado siguiente
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(jan1);
    d.setUTCDate(jan1.getUTCDate() + i);
    if (d.getUTCFullYear() !== year && d.getUTCMonth() !== 0) break;
    weekDates.push(d);
  }
  return weekDates;
}

const year = 2025;
const weekDates = getWeekDates(year);
console.log('Fechas de la semana 1:', weekDates.map(d => d.toISOString().slice(0,10)));
const allIds = [];
for (const d of weekDates) {
  const yyyy = String(d.getUTCFullYear());
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  const data = ids[yyyy]?.[mm]?.[dd];
  if (data && Array.isArray(data.contemplaciones)) {
    allIds.push(...data.contemplaciones);
    console.log(`${yyyy}-${mm}-${dd}:`, data.contemplaciones);
  } else {
    console.log(`${yyyy}-${mm}-${dd}: []`);
  }
}
console.log('Todos los ids en la semana 1:', Array.from(new Set(allIds)));
