# Criterios de cálculo de celebraciones fijas y móviles

En este sistema, el calendario litúrgico distingue dos tipos de celebraciones: fijas y móviles. A continuación se explica cómo se calcula cada una y cómo se integran en la lógica del proyecto.

## Celebraciones fijas

Son aquellas que se celebran siempre en la misma fecha del calendario civil, independientemente del año o ciclo litúrgico. Ejemplos:
- Navidad: 25 de diciembre
- Solemnidad de Santa María, Madre de Dios: 1 de enero
- Inmaculada Concepción: 8 de diciembre
- Asunción: 15 de agosto
- Todos los Santos: 1 de noviembre
- Dedicación de la Basílica de Letrán: 9 de noviembre

**Criterio de cálculo:**
- Se identifican por su mes y día.
- El sistema busca contemplaciones asociadas a cada fecha fija durante la semana litúrgica correspondiente y suma sus IDs a la lista de contemplaciones de la semana.

## Celebraciones móviles

Son aquellas cuya fecha varía cada año, ya que dependen de eventos astronómicos o del ciclo litúrgico. Ejemplos:
- Pascua: calculada según el algoritmo de Meeus/Jones (primer domingo después de la primera luna llena tras el equinoccio de primavera).
- Pentecostés: 49 días después de Pascua.
- Ascensión: 39 días después de Pascua (jueves).
- Miércoles de Ceniza: 46 días antes de Pascua.
- Domingo de Ramos: domingo anterior a Pascua.
- Adviento: comienza el cuarto domingo antes de Navidad.
- Sagrada Familia, Bautismo del Señor, Segundo Domingo después de Navidad: dependen de la posición de los domingos respecto a Navidad y Epifanía, y de la precedencia litúrgica de cada año.

**Criterio de cálculo:**
- Se determinan mediante funciones que calculan la fecha exacta en base al año litúrgico y las reglas de la Iglesia.
- Pascua y sus derivados (Pentecostés, Ascensión, etc.) se calculan a partir de la fecha de Pascua.
- Los domingos de Adviento y Cuaresma se calculan contando semanas desde el inicio de cada temporada.
- Se respeta la precedencia litúrgica: si una celebración fija y una móvil coinciden, se aplica la de mayor rango según las normas litúrgicas.

## Implementación

- El sistema recorre todos los días de la semana litúrgica y, para cada uno, determina si corresponde a una celebración fija (por fecha) o móvil (por clave litúrgica calculada).
- Así, se garantiza que todas las contemplaciones relevantes para la semana, sean fijas o móviles, estén presentes y correctamente priorizadas.
