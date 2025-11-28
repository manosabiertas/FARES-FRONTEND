# Proceso de Generación y Validación de Contemplaciones por Fecha

## Descripción General

El sistema desarrollado permite obtener, para cada fecha específica entre enero de 2025 y octubre de 2026, los IDs de contemplaciones asociadas a las celebraciones litúrgicas de ese día. El proceso se basa en los datos extraídos de la web de referencia (aciprensa.com) y almacenados en archivos JSON estructurados.

### ¿Cómo funciona?
- Para cada fecha (año, mes, día), el sistema consulta el archivo `ids.json` para obtener los IDs de contemplaciones correspondientes.
- Luego, con esos IDs, se recupera la información completa de cada contemplación desde `contemplaciones.json`.
- El resultado es una lista de contemplaciones para la fecha solicitada, incluyendo el ID, título, lecturas, resumen y otros metadatos.
- El sistema **no realiza agregación semanal**: solo devuelve las contemplaciones del día exacto consultado.

### Proceso de Validación (Tests)
Se han implementado tests automáticos para garantizar que:
- Todas las fiestas fijas relevantes (por ejemplo, 1/1, 6/24, 8/15, 11/1, 12/8, 12/25, 11/9) tengan los IDs de contemplaciones esperados en las fechas correctas.
- Para fechas dominicales y otras celebraciones, los tests verifican que solo estén presentes los IDs correctos para el evangelio de ese día.
- Los tests han sido adaptados para reflejar la lógica actual: **solo se consideran contemplaciones del día exacto, no de toda la semana**.

#### Resumen de los tests ejecutados
- **Todos los tests de fiestas fijas pasan correctamente**: los IDs esperados están presentes en las fechas correspondientes.
- **Todos los tests generales de fechas dominicales y celebraciones específicas pasan**: solo se devuelven los IDs correctos para cada fecha.
- **No hay errores ni tests fallidos** en el directorio `test/porids`.

### Consideraciones y Limitaciones
- **Cobertura temporal**: El sistema solo puede contemplar fechas entre enero de 2025 y octubre de 2026, que es el rango de datos entregado por la web de referencia (aciprensa.com).
- **Limitación**: Si se requiere contemplar fechas fuera de este rango, será necesario obtener y cargar nuevos datos.
- **Revisión de celebraciones**: Si el cliente detecta que faltan celebraciones o IDs de contemplaciones en alguna fecha, puede indicarlo para agregar los datos correspondientes en `ids.json`.

## ¿Qué debe revisar el cliente?
- Verificar que todas las celebraciones importantes estén presentes en el rango de fechas cubierto.
- Confirmar que los IDs de contemplaciones asociados a cada fecha sean los esperados.
- Indicar cualquier fecha o celebración faltante para su incorporación.

---

**Nota:** El sistema está validado y alineado con la lógica actual. Cualquier ajuste futuro (nuevas fechas, celebraciones o contemplaciones) puede realizarse editando los archivos de datos y re-ejecutando los tests para asegurar la integridad.