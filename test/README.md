# Tests para calendar.ts

Este directorio contiene tests para las funciones del calendario litúrgico ubicadas en `lib/calendar.ts`.

## Archivos de Test

### 1. `calendar.test.ts` - Suite de Tests Completa
Contiene tests comprehensivos para todas las funciones del calendario:

- **easterDate()** - Cálculo de la fecha de Pascua
- **addDays() / subDays()** - Utilidades de fechas
- **adventStart()** - Inicio del Adviento
- **ashWednesday()** - Miércoles de Ceniza
- **pentecost()** - Pentecostés
- **liturgicalYearForDate()** - Año litúrgico para una fecha
- **getCicloLiturgico()** - Ciclo litúrgico (A, B, C)
- **getLiturgicalSeason()** - Temporada litúrgica
- **getContemplacionesSemana()** - Contemplaciones semanales

### 2. `calendar.manual-test.js` - Tests Manuales
Guía para ejecutar tests manuales y verificaciones paso a paso.

### 3. `run-tests.js` - Ejecutor de Tests
Script para ejecutar los tests automáticamente.

## Cómo Ejecutar los Tests

### Opción 1: Con TSX (Recomendado)
```bash
# Instalar tsx
npm install -D tsx

# Ejecutar tests
npx tsx test/calendar.test.ts
```

### Opción 2: Con ts-node
```bash
# Instalar ts-node
npm install -D ts-node

# Ejecutar tests  
npx ts-node test/calendar.test.ts
```

### Opción 3: Con el script ejecutor
```bash
node test/run-tests.js
```

### Opción 4: Tests manuales
```bash
node test/calendar.manual-test.js
```

## Casos de Test Cubiertos

### Funciones de Cálculo de Fechas
- ✅ Cálculo correcto de Pascua para años conocidos
- ✅ Manejo de diferentes siglos
- ✅ Validación de que Pascua siempre cae en domingo
- ✅ Aritmética de fechas (suma y resta de días)
- ✅ Manejo de límites de mes y año
- ✅ Inmutabilidad de fechas originales

### Funciones del Año Litúrgico
- ✅ Cálculo del inicio del Adviento
- ✅ Miércoles de Ceniza (46 días antes de Pascua)
- ✅ Pentecostés (49 días después de Pascua)
- ✅ Determinación del año litúrgico
- ✅ Ciclos A, B, C correctos

### Temporadas Litúrgicas
- ✅ Identificación de Adviento
- ✅ Identificación de Navidad
- ✅ Identificación de Cuaresma
- ✅ Identificación de Pascua
- ✅ Identificación del Tiempo Ordinario
- ✅ Transiciones entre temporadas

### Contemplaciones
- ✅ Estructura correcta de retorno
- ✅ Ciclos litúrgicos válidos
- ✅ Temporadas válidas
- ✅ Trabajo con fechas específicas
- ✅ Manejo de casos límite

### Tests de Integración
- ✅ Consistencia entre funciones relacionadas
- ✅ Transiciones del año litúrgico
- ✅ Relaciones correctas entre fechas clave

### Casos Límite
- ✅ Años bisiestos
- ✅ Años muy antiguos y futuros
- ✅ Aritmética de fechas con números grandes
- ✅ Límites de siglos

## Valores Esperados para Verificación

### Fechas de Pascua Conocidas
- 2023: 9 de abril
- 2024: 31 de marzo  
- 2025: 20 de abril
- 2026: 5 de abril

### Ciclos Litúrgicos
- 2023: Ciclo A
- 2024: Ciclo B
- 2025: Ciclo C

### Temporadas por Fecha
- 1 dic 2023: Adviento
- 25 dic 2023: Navidad
- 1 mar 2023: Cuaresma
- 15 abr 2023: Pascua
- 15 jul 2023: Tiempo Ordinario

## Estructura del Test Runner

El archivo `calendar.test.ts` incluye su propio test runner personalizado que no requiere dependencias externas. Proporciona:

- Funciones `describe()` y `test()` similares a Jest
- Función `expect()` con matchers básicos
- Reporte de resultados con contadores de éxitos/fallos
- Manejo de errores y excepciones
- Soporte para tests síncronos y asíncronos

## Agregar Nuevos Tests

Para agregar nuevos tests, sigue este patrón:

```typescript
describe('Nueva Funcionalidad', () => {
  test('should do something specific', () => {
    const result = newFunction(input)
    expect(result).toBe(expected)
  })
  
  test('should handle edge case', () => {
    expect(() => newFunction(invalidInput)).not.toThrow()
  })
})
```

## Troubleshooting

### Error "Cannot find module '../lib/calendar'"
- Asegúrate de que el archivo `lib/calendar.ts` existe
- Verifica que las rutas de importación sean correctas
- Confirma que el proyecto esté compilado si es necesario

### Errores de TypeScript
- Instala las dependencias de desarrollo: `npm install`
- Usa tsx o ts-node para ejecutar TypeScript directamente

### Tests fallan por fechas
- Verifica que estés usando UTC para evitar problemas de zona horaria
- Confirma que los datos de test corresponden a las fechas correctas del calendario litúrgico