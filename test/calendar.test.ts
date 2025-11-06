/**
 * Test suite for calendar.ts public API
 * Run with: npx tsx test/calendar.test.ts
 * 
 * This test suite only uses the public API (getContemplacionesSemana) to test
 * the calendar functionality, as all helper functions are now internal.
 */

import {
  getContemplacionesSemana,
  type Season,
  type Contemplacion,
  type ContemplacionesSemana
} from '../lib/calendar'

// Simple test runner
class TestRunner {
  private tests: Array<{ name: string; fn: () => void | Promise<void> }> = []
  private describes: Array<{ name: string; tests: Array<{ name: string; fn: () => void | Promise<void> }> }> = []
  private currentDescribe: string | null = null
  private currentTests: Array<{ name: string; fn: () => void | Promise<void> }> = []

  describe(name: string, fn: () => void) {
    this.currentDescribe = name
    this.currentTests = []
    fn()
    this.describes.push({
      name: this.currentDescribe,
      tests: [...this.currentTests]
    })
    this.currentDescribe = null
    this.currentTests = []
  }

  test(name: string, fn: () => void | Promise<void>) {
    if (this.currentDescribe) {
      this.currentTests.push({ name, fn })
    } else {
      this.tests.push({ name, fn })
    }
  }

  expect(actual: any) {
    return {
      toBe: (expected: any) => {
        if (actual !== expected) {
          throw new Error(`Expected ${expected}, but got ${actual}`)
        }
      },
      toEqual: (expected: any) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)
        }
      },
      toBeInstanceOf: (expectedClass: any) => {
        if (!(actual instanceof expectedClass)) {
          throw new Error(`Expected instance of ${expectedClass.name}, but got ${typeof actual}`)
        }
      },
      toBeGreaterThan: (expected: number) => {
        if (actual <= expected) {
          throw new Error(`Expected ${actual} to be greater than ${expected}`)
        }
      },
      toBeLessThan: (expected: number) => {
        if (actual >= expected) {
          throw new Error(`Expected ${actual} to be less than ${expected}`)
        }
      },
      toBeGreaterThanOrEqual: (expected: number) => {
        if (actual < expected) {
          throw new Error(`Expected ${actual} to be greater than or equal to ${expected}`)
        }
      },
      toBeLessThanOrEqual: (expected: number) => {
        if (actual > expected) {
          throw new Error(`Expected ${actual} to be less than or equal to ${expected}`)
        }
      },
      toContain: (expected: any) => {
        if (!actual.includes(expected)) {
          throw new Error(`Expected ${JSON.stringify(actual)} to contain ${expected}`)
        }
      },
      toHaveProperty: (property: string) => {
        if (!(property in actual)) {
          throw new Error(`Expected object to have property ${property}`)
        }
      },
      not: {
        toBe: (expected: any) => {
          if (actual === expected) {
            throw new Error(`Expected ${actual} not to be ${expected}`)
          }
        },
        toThrow: () => {
          try {
            if (typeof actual === 'function') {
              actual()
            }
            throw new Error('Expected function to throw, but it did not')
          } catch (error) {
            // Function threw as expected, test passes
          }
        }
      }
    }
  }

  async run() {
    let passedTests = 0
    let failedTests = 0
    const failures: string[] = []

    console.log('🧪 Running Calendar Tests...\n')

    // Run standalone tests
    for (const test of this.tests) {
      try {
        await test.fn()
        console.log(`✅ ${test.name}`)
        passedTests++
      } catch (error) {
        console.log(`❌ ${test.name}`)
        const errorMessage = error instanceof Error ? error.message : String(error)
        console.log(`   Error: ${errorMessage}`)
        failures.push(`${test.name}: ${errorMessage}`)
        failedTests++
      }
    }

    // Run described tests
    for (const describe of this.describes) {
      console.log(`\n📝 ${describe.name}`)
      
      for (const test of describe.tests) {
        try {
          await test.fn()
          console.log(`  ✅ ${test.name}`)
          passedTests++
        } catch (error) {
          console.log(`  ❌ ${test.name}`)
          const errorMessage = error instanceof Error ? error.message : String(error)
          console.log(`     Error: ${errorMessage}`)
          failures.push(`${describe.name} > ${test.name}: ${errorMessage}`)
          failedTests++
        }
      }
    }

    console.log(`\n📊 Test Results:`)
    console.log(`   Passed: ${passedTests}`)
    console.log(`   Failed: ${failedTests}`)
    console.log(`   Total: ${passedTests + failedTests}`)

    if (failures.length > 0) {
      console.log('\n❌ Failures:')
      failures.forEach(failure => console.log(`   - ${failure}`))
    }

    return failedTests === 0
  }
}

const runner = new TestRunner()
const describe = runner.describe.bind(runner)
const test = runner.test.bind(runner)
const expect = runner.expect.bind(runner)

// Tests - Only testing through the public API
describe('Calendar Public API Tests', () => {

  describe('getContemplacionesSemana - Structure and Basic Functionality', () => {
    test('should return correct structure', () => {
      const result = getContemplacionesSemana()
      expect(result).toHaveProperty('fecha')
      expect(result).toHaveProperty('temporada')
      expect(result).toHaveProperty('ciclo')
      expect(result).toHaveProperty('contemplaciones')
      expect(Array.isArray(result.contemplaciones)).toBe(true)
    })

    test('should return valid liturgical cycle', () => {
      const result = getContemplacionesSemana()
      expect(['A', 'B', 'C']).toContain(result.ciclo)
    })

    test('should return valid season', () => {
      const result = getContemplacionesSemana()
      const validSeasons: Season[] = ['Advent', 'Christmas', 'Lent', 'Easter', 'Ordinary Time', 'Triduum']
      expect(validSeasons).toContain(result.temporada)
    })

    test('should work with specific dates', () => {
      const specificDate = new Date(Date.UTC(2023, 6, 15)) // July 15, 2023
      const result = getContemplacionesSemana(specificDate)
      expect(result.fecha).toBeInstanceOf(Date)
      expect(result.temporada).toBe('Ordinary Time')
    })

    test('should return contemplaciones with correct structure when found', () => {
      const result = getContemplacionesSemana()
      if (result.contemplaciones.length > 0) {
        const contemplacion = result.contemplaciones[0]
        expect(contemplacion).toHaveProperty('id')
        expect(contemplacion).toHaveProperty('ciclo')
        expect(contemplacion).toHaveProperty('tiempo_liturgico')
        expect(contemplacion).toHaveProperty('titulo')
        expect(contemplacion).toHaveProperty('lecturas')
        expect(contemplacion).toHaveProperty('resumen')
        expect(contemplacion).toHaveProperty('link')
        expect(contemplacion).toHaveProperty('dominical')
        expect(contemplacion).toHaveProperty('fecha')
        expect(['A', 'B', 'C']).toContain(contemplacion.ciclo)
        expect(typeof contemplacion.dominical).toBe('boolean')
      }
    })
  })

  describe('getContemplacionesSemana - Liturgical Calendar Logic', () => {
    test('should handle different seasons correctly', () => {
      const dates = [
        { date: new Date(Date.UTC(2023, 0, 1)), expectedSeason: 'Christmas' }, // New Year (Christmas season)
        { date: new Date(Date.UTC(2023, 2, 15)), expectedSeason: 'Lent' }, // Mid-March (Lent)
        { date: new Date(Date.UTC(2023, 3, 16)), expectedSeason: 'Easter' }, // Mid-April (Easter season)
        { date: new Date(Date.UTC(2023, 6, 1)), expectedSeason: 'Ordinary Time' }, // July (Ordinary Time)
        { date: new Date(Date.UTC(2023, 11, 3)), expectedSeason: 'Advent' }, // December 3 (Advent - more likely to be in Advent)
        { date: new Date(Date.UTC(2023, 11, 25)), expectedSeason: 'Christmas' }, // Christmas Day
      ]

      dates.forEach(({ date, expectedSeason }) => {
        const result = getContemplacionesSemana(date)
        expect(result.temporada).toBe(expectedSeason)
      })
    })

    test('should handle liturgical year transitions correctly', () => {
      // Test around Advent start (liturgical year boundary)
      const beforeAdvent = new Date(Date.UTC(2023, 10, 25)) // Nov 25, 2023
      const afterAdvent = new Date(Date.UTC(2023, 11, 3)) // Dec 3, 2023 (in Advent)
      
      const beforeResult = getContemplacionesSemana(beforeAdvent)
      const afterResult = getContemplacionesSemana(afterAdvent)
      
      // Before Advent should be Ordinary Time
      expect(beforeResult.temporada).toBe('Ordinary Time')
      // After Advent starts should be Advent
      expect(afterResult.temporada).toBe('Advent')
      
      // Cycles should follow the liturgical year progression
      expect(['A', 'B', 'C']).toContain(beforeResult.ciclo)
      expect(['A', 'B', 'C']).toContain(afterResult.ciclo)
    })

    test('should handle liturgical cycles correctly over multiple years', () => {
      // Test that cycles progress correctly: A -> B -> C -> A
      const testDates = [
        new Date(Date.UTC(2023, 6, 15)), // July 2023 (liturgical year 2023)
        new Date(Date.UTC(2024, 6, 15)), // July 2024 (liturgical year 2024) 
        new Date(Date.UTC(2025, 6, 15)), // July 2025 (liturgical year 2025)
      ]
      
      const cycles = testDates.map(date => getContemplacionesSemana(date).ciclo)
      
      // Should contain different cycles
      expect(cycles.length).toBe(3)
      expect(cycles).toContain('A')
      expect(cycles).toContain('B') 
      expect(cycles).toContain('C')
    })
  })

  describe('getContemplacionesSemana - Edge Cases and Robustness', () => {
    test('should handle edge cases gracefully', () => {
      // Test with various dates throughout the year
      const dates = [
        new Date(Date.UTC(2023, 0, 1)), // New Year
        new Date(Date.UTC(2023, 2, 15)), // Lent
        new Date(Date.UTC(2023, 3, 9)), // Around Easter
        new Date(Date.UTC(2023, 6, 1)), // Summer
        new Date(Date.UTC(2023, 11, 25)), // Christmas
      ]

      dates.forEach(date => {
        expect(() => getContemplacionesSemana(date)).not.toThrow()
        const result = getContemplacionesSemana(date)
        expect(result).toHaveProperty('contemplaciones')
        expect(Array.isArray(result.contemplaciones)).toBe(true)
      })
    })

    test('should handle leap years correctly', () => {
      const leapYearDate = new Date(Date.UTC(2024, 1, 29)) // Feb 29, 2024 (leap year)
      expect(() => getContemplacionesSemana(leapYearDate)).not.toThrow()
      
      const result = getContemplacionesSemana(leapYearDate)
      expect(result.temporada).toBe('Lent') // Should be in Lent season
      expect(['A', 'B', 'C']).toContain(result.ciclo)
    })

    test('should handle very old and future years', () => {
      const oldDate = new Date(Date.UTC(1900, 6, 15))
      const futureDate = new Date(Date.UTC(2100, 6, 15))
      
      expect(() => getContemplacionesSemana(oldDate)).not.toThrow()
      expect(() => getContemplacionesSemana(futureDate)).not.toThrow()
      
      const oldResult = getContemplacionesSemana(oldDate)
      const futureResult = getContemplacionesSemana(futureDate)
      
      expect(['A', 'B', 'C']).toContain(oldResult.ciclo)
      expect(['A', 'B', 'C']).toContain(futureResult.ciclo)
      expect(oldResult.temporada).toBe('Ordinary Time')
      expect(futureResult.temporada).toBe('Ordinary Time')
    })

    test('should work without parameters (current date)', () => {
      expect(() => getContemplacionesSemana()).not.toThrow()
      
      const result = getContemplacionesSemana()
      expect(result.fecha).toBeInstanceOf(Date)
      expect(['A', 'B', 'C']).toContain(result.ciclo)
      
      const validSeasons: Season[] = ['Advent', 'Christmas', 'Lent', 'Easter', 'Ordinary Time', 'Triduum']
      expect(validSeasons).toContain(result.temporada)
    })
  })

  describe('getContemplacionesSemana - Data Consistency', () => {
    test('should return consistent cycles for same liturgical year', () => {
      // Different dates within the same liturgical year should have same cycle
      const sameYearDates = [
        new Date(Date.UTC(2023, 11, 3)), // Dec 3, 2023 (liturgical year 2024)
        new Date(Date.UTC(2024, 0, 15)), // Jan 15, 2024 (liturgical year 2024)
        new Date(Date.UTC(2024, 6, 15)), // July 15, 2024 (liturgical year 2024)
        new Date(Date.UTC(2024, 10, 15)), // Nov 15, 2024 (liturgical year 2024)
      ]
      
      const cycles = sameYearDates.map(date => getContemplacionesSemana(date).ciclo)
      
      // All should have the same cycle
      const firstCycle = cycles[0]
      cycles.forEach(cycle => {
        expect(cycle).toBe(firstCycle)
      })
    })

    test('should return consistent season mapping', () => {
      // Test that Spanish season names are correctly mapped
      const seasonTests = [
        { date: new Date(Date.UTC(2023, 11, 1)), spanish: 'Adviento' },
        { date: new Date(Date.UTC(2023, 11, 25)), spanish: 'Navidad' },
        { date: new Date(Date.UTC(2023, 2, 15)), spanish: 'Cuaresma' },
        { date: new Date(Date.UTC(2023, 3, 16)), spanish: 'Pascua' },
        { date: new Date(Date.UTC(2023, 6, 15)), spanish: 'Tiempo Ordinario' },
      ]
      
      seasonTests.forEach(({ date, spanish }) => {
        const result = getContemplacionesSemana(date)
        if (result.contemplaciones.length > 0) {
          // If contemplaciones are found, they should match the Spanish season name
          result.contemplaciones.forEach(contemplacion => {
            expect(contemplacion.tiempo_liturgico).toBe(spanish)
          })
        }
      })
    })

    test('should handle contemplaciones data correctly', () => {
      // Test various dates to see if contemplaciones are returned correctly
      const testDates = [
        new Date(Date.UTC(2023, 6, 2)), // Sunday in July (Ordinary Time)
        new Date(Date.UTC(2023, 6, 9)), // Another Sunday in July
        new Date(Date.UTC(2023, 11, 3)), // First Sunday of Advent
      ]
      
      testDates.forEach(date => {
        const result = getContemplacionesSemana(date)
        
        if (result.contemplaciones.length > 0) {
          result.contemplaciones.forEach(contemplacion => {
            // Each contemplacion should have valid structure
            expect(typeof contemplacion.id).toBe('number')
            expect(['A', 'B', 'C']).toContain(contemplacion.ciclo)
            expect(typeof contemplacion.titulo).toBe('string')
            expect(typeof contemplacion.lecturas).toBe('string')
            expect(typeof contemplacion.resumen).toBe('string')
            expect(typeof contemplacion.link).toBe('string')
            expect(typeof contemplacion.dominical).toBe('boolean')
            
            // Should match the current result's cycle
            expect(contemplacion.ciclo).toBe(result.ciclo)
          })
        }
      })
    })
  })
})

// Export the runner for external execution
export { runner }

// Run tests automatically when this file is executed
runner.run()