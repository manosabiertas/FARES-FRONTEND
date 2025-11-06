/**
 * Test para analizar por qué faltan contemplaciones del 12 enero al 15 febrero 2025
 * Estas son 5 semanas consecutivas sin contemplaciones según el reporte del usuario
 */

import { getContemplacionesSemana } from '../lib/calendar.js';
import fs from 'fs';

// Cargar contemplaciones del JSON
const contemplaciones = JSON.parse(fs.readFileSync('./lib/contemplaciones.json', 'utf8'));

console.log('=== ANÁLISIS DE CONTEMPLACIONES FALTANTES ===');
console.log('Período: 12 enero - 15 febrero 2025');
console.log('');

// Generar fechas del período problemático
const fechasProblematicas = [];
const fechaInicio = new Date('2025-01-12');
const fechaFin = new Date('2025-02-15');

for (let fecha = new Date(fechaInicio); fecha <= fechaFin; fecha.setDate(fecha.getDate() + 7)) {
  fechasProblematicas.push(new Date(fecha));
}

console.log('=== 1. REVISIÓN SEMANAL ===');
fechasProblematicas.forEach((fecha, index) => {
  const resultado = getContemplacionesSemana(fecha);
  const fechaStr = fecha.toISOString().split('T')[0];
  
  console.log(`Semana ${index + 1}: ${fechaStr}`);
  console.log(`  Temporada: ${resultado.temporada}`);
  console.log(`  Ciclo: ${resultado.ciclo}`);
  console.log(`  Contemplaciones encontradas: ${resultado.contemplaciones.length}`);
  
  if (resultado.contemplaciones.length > 0) {
    resultado.contemplaciones.forEach(c => {
      console.log(`    → ID: ${c.id} - ${c.titulo}`);
    });
  } else {
    console.log(`    → ❌ NO HAY CONTEMPLACIONES`);
  }
  console.log('');
});

console.log('=== 2. ANÁLISIS DEL JSON ===');

// Analizar qué contemplaciones están disponibles para cada temporada en este período
console.log('2.1. Contemplaciones de Navidad ciclo A:');
const navidad = contemplaciones.filter(c => 
  c.tiempo_liturgico === 'Navidad' && 
  c.ciclo === 'A' && 
  c.dominical === true
);
console.log(`Total: ${navidad.length} contemplaciones dominicales`);
navidad.forEach(c => {
  console.log(`  ID: ${c.id} - Fecha: ${c.fecha || 'sin fecha'} - ${c.titulo}`);
});

console.log('\n2.2. Contemplaciones de Tiempo Ordinario ciclo A:');
const tiempoOrdinario = contemplaciones.filter(c => 
  c.tiempo_liturgico === 'Tiempo Ordinario' && 
  c.ciclo === 'A' && 
  c.dominical === true
);
console.log(`Total: ${tiempoOrdinario.length} contemplaciones dominicales`);
// Mostrar solo las primeras 10 para no saturar
tiempoOrdinario.slice(0, 10).forEach(c => {
  console.log(`  ID: ${c.id} - Fecha: ${c.fecha || 'sin fecha'} - ${c.titulo}`);
});
if (tiempoOrdinario.length > 10) {
  console.log(`  ... y ${tiempoOrdinario.length - 10} más`);
}

console.log('\n=== 3. DIAGNÓSTICO DE CADA FECHA ===');

// Análisis detallado de cada fecha problemática
fechasProblematicas.forEach((fecha, index) => {
  const fechaStr = fecha.toISOString().split('T')[0];
  console.log(`\n--- Semana ${index + 1}: ${fechaStr} ---`);
  
  // Simular lo que hace la función internamente
  const resultado = getContemplacionesSemana(fecha);
  
  console.log(`Temporada detectada: ${resultado.temporada}`);
  console.log(`Ciclo detectado: ${resultado.ciclo}`);
  
  // Mapeo de temporadas
  const temporadaEspanol = {
    'Christmas': 'Navidad',
    'Ordinary Time': 'Tiempo Ordinario',
    'Advent': 'Adviento',
    'Lent': 'Cuaresma',
    'Easter': 'Pascua',
    'Triduum': 'Triduo'
  }[resultado.temporada];
  
  console.log(`Temporada en español: ${temporadaEspanol}`);
  
  // Buscar contemplaciones disponibles para esta temporada y ciclo
  const disponibles = contemplaciones.filter(c => 
    c.tiempo_liturgico === temporadaEspanol && 
    c.ciclo === resultado.ciclo && 
    c.dominical === true
  );
  
  console.log(`Contemplaciones disponibles en JSON: ${disponibles.length}`);
  
  if (disponibles.length === 0) {
    console.log(`❌ PROBLEMA: No hay contemplaciones de "${temporadaEspanol}" ciclo "${resultado.ciclo}" con dominical=true en el JSON`);
  } else {
    console.log(`✅ Hay ${disponibles.length} contemplaciones disponibles en el JSON`);
    
    // Si hay disponibles pero no se encontraron, revisar la lógica de búsqueda
    if (resultado.contemplaciones.length === 0) {
      console.log(`❌ PROBLEMA: Hay contemplaciones disponibles pero la función no las encuentra`);
      console.log(`Primeras 3 contemplaciones disponibles:`);
      disponibles.slice(0, 3).forEach(c => {
        console.log(`  - ID: ${c.id}, Fecha: ${c.fecha || 'sin fecha'}, Título: ${c.titulo.substring(0, 50)}...`);
      });
    }
  }
});

console.log('\n=== 4. RESUMEN Y RECOMENDACIONES ===');
const semanasProblematicas = fechasProblematicas.filter(fecha => {
  const resultado = getContemplacionesSemana(fecha);
  return resultado.contemplaciones.length === 0;
});

console.log(`Semanas sin contemplaciones: ${semanasProblematicas.length} de ${fechasProblematicas.length}`);

if (semanasProblematicas.length > 0) {
  console.log('\nSemanas problemáticas:');
  semanasProblematicas.forEach(fecha => {
    const fechaStr = fecha.toISOString().split('T')[0];
    const resultado = getContemplacionesSemana(fecha);
    console.log(`  ${fechaStr}: ${resultado.temporada} ciclo ${resultado.ciclo}`);
  });
  
  console.log('\nPosibles causas:');
  console.log('1. Faltan contemplaciones en el JSON para esas temporadas/ciclos');
  console.log('2. La lógica de búsqueda tiene un bug');
  console.log('3. El mapeo de temporadas no coincide');
  console.log('4. Los filtros son demasiado restrictivos');
}