// Script para scrapear las lecturas diarias del evangelio para diciembre 2025 desde catholic.org
// Requiere: npm install axios cheerio

import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const BASE_URL = 'https://www.catholic.org/bible/daily_reading/';

function pad(n: number) {
  return n < 10 ? '0' + n : n;
}

async function getGospelForDate(year: number, month: number, day: number) {
  const url = `${BASE_URL}${year}-${pad(month)}-${pad(day)}/`;
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    // Buscar el bloque de Evangelio
    const gospelHeader = $('h3, h4, h5').filter((i, el) => $(el).text().toLowerCase().includes('gospel')).first();
    let gospelText = '';
    if (gospelHeader.length) {
      // El texto suele estar en el siguiente elemento
      gospelText = gospelHeader.nextUntil('h3, h4, h5').text().trim();
    }
    // Extraer cita (ej: Luke 21:20-28)
    const cita = gospelHeader.text().replace(/Gospel,?\s*/i, '').trim();
    return { date: `${year}-${pad(month)}-${pad(day)}`, cita, texto: gospelText };
  } catch (e) {
    return { date: `${year}-${pad(month)}-${pad(day)}`, cita: '', texto: '', error: true };
  }
}

async function main() {
  const year = 2025;
  const month = 12;
  const results = [];
  for (let day = 1; day <= 31; day++) {
    const res = await getGospelForDate(year, month, day);
    console.log(res.date, res.cita);
    results.push(res);
    await new Promise(r => setTimeout(r, 1000)); // Espera 1s entre requests
  }
  fs.writeFileSync('gospels_december_2025.json', JSON.stringify(results, null, 2));
  console.log('Scraping terminado. Resultados en gospels_december_2025.json');
}

main();
