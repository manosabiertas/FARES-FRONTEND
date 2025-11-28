import { useState, useEffect } from "react";
import contemplacionesData from "@/lib/contemplaciones.json";
import { traerContemplacionesSemanaPorIds } from "@/lib/traerContemplacionesSemanaPorIds";

export default function LiturgicalCalendarIds() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [contemplacionesSemana, setContemplacionesSemana] = useState<any[]>([]);

  // Obtener el rango de la semana siguiente (próximo domingo a sábado)
  const getNextWeekRange = () => {
    const today = new Date(currentDate);
    const dayOfWeek = today.getDay();
    const daysToNextSunday = (7 - dayOfWeek) % 7 || 7;
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysToNextSunday);
    return nextSunday;
  };

  useEffect(() => {
    const nextSunday = getNextWeekRange();
    const ids = traerContemplacionesSemanaPorIds(nextSunday);
    // Mapear los ids a los datos completos
    const contemplaciones = ids
      .map((id) => contemplacionesData.find((c: any) => c.id === id))
      .filter(Boolean);
    setContemplacionesSemana(contemplaciones);
  }, [currentDate]);

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    const daysToAdd = direction === "next" ? 7 : -7;
    newDate.setDate(newDate.getDate() + daysToAdd);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <h2>Contemplaciones por semana (ids.json)</h2>
      <button onClick={() => navigateWeek("prev")}>Anterior</button>
      <button onClick={() => navigateWeek("next")}>Siguiente</button>
      <ul>
        {contemplacionesSemana.length > 0 ? (
          contemplacionesSemana.map((c) => (
            <li key={c.id}>{c.titulo} (ID: {c.id})</li>
          ))
        ) : (
          <li>No hay contemplaciones para esta semana.</li>
        )}
      </ul>
    </div>
  );
}
