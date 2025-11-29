"use client"

import { useEffect, useState } from 'react'
import { traerContemplacionesSemana } from '@/lib/traerContemplacionesSemanaPorIds'

export default function TestCalendar() {
  const [resultado, setResultado] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      console.log('=== INICIANDO TEST ===')
      const fecha = new Date('2025-11-05T00:00:00.000Z')
      console.log('Fecha de prueba:', fecha.toISOString())
      
      const res = traerContemplacionesSemana(fecha)
      console.log('Resultado:', res)
      
      setResultado(res)
    } catch (e: any) {
      console.error('ERROR:', e)
      setError(e.message)
    }
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test de Calendar Title Based</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {resultado ? (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Resultado para 5 Nov 2025</h2>
          
          <div className="space-y-2 mb-6">
            <p><strong>Domingo:</strong> {resultado.fechaDomingo}</p>
            <p><strong>Temporada:</strong> {resultado.temporada}</p>
            <p><strong>Ciclo:</strong> {resultado.ciclo}</p>
            <p><strong>Clave:</strong> {resultado.celebracion_clave}</p>
            <p><strong>Contemplaciones:</strong> {resultado.contemplaciones.length}</p>
          </div>
          
          {resultado.contemplaciones.length > 0 ? (
            <div>
              <h3 className="font-semibold mb-2">Contemplaciones:</h3>
              <div className="space-y-4">
                {resultado.contemplaciones.map((c: any) => (
                  <div key={c.id} className="border p-4 rounded">
                    <p className="font-medium">{c.titulo}</p>
                    <p className="text-sm text-gray-600">ID: {c.id}</p>
                    <p className="text-sm text-gray-600">
                      Lecturas: {Array.isArray(c.lecturas) ? c.lecturas.join('; ') : c.lecturas}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-red-600">❌ No se encontraron contemplaciones</p>
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          Abre la consola del navegador (F12) para ver los logs detallados
        </p>
      </div>
    </div>
  )
}
