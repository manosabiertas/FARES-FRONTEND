const fs = require('fs');
const path = require('path');
const idsPath = path.join(__dirname, 'ids.json');
const ids = require(idsPath);

function pad(n) { return String(n).padStart(2, '0'); }

function ensureEmptyContemplaciones(year) {
  if (!ids[year]) ids[year] = {};
  if (!ids[year]['12']) ids[year]['12'] = {};
  if (!ids[year]['01']) ids[year]['01'] = {};
  // 29-12 to 31-12
  for (let d = 29; d <= 31; d++) {
    const dd = pad(d);
    if (!ids[year]['12'][dd]) ids[year]['12'][dd] = { contemplaciones: [] };
    else if (!('contemplaciones' in ids[year]['12'][dd])) ids[year]['12'][dd].contemplaciones = [];
  }
  // 01-01 to 04-01
  for (let d = 1; d <= 4; d++) {
    const dd = pad(d);
    if (!ids[year]['01'][dd]) ids[year]['01'][dd] = { contemplaciones: [] };
    else if (!('contemplaciones' in ids[year]['01'][dd])) ids[year]['01'][dd].contemplaciones = [];
  }
}

// Asegura para todos los años presentes en ids.json
for (const year of Object.keys(ids)) {
  ensureEmptyContemplaciones(year);
}

fs.writeFileSync(idsPath, JSON.stringify(ids, null, 2));
console.log('Días 29-12 a 04-01 asegurados con contemplaciones vacías para todos los años.');
