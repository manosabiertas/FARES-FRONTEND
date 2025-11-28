const ids = require('./ids.json');
function getSunday(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d;
}
function getWeekKey(date) {
  const year = date.getUTCFullYear();
  const firstSunday = getSunday(new Date(Date.UTC(year, 0, 1)));
  const diff = Math.floor((date.getTime() - firstSunday.getTime()) / (7 * 86400000));
  return `${year}-${String(diff + 1).padStart(2, '0')}`;
}
const d = new Date(Date.UTC(2025, 0, 1));
const weekKey = getWeekKey(getSunday(d));
console.log('weekKey for 2025-01-01:', weekKey);
const days = [];
for (let i = 0; i < 7; i++) {
  const day = new Date(Date.UTC(2025, 0, 1));
  day.setUTCDate(day.getUTCDate() - day.getUTCDay() + i);
  const yyyy = String(day.getUTCFullYear());
  const mm = String(day.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(day.getUTCDate()).padStart(2, '0');
  const data = ids[yyyy]?.[mm]?.[dd];
  days.push({ date: `${yyyy}-${mm}-${dd}`, ids: data?.contemplaciones || [] });
}
console.log(days);