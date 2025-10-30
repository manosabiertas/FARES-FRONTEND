"use client"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, BookOpen, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { getContemplacionesSemana, type Contemplacion, type Season } from "@/lib/calendar"

// Mapeo de colores para las temporadas litúrgicas
const seasonColors: Record<Season, string> = {
  'Advent': 'bg-purple-100 text-purple-700 border-purple-300',
  'Christmas': 'bg-yellow-100 text-yellow-700 border-yellow-300',
  'Lent': 'bg-purple-100 text-purple-800 border-purple-400',
  'Easter': 'bg-yellow-50 text-yellow-700 border-yellow-400',
  'Ordinary Time': 'bg-green-100 text-green-700 border-green-300',
  'Triduum': 'bg-red-100 text-red-700 border-red-300'
}

const seasonNamesSpanish: Record<Season, string> = {
  'Advent': 'Adviento',
  'Christmas': 'Navidad',
  'Lent': 'Cuaresma',
  'Easter': 'Pascua',
  'Ordinary Time': 'Tiempo Ordinario',
  'Triduum': 'Triduo Pascual'
}

export default function LiturgicalCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [contemplacionesSemana, setContemplacionesSemana] = useState<{
    fecha: Date
    temporada: Season
    ciclo: 'A' | 'B' | 'C'
    contemplaciones: Contemplacion[]
  } | null>(null)

  // Obtener las contemplaciones de la semana cuando cambia la fecha
  useEffect(() => {
    const contemplaciones = getContemplacionesSemana(currentDate)
    console.log('Contemplaciones para:', currentDate, contemplaciones)
    setContemplacionesSemana(contemplaciones)
  }, [currentDate])

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    const daysToAdd = direction === 'next' ? 7 : -7
    newDate.setDate(newDate.getDate() + daysToAdd)
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Obtener el rango de la semana actual para mostrar
  const getWeekRange = () => {
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 6)

    return { start: startOfWeek, end: endOfWeek }
  }

  const weekRange = getWeekRange()

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6 w-full h-full">
      <h3 className="title-playfair-small mb-6 text-center text-slate-700">
        Contemplaciones según el Calendario Litúrgico
      </h3>

      {contemplacionesSemana ? (
        <div>
          {/* Navegación por semanas */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <button
              onClick={() => navigateWeek('prev')}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-800 transition-colors"
              title="Semana anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center flex-1">
              <p className="text-sm font-semibold text-slate-700 mb-1">
                {weekRange.start.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
                {' - '}
                {weekRange.end.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <button
                onClick={goToToday}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                Ir a hoy
              </button>
            </div>

            <button
              onClick={() => navigateWeek('next')}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-800 transition-colors"
              title="Semana siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Información del ciclo y temporada */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className={`px-3 py-1 rounded-md border ${seasonColors[contemplacionesSemana.temporada]}`}>
              <span className="text-xs font-semibold">
                {seasonNamesSpanish[contemplacionesSemana.temporada]}
              </span>
            </div>
            <div className="px-3 py-1 rounded-md border bg-slate-100 text-slate-700 border-slate-300">
              <span className="text-xs font-semibold">
                Ciclo {contemplacionesSemana.ciclo}
              </span>
            </div>
          </div>

          {/* Contemplaciones de la semana */}
          <div className="border-t pt-6">
            {contemplacionesSemana.contemplaciones.length > 0 ? (
              <div>
                <h4 className="text-base font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Contemplaciones de la semana ({contemplacionesSemana.contemplaciones.length})
                </h4>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {contemplacionesSemana.contemplaciones.map((cont) => (
                    <div
                      key={cont.id}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                    >
                      <h5 className="text-sm font-semibold text-slate-800 mb-2">
                        {cont.titulo}
                      </h5>
                      {cont.fecha && (
                        <p className="text-xs text-slate-500 mb-2 font-medium">
                          {cont.fecha}
                        </p>
                      )}
                      {cont.resumen && (
                        <p className="text-xs text-slate-600 mb-3 line-clamp-3">
                          {cont.resumen}
                        </p>
                      )}
                      <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200">
                        {cont.lecturas && (
                          <span className="text-xs text-slate-500 italic flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {cont.lecturas}
                          </span>
                        )}
                        <a
                          href={cont.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap"
                        >
                          Leer contemplación
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  No hay contemplaciones para esta semana
                </p>
                <p className="text-xs text-gray-500">
                  Navega a otra semana para ver más contenido
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600">Cargando información litúrgica...</p>
        </div>
      )}
    </div>
  )
}