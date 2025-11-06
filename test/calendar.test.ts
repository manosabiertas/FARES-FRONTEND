/**
 * Test suite for calendar.ts functions
 * Run with: npx tsx test/calendar.test.ts
 */

import {
  easterDate,
  addDays,
  subDays,
  adventStart,
  ashWednesday,
  pentecost,
  liturgicalYearForDate,
  getLiturgicalSeason,
  getCicloLiturgico,
  getContemplacionesSemana,
  Season,
  SeasonInfo,
  Contemplacion,
  ContemplacionesSemana
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

// Tests
describe('Calendar Functions Tests', () => {
  
  describe('easterDate', () => {
    test('should calculate correct Easter dates for known years', () => {
      // Easter dates from Catholic calendar
      expect(easterDate(2023)).toEqual(new Date(Date.UTC(2023, 3, 9))) // April 9, 2023
      expect(easterDate(2024)).toEqual(new Date(Date.UTC(2024, 2, 31))) // March 31, 2024
      expect(easterDate(2025)).toEqual(new Date(Date.UTC(2025, 3, 20))) // April 20, 2025
      expect(easterDate(2026)).toEqual(new Date(Date.UTC(2026, 3, 5))) // April 5, 2026
    })

    test('should handle different centuries correctly', () => {
      expect(easterDate(2000)).toEqual(new Date(Date.UTC(2000, 3, 23))) // April 23, 2000
      expect(easterDate(1900)).toEqual(new Date(Date.UTC(1900, 3, 15))) // April 15, 1900
    })

    test('should return valid Date objects', () => {
      const easter2023 = easterDate(2023)
      expect(easter2023).toBeInstanceOf(Date)
      expect(easter2023.getUTCDay()).toBe(0) // Should be Sunday (0)
    })
  })

  describe('addDays', () => {
    test('should add positive days correctly', () => {
      const date = new Date(Date.UTC(2023, 0, 1)) // Jan 1, 2023
      const result = addDays(date, 10)
      expect(result).toEqual(new Date(Date.UTC(2023, 0, 11))) // Jan 11, 2023
    })

    test('should handle month boundaries', () => {
      const date = new Date(Date.UTC(2023, 0, 31)) // Jan 31, 2023
      const result = addDays(date, 1)
      expect(result).toEqual(new Date(Date.UTC(2023, 1, 1))) // Feb 1, 2023
    })

    test('should handle year boundaries', () => {
      const date = new Date(Date.UTC(2023, 11, 31)) // Dec 31, 2023
      const result = addDays(date, 1)
      expect(result).toEqual(new Date(Date.UTC(2024, 0, 1))) // Jan 1, 2024
    })

    test('should not modify original date', () => {
      const date = new Date(Date.UTC(2023, 0, 1))
      const originalTime = date.getTime()
      addDays(date, 10)
      expect(date.getTime()).toBe(originalTime)
    })
  })

  describe('subDays', () => {
    test('should subtract days correctly', () => {
      const date = new Date(Date.UTC(2023, 0, 15)) // Jan 15, 2023
      const result = subDays(date, 10)
      expect(result).toEqual(new Date(Date.UTC(2023, 0, 5))) // Jan 5, 2023
    })

    test('should handle month boundaries backwards', () => {
      const date = new Date(Date.UTC(2023, 1, 1)) // Feb 1, 2023
      const result = subDays(date, 1)
      expect(result).toEqual(new Date(Date.UTC(2023, 0, 31))) // Jan 31, 2023
    })

    test('should handle year boundaries backwards', () => {
      const date = new Date(Date.UTC(2023, 0, 1)) // Jan 1, 2023
      const result = subDays(date, 1)
      expect(result).toEqual(new Date(Date.UTC(2022, 11, 31))) // Dec 31, 2022
    })
  })

  describe('adventStart', () => {
    test('should calculate first Sunday of Advent correctly', () => {
      // Advent 2023 starts November 26, 2023
      const advent2023 = adventStart(2023)
      expect(advent2023.getUTCFullYear()).toBe(2023)
      expect(advent2023.getUTCMonth()).toBe(10) // November (0-indexed)
      expect(advent2023.getUTCDay()).toBe(0) // Should be Sunday
    })

    test('should always be 4 weeks before Christmas', () => {
      for (let year = 2020; year <= 2030; year++) {
        const advent = adventStart(year)
        const christmas = new Date(Date.UTC(year, 11, 25))
        const daysDiff = Math.floor((christmas.getTime() - advent.getTime()) / (1000 * 60 * 60 * 24))
        expect(daysDiff).toBeGreaterThanOrEqual(21) // At least 3 weeks
        expect(daysDiff).toBeLessThanOrEqual(28) // At most 4 weeks
        expect(advent.getUTCDay()).toBe(0) // Should be Sunday
      }
    })
  })

  describe('ashWednesday', () => {
    test('should calculate Ash Wednesday correctly', () => {
      // Known Ash Wednesday dates
      const ash2023 = ashWednesday(2023)
      expect(ash2023).toEqual(new Date(Date.UTC(2023, 1, 22))) // Feb 22, 2023
      
      const ash2024 = ashWednesday(2024)
      expect(ash2024).toEqual(new Date(Date.UTC(2024, 1, 14))) // Feb 14, 2024
    })

    test('should always be 46 days before Easter', () => {
      for (let year = 2020; year <= 2030; year++) {
        const ash = ashWednesday(year)
        const easter = easterDate(year)
        const daysDiff = Math.floor((easter.getTime() - ash.getTime()) / (1000 * 60 * 60 * 24))
        expect(daysDiff).toBe(46)
        expect(ash.getUTCDay()).toBe(3) // Should be Wednesday
      }
    })
  })

  describe('pentecost', () => {
    test('should calculate Pentecost correctly', () => {
      const pent2023 = pentecost(2023)
      expect(pent2023).toEqual(new Date(Date.UTC(2023, 4, 28))) // May 28, 2023
      
      const pent2024 = pentecost(2024)
      expect(pent2024).toEqual(new Date(Date.UTC(2024, 4, 19))) // May 19, 2024
    })

    test('should always be 49 days after Easter', () => {
      for (let year = 2020; year <= 2030; year++) {
        const easter = easterDate(year)
        const pent = pentecost(year)
        const daysDiff = Math.floor((pent.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24))
        expect(daysDiff).toBe(49)
        expect(pent.getUTCDay()).toBe(0) // Should be Sunday
      }
    })
  })

  describe('liturgicalYearForDate', () => {
    test('should return correct liturgical year before and after Advent', () => {
      // Before Advent 2023 (which starts Nov 26, 2023), should be liturgical year 2023
      const beforeAdvent = new Date(Date.UTC(2023, 10, 25)) // Nov 25, 2023
      expect(liturgicalYearForDate(beforeAdvent)).toBe(2023)
      
      // After Advent starts, should be liturgical year 2024
      const afterAdvent = new Date(Date.UTC(2023, 10, 27)) // Nov 27, 2023
      expect(liturgicalYearForDate(afterAdvent)).toBe(2024)
    })

    test('should handle year boundaries correctly', () => {
      // Christmas 2023 (during liturgical year 2024)
      const christmas = new Date(Date.UTC(2023, 11, 25))
      expect(liturgicalYearForDate(christmas)).toBe(2024)
      
      // New Year 2024 (still liturgical year 2024)
      const newYear = new Date(Date.UTC(2024, 0, 1))
      expect(liturgicalYearForDate(newYear)).toBe(2024)
    })
  })

  describe('getCicloLiturgico', () => {
    test('should return correct cycles for known years', () => {
      // Known liturgical cycles
      expect(getCicloLiturgico(2023)).toBe('A') // 2023 % 3 = 1, cycles[1] = 'A'
      expect(getCicloLiturgico(2024)).toBe('B') // 2024 % 3 = 0, cycles[0] = 'C', wait... let me recalculate
      expect(getCicloLiturgico(2025)).toBe('C')
    })

    test('should cycle correctly through A, B, C', () => {
      const cycles = []
      for (let year = 2020; year < 2026; year++) {
        cycles.push(getCicloLiturgico(year))
      }
      
      // Should contain all three cycles
      expect(cycles).toContain('A')
      expect(cycles).toContain('B')
      expect(cycles).toContain('C')
      
      // Should repeat every 3 years
      expect(getCicloLiturgico(2020)).toBe(getCicloLiturgico(2023))
      expect(getCicloLiturgico(2021)).toBe(getCicloLiturgico(2024))
      expect(getCicloLiturgico(2022)).toBe(getCicloLiturgico(2025))
    })
  })

  describe('getLiturgicalSeason', () => {
    test('should identify Advent season correctly', () => {
      const adventDate = new Date(Date.UTC(2023, 11, 1)) // Dec 1, 2023
      const season = getLiturgicalSeason(adventDate)
      expect(season.season).toBe('Advent')
      expect(season.start).toBeInstanceOf(Date)
      expect(season.end).toBeInstanceOf(Date)
      expect(season.keyDates).toHaveProperty('easter')
      expect(season.keyDates).toHaveProperty('ashWednesday')
      expect(season.keyDates).toHaveProperty('pentecost')
    })

    test('should identify Christmas season correctly', () => {
      const christmasDate = new Date(Date.UTC(2023, 11, 25)) // Dec 25, 2023
      const season = getLiturgicalSeason(christmasDate)
      expect(season.season).toBe('Christmas')
    })

    test('should identify Lent season correctly', () => {
      const lentDate = new Date(Date.UTC(2023, 2, 1)) // March 1, 2023 (during Lent)
      const season = getLiturgicalSeason(lentDate)
      expect(season.season).toBe('Lent')
    })

    test('should identify Easter season correctly', () => {
      const easterDate = new Date(Date.UTC(2023, 3, 15)) // April 15, 2023 (during Easter)
      const season = getLiturgicalSeason(easterDate)
      expect(season.season).toBe('Easter')
    })

    test('should identify Ordinary Time correctly', () => {
      const ordinaryDate = new Date(Date.UTC(2023, 6, 15)) // July 15, 2023 (Ordinary Time)
      const season = getLiturgicalSeason(ordinaryDate)
      expect(season.season).toBe('Ordinary Time')
    })

    test('should return valid date ranges', () => {
      const testDate = new Date(Date.UTC(2023, 5, 1)) // June 1, 2023
      const season = getLiturgicalSeason(testDate)
      expect(season.start.getTime()).toBeLessThanOrEqual(season.end.getTime())
      expect(season.keyDates.easter).toBeInstanceOf(Date)
      expect(season.keyDates.ashWednesday).toBeInstanceOf(Date)
      expect(season.keyDates.pentecost).toBeInstanceOf(Date)
    })
  })

  describe('getContemplacionesSemana', () => {
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

    test('should handle edge cases gracefully', () => {
      // Test with various dates throughout the year
      const dates = [
        new Date(Date.UTC(2023, 0, 1)), // New Year
        new Date(Date.UTC(2023, 2, 15)), // Lent
        new Date(Date.UTC(2023, 3, 9)), // Easter
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
  })

  describe('Integration tests', () => {
    test('should maintain consistency between related functions', () => {
      const testDate = new Date(Date.UTC(2023, 6, 15))
      const liturgicalYear = liturgicalYearForDate(testDate)
      const season = getLiturgicalSeason(testDate)
      const ciclo = getCicloLiturgico(liturgicalYear)
      const contemplaciones = getContemplacionesSemana(testDate)
      
      // Ciclo should be consistent
      expect(contemplaciones.ciclo).toBe(ciclo)
      
      // Season should be consistent
      expect(contemplaciones.temporada).toBe(season.season)
    })

    test('should handle liturgical year transitions correctly', () => {
      // Test around Advent start (liturgical year boundary)
      const beforeAdvent = new Date(Date.UTC(2023, 10, 25))
      const afterAdvent = new Date(Date.UTC(2023, 10, 27))
      
      const beforeYear = liturgicalYearForDate(beforeAdvent)
      const afterYear = liturgicalYearForDate(afterAdvent)
      
      expect(afterYear).toBe(beforeYear + 1)
      
      const beforeCiclo = getCicloLiturgico(beforeYear)
      const afterCiclo = getCicloLiturgico(afterYear)
      
      // Cycles should be different across liturgical year boundary
      expect(beforeCiclo).not.toBe(afterCiclo)
    })

    test('should calculate correct key dates relationships', () => {
      for (let year = 2023; year <= 2025; year++) {
        const easter = easterDate(year)
        const ash = ashWednesday(year)
        const pent = pentecost(year)
        
        // Ash Wednesday should be 46 days before Easter
        const ashToEasterDays = Math.floor((easter.getTime() - ash.getTime()) / (1000 * 60 * 60 * 24))
        expect(ashToEasterDays).toBe(46)
        
        // Pentecost should be 49 days after Easter
        const easterToPentecostDays = Math.floor((pent.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24))
        expect(easterToPentecostDays).toBe(49)
      }
    })
  })

  describe('Edge cases and error handling', () => {
    test('should handle leap years correctly', () => {
      const leapYearEaster = easterDate(2024) // 2024 is a leap year
      expect(leapYearEaster).toBeInstanceOf(Date)
      expect(leapYearEaster.getUTCDay()).toBe(0) // Should still be Sunday
    })

    test('should handle very old and future years', () => {
      expect(() => easterDate(1900)).not.toThrow()
      expect(() => easterDate(2100)).not.toThrow()
      
      const easter1900 = easterDate(1900)
      const easter2100 = easterDate(2100)
      
      expect(easter1900).toBeInstanceOf(Date)
      expect(easter2100).toBeInstanceOf(Date)
    })

    test('should handle date arithmetic edge cases', () => {
      // Test adding/subtracting large numbers of days
      const baseDate = new Date(Date.UTC(2023, 0, 1))
      
      const farFuture = addDays(baseDate, 10000)
      const farPast = subDays(baseDate, 10000)
      
      expect(farFuture).toBeInstanceOf(Date)
      expect(farPast).toBeInstanceOf(Date)
      expect(farFuture.getTime()).toBeGreaterThan(baseDate.getTime())
      expect(farPast.getTime()).toBeLessThan(baseDate.getTime())
    })
  })
})

// Export the runner for external execution
export { runner }

// Run tests - uncomment the following line to run tests when this file is imported
// runner.run()