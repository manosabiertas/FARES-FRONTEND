// Calculos litúrgicos básicos en TypeScript
/**
 * 🕊️ 1. El Año Litúrgico

El año litúrgico no coincide con el calendario civil.
Comienza con el Primer Domingo de Adviento y se divide en:

Adviento (4 semanas antes de Navidad)

Navidad (hasta el Bautismo del Señor)

Tiempo Ordinario I (hasta Cuaresma)

Cuaresma (desde Miércoles de Ceniza hasta Pascua)

Pascua (50 días desde la Resurrección hasta Pentecostés)

Tiempo Ordinario II (desde Pentecostés hasta Adviento)

Cada día dentro de estos tiempos tiene lecturas específicas.

📖 2. Ciclos de Lectura

Domingos y solemnidades:
Se dividen en tres años:

Año A → Evangelio según Mateo

Año B → Evangelio según Marcos

Año C → Evangelio según Lucas
(Juan se lee en momentos especiales como Pascua o Cuaresma)

Días feriales (de lunes a sábado):
Se dividen en dos años:

Año I → años impares

Año II → años pares

⛪ 3. Fuentes de las lecturas

Las lecturas provienen de:

El Leccionario Romano, que tiene varios volúmenes:

Leccionario dominical y festivo

Leccionario ferial

Leccionarios para misas de santos, difuntos y ocasiones especiales

Los textos se basan en la Biblia de la Iglesia (traducción oficial según la conferencia episcopal de cada país).

📅 4. Cómo se determina cada día

Se identifica el tiempo litúrgico y el día específico.

Se consulta el Leccionario correspondiente:

Si es domingo, se usa el ciclo A, B o C.

Si es día de semana, se usa el año I o II.

Si coincide con una fiesta o solemnidad, esta tiene prioridad sobre la lectura ferial.

Algunas memorias opcionales permiten elegir entre las lecturas del día o las del santo.

🪔 5. Ejemplo

Supongamos que hoy es 22 de octubre de 2025:

Tiempo ordinario (segundo bloque)

Año litúrgico B

Año ferial I (porque 2025 es impar)

Por tanto, las lecturas diarias se tomarán del Leccionario ferial del Año I, y si coincide con la memoria de San Juan Pablo II, se pueden usar sus lecturas propias.
 */
const contemplacionesData  =[
  {
    "id": 8397,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los 72 y un reino basado en La Paz (14 C 2022)",
    "lecturas": "Lc 10, 1-12; Lc 24, 38-41",
    "resumen": "al Señor que designa a los 72 y los envía “a una cosecha abundante para la cual los trabajadores resultan pocos”. Me impresiona esta frase que les dice el Señor al comenzar la primera mis",
    "link": "https://drive.google.com/file/d/1ObVYbMU57RJLrSNrOFg7Al4AekGWfiWX/view?usp=drive_link"
  },
  {
    "id": 48655,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "El seguimiento del Señor y la honra (13 C 2022)",
    "lecturas": "Lc 9, 51-62; Ef 1, 10",
    "resumen": "Miramos a Jesús en marcha. Todo el pasaje respira camino en subida. Llega el tiempo de subir al Padre y para Jesús el camino pasa por la subida a Jerusalén donde le espera la Cruz. Y nada puede detene",
    "link": "https://drive.google.com/file/d/1owEQA9zoJ6DHkMWD4d3tLj-EbLfp3v24/view?usp=drive_link"
  },
  {
    "id": 78774,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El corazón de Jesús y el nuestro ( Sagrado Corazón C 2022 )",
    "lecturas": "ros 1.146",
    "resumen": "Mirando la imagen, en la que el Señor nos ofrece su sagrado Corazón, pensaba que el Corazón es, de lo suyo lo más “nuestro”, y sentía que va parejo ir conociendo mi corazón con ir conociendo el Suyo.",
    "link": "https://drive.google.com/file/d/1L4SSvIleaqEaemqzFWrClz_yOz-NgR3E/view?usp=drive_link"
  },
  {
    "id": 12441,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Señor quiere compartir la vida de su pueblo, simplemente (Corpus Christi C 2022)",
    "lecturas": "Lc 9, 11",
    "resumen": "Lucas narra la escena con total sobriedad. En las imágenes se puede ver algo de los sentimientos de la gente al ver multiplicarse el pan. Lo habrán ido percibiendo de a poco, a medida que veían que la",
    "link": "https://drive.google.com/file/d/1flJxI09mA_vvCS731C00LFeidyP9bLuK/view?usp=drive_link"
  },
  {
    "id": 57893,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Un Dios que no habla de sí mismo y que lo comparte todo (Trinidad santa C 2022)",
    "lecturas": "Jn 16, 12-15; Mc 13, 11",
    "resumen": "A nosotros, “Verdad total” nos suena excesivo. ¿Qué sería la Verdad total? ¿Conocer el sentido de la vida de toda la humanidad…? ¿La verdad de cada persona…, de todo el universo…? Nadie tiene la verda",
    "link": "https://drive.google.com/file/d/1wMO-nWMPEXlU2xIvLhqR5u08Uf4WI6f6/view?usp=drive_link"
  },
  {
    "id": 90724,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "¿Sabías que tienes un corazón ? Un lugar nuevo para el Espíritu que sopla Jesús (Pentecostés C 2022)",
    "lecturas": "Jn 20, 19-23; Jn 3, 8; Jn 4, 23",
    "resumen": "En el mosaico vemos a Jesús que sopla el Espíritu desde su corazón… y junto con Él nos abre un nuevo “lugar” para recibirlo: un odre nuevo. Odres nuevos que no sabíamos que teníamos En este tiempo est",
    "link": "https://drive.google.com/file/d/1R_xjS_adGFd260v90JejhZPkK4EeG24m/view?usp=drive_link"
  },
  {
    "id": 84989,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Teologías de la ascensión (C 2022)",
    "lecturas": "Lc 24, 46-53",
    "resumen": "Vemos en el icono a los apóstoles que se salen de la vaina, inquietos por salir a predicar; vemos a un Jesús que tiene abierto el círculo del cielo -que los ángeles parece que tiran para abajo más que",
    "link": "https://drive.google.com/file/d/1Gr9HbPdlfAMT8zYr0J4IWunvv0e6FLkB/view?usp=drive_link"
  },
  {
    "id": 129,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Sér fieles es sentir y obrar «de corazón» (Pascua 6 C 2022)",
    "lecturas": "Jn 14, 23-29",
    "resumen": "Armado solo de Palabra Jesús es uno que está armado de palabras. Solo con sus Palabras cuenta nuestro Señor para llegar de la mejor manera a nuestro corazón. Son Palabras que testimonian un gran amor,",
    "link": "https://drive.google.com/file/d/1Uhtl4u5-fKBK9lvDpmGNvzANWoV3ZCAL/view?usp=drive_link"
  },
  {
    "id": 2589,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "De corazón, como Yo los he amado (Pascua 5 C 2022)",
    "lecturas": "Jn 13, 31-35; Ef 1, 17-18; Co 13,4-7",
    "resumen": "“Ámense como Yo los he amado. En esto todos reconocerán que ustedes son mis discípulos”. Amarnos “así como Él nos amó”. Solemos agregar: hasta dar la vida. Esa es la esencia, el corazón de su amor. Pe",
    "link": "https://drive.google.com/file/d/1oqLeVKnrDeS3s69ARkVHZMgKneW6_e38/view?usp=drive_link"
  },
  {
    "id": 53955,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pertenencia y oración (Pascua 4 C 2022)",
    "lecturas": "Jn 10, 27-30; Rm 8, 36-38",
    "resumen": "Escuchamos conmovidos cómo Jesús dice “mis ovejas”. Que nuestro Padre nos «ha dado» a Él, nos ha puesto en sus manos. Y Él nos ha hecho suyos. Tanto que nadie nos puede separar. Como dice Pablo: “Quié",
    "link": "https://drive.google.com/file/d/1RgQZUd2OGSnVlW-NUqwpoDuq1Bowgzfr/view?usp=drive_link"
  },
  {
    "id": 15244,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Simón Pedro y el Resucitado: cinco pasos de maduración en la amistad (Pascua 3 C 2022)",
    "lecturas": "Jn 21,1-19; Cor 7, 9",
    "resumen": "La resurrección entra en la vida cotidiana de la comunidad y se mezcla con ella. Con toda normalidad. Esa es la dinámica del pasaje de Juan: un Jesús que se mete en la pesca fallida y la vuelve a hace",
    "link": "https://drive.google.com/file/d/1yzcyY8G4x8lyLTJLhmNONGR9rbQixUwP/view?usp=drive_link"
  },
  {
    "id": 6200,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Los cinco pasos… (II) (Pascua 2 c 2022)",
    "lecturas": "Jn 20,19-31",
    "resumen": "Aquel mismo domingo, por la tarde, estaban reunidos los discípulos en una casa con las puertas bien cerradas, por miedo a los judíos. Jesús se presentó en medio de ellos y les dijo: – (1)La paz esté c",
    "link": "https://drive.google.com/file/d/1p4aGITarkmWf-nV8j6lQUdgFCEFo6Cs4/view?usp=drive_link"
  },
  {
    "id": 11334,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Cinco pasos de cercanía con Jesús en esta Pascua 2022",
    "lecturas": "Jn 13, 1",
    "resumen": "El primer paso de cercanía: encontrar a Jesús teniendo algún gesto lindo para con Él Esto se le quedó grabado a Juan, que de amistad con Jesús sabe: “Se quitó sus vestidos y, tomando una toalla, se la",
    "link": "https://drive.google.com/file/d/1BY4ptb328TSNNVRIk-SP8JQfJ31ASXjb/view?usp=drive_link"
  },
  {
    "id": 1483,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Diez criterios que emanan de la sabiduría de la Cruz  (Domingo de Ramos C 2022)",
    "lecturas": "Lc 22, 14; Cor 1, 17-18; Cor 1, 2",
    "resumen": "I           Jesús termina siendo condenado por el griterío de los que gritan más fuerte. Las autoridades tenían clara su ley, según la cual Jesús “se hacía Dios” y por esa blasfemia merecía la muerte.",
    "link": "https://drive.google.com/file/d/1VyG450jk1nNpqJjRMYV4ab9gN6I_10iG/view?usp=drive_link"
  },
  {
    "id": 68635,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Icono de la buena cercanía entre el Señor y la pecadora (5 C Cuaresma 2022)",
    "lecturas": "Jn 8, 1-11; Jn 7, 51; Jn 8, 15-16",
    "resumen": "Nos fijamos en los movimientos del Señor que dan su ritmo a la acción en esta escena evangélica. El pasaje mismo hace énfasis en la importancia del lenguaje corporal de todos, de Jesús, de la mujer, d",
    "link": "https://drive.google.com/file/d/1wWtZawaVdHiTstmmuaKS6cO-Xtu8NzyC/view?usp=drive_link"
  },
  {
    "id": 77117,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Gente acercable (4 C cuaresma 2022",
    "lecturas": "Lc 15,1-3; Sam 6, 13; Lc 15, 7",
    "resumen": "Se acercaban a Él todos… “ Se acercaban a El todos los publicanos y pecadores para oírlo”. Me imagino alegre e l ambiente de toda esta gente “desacostumbrada” que se acerca a Jesús y lo rodea atenta.",
    "link": "https://drive.google.com/file/d/1WQurxgcnpXEtJGOPQ2WLdfkOyFY9kbe7/view?usp=drive_link"
  },
  {
    "id": 38816,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Es básico que como cristianos estemos disponibles en todo momento a cambiar de mentalidad para dar lugar al Espíritu (Cuaresma 3 C 2022)",
    "lecturas": "Lc 13,1-9; Jn 20, 22; ech 2, 17",
    "resumen": "Cambiemos de mentalidad Cambiemos de mentalidad. Pasemos de una mentalidad que busca chivos expiatorios a una mentalidad que asume la culpa comunitariamente (y comparte las pérdidas). En una reflexión",
    "link": "https://drive.google.com/file/d/1A9MMfoJ0ds9YVAnFrNWv-aXHZPNGL8Mo/view?usp=drive_link"
  },
  {
    "id": 41840,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Elegir a Jesús  (lo recomienda el Padre) [Cuaresma 2 C 2022]",
    "lecturas": "Lc 9, 28; Jn 1, 1-3",
    "resumen": "En el Principio y Fundamento de los Ejercicios Espirituales, Ignacio dice: “ El hombre es creado para… Jesús nuestro Señor”. Cuando usa la expresión “Dios nuestro Señor” Ignacio se refiere a Jesús. Y",
    "link": "https://drive.google.com/file/d/1_V5yt5iIUujS_44sHXvus7TJFBytNYzC/view?usp=drive_link"
  },
  {
    "id": 22032,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "La relación entre adoración, poder y culto personal (1º de Cuaresma C 2022)",
    "lecturas": "Lc 4, 1-13",
    "resumen": "Rezando con las Tentaciones del Señor en el desierto, que guían nuestro camino de cuaresma, me pegó fuerte la segunda, la que se refiere al poder. El demonio revela el secreto del poder: se lo han dad",
    "link": "https://drive.google.com/file/d/1aHeZcp7YDAy4pLUo4sfps3BTARWfDusF/view?usp=drive_link"
  },
  {
    "id": 58923,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Terminar nuestro aprendizaje como discípulos formados que se dejan conducir (8 C 2022)",
    "lecturas": "Lc  6, 39-45; Lc 6, 36; Cor 8, 14",
    "resumen": "Nos focalizamos en esto de “terminar el aprendizaje” ( katartizein ). El Señor da varios criterios para que uno “no se la crea”: el discípulo no es más que su maestro; pero tampoco menos. El cristiani",
    "link": "https://drive.google.com/file/d/1q7HQ_j8jE9B3o8SufgUMd8wTrtYzyzjx/view?usp=drive_link"
  },
  {
    "id": 3327,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nada puede impedirnos que seamos magnánimos con nuestros enemigos. Si lo somos, el Padre le pone su sello a nuestra benignidad ( 7 C 2022)",
    "lecturas": "Lc 6, 27-38",
    "resumen": "Es importante tener en cuenta que “amar a los enemigos”, incluso con un pequeño gesto, como el de prestar algo y no reclamarlo, no es una cuestión así no más. Uno no llega a veces a tener estos gesto",
    "link": "https://drive.google.com/file/d/1Une8XUsuyTSTuIyIgKsh12_A05s9IQ8E/view?usp=drive_link"
  },
  {
    "id": 58841,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las bienaventuranzas «para acercarse» no tienen condiciones (6 C 2022)",
    "lecturas": "Lc 6, 17",
    "resumen": "En estas bienaventuranzas, Lucas lo sitúa al Señor en un llano. Y allí se ve que no solo está a la altura de la gente, sino que se sienta, porque  -dice Lucas -: “elevó sus ojos a sus discípulos”. Sit",
    "link": "https://drive.google.com/file/d/1GiFzoEtgvSzCry2HVv9IeI6oWrA-jfDj/view?usp=drive_link"
  },
  {
    "id": 94268,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tironcitos desde arriba (5 C 2022)",
    "lecturas": "Lc 5, 1-11",
    "resumen": "Lo primero que hay que decir en esta",
    "link": "https://drive.google.com/file/d/1LP2aIzC79L3oNaOJpjvtCAYGj65oF24l/view?usp=drive_link"
  },
  {
    "id": 58535,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tratar a Jesús como al hijo de José (4 C 2022)",
    "lecturas": "Lc 4, 21-30; Jn 5, 17",
    "resumen": "“Pero ¿acaso no es éste el hijo de José?” Como en el evangelio de la Cananea, en la frase provocativa está la clave para abrir un diálogo que podría haber alejado las tentaciones de enojo y habría dad",
    "link": "https://drive.google.com/file/d/1-MjXEgsCTOie0EgpPk4JQD8cRwz7eE1M/view?usp=drive_link"
  },
  {
    "id": 81728,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los amigos de Jesús (3 C 2022)",
    "lecturas": "Lc 1, 1-4; Cro 20, 7; Is 41, 8-9",
    "resumen": "Miramos a Teófilo Miramos a Teófilo. “Un tipo abstracto”, podría decir alguno, en el sentido de que más que una persona real parece un título genérico para el que leerá los «Hechos». Pero en la amista",
    "link": "https://drive.google.com/file/d/1MXifz3bYeN0t3LcU_ipQQ3keS16DCwQE/view?usp=drive_link"
  },
  {
    "id": 81929,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El que está en la cocina se da cuenta de lo que falta (2 C 2022)",
    "lecturas": "Jn 2, 1-11",
    "resumen": "Escuchamos lo que dicen María y Jesús mirando lo que hacen “No tienen vino”. Imaginamos a María en la cocina. Los servidores la rodean, expectantes. Sabemos que están a su lado porque inmediatamente l",
    "link": "https://drive.google.com/file/d/11a2xgWVvM0c3nRTZfbC7-TedkE9DoQ6C/view?usp=drive_link"
  },
  {
    "id": 7872,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "El pueblo de Dios ¡con Jesús en medio! (Bautismo C 2022)",
    "lecturas": "Lc 3, 15-16",
    "resumen": "Lucas nos presenta dos imágenes del Pueblo de Dios: una, es la del Pueblo en “expectación”. Esperando al Mesías. La otra imagen es la del Pueblo “en oración haciéndose bautizar”—. En ambos casos, Jesú",
    "link": "https://drive.google.com/file/d/1a8kV9KclxmrdDWo0pGsYZxDeIN-8ZUsW/view?usp=drive_link"
  },
  {
    "id": 63537,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Con la textura de los ojos de María (Santa María Madre de Dios 2022)",
    "lecturas": "Lc 2, 16-21",
    "resumen": "dos imágenes que son fuente de mucha consolación: Una, la imagen de “ María que guarda todas las cosas en su corazón ”.  Como dijo hoy Francisco: María",
    "link": "https://drive.google.com/file/d/1xaZDOC8ulBwV9x9qd3PVQOkskHL9Z6Ox/view?usp=drive_link"
  },
  {
    "id": 77133,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "AMAR A DIOS COMO A UN HIJO (Navidad 2 C 2022)",
    "lecturas": "uan 1, 1-5",
    "resumen": "es no son un ejercicio meramente intelectual, en el que uno está pensando solo, sino un encuentro con el Señor,  en el que conversamos de corazón a corazón con Jesús y con los personajes del Evangelio",
    "link": "https://drive.google.com/file/d/1a0limU0I3_aD-JkFinvQclUyTTuQ9k8y/view?usp=drive_link"
  },
  {
    "id": 11216,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "En la Pascua de la Hna Juliana",
    "lecturas": "ros 1.146",
    "resumen": "Roma, 24 de diciembre, 2021 Queridas Hermanas del Niño Jesús, La Pascua de nuestra querida Juliana a la casa del Padre me mueve el corazón compartir con ustedes algunas cosas lindas que hemos vivido c",
    "link": "https://drive.google.com/file/d/1vVHYJdmIlp8IGVW8qKUtQSKTwzQH3wRC/view?usp=drive_link"
  },
  {
    "id": 29869,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El secreto de Jesús: alegrar al Padre, estando en sus cosas (Sagrada Familia C 2021-2)",
    "lecturas": "Lc 2, 40-52",
    "resumen": "“Las cosas del Padre…”. ”. Cuando alguna “cosa” del Padre surge, se hace presente, se deja ver, para Jesús se transforma en un “tengo que estar allí”. Jesús nos revela, en primer lugar, que las cosas",
    "link": "https://drive.google.com/file/d/1ljE_SzCxvxKO-QWR9FqG_FiFyFWBlysr/view?usp=drive_link"
  },
  {
    "id": 2162,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Con una mano en los sueños de Dios y la otra en los propios sueños (Navidad C 2021-2)",
    "lecturas": "teo 1, 18-25",
    "resumen": "En este años dedicado a San José, que acaba de terminar, la misa de esta Nochebuena lo tiene como protagonista de la segunda Anunciación del Ángel. El mosaico de la Cueva de Manresa, nos muestra a un",
    "link": "https://drive.google.com/file/d/1XG8WCM0EWVnFmGSvNP9PQQ_4F-YD0Lkq/view?usp=drive_link"
  },
  {
    "id": 10707,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Creer: una manera de vivir el tiempo (4 C Adviento 2021-2)",
    "lecturas": "Lc 1, 39-45; lip 4, 4; Lc 1, 20",
    "resumen": "a las dos mujeres del evangelio de hoy –María e Isabel- centrando nuestra atención con sencillez en sentir y gustar cómo se da en ellas, de manera desbordante, la experiencia de una gran",
    "link": "https://drive.google.com/file/d/1N3xRl-pb1DiZVzv_oUAv7opqryKUiusj/view?usp=drive_link"
  },
  {
    "id": 88880,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Acrecentar nuestras ganas de ser buenos (Adviento 3 C 2021-2)",
    "lecturas": "cas 3, 10-18; Tit 2,11; Tit 3,4",
    "resumen": "¿Qué debemos hacer mientras esperamos al Señor que viene? ¿Qué debemos hacer…? Tres veces se repite la pregunta y en el evangelio esto significa que es una pregunta importante. Por tanto, la hacemos n",
    "link": "https://drive.google.com/file/d/1jmjdOt9kA_2VUqNIaFubmhLS2317Bxji/view?usp=drive_link"
  },
  {
    "id": 12505,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gente comprometida (Inmaculada C 2021-2)",
    "lecturas": "Lc 1, 26-38",
    "resumen": "Tomamos las primeras palabras que se refieren a María: estaba comprometida. Lo primero que nos hace saber de Ella y de José el evangelio es que es que estában desposada (comprometidos). Los vemos como",
    "link": "https://drive.google.com/file/d/1r31UH6jh7wlfIBJohud-5_qrhzsnYA6l/view?usp=drive_link"
  },
  {
    "id": 83446,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Sin anuncio no hay esperanza (2 C adviento2021)",
    "lecturas": "cas 3, 1-6; Cor 4, 5-7",
    "resumen": "El tiempo de la Oración, decíamos, no nos lo tenemos que hacer nosotros. Cuando entramos a rezar en una Iglesia silenciosa, vamos a un retiro o abrimos el Evangelio, el tiempo del Señor acampa en la t",
    "link": "https://drive.google.com/file/d/1efnILlw6JtMW2TmsSFQG707_21nmZMFy/view?usp=drive_link"
  },
  {
    "id": 86736,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Recen. No se cansen de rezar! (1 C Adviento 2021-2)",
    "lecturas": "Lc 21, 25-36; Ef 6, 18; y 5, 5",
    "resumen": "Todas las descripciones apocalípticas y las recomenda­ciones de estar atentos y de velar que hace el Señor a su Iglesia son para decirnos una sola cosa: “¡Recen, no se cansen de rezar”! Recen con esta",
    "link": "https://drive.google.com/file/d/1dWRcf4IL9qN794hmgfPIqojxuKem8avc/view?usp=drive_link"
  },
  {
    "id": 21266,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No ser «dueños de nuestro tiempo», para vivirlo como Jesús: atentos al Padre y sirviendo a los hermanos",
    "lecturas": "Jn 18, 33-38; Cor 8, 6; Mt 6, 25",
    "resumen": "El domingo pasado me quedó algo nuevo en el corazón y que me dio ganas de seguir meditándo: el consuelo de no ser dueño del tiempo. El consuelo de que sólo el Padre sea el dueño de mi tiempo. Y de man",
    "link": "https://drive.google.com/file/d/1Wx9XfrmFRb-QDCzUIAJKnesPh2O6GZlU/view?usp=drive_link"
  },
  {
    "id": 38594,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nuestro tiempo está en las manos del Padre, cuenta con la cercanía de Jesús y navega bajo el soplo del Espíritu (33 B 2021",
    "lecturas": "Mc 13, 24-32; Lc 23, 46; Jn 3, 8",
    "resumen": "“Es la hora la que nos posee, no nosotros los que la poseemos a ella” (Hans Urs von Balthasar). Estamos tan inmersos en el curso de los acontecimientos que no percibimos cuánto cambia nuestra vida a c",
    "link": "https://drive.google.com/file/d/14Dp6HqTtuNlD9-3Nu5TyjNfCsJ8ILtEN/view?usp=drive_link"
  },
  {
    "id": 44915,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La alegría del amor (32 B 202)",
    "lecturas": "Mc 12, 38-44; Ef 4, 7-12; Cor 9, 7",
    "resumen": "En Marcos, luego del mandamiento del amor, no está la parábola del Buen Samaritano. Pero sí está en cambio esta hermosísima parábola-real de la mujer viuda que echa sus dos moneditas en la alcancía de",
    "link": "https://drive.google.com/file/d/1w-rPnoRTpbnaiTvJx51hSpeE_wV3dkQU/view?usp=drive_link"
  },
  {
    "id": 47812,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Amar a Dios con todo el corazón (31 B 2021)",
    "lecturas": "Mc 12,28",
    "resumen": "Me mandas que te ame – nos mandas que te amemos- con todo el corazón. Decir corazón es decir nuestro centro afectivo, con el que deseamos, elegimos y nos adherimos a nuestro tesoro, las personas que m",
    "link": "https://drive.google.com/file/d/1444UGSTz-KeM-kWOUaYX4sO5kiOd0q_U/view?usp=drive_link"
  },
  {
    "id": 11491,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bartimeo, el mendigo ciego que de ser un marginal, pasó a ser seguidor de Jesús, de un Jesús que siempre está “en salida” (Domingo 30 B 2006)",
    "lecturas": "Mc 10, 46-52; Mc 1, 16",
    "resumen": "En pocos renglones Marcos nos muestra el momento clave de un largo proceso interior, el de Bartimeo, ciego mendigo, que de estar sentado a un costado del camino recupera la vista y se convierte en dis",
    "link": "https://drive.google.com/file/d/1Mk-XeXKRuUM2_Sjz917RIFr7okzYb7Lz/view?usp=drive_link"
  },
  {
    "id": 27590,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Mentalidad de servidores (29 B 2021)",
    "lecturas": "Mc 10, 35-45; Rm 12, 2; Jn 13, 12-17",
    "resumen": "Mentalidades: El grupo, Santiago y Juan, Jesús, Iglesia Después de la transfiguración, de la que el Señor hizo participar a Santiago y Juan junto con Simón Pedro, los discípulos se pusieron más “proac",
    "link": "https://drive.google.com/file/d/18KttGWSQ5cJ2j6GAUYfmJasmk6yV7GBp/view?usp=drive_link"
  },
  {
    "id": 23636,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La mirada del Señor (28 B 2021)",
    "lecturas": "Mc 10, 17-31",
    "resumen": "www.youtube.com/watch?v=8OhCA4TnP0M Los ojos de Jesús Nos centramos un rato en la mirada de amor de Jesús al joven rico. Se ve que Marcos pescó algo especial en ella, porque dice: “Jesús mirándolo a l",
    "link": "https://drive.google.com/file/d/1rB0jlam7GnMqEjfgAZQ6wf8WeOm7N43F/view?usp=drive_link"
  },
  {
    "id": 67039,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La pastoralidad de la Iglesia como criterio (27 B 2021)",
    "lecturas": "Mc 10, 2-16",
    "resumen": "Al ver que esta semana toca este evangelio no pude evitar un pensamiento que es como si viniera adherido al tema de la familia: “otra vez hablar del divorcio”. Vino en mi ayuda otro pensamiento más po",
    "link": "https://drive.google.com/file/d/1sXjtVQ1fUFXn0y9WKPw0jyDvEWy0TlBw/view?usp=drive_link"
  },
  {
    "id": 78745,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Marca Jesús (26 B 2021)",
    "lecturas": "Jn 1, 3; Col 1, 16-17; Col 3, 15-17",
    "resumen": "Te pedimos Señor, que quienes adoramos el Santísimo nombre de Jesús disfrutemos de la dulzura de su gracia en esta vida y de su gozo para siempre en el Cielo. (Oración colecta de la Misa del Nombre de",
    "link": "https://drive.google.com/file/d/1kwWQ1wjlxrg0ZE147sayAqjP25U69NNo/view?usp=drive_link"
  },
  {
    "id": 11945,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sonreír con los ojos (25 B 2021)",
    "lecturas": "Mc 9, 30-37; Rm 12, 7-8",
    "resumen": "La escena del niño al que Jesús pone en medio del grupo que discutía acerca de quién era el más grande es un adelanto del lavatorio de los pies que realizará el Señor en la última cena. En ella, el qu",
    "link": "https://drive.google.com/file/d/1NFPSO_lI3-QsrJSxXdoQdtEYZsiSO9Pr/view?usp=drive_link"
  },
  {
    "id": 93628,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "“Estás tentado!”(24 B 2021)",
    "lecturas": "cos 8, 27-35",
    "resumen": "Escuchamos lo que le dice el Señor a Pedro. «¡Sal, ve detrás de mí, Satanás! Porque no disciernes (phroneis) según los criterios de Dios, sino con los criterios de los hombres.» Tratamos de escuchar e",
    "link": "https://drive.google.com/file/d/1aVn0Os7jvXW69yLZLNh0UVajkIWA4VaE/view?usp=drive_link"
  },
  {
    "id": 74142,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Un Jesús cercano, a punto de contagio (23 B 2021)",
    "lecturas": "Mc 7, 31-37",
    "resumen": "Todo lo ha hecho bien! Ese es Jesús: El que hace todo bien, el único que hace bien el bien , en las pequeñas y en las grandes cosas. Hace unos días, leyendo el evangelio de la primera pesca milagrosa,",
    "link": "https://drive.google.com/file/d/1gkcTu7CIEGze1ZAdPKMoJ9aD2hyzOdfb/view?usp=drive_link"
  },
  {
    "id": 52033,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Aumentar el peso de nuestro Corazón para adorar al Padre (22 B 2021)",
    "lecturas": "Mc 7, 1-23",
    "resumen": "Jesús señala en dirección a la interioridad: es en el corazón donde nos acercamos o nos alejamos de Él. En mi corazón es donde me voy convirtiendo en un adorador o en un idólatra. Pido la gracia de ad",
    "link": "https://drive.google.com/file/d/1wtTOSfgwUoln-TtctmezxFOxJ3de7Jlg/view?usp=drive_link"
  },
  {
    "id": 59053,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Rezar es andar en compañía con quien sabemos que nos ama o “un lenguaje en el que no hay lugar para la murmuración” (21 B 2021)",
    "lecturas": "uan 6, 60-69",
    "resumen": "Duro es este lenguaje… Al escuchar el discurso del pan de vida muchos de los discípulos  comenzaron a murmurar. Me preguntaba: ¿Qué es propiamente lo duro, lo difícil de escuchar y aceptar de este len",
    "link": "https://drive.google.com/file/d/1RCXV-z0xfwcYXd--xHc3EBL4bsI1nim-/view?usp=drive_link"
  },
  {
    "id": 59118,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Elevada en andas sobre los hombros del pueblo fiel de Dios (Asunción B 2021)",
    "lecturas": "Lc 1, 39-56",
    "resumen": "r a María a través de todos los textos. Como si uno tuviera muchas fotos de nuestra Señora, una más linda que la otra, y las fuera",
    "link": "https://drive.google.com/file/d/1zG7tZxx9lhpW7AHU6gnvkVixUFAkMgya/view?usp=drive_link"
  },
  {
    "id": 34283,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Atraídos por el Padre vamos a Jesús, Pan de vida (19 B 2021)",
    "lecturas": "Jn 6, 41-51; Jn 12, 32; Jn 21, 6",
    "resumen": "Los judíos murmuraban de Jesús, porque había dicho: ‘Yo soy el pan que ha bajado del cielo’. Y decían: ‘¿Acaso este no es Jesús, el hijo de José? Nosotros conocemos a su padre y a su madre. ¿Cómo pued",
    "link": "https://drive.google.com/file/d/10iaFPKRwoBmInXd5PjPyS9yqvizXd1qX/view?usp=drive_link"
  },
  {
    "id": 43995,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Mi Padre es quien les da el verdadero pan del cielo (18 B 2021)",
    "lecturas": "Jn 6, 24-35",
    "resumen": "La gente sencilla del pueblo fiel busca a Jesús y el Señor les enseña a discernir bien lo que en realidad buscan. Les hace notar: Ahora me buscan porque han comido los panes y se han saciado. Esta es",
    "link": "https://drive.google.com/file/d/18F6Ysvo0XvabZDowiGbwmn6TVDRFzQMu/view?usp=drive_link"
  },
  {
    "id": 64640,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Interceder (17 B 2021)",
    "lecturas": "Jn 6, 1-15; Mt 6,6",
    "resumen": "En este tiempo de vacaciones en nuestra querida enfermería San Pedro Canisio, junto a la Curia General Jesuita, ando con tiempo de sobra para rezar y la verdad es que lo hago a gusto. Y como desde hac",
    "link": "https://drive.google.com/file/d/1YNzcOvyrnW3VvSFBOAi8Rz5Gwn4hzKXh/view?usp=drive_link"
  },
  {
    "id": 10859,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Compañerismo (16 B 2021)",
    "lecturas": "Mc 6, 30-34",
    "resumen": "Este evangelio es uno de mis preferidos. Se respira compañerismo en él.. Y eso hace a lo más hondo que descubrió Ignacio de Jesús: su deseo de amistad con nosotros.Por eso le puso el nombre de “Compañ",
    "link": "https://drive.google.com/file/d/1pUwSo1MmT46xWYahXdb_JzPlD3qXOIaQ/view?usp=drive_link"
  },
  {
    "id": 10213,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La alegre sobriedad del compartir (15 B 2021)",
    "lecturas": "Mc 6, 7-13; Rm 8, 35",
    "resumen": "En lo que se refiere a personas, Jesús suma: envía a sus discípulos de dos en dos; en lo que es cuestión de cosas, Jesús se muestra sobrio: solo un bastón, ninguna mochila, una sola túnica… El Reino c",
    "link": "https://drive.google.com/file/d/1hWIxeR4rFpnUa-e7yDBlVrRijQNIZW1Z/view?usp=drive_link"
  },
  {
    "id": 73189,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Saber admirarse, como Jesús (14 B 2021)",
    "lecturas": "cos 6, 1-6; Jn 11, 42",
    "resumen": "“El se admiraba de su incredulidad”, nos dice Marcos. Jesús se admira y proverbializa lo que siente: “Un profeta sólo es desprestigiado en su tierra”. Así como lo admira la fe, al Señor lo admira tamb",
    "link": "https://drive.google.com/file/d/1i8P0L9CxJ3EJRAVNsHPpc2et0kkh5CjR/view?usp=drive_link"
  },
  {
    "id": 68535,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Un Dios que habla con los pequeñitos de su pueblo y tiene con ellos «coloquios de misericordia» (13 B 2021)",
    "lecturas": "cos 5, 21-43",
    "resumen": "a Jesús que “se da vuelta” cuando la mujer enferma toca el borde de su manto y a Jesús que “se inclina” para dar la mano a la niña y hacer que se levante. Los hechos exteriores, la curaci",
    "link": "https://drive.google.com/file/d/1WNVEx62tUdqF1qZkJH2HXetn5PEGt_6y/view?usp=drive_link"
  },
  {
    "id": 28315,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nosotros sabemos, Padre, cuánto te importa (12 B 2021)",
    "lecturas": "cos 4, 35-41; Lc 10, 40; Pe 5, 7",
    "resumen": "La primera frase que toma forma en mi interior al escuchar este evangelio dice algo así: “Jesús calmó aquella tormenta, pero no se ve que calme las nuestras”. Le respondo desde el evangelio, teniendo",
    "link": "https://drive.google.com/file/d/126LOoWrrlnVI6CRcUD6n_y-I99bAL1Zy/view?usp=drive_link"
  },
  {
    "id": 38759,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sembrar Reino, cosechar Reino (11 B 2021)",
    "lecturas": "Mc 4, 26-33",
    "resumen": "Sucede con el Reino de Dios como sucede con un hombre que siembra y que, cuando llega el momento, cosecha. El Reino, como la semilla, crece por sí solo. Pero se necesita uno que siembre y que coseche.",
    "link": "https://drive.google.com/file/d/1MJjstTBOTnoAcopCMokiRcIaY1Ff4hXb/view?usp=drive_link"
  },
  {
    "id": 28458,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Huésped (Corpus Christi B 2021)",
    "lecturas": "Mc 14, 12-26; Lc 2, 17; Lc 19, 17",
    "resumen": "r el misterio de la Eucaristía, nos detenemos hoy en el lugar donde el Señor quiso celebrar la Ultima Cena. El piso alto de aquella hospedería nos indica algo muy especial acerca de cómo",
    "link": "https://drive.google.com/file/d/1uUwF7KdCyYUymX36M_Bm3V9ac4ift5bz/view?usp=drive_link"
  },
  {
    "id": 62397,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Espíritu nos ayuda a discernir dónde es que el Padre nos pone con su Hijo y cómo nos es propicio Jesús en cada situación (Trinidad B)",
    "lecturas": "Mt 28, 16-20; Gal 4, 6; Ef 2, 18-19",
    "resumen": "r cómo se lo recibe “en comunidad ”, volvimos a reflexionar para sacar provecho, pidiendo la gracia de",
    "link": "https://drive.google.com/file/d/1Yx9YY4KC7BTYmzmX9DN9yazUbvqHv0tp/view?usp=drive_link"
  },
  {
    "id": 32757,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Espíritu se derrama en comunidad (Pentecostés B 2021)",
    "lecturas": "Jn 20, 19-23",
    "resumen": "¿Qué valor está en juego en el texto? Subrayamos el “recibir”. El Espíritu Santo es Don y la actitud ante El es de receptividad. Una receptividad comunitaria, no individualista. Miramos a los discípu",
    "link": "https://drive.google.com/file/d/1KrfnCgfiypIk_dAs8wLWdGPrTPoi8OR6/view?usp=drive_link"
  },
  {
    "id": 20873,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Encontrar nuestro lugar para interceder y amar (Ascensión B 2021)",
    "lecturas": "Mc 16, 15-20; Slm 16, 11; Hb 12, 2",
    "resumen": "Miramos a Jesús que “se sentó a la diestra del Padre”. La imagen no nos dice tanto como a los antiguos, para los que las ceremonias de coronación en las que finalmente el Rey se sentaba en su trono, e",
    "link": "https://drive.google.com/file/d/1OrgQF5ShYstnlubsd75IJ7nW0Y2UAyTk/view?usp=drive_link"
  },
  {
    "id": 17285,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "¿Cómo ama el Padre a Jesús? Contemplar este amor es vital, ya que el Señor nos manda amar del mismo modo (Pascua 6 B 2021)",
    "lecturas": "Jn 15, 9-17; Jn 13, 1; Jn 16, 25",
    "resumen": "básica, la fuente de toda otra",
    "link": "https://drive.google.com/file/d/12eieNBq6rz4HFqgkIRrscxmUuvdDZE6b/view?usp=drive_link"
  },
  {
    "id": 98000,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "“Silencio, personas trabajando” (Pascua 5 B 2021)",
    "lecturas": "Jn 15, 1-8; Jn 5,17; Is 26,12",
    "resumen": "Con la metáfora de la Vid, Jesús nos pone a todos consigo en las manos del Padre trabajador. El Señor nos abraza, usando esa imagen de comunión tan estrecha y fecunda como es la unión de los sarmiento",
    "link": "https://drive.google.com/file/d/1h8o2pVoNXhE9Pzc49BaJ99wie7ey90Ha/view?usp=drive_link"
  },
  {
    "id": 28036,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pastorear como el Señor a las ovejas, en medio de un clima hostil, que parece hecho a los zarpazos (Pascua 4 B 2021)",
    "lecturas": "Jn 10, 11-18",
    "resumen": "Me resuenan algunas palabras: zarpazos, pastorear, ovejas de otro redil y rebaño. Les doy vueltas en la boca como “carozos de aceituna” (el último libro traducido al español de Erri de Luca, que usa e",
    "link": "https://drive.google.com/file/d/1HOtSI3esZRXGfxbsepSKC2uHR5hkcFIp/view?usp=drive_link"
  },
  {
    "id": 95228,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "En qué pone sus énfasis el Señor Jesús resucitado (Pascua 3 B 2021)",
    "lecturas": "Lc 24, 35-48",
    "resumen": "En el relato de Lucas (como en todos los relatos de la Resurrección), se notan ciertos énfasis tanto en las palabras como en las actitudes del Señor que nos ayudan no solo a recibir el testimonio de l",
    "link": "https://drive.google.com/file/d/1OMkoQzs31xzxGATl9aW3lEn8KVxAGQ8Y/view?usp=drive_link"
  },
  {
    "id": 27563,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "La fe y las ideas (Pascua 2 B 2021)",
    "lecturas": "Jn 20, 19-29",
    "resumen": "Mirando las cosas desde nuestra perspectiva (como testigos de Jesús resucitado, enviados a proclamar la buena noticia a todos los pueblos) nos animamos a aclararles algunas cosas que les pueden ayudar",
    "link": "https://drive.google.com/file/d/123hMW290Mtm2TPTcPzTjszEfwkmDpJOg/view?usp=drive_link"
  },
  {
    "id": 8624,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Dos tipos de vacíos muy distintos (Pascua B 2021)",
    "lecturas": "Mc 16, 1-8",
    "resumen": "Años después, las tres piensan que ha estado bien la escena que ha elegido Marcos para terminar su evangelio. Aunque a algunos les haya parecido insuficiente y otros de la comunidad hayan agregado fin",
    "link": "https://drive.google.com/file/d/1DueZ-Hm4a1Xa478vtkL6ybH6mfpuOX1M/view?usp=drive_link"
  },
  {
    "id": 74742,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús rey de paz (Domingo de Ramos B 2021)",
    "lecturas": "Mc 11, 1-10",
    "resumen": "Mientras la multitud canta y expresa su entusiasmo, cada uno a su manera, Jesús y el burrito parecen estar a la escucha en medio de la algarabía general. El Señor tiene alta la mirada, los ojos fijos",
    "link": "https://drive.google.com/file/d/15iHHUberGNUdhOb6IprVtex_PTZqxs6B/view?usp=drive_link"
  },
  {
    "id": 37882,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Notoriedad (5 B Cuaresma 2021)",
    "lecturas": "Jn 12, 20-33",
    "resumen": "Felipe busca un lugar donde estar un rato a solas para reflexionar. Ha tenido que despachar a los griegos con la excusa de que el Maestro está ocupado y ahora se ha quedado un poco aparte para repasar",
    "link": "https://drive.google.com/file/d/15KvxlBQmtVY0JalexlUnILM-2N_-Oobu/view?usp=drive_link"
  },
  {
    "id": 42734,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "El “tanto amor” del que Jesús le habla a Nicodemo (4 B Cuaresma 2021)",
    "lecturas": "uan 3, 14-21",
    "resumen": "Jesús dijo a Nicodemo : «De la misma manera que Moisés levantó en alto la serpiente en el desierto,  también es necesario que el Hijo del hombre sea levantado en alto, para que todos los que creen en",
    "link": "https://drive.google.com/file/d/1qmACLg91qlU3YAbcilwrr_jRomoLp7-K/view?usp=drive_link"
  },
  {
    "id": 68656,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Los celos por tu Casa me han devorado (3 B cuaresma 2021)",
    "lecturas": "Sal 69, 9; uan 2, 13-25",
    "resumen": "Y los discípulos recordamos todos lo mismo: ‘Los celos por tu casa me han devorado’, como dice nuestro salmo 69. Veníamos de la fiesta apacible de las bodas de Caná, con el sabor del vino bueno aún en",
    "link": "https://drive.google.com/file/d/1DOvdx9Wf6JAMtLPWBjcImFGQBm1aCFgW/view?usp=drive_link"
  },
  {
    "id": 80164,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Fabuladores o testigos, esa es la cuestión (2 B cuaresma 2021)",
    "lecturas": "Mc 9, 2-10; Pe 1, 13-16",
    "resumen": "r del mosaico de Rupnik sobre la Transfiguración del Señor, que abarca toda la pared central del altar de la iglesia de San Giacomo y san Giovanni, en Milán. La",
    "link": "https://drive.google.com/file/d/1x4lzyYKHsqovbZOIOHRXihE7V-ARNJ6c/view?usp=drive_link"
  },
  {
    "id": 22668,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "En este distanciamiento social: o partes de la pura fe o te arriesgas a transcurrir tu vida en medio de relaciones que, por no contar con la cercanía bendecida de la carne, se van volviendo superficiales e inconsistentes (1 B Cuaresma 2021)",
    "lecturas": "Mc 1, 12-15",
    "resumen": "El evangelio de hoy comienza con la palabra inmediatamente ( euthus ). En pocas frases llenas de riqueza y colorido evangélico, Marcos nos hace ver a Jesús lleno del Espíritu y movido por Él a la acci",
    "link": "https://drive.google.com/file/d/1N1-2cfFgGncVV9LHO7upFdtN_LCyXlG5/view?usp=drive_link"
  },
  {
    "id": 58221,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El leproso y la fuente de vida que atrae (6 B 2021)",
    "lecturas": "Mc 1, 40-45; Flp 2,5",
    "resumen": "¿El Señor se podía contagiar? ¿O era inmune a las enfermedades físicas? La pregunta me surge porque en la imagen se ve cómo el leproso le toca el pie al Señor con su mano vendada y cómo Jesús, llenánd",
    "link": "https://drive.google.com/file/d/1Fln-Bfw2Bf57zQDuPcL2so88pmbps1gC/view?usp=drive_link"
  },
  {
    "id": 65264,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Compartir lo provisorio. Para que nuestra oración sea Eucarística (5 B 2021)",
    "lecturas": "Mc 1, 29-39",
    "resumen": "Siempre me conmueve la imagen de nuestro Señor Jesús rezando. “Se levantó temprano y se fue a un lugar solitario. Y allí rezaba”, dice el Evangelio de Marcos. Jesús le daba tiempo a la oración (y no e",
    "link": "https://drive.google.com/file/d/1igIv_mmB4x5UXL0its1vltMOivmfew7W/view?usp=drive_link"
  },
  {
    "id": 91075,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Discernir el mal espíritu religioso: ni se te ocurra creerle! (4 B 2021)",
    "lecturas": "cos 1, 21-28",
    "resumen": "Jesús entra en Cafarnaún y va a enseñar a la sinagoga. El papa Francisco hacía notar la semana pasada que Juan el Bautista predicaba en el desierto, como si dijéramos “a las personas que iban hacer un",
    "link": "https://drive.google.com/file/d/1pAMAgjigv1mh3_bFr3DmHdbtQK8YbY_D/view?usp=drive_link"
  },
  {
    "id": 99502,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La cercanía del Reino y nuestra inmediatez para entrar: cuestión de madurez, no de tiempo (3 B 2021)",
    "lecturas": "Mc 1, 14-20",
    "resumen": "el momento en que Simón Pedro con los ojos fijos en Jesús (cuyo mosaico está en la pared de enfren",
    "link": "https://drive.google.com/file/d/1jOBr0Ce5NuxRvgQFiz_VLv9N1JI6S3Wo/view?usp=drive_link"
  },
  {
    "id": 49278,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Es lógico que un individualista sea ateo, porque en su espacio exclusivo y excluyente Dios no habita (2 B 2021)",
    "lecturas": "Jn 1, 35-42",
    "resumen": "Maestro donde habitas. En el mosaico de Rupnik se representan dos tiendas: una de la tierra, que cubre a Jesús y a los discípulos, y otra del cielo, hacia la que Jesús señala con su mano indicando la",
    "link": "https://drive.google.com/file/d/1ZIMrS-kw8nQhmyRsOrhsVzJeMVfiRP_5/view?usp=drive_link"
  },
  {
    "id": 55794,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Desnivelar, para que se abra el Cielo (Bautismo B 2021)",
    "lecturas": "Mc 1, 7-11",
    "resumen": "El mosaico de Rupnik muestra la fuerza con que se abren los cielos en el bautismo de Jesús. La apertura del cielo es algo más que un hecho físico. Se experimenta por lo que acontece: el descenso del E",
    "link": "https://drive.google.com/file/d/1kJ99hs5xYTVFI5oHda6CjxyiuaXTSJEl/view?usp=drive_link"
  },
  {
    "id": 52251,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gente regia, gente real (Epifanía B 2021)",
    "lecturas": "Mt 2, 1-12",
    "resumen": "La tradición dice que los Reyes Magos eran sabios, en el sentido de buscadores de la verdad. No de una verdad abstracta, sino buscadores del verdadero Dios: ese que se encuentra superando cada vez las",
    "link": "https://drive.google.com/file/d/1lK9Z1uu4_WrK3xlCBivEKjAOvNs1ucUm/view?usp=drive_link"
  },
  {
    "id": 4126,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Jesús, esa Palabra a la que el Espíritu le pone música (2 B Navidad)",
    "lecturas": "uan 1, 1-5",
    "resumen": "La Iglesia nos invita a comenzar el año con Jesús, la Palabra encarnada. Con esa Palabra que no es ningún concepto abstracto, sino que tiene Madre: María. Con esa Palabra a la que el Espíritu le pone",
    "link": "https://drive.google.com/file/d/1XE_zM8zuxmyFJrAL8O-KAcShAzhxkB8E/view?usp=drive_link"
  },
  {
    "id": 63250,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Lo que hay que atesorar del 2020 (Santa María Madre de Dios B 2021)",
    "lecturas": "cas 2, 16-21; Lc 2,19",
    "resumen": "Qué cosas atesorar en el corazón del año que pasó? Es un trabajo de discernimiento elegir qué quiere el Señor que guardemos y qué se debe desechar. Un paso del discernimiento consiste en “ponderar” la",
    "link": "https://drive.google.com/file/d/1Xag7meMKgf4Bx_1NzeKCTb5VuvnSqaVR/view?usp=drive_link"
  },
  {
    "id": 20300,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Abuelos que sueñan con nietos (Sagrada familia B 2020)",
    "lecturas": "Lc 2, 22-40",
    "resumen": "Charlando ayer por zoom con mis primos y hermanas salió en la conversación que los jóvenes de hoy no tienen mucho apuro por tener hijos y alguien dijo: “vamos a tener que adoptar nietos”. La frase me",
    "link": "https://drive.google.com/file/d/1ombpPg5OJQ1OWZIkz9SU5vCZdCTPEekA/view?usp=drive_link"
  },
  {
    "id": 68457,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "José, La Virgen, los pastores y los colores de Dios (Navidad B 2020)",
    "lecturas": "cas 2, 1-20",
    "resumen": "Esperando la misa de la noche buena, mientras leo el Evangelio, me vienen ganas de hablar de San José y de los pastores. De San José la Virgen y los pastores, se entiende, Porque en el Evangelio cuand",
    "link": "https://drive.google.com/file/d/1YuBW2SkAElIOSE3Ve4SNIAXlEbBnfo7e/view?usp=drive_link"
  },
  {
    "id": 27382,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Encarnar la Palabra (4 B Adviento 2020)",
    "lecturas": "cas 1, 26-38",
    "resumen": "La imagen de Rupnik nos muestra María recibiendo la Palabra de manos del Arcángel Gabriel. El papiro es bien grande! No se trata solamente de una palabra profética particular, sino que es Jesús mismo,",
    "link": "https://drive.google.com/file/d/1_e-wTh9Bm2igpWftI1vAGCZOr_cUqVkP/view?usp=drive_link"
  },
  {
    "id": 61795,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "20 puntos de reflexión sobre la legalización del aborto (3 B Aviento 2020)",
    "lecturas": "Jn  1, 6-8",
    "resumen": "1 Pensaba que si la revelación fuese totalmente traducible en categorías culturales -en filosofía, en leyes…- no hubiese sido necesario que el Señor se encarnara y viniera a dar su vida -no solo a ens",
    "link": "https://drive.google.com/file/d/1VWApXdeGa2Q1TJ5IhfZs0No4z6oNuws_/view?usp=drive_link"
  },
  {
    "id": 63550,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Jesús, a quien amamos sin haberlo visto (2 B Adviento 2020)",
    "lecturas": "Mc 1, 1-8",
    "resumen": "Llevar la gente a Jesús. Juan Bautista es el icono de esta tarea apostólica. Para realizarla plenamente tiene claro que, por una parte, debe predicar la palabra de Dios y, por otra, debe disminuir par",
    "link": "https://drive.google.com/file/d/1p0Jk1xxGNYZy5WZrxH1aCDSFza88HF_W/view?usp=drive_link"
  },
  {
    "id": 61567,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Estar “pre-venidos” o “con las cosas rezadas” (1 B Adviento 2020)",
    "lecturas": "Mc 13, 33-37",
    "resumen": "Comenzamos el adviento con esta exhortación de Jesús a a velar a estar despiertos y me gusta la traducción que dice: “estar prevenidos”. Prevenidos o “pre-idos”, en el sentido de estar no solo con la",
    "link": "https://drive.google.com/file/d/1TNPBh8USEzrRZS-LhbdZ6xZc8jMDL8G1/view?usp=drive_link"
  },
  {
    "id": 15059,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La conmovedora identificación de Jesús con sus-nuestros hermanos más pequeños (34 A 2020)",
    "lecturas": "Mt 25, 35-46; Mt 25,35; Rm 12,15",
    "resumen": "En la evocación del juicio final, Jesús nos hace poner la mirada en nuestras acciones. Nos revela que nos juzgará por como hemos tratado a los más pequeños: “cada vez que lo hicieron con el más pequeñ",
    "link": "https://drive.google.com/file/d/13e8KxZAXVZPvycDzjyNgoEKWnyIc50_9/view?usp=drive_link"
  },
  {
    "id": 46728,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Economía y Reino (33 A 2020)",
    "lecturas": "ros 1.146",
    "resumen": "El primer sentimiento que identifiqué que se movía en mi interior al leer hoy la parábola de los talentos fue el del miedo. Me vi reflejado en ese “tuve miedo” del tercer servidor. Como a él lo llevó",
    "link": "https://drive.google.com/file/d/1PgFEXZDOJSr3_gai4KTSfw-SgKJM0jNJ/view?usp=drive_link"
  },
  {
    "id": 30942,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gente prudente, con aceite de más (32 A 2020)",
    "lecturas": "Mt 25, 1-13",
    "resumen": "Toda actividad humana tiene su propia prudencia y su propia necedad. No existe una prudencia en abstracto, quiero decir. En la tarea de iluminar al novio que entra en la casa de la novia el día de la",
    "link": "https://drive.google.com/file/d/1algEADgjbe3F1YbVH1oUwfuDCZ_D93Yg/view?usp=drive_link"
  },
  {
    "id": 58851,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Fiesta de todos los santos … y de una santa de la puerta de al lado (31 A 2020)",
    "lecturas": "teo 5,1-12",
    "resumen": "En estos días previos a una operación al riñón, que si Dios quiere me harán este viernes a la mañana, me venía insistentemente un pensamiento acerca de cómo hacer para suspender, por un tiempo al meno",
    "link": "https://drive.google.com/file/d/1bDf5pY8a2ji1ZuGSTtBx5h2NXAJn1JuG/view?usp=drive_link"
  },
  {
    "id": 35524,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Como a ti mismo -ni más ni menos- (30 A 2020).",
    "lecturas": "Mt 22, 34-40",
    "resumen": "Ya sabíamos que la pre-hospitalización en el IFO (Istituti fisioterapici ospitalieri) llevaría toda la mañana. Pero como ya tenía hechos tantos estudios pensamos con Paolo, mi ángel custodio enfermero",
    "link": "https://drive.google.com/file/d/16AoQvi2-uI5zmdHEZQ2xAl1FtBH9YCNh/view?usp=drive_link"
  },
  {
    "id": 44564,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La amistad social y el uso del dinero (29 A 2020)",
    "lecturas": "Mt 22, 15-22; el 99,90",
    "resumen": "El evangelio dice que los fariseos se retiraron después de escuchar la parábola del Señor sobre el vestido de bodas, que se juntaron con los herodianos (que eran sus enemigos) para ver cómo le podían",
    "link": "https://drive.google.com/file/d/1Z9yoyS_BKZsSu6RAee4M5njkAw1f9N01/view?usp=drive_link"
  },
  {
    "id": 24670,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El vestido de Bodas (28 A 2020)",
    "lecturas": "Mt 22, 1-14",
    "resumen": "El vestido de bodas… La palabra «bodas» – que aparece ocho veces en la parábola que Jesús le cuenta a los que lo critican y lo quieren matar- es la clave de la invitación, del banquete y del vestido.",
    "link": "https://drive.google.com/file/d/1KmTENwApGkK6USRNKwvgYM6HyroDs5jX/view?usp=drive_link"
  },
  {
    "id": 75812,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "“Nuestra intención de compra” piedra angular del mundo del consumo y metáfora de la vida espiritual (27 A 2020)",
    "lecturas": "Mt 21, 33-46; Ex 17, 5; Co 10, 4",
    "resumen": "En su discusión con los ancianos y sumos sacerdotes Jesús cuenta una parábola en la que la lógica de unos viñadores que no querían pagar impuestos fue la de  matar al heredero: «Este es el heredero ma",
    "link": "https://drive.google.com/file/d/1Y0wnm9EL_IuPoKMc-RPENEl3prXQImaS/view?usp=drive_link"
  },
  {
    "id": 58633,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Dejarse ayudar con la cruz (26 A 2020)",
    "lecturas": "Mt 21, 28-32; Jn 6, 40",
    "resumen": "Así como a la parábola del Hijo pródigo la fuimos aprendiendo a ver como la parábola del Padre misericordioso, a está de los dos hijos, el que dice que no, pero después va a trabajar en la viña, y el",
    "link": "https://drive.google.com/file/d/1oJNYjtK7fYdhwCChu7MxbUBd2KhivnJ0/view?usp=drive_link"
  },
  {
    "id": 33731,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«Los igualaste a nosotros!» La bendición de ser iguales que la envidia convierte en lamento (25 A 2020)",
    "lecturas": "Mt 20, 1-16",
    "resumen": "Esta es una de esas parábolas particularmente provocativas del Señor. Todas lo son, pero esta se mete con la plata, con el sueldo, con lo que uno puede hacer con su dólares, y por eso hace que salten",
    "link": "https://drive.google.com/file/d/1PgSutISG7Rl-3hIzjstHXlHJivEhnhBJ/view?usp=drive_link"
  },
  {
    "id": 75475,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los co-servidores: los testigos de la Misericordia que no dejan pasar una injusticia a los más pequeños (24 A 2020)",
    "lecturas": "Mt 18, 21-35",
    "resumen": "En las parábolas hay que estar atentos a los detalles especiales. En esta, me llama a la atención el papel que Jesús le da a los «compañeros» o «co-servidores». La palabra que usa -syndoulos- nombra a",
    "link": "https://drive.google.com/file/d/1swdJMXykpj86-kwmHaJOH_f2xAuXYnKB/view?usp=drive_link"
  },
  {
    "id": 17750,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los odres nuevos de la presencia del Señor “en medio” de nosotros (23 A 2020)",
    "lecturas": "Mt 18, 15-20",
    "resumen": "Teología kerigmática Contaba un amigo que uno de los fieles le preguntó a su párroco  por qué no hablaba más de las cosas que predicaba el Papa y el cura le respondió que él «hablaba de Jesucristo», c",
    "link": "https://drive.google.com/file/d/1TSk84s5cP14uqaUroryCq1ADmde4RmfH/view?usp=drive_link"
  },
  {
    "id": 48287,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Aprende a discernir con Pedro, para que el mal espíritu no te aleje de tu cruz, esa que cuando la abrazas te hace quedar en las manos del Padre (22 A 2020)",
    "lecturas": "Mt 16, 21-27",
    "resumen": "Los discípulos nos ponen en contacto con un Jesús que quiere explicarles las cosas que están por pasar. No le resulta fácil. El Señor los ha ido preparando, especialmente después que le confirmara a P",
    "link": "https://drive.google.com/file/d/12o077yPIPu5nDwyIC_F8wflfVwyHm1BE/view?usp=drive_link"
  },
  {
    "id": 19978,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Entre Jesús y Pedro está el lugar espiritual para encontrarnos todos (21 A 2020)",
    "lecturas": "Mt 16, 13-20",
    "resumen": "Siempre me pregunto por qué le pregunta Jesús a sus discípulos que dice la gente sobre Él? La imagen que me viene hoy es la del pescador. Jesús tira el anzuelo en el corazón de los suyos y en el de su",
    "link": "https://drive.google.com/file/d/1b8Dh4OlMzQGhJTGMvwIX8ZdJpsfxLuQA/view?usp=drive_link"
  },
  {
    "id": 75715,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La fe no le molesta nunca al Señor (20 A 2020)",
    "lecturas": "Mt 15, 21-28",
    "resumen": "La fe. El señor se admira de la fe de esta mujer, de esta mamá. “Qué grande es tu fe. Hágase como deseas”, le dice. Cómo se da cuenta Jesús de que la mujer tiene una gran fe? Por un lado por su insist",
    "link": "https://drive.google.com/file/d/1pUcorGPxkmITRRABglQbj3IOhO19-gec/view?usp=drive_link"
  },
  {
    "id": 13374,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El coraje de caminar sobre el agua en la fe (19 A 2020)",
    "lecturas": "teo 14, 22-33",
    "resumen": "La palabra coraje está en el centro del pasaje de hoy. Jesús les dice: Ánimo! Coraje! soy Yo! no tengan miedo! El «soy Yo» lo repite dos veces y podemos imaginar que lo dice tocándose el pecho: soy Yo",
    "link": "https://drive.google.com/file/d/1O7iFfsN_Qeo81BuXtDoUnHArYsYPqf0q/view?usp=drive_link"
  },
  {
    "id": 73837,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Seguir a Jesús a pie (18 A 2020)",
    "lecturas": "Mt 14, 13-21",
    "resumen": "La gente siguió a Jesús a pie. En aquel contexto “a pie”, quería decir “por tierra”, es decir “no por mar”, no en barca. A pie también quería decir “no a caballo, ni en burro, ni en carro”. En la actu",
    "link": "https://drive.google.com/file/d/12OzQJ2pqSm75R4oYONPSFD7leQN1yszf/view?usp=drive_link"
  },
  {
    "id": 95840,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La perfecta leticia (17 A 2020)",
    "lecturas": "Mt 13, 44-52; Lc 15, 7; Jn 15, 10-11",
    "resumen": "Jesús nos habla hoy de los misterios de Su reino y lo hace en clave de alegría. Que es la que el oído fino del papa Francisco ha sabido percibir en medio del ruido de nuestra época, como ese “hilo de",
    "link": "https://drive.google.com/file/d/1RSDa4ev8rwSgoQFHLYHs_apDMBAfRlj-/view?usp=drive_link"
  },
  {
    "id": 16469,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gente con luz propia, como un cascabel (16 A 2020)",
    "lecturas": "Mt 13, 24",
    "resumen": "«Los justos resplandecerán como el sol en el Reino de su Padre», es lo que profetiza el Señor y lo ilustra con las parábolas del trigo y la cizaña, del grano de mostaza y de la levadura. O mejor: con",
    "link": "https://drive.google.com/file/d/1Bog3m69bts_qGr8vsGCFuFRIhBjFwTb-/view?usp=drive_link"
  },
  {
    "id": 52991,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Felices sus ojos porque ven al Sembrador, felices sus oídos porque oyen la parábola de la semilla (15 A 2020)",
    "lecturas": "Mt 13, 1-23; Mc 4, 13; Lc 13, 17",
    "resumen": "Felices sus ojos, porque ven; felices sus oídos, porque oyen… Qué es lo que vemos, para que podamos considerar felices a nuestros ojos? Qué es lo que oímos para sentir que son felices nuestros oídos?",
    "link": "https://drive.google.com/file/d/1SG9CHkMTkQgpSIzl6IdfipxZx75lM-ZN/view?usp=drive_link"
  },
  {
    "id": 47556,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Aprender de Jesús, pacífico y pobre de corazón, a rezar como niños (14 A 2020)",
    "lecturas": "Mt 11, 25-30",
    "resumen": "El Evangelio de hoy es un compendio de las palabras más queridas de Jesús: Padre, alabanza, niños pequeñitos, descanso del agobio de no poder más (la cruz), corazón pacífico, dulce, pobre. Cada una de",
    "link": "https://drive.google.com/file/d/1mTT-0ZNiAP3m3JlIWZ06IZuISYf5PdYb/view?usp=drive_link"
  },
  {
    "id": 36474,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús es Alguien especial, único en el mundo (13 A 2020)",
    "lecturas": "Mt 10, 37-42",
    "resumen": "El Señor habla usando imágenes. Las consideramos en conjunto, como diversos modos de comunicarnos un único mensaje, el cual se podría sintetizar así: solo si tratamos a Jesús como nuestra persona pref",
    "link": "https://drive.google.com/file/d/1j2M92XRjfuOCzTi3nPwroooZhzUnJymQ/view?usp=drive_link"
  },
  {
    "id": 5734,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La valentía del Padre quita el temor de los hijos (Domingo 12 A 2020)",
    "lecturas": "Mt 10, 26-33; Jn 4, 18",
    "resumen": "Cuatro veces aparece en el evangelio el término «miedo» ( fobos ), temor, y el Señor lo ahuyenta como Buen Pastor:con realismo y energía, usando ejemplos sencillos, como los de los pajaritos que están",
    "link": "https://drive.google.com/file/d/1tfZmNKkrsLsMczdj1DKJqkyD71gNODtH/view?usp=drive_link"
  },
  {
    "id": 23135,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Cuerpo de Cristo, en el que se nos muestra la Trinidad que sale de sí y viene a habitar entre nosotros (Corpus A 2020)",
    "lecturas": "uan 6, 51-58",
    "resumen": "Este tiempo de Covid-19 y de pandemia, en el que no podemos comulgar materialmente ni sacar el Corpus por las calles en multitudinaria procesión, muchos me cuentan que han tomado conciencia del valor",
    "link": "https://drive.google.com/file/d/1hh_kPoxFAi5cLO4BaqoQqpj_EohpPuce/view?usp=drive_link"
  },
  {
    "id": 97709,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Invocando a mi Jesús y a nuestro Padre en el Espíritu de toda la comunidad (Trinidad A 2020)",
    "lecturas": "Jn 3, 16-18; Cor 13, 13; Mc 14, 36",
    "resumen": "Padre, Padre mío ! (Mc 14, 36); Mi Maestro -Rabbuní- (Jn 20, 16) Jesús, mi querido Maestro!; Señor mío y Dios mío ! (Jn 20, 28); Espíritu Paráclito que estás con nosotros – con cada uno y con todos ju",
    "link": "https://drive.google.com/file/d/1cqso80jzf6KYUUHq0199V9y2yIiqOv-0/view?usp=drive_link"
  },
  {
    "id": 68080,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Espíritu del Padre y de Jesús y la imagen de la gallina de los huevos de oro (Pentecostés A 2020)",
    "lecturas": "Jn 20, 19-23; Gn 2, 7",
    "resumen": "Cuando Juan dice que Jesús «Exhaló sobre ellos diciendo: «reciban el Espíritu Santo», la acción del Señor de exhalar el aire de sus pulmones y la acción de los discípulos de recibir ese Aire Santo -el",
    "link": "https://drive.google.com/file/d/1NphjKCdf9U_H13eKpsceNDWoGsro1flU/view?usp=drive_link"
  },
  {
    "id": 19390,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La imagen de un cielo «inimaginable» (Ascensión A 2020)",
    "lecturas": "teo 28, 16-20; hos 1, 1-14; Cor 2, 9",
    "resumen": "r las pinturas y cuadros sobre la Ascensión del Señor al Cielo siempre me pregunto si nuestro imaginario cristiano no se quedó con una imagen congelada de aquel momento en que los discípul",
    "link": "https://drive.google.com/file/d/1JYKhJvG_pZwtmslHu3EXyIQJHfHdD2RB/view?usp=drive_link"
  },
  {
    "id": 78143,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Benditos pronombres personales que en boca de Jesús lo cambian todo (Pascua 6 A 2020)",
    "lecturas": "Jn 14, 15-26",
    "resumen": "Mi amiga misionera en Camerún, Victoria, me envía la exégesis que hacen con un amigo musulmán -Abdelmumin- partiendo de las raíces arameas del Evangelio. Hoy me resuena lo que dicen de los pronombres",
    "link": "https://drive.google.com/file/d/1f8fIeiCaqfVG-mmt8c_VnFDEAxYHbdnB/view?usp=drive_link"
  },
  {
    "id": 81813,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "La primera Palabra de Jesús, la que hay que escuchar en todas las demás (Pascua 5 A 2020)",
    "lecturas": "uan 14, 1-12",
    "resumen": "Yo estoy en el Padre y el Padre está en mí. Quien me ve a mí, ve al Padre… Qué quiere decir el Señor con esto de estar y de ver al uno en el otro? San Agustín hace una explicación que nos puede ayudar",
    "link": "https://drive.google.com/file/d/1zP-jRgaoA_iU-U5t854Lgl4zuYxMQ7rQ/view?usp=drive_link"
  },
  {
    "id": 32904,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Noi, le pecore che Gesù chiama per nome (Pasqua 4 A 2020)",
    "lecturas": "Gv 10,1-10; Gv 1,3; Mc 4,39",
    "resumen": "zione del Vangelo, secondo l’indicazione di s. Ignazio: «Guardare le persone e ascoltare ciò che dicono»? Avevo iniziato a scrivere immaginando c",
    "link": "https://drive.google.com/file/d/1dtiDUtOYlipNGoW2rMNFodj_VbIij-Yz/view?usp=drive_link"
  },
  {
    "id": 46528,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El criterio de la vida es la sobreabundancia (Pascua 4 A 2020)",
    "lecturas": "Jn 10, 1-13",
    "resumen": "La vida es un misterio totalizante “Yo he venido para que las ovejas tengan vida”, dice el Señor. Y agrega: “para que tengan vida en abundancia”. Ese es el fin de las acciones de Jesús, para eso vino,",
    "link": "https://drive.google.com/file/d/1qeWj0aJJdfWn6s4j_-GQqx4f-1Zs-5v3/view?usp=drive_link"
  },
  {
    "id": 92082,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Emmaus e noi: l’altro discepolo (Pasqua 3 A 2020)",
    "lecturas": "Lc 24, 32; At 15,28; Mt 18, 19-20",
    "resumen": "zione Ignazio ci dice di: “udire quello che dicono [le persone] e ricavarne qualche frutto” (EE 194). «Non ardeva forse in noi il nostro cuore m",
    "link": "https://drive.google.com/file/d/1MZr7fG36LY9fT9ZMRnsxY5YlkLa3ODJ5/view?usp=drive_link"
  },
  {
    "id": 13869,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "La idea es que Jesús nunca deja de confiar en nosotros (Pascua 3 A 2020)",
    "lecturas": "Lc 24, 13-35",
    "resumen": "Ayer en Radio María, Javier Cámara me preguntó: “En el fondo de tu corazón, padre, ¿qué significa ‘creer’?”. Y yo me acordé de otra pregunta que me hizo una vez un sacerdote del cual me olvidé la cara",
    "link": "https://drive.google.com/file/d/1hUzeON_MgL6Bqlvnb5BdF6DE8MuJwbRt/view?usp=drive_link"
  },
  {
    "id": 5879,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tommaso: se non vedo insieme agli altri, non vedo. La nota spirituale de «La Civiltà Cattolica». LA CIVILTÀ CATTOLICA ·DOMENICA 19 APRILE 2020·",
    "lecturas": "Gv 20, 25; Gv 20,29; Gv 4,48",
    "resumen": "“Se non vedo nelle sue mani il segno dei chiodi (…) io non credo” (cfr. Gv 20, 25). Sono Tommaso . Già altri mi hanno dato voce. In un bel testo di Martin Descalzo – Siempre es viernes santo (1963) –",
    "link": "https://drive.google.com/file/d/1GdXynTB2FGUJfRSFlv_r0Az8IGwLPn2O/view?usp=drive_link"
  },
  {
    "id": 75668,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Señor da el Espíritu para el perdón… pero de qué pecado? (Pascua 2 A 2020)",
    "lecturas": "Jn 20. 19-29; ros 1.146",
    "resumen": "Contemplemos el centro de la escena: el momento en que el Señor sopla el Espíritu Santo -del Padre y Suyo- en la comunidad de los discípulos y los exhorta a recibirlo para el perdón de los pecados. Cu",
    "link": "https://drive.google.com/file/d/1xT5U9UXJoZMp3VsGa4lrTY8CcRLj4uQe/view?usp=drive_link"
  },
  {
    "id": 91202,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Comunión espiritual (Sábado Santo y Domingo de Pascua A 2020)",
    "lecturas": "Jn 19, 41-42; Mt  28, 1-10; Lc 13, 19",
    "resumen": "El lugar donde pusieron a Jesús era un jardín o huerta ( kepon ). Allí lo depositaron el Cuerpo del Señor José de Arimatea y Nicodemo y permaneció allí  la noche del viernes y todo el sábado santo has",
    "link": "https://drive.google.com/file/d/1fcJdv-4o5IHDo9EACSk9MCYD1puHKX5w/view?usp=drive_link"
  },
  {
    "id": 73613,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No es más el servidor que su patrón o la tentación de “sobreactuar” (Jueves santo A 2020)",
    "lecturas": "Jn 13, 1",
    "resumen": "En estos días, entre tantos testimonios conmovedores de la gente hubo dos que deseo compartir y que tienen que ver con la frase de Jesús: “Les digo de verdad que el servidor no es más que su Señor”. E",
    "link": "https://drive.google.com/file/d/1vm3QLpAfzeuhgKwJhzkw14-wu_ZT0YVv/view?usp=drive_link"
  },
  {
    "id": 88766,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Il servo non è più grande che il suo Signore (Giovedì santo 2020)",
    "lecturas": "Gv 13, 1",
    "resumen": "«In verità, in verità vi dico: non è più servo del suo Signore” (Gv 13, 1 ss.). In questi giorni, tra le tante commoventi testimonianze della gente, ce ne sono state due che voglio condividere e che h",
    "link": "https://drive.google.com/file/d/14IeMb1xpodyTRc05NDrokbLNuN4dOS4-/view?usp=drive_link"
  },
  {
    "id": 35163,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«Addio clericalismo!», o anche «il Signore ne ha bisogno, ma li restituirà presto» (Domenica delle Palme 2020)",
    "lecturas": "ros 1.146",
    "resumen": "«Il Signore ne ha bisogno, ma li restituirà presto». Mi colpisce il modo in cui il Signore organizza il suo ingresso regale a Gerusalemme, in quella prima «Domenica delle Palme». Non ha niente per far",
    "link": "https://drive.google.com/file/d/1GheuAm7k2Gloh7EJEGoGoF2MOSdKt1F4/view?usp=drive_link"
  },
  {
    "id": 69768,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Chau clericalismo! o El Señor los necesita, pero enseguida los devolverá (Domingo de Ramos A 2020)",
    "lecturas": "Mt 21, 1-11",
    "resumen": "El Señor los necesita, pero enseguida los devolverá. Me impresiona el modo cómo organiza el Señor su entrada real a Jerusalen, aquel primer “domingo de ramos”. No tiene nada para la liturgia. Lo tiene",
    "link": "https://drive.google.com/file/d/1O9uQ1SMZcNWYExddyzTAOuaK_05MBLn6/view?usp=drive_link"
  },
  {
    "id": 76206,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Señor, el que tu amas está enfermo (Cuaresma 5 A 2020)",
    "lecturas": "uan 11, 1-45",
    "resumen": "Dentro del pasaje evangélico de la resurrección de Lázaro nos encontramos con la historia de estos tres hermanos a los que Jesús amaba: eran sus amigos. Cada uno de ellos tiene su historia, una histor",
    "link": "https://drive.google.com/file/d/1EOunBJAC_hPEPPKeDZ4nB02gn2K1DVix/view?usp=drive_link"
  },
  {
    "id": 66573,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "El discernimiento de Jesús en el caso del ciego de nacimiento y una consideración sobre cómo hay que desterrar para siempre algunas “frases pre-coronavirus” (Cuaresma 4 A 2020)",
    "lecturas": "uan 9, 1-41",
    "resumen": "La subdivisión del pasaje es simplemente para identificar algunos “pasos” teniendo en cuenta que el Señor, al final, nos da una indicación para interpretar lo que sucedió realmente en la curación del",
    "link": "https://drive.google.com/file/d/1JuNgsJZnjCThYrdmv07orWvGtVztNGcu/view?usp=drive_link"
  },
  {
    "id": 4421,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gesù, seduto vicino al pozzo (in tempo di coronavirus)",
    "lecturas": "Gv 4, 5-42",
    "resumen": "Gesù, stanco del viaggio, si era seduto vicino al pozzo, dice Giovanni nel Vangelo di questa terza domenica di quaresima (Gv 4, 5-42). Mi è sempre piaciuta questa immagine di Gesù seduto , come se inv",
    "link": "https://drive.google.com/file/d/1bK1dhHrpWpCofmO1kxsa8qoMNbNKm9vc/view?usp=drive_link"
  },
  {
    "id": 51848,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Jesús se había sentado junto al pozo (Cuaresma 3 A 2020)",
    "lecturas": "Jn 4, 5-42",
    "resumen": "Jesús fatigado del camino se había sentado junto al pozo, dice Juan. Y esta es “la composición del lugar” que hacemos. Siempre me ha gustado esta imagen de Jesús sentado, como invitando a charlar. Jes",
    "link": "https://drive.google.com/file/d/191z-YWMRKlZ_VWA5dGcQ8b-DqP8Rpfi1/view?usp=drive_link"
  },
  {
    "id": 88085,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "La familiaridad de la transfiguración de Jesús (Cuaresma 2 A 2020)",
    "lecturas": "Mt 17, 1-9; Pe 1, 8-9; Pe 1, 16-18",
    "resumen": "La escena es sobrecogedora. Imagino lo que habrá sido esa experiencia para los tres discípulos. San Ignacio, cuando “narra la historia” y da los puntos dice que: “Tomando en compañía Cristo nuestro Se",
    "link": "https://drive.google.com/file/d/1YtvNZVZvjETLt4zWGqcYW6JGX8cFr8PP/view?usp=drive_link"
  },
  {
    "id": 16481,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Como un hilo de silencio sonoro resuena la voz del Padre en el desierto (Cuaresma 1 A 2020)",
    "lecturas": "Mt 4, 1-11; Jn 7, 16; Mt 16, 16",
    "resumen": "Desierto de La Payunia Cada uno tiene su imagen de desierto preferida. A mí más que los desiertos con dunas y camellos me gustan los desiertos como el de la montaña en la que el Señor le habló a Elías",
    "link": "https://drive.google.com/file/d/1YkPQmMUIO81kNdYzV4Ob8vBWGy_ijZQj/view?usp=drive_link"
  },
  {
    "id": 99759,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las Manos perfectas del Padre (7 A 2020)",
    "lecturas": "Mt 6, 38-48",
    "resumen": "El texto del éxodo que dice “ojo por ojo, diente por diente” continúa “mano por mano”… Las manos están presentes en este pasaje: la mano que te abofetea la mejilla y la mano que no devuelve mal por ma",
    "link": "https://drive.google.com/file/d/1E_O_5NPDBN6amiUFnktz2-q_aTfpuWj7/view?usp=drive_link"
  },
  {
    "id": 90498,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Hay conflictos que no se resuelven por disciplinamiento sino por desborde de amor y misericordia (6 A 2020)",
    "lecturas": "Mt 5, 17-37",
    "resumen": "El pasaje es difícil. Porque en principio todos entendemos el fondo del asunto, pero luego hay demasiados ejemplos de leyes y costumbres que culturalmente nos resultan ajenas, como lo de no jurar por",
    "link": "https://drive.google.com/file/d/1Eqq0Rx7R6v1V8ookQC7zebFhA_o5DHZ-/view?usp=drive_link"
  },
  {
    "id": 21991,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La parábola del Cocinero y la sal que perdió el sabor y la parábola del que es Luz y las lamparitas que lo hacen resplandecer (5 A 2020)",
    "lecturas": "Mt 5, 13-16",
    "resumen": "Ustedes son la sal, la luz en el candelero de casa y la de la ciudad en la cima de la montaña… Ustedes… Quiénes? Los que me siguen, ustedes: mis discípulos. Jesús nos define por el seguimiento: somos",
    "link": "https://drive.google.com/file/d/1TD9tmJvIt4T1FEr44wYbV1OCL28Nu4rB/view?usp=drive_link"
  },
  {
    "id": 40439,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "En la vejez seguirán dando frutos: la riqueza de los años (Presentación del Señor A 2020)",
    "lecturas": "Lc 2, 22-40; Sal 92, 15",
    "resumen": "Elegí esta imagen del Evangelio de la Presentación: “Simeón tomó al Niño en sus brazos y bendijo a Dios”. Me trajo al corazón lo que decía ayer el Papa Francisco al finalizar el Congreso internacional",
    "link": "https://drive.google.com/file/d/1eEG1bfGP-yEmuhPhEBpRSfDwclB0bSP2/view?usp=drive_link"
  },
  {
    "id": 55225,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El desborde de la itinerancia, una imagen de Jesús que se camina todo (3 A 2020)",
    "lecturas": "Is 9, 2; teo 4, 12-23; de 1,60",
    "resumen": "Hay dos imágenes que me gustan de Jesús: una, la de Jesús sentado, charlando amigablemente con Simón, con la Samaritana, enseñando a la gente las bienaventuranzas…; la otra, la de Jesús caminando, com",
    "link": "https://drive.google.com/file/d/1oaiQaudYPHbXZUuiPaYrls7jmle8AcFs/view?usp=drive_link"
  },
  {
    "id": 94897,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "“No lo conocía, pero…” Gracias a que Juan se queda en la orilla del Reino podemos vislumbrar en alguna medida la magnitud del don y de las gracias que en Jesús hemos recibido en pie de igualdad con todos los pueblos (2 A 2020)",
    "lecturas": "Jn 1, 29-34; Gal 3, 28",
    "resumen": "“Yo no lo conocía, pero…” Dos veces repite Juan el Bautista que no conocía a Jesús. No lo conocía y lo conocía. No lo conocía pero lo conoció desde el seno de su madre, cuando saltó de gozo al escucha",
    "link": "https://drive.google.com/file/d/1-Pl11K7VBfut2-RbR8rT9xWDXRqHsX7V/view?usp=drive_link"
  },
  {
    "id": 7610,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Espíritu conduce a Jesús, que se bautiza en las costumbres de su pueblo (Bautismo A 2020)",
    "lecturas": "Mt 3, 13-17; Hc 10, 35; Hc 10, 44-48",
    "resumen": "La liturgia une maravillosamente estos dos acontecimientos, el del bautismo del Señor según una costumbre instaurada en el pueblo de manera novedosa y profética por Juan Bautista, y el del bautismo en",
    "link": "https://drive.google.com/file/d/18eyGrkzJFoxUzDLcbAysRlL4MukMLKgJ/view?usp=drive_link"
  },
  {
    "id": 20911,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Las tinieblas que acechan a la única Palabra que cuenta: «hijo» (Navidad 2 A 2020)",
    "lecturas": "uan 1, 1-18",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1we4kx-bjcwJvs6-rcOX0rYCEh8gWCKHu/view?usp=drive_link"
  },
  {
    "id": 11221,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Ojos nuevos -de pueblo, como los de los pastores- para poder ver a Dios (Santa María Madre de Dios A 2020)",
    "lecturas": "Lc 2, 16-21",
    "resumen": "Decía ayer el Papa en el Tedeum: “La presencia de Dios en la ciudad, también en esta ciudad nuestra, ‘no debe ser fabricada, sino descubierta, desvelada’ ( Evangelii gaudium 71 ). Somos nosotros los q",
    "link": "https://drive.google.com/file/d/1oT2PkDlCT1jKmANQKDiwWGYRAtqz6NfW/view?usp=drive_link"
  },
  {
    "id": 61208,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tomar consigo: instinto de padres (Sagrada Familia A 2019)",
    "lecturas": "Mt 2, 13-15",
    "resumen": "La expresión “tomar al Niño y a su madre” se repite cuatro veces en este evangelio de la Sagrada Familia. Dos como imperativo en sueños mandado por el Ángel y dos como acción concreta realizada por Jo",
    "link": "https://drive.google.com/file/d/13mvK7SrQ-wZ5TroDjbuU-evQ745PEw5n/view?usp=drive_link"
  },
  {
    "id": 98245,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Felices los hombres y mujeres en los que Dios se complace (Nochebuena A 2019)",
    "lecturas": "cas 2, 1-14; Cor 9, 7",
    "resumen": "Paz a los hombres en los que Dios se complace! Eudokía significa que son “los que le caen bien”, “con los que se siente a gusto”, “en los que se deleita”, “aquellos de los que tiene una buena opinión”",
    "link": "https://drive.google.com/file/d/1sNPr3Jkvn4yaym3HUxH3oOmzcJRHmyYc/view?usp=drive_link"
  },
  {
    "id": 85000,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Los verbos de la Anunciación a José (Adviento 4 A 2019)",
    "lecturas": "Mt 1, 18-24",
    "resumen": "r a Jesús (…), nos cuenta el amor de Dios que se hizo Niño para decirnos cuán cercano está a todo ser humano, en cualquier situación en que se encuentre ” (Admirable s",
    "link": "https://drive.google.com/file/d/1cmX_ttz0VefZfuWZPNqb8x42Rb_M7teM/view?usp=drive_link"
  },
  {
    "id": 72698,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Dichoso el que no se escandalice de mí (Adviento 3 A 2019)",
    "lecturas": "ros 1.146",
    "resumen": "“Alégrense!” Así dice el Introito al tercer Domingo de Adviento -el domingo de “gaudete”, el domingo de la alegría. Se trata de una alegría en medio de la lucha de la vida, no de esas “alegrías-en-bur",
    "link": "https://drive.google.com/file/d/1s2O1OrMU1xzf4FOTUvrbxeWtq2HK9NGD/view?usp=drive_link"
  },
  {
    "id": 66726,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "La Inmaculada que “desata los nudos” y nos ayuda a tejer una vida más linda, más unida a los demás (Adviento 2 A 2019)",
    "lecturas": "Lc 1, 26-38",
    "resumen": "Alégrate! Llena de gracia! el Señor está contigo! Qué lindas palabras! Las repetimos y nos alegra pronunciarlas con la boca en cada Ave María. Es admirable cómo el saludo del Arcángel Gabriel quedó gr",
    "link": "https://drive.google.com/file/d/1FhPtpSde02O2aKfwk2UjMS5EYh46x-Qu/view?usp=drive_link"
  },
  {
    "id": 97251,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "El mejor momento para plantar un árbol: veinte años atrás… (Adviento 1 A 2019)",
    "lecturas": "Mt 24, 37-44",
    "resumen": "Velen! dice Jesús. En el huerto de los olivos les reprochará cariñosamente a sus amigos:”No han podido velar ni una hora conmigo!” Velar es  más que vigilar. Lo incluye, pero es algo más. Se vigila so",
    "link": "https://drive.google.com/file/d/1XxcFMR_ZU7-C3wmSZacyegkBLheLu_1w/view?usp=drive_link"
  },
  {
    "id": 69729,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La lógica del buen ladrón, que lo convirtió en ciudadano del reino en un instante (34 C 2019 Cristo Rey)",
    "lecturas": "Lc 23, 35-43",
    "resumen": "a Jesús nuestro rey crucificado. Lucas nos presenta varias maneras de considerarlo. El pueblo, la gente, estaba allí -dice- expectante, mirando qué pasaba. Las autoridades estaban mezclad",
    "link": "https://drive.google.com/file/d/1Vs1BsZyv0IrSqK7zsDm9cphEBI-jfc_-/view?usp=drive_link"
  },
  {
    "id": 50020,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La “clase baja de la santidad”, la de los descorazonados a los que el Señor “encorazona” con infinita delicadeza y predilección (33 C 2019)",
    "lecturas": "Lc 21, 5-19; St 5, 8; Rm 5, 3-5",
    "resumen": "El evangelio habla de “capacidad de resistencia” y su lógica se puede sintetizar teniendo en cuenta estos pasos: 1. La fortaleza se funda en la convicción de que nada creado es sólido por sí mismo (“n",
    "link": "https://drive.google.com/file/d/1M0YgUY_v98DHhiKI_wSjffcjZlHEkg-q/view?usp=drive_link"
  },
  {
    "id": 23408,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Dios de vivos de Jesús vs el dios de los que se creen vivos (32 C 2019)",
    "lecturas": "Lc 20, 27-38",
    "resumen": "Dios no es un Dios de muertos sino de vivos. Esta es la respuesta de Jesús a los saduceos. Un Dios de vivientes, un Dios de la vida. Con esto el Señor les dice que sus razonamientos son de muertos, su",
    "link": "https://drive.google.com/file/d/1EqbUkfvf9T2Jiis2RuXsQNxiT5O8909A/view?usp=drive_link"
  },
  {
    "id": 46690,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Zaqueo y su fe que se adelanta (31 C 2019)",
    "lecturas": "Lc 19, 1-10",
    "resumen": "– Soy Zaqueo, el jefe de publicanos, el rico, el petiso, el que quería ver a Jesús, el hijo de Abraham… como gusten llamarme. Lucas me puso todos los apodos posibles en su evangelio (aunque tuvo la de",
    "link": "https://drive.google.com/file/d/1ZZn-t3lzk2YVDFHG2MG5L32OxAi_9J_5/view?usp=drive_link"
  },
  {
    "id": 55991,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Se propicio conmigo, el pecador. Propicio como solo son los amigos (30 C 2019)",
    "lecturas": "Lc 18, 9-14; Rm 8, 31-37",
    "resumen": "Me tocó que Lucas no diga que el publicano “no osaba” sino que “no quería” levantar los ojos. Y el orden de la frase lo enfatiza más: “No quería ni siquiera los ojos alzar al cielo”. Lo único que quie",
    "link": "https://drive.google.com/file/d/1kXrGqzapmWAGyicJ0UzPDvNoi3-XYlcV/view?usp=drive_link"
  },
  {
    "id": 29426,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El coraje de creer, sin descorazonarse (29 C 2019)",
    "lecturas": "Lc 18, 1-8; Jn 20, 27",
    "resumen": "La parábola de la mujer corajuda, Jesús la cuenta para mostrarnos a sus discípulos que es necesario que recemos como ella, “echando tu corazón adelante” y sin descorazonarnos (coraje viene de corazón)",
    "link": "https://drive.google.com/file/d/116OouDYDAyg8_jwr7yYRtIp0txIdgB7B/view?usp=drive_link"
  },
  {
    "id": 46563,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Y los otros nueve? Dónde están? (28 C 2019)",
    "lecturas": "Lc 17, 11-19; Jn 7, 37-39",
    "resumen": "Jesús pregunta por los otros nueve: “Acaso no quedaron limpios los diez? Los otros nueve, dónde están que no vuelven a dar gloria a Dios?”. Desde la perspectiva de estos nueve, esta escena vendría a s",
    "link": "https://drive.google.com/file/d/1LknGyfPLw-By-0rZeZt0TC_YkUqD-KBb/view?usp=drive_link"
  },
  {
    "id": 79025,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Una fe que aumenta y un aforismo ignaciano (27 C 2019)",
    "lecturas": "Lc 17, 5; Jer 15, 20",
    "resumen": "Los apóstoles piden al Señor “auméntanos la fe”, y el Señor les responde hablando no solo de la fe, sino también del servicio. Hay una relación entre cuánto cree uno y cómo sirve a los demás; hay rela",
    "link": "https://drive.google.com/file/d/1J7ZTxV_zlRh-0D08phjWpuz2eeDn9mvZ/view?usp=drive_link"
  },
  {
    "id": 80889,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Epulón, o el drama de los que no ven a los pobres (26 C 2019)",
    "lecturas": "Lc 16, 19-31",
    "resumen": "El rico «no consideraba» a Lázaro. Se ve que lo veía porque lo reconoce por nombre al verlo al lado de Abraham. Pero aún allí, lo considera un sirviente! Si está al lado de Abraham no puede ser otra c",
    "link": "https://drive.google.com/file/d/151zVal0xg-P6zjMX2ZqtHsqicVIujL8L/view?usp=drive_link"
  },
  {
    "id": 65516,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No se puede servir a dos señores, a Dios y al dinero (25 C 2019)",
    "lecturas": "Lc 16, 1-13; Cor 5, 19",
    "resumen": "La parábola del ministro de economía difamado por la gente y alabado por Jesús da para mucho. El evangelista pone tres «moralejas» en labios del Señor. Comenzamos por la última, que es decisiva: «no s",
    "link": "https://drive.google.com/file/d/1m7gdt0USlWFT_sFSpd93AFhxd2DxwA4Y/view?usp=drive_link"
  },
  {
    "id": 71401,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«Dios estaba en Cristo, reconciliando al mundo consigo, y a nosotros nos ha confiado la palabra de la reconciliación» 2 Cor 5, 19 (24 C 2019).",
    "lecturas": "Cor 5, 19; Cor 5, 19; Lc 15, 1-32",
    "resumen": "Leo las lecturas para hacer la",
    "link": "https://drive.google.com/file/d/1s4MdXHdheQ5oPgG1vfnUSLwvO-DLJK-r/view?usp=drive_link"
  },
  {
    "id": 48856,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Para poder ser discípulos de Jesús -con todas las exigencias que tiene su seguimiento- debemos «negociar» con Él su paz (23 C 2019)",
    "lecturas": "Lc 14, 25-33; Jn 6, 68; Cor 5, 19",
    "resumen": "El evangelio de hoy es para todos. Lucas nos habla de grandes muchedumbres que caminaban acompañando a Jesús: había grandes y chicos, familias enteras, gente de toda condición social, cada uno en un m",
    "link": "https://drive.google.com/file/d/1osiBxZCQN6ZJWGwwWalNW-TL8H4xcylO/view?usp=drive_link"
  },
  {
    "id": 18858,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Parábola del que sabe elegir a quiénes invita (22 C 2019)",
    "lecturas": "Lc 14, 1",
    "resumen": "El evangelio de hoy nos presenta dos parábolas del Señor que trataremos de leer como una sola. La Biblia de Jerusalén las llama la parábola de la elección de asientos y la parábola de la elección de i",
    "link": "https://drive.google.com/file/d/16kX75YObK4gtltKGYBW51i3HWMktnP9j/view?usp=drive_link"
  },
  {
    "id": 41166,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La puerta estrecha de la caridad o cómo el Señor quiere descolocarnos de las certezas que cierran puertas y hacen difícil nuestra entrada a disfrutar del Reino de Dios (21 C 2019)",
    "lecturas": "Lc 13, 22-30; Lc 16, 9; Jn 7, 18",
    "resumen": "En el así llamado «Crismón», el antiguo símbolo con la X y la P (las dos primeras letras del nombre de Cristo en griego, la Xi y la Ro – Xr istos-), el «ojal» de la P es símbolo de la puerta estrecha",
    "link": "https://drive.google.com/file/d/1cU15e9__L5WEu5R8uBPcK673-Kbb9ecn/view?usp=drive_link"
  },
  {
    "id": 93847,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El fuego que encendió Jesús y el corazón de María (20 C 2019)",
    "lecturas": "Lc 12, 49-53",
    "resumen": "das y entendidas de manera justa. El fuego de",
    "link": "https://drive.google.com/file/d/17HTHdd5dx4A5qfLHp5RO222bkap8cMPV/view?usp=drive_link"
  },
  {
    "id": 37494,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El buen trato y el servicio como «lugar» donde se guarda y al que viene el Reino (19 C 2019)",
    "lecturas": "Lc 12, 32-48",
    "resumen": "«Donde uno tiene su tesoro, allí está su corazón». Lo valioso es el Reino que el Padre ha dado a su rebaño pequeño. Y el asunto es cómo cuidamos este reino. Las bolsas y el tesoro son el «receptáculo",
    "link": "https://drive.google.com/file/d/11FsfsRa95zx3aF4Jfzttf3Oqwk5A3FWZ/view?usp=drive_link"
  },
  {
    "id": 21017,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La postura de Jesús ante nuestros conflictos humanos (18 C 2019)",
    "lecturas": "Lc 12, 13-21; Lc 12, 12",
    "resumen": "Me impresiona ver cómo rechaza Jesús este pedido espontáneo que le surgió a uno de la multitud al oírlo hablar. Veamos un poco el contexto. Jesús acababa de decir: «El Espíritu Santo les enseñará en e",
    "link": "https://drive.google.com/file/d/1T-HsOnpYSS-vSDyIPcIPXS42z8Pb7-Pi/view?usp=drive_link"
  },
  {
    "id": 4960,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El espíritu y la letra del Padre nuestro (17 C 2019)",
    "lecturas": "Lc 11, 1-13",
    "resumen": "Cuando vemos a alguien que reza bien se nos despierta el deseo de rezar así. Imaginemos lo que irradiaría Jesús rezando al Padre! Los discípulos le pidieron al Maestro que les enseñara a rezar. Y nos",
    "link": "https://drive.google.com/file/d/1AVzGyoTQ5DY60QY4JzO5jYnWpbjs4e15/view?usp=drive_link"
  },
  {
    "id": 66476,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nobleza obliga o Quién soy yo para que a Jesús le interese si elijo la mejor parte y asegure que no me será quitada? (16 C 2019)",
    "lecturas": "Lc 10, 38-42",
    "resumen": "Marta y María. Así nos ha llegado titulado este episodio en la vida de Jesús. No es Marta o María, sino Marta y María. La",
    "link": "https://drive.google.com/file/d/1EqYEOW37WimCPuVqeOtn0qp9NSyRXe0j/view?usp=drive_link"
  },
  {
    "id": 73848,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gente que funda su acción en el reconocimiento, no en el deber ni en las convicciones (15 C 2019)",
    "lecturas": "cas 10, 25-37",
    "resumen": "Comenzamos notando una frase particular de Jesús: «¿Qué está escrito en la Ley? ¿Cómo lo lees? ( anaginoskeis) ». La primera parte es objetiva “qué está escrito”; la segunda es postmoderna: cómo lo le",
    "link": "https://drive.google.com/file/d/1_OmGw9-SgD3q1jhK7cWmyyr0nkkXye77/view?usp=drive_link"
  },
  {
    "id": 60900,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los discípulos y Jesús exultan del gozo de evangelizar a la gente (14 C 2019)",
    "lecturas": "Lc 10, 1-12",
    "resumen": "Dos cosas antes de empezar la",
    "link": "https://drive.google.com/file/d/1n9yy8yJE8YEAeCEUgkfS3TT-GIt54s7c/view?usp=drive_link"
  },
  {
    "id": 3117,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Encaminar la segunda parte del año (13 C 2019)",
    "lecturas": "Lc 9, 51-62; Lc 9,22; Lc 19, 28",
    "resumen": "Retomamos el tiempo ordinario y el dibujo de Fano representa bien el año como un camino en subida y en espiral (no solo lineal o en círculo, como se suele representar el tiempo). Me llamó la atención",
    "link": "https://drive.google.com/file/d/1JjDFtB8Jg5FfmjuHkx5uiOg3ax5xYxQZ/view?usp=drive_link"
  },
  {
    "id": 69249,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Creer en el pan del corazón (Corpus Christi C 2019)",
    "lecturas": "Lc 9, 11",
    "resumen": "«Denles de comer ustedes mismos». Del corazón le nació al Señor esta frase como respuesta a la sugerencia de los discípulos de que «despidiera a la gente» para que cada uno encontrara por sí mismo alg",
    "link": "https://drive.google.com/file/d/1p76m_iG8KOkFpQUcMjfzdopax0wIbX8H/view?usp=drive_link"
  },
  {
    "id": 24026,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El misterio de la Trinidad santa nos abre un espacio ancho por el que los cristianos podemos salir a servir a todos, a anunciar el evangelio a todos y a dialogar y acompañar a todos (Trinidad C 2019)",
    "lecturas": "Jn 16, 12-15; Jn 19, 17",
    "resumen": "La reflexión de hoy, sobre la Trinidad, nace del diálogo interior con un hermano musulmán. Para hablar de la Trinidad siento que para mí es mejor partir del diálogo con alguien fiel que cree en Dios y",
    "link": "https://drive.google.com/file/d/1O2YwxmefQ3kni-PaczgDSx3PPvqyUg9z/view?usp=drive_link"
  },
  {
    "id": 2188,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Espíritu no viene en botellas -como si fuera agua de Evián-, sino que Jesús lo regala a todo el que tiene sed del Agua Viva de su Palabra (Vigilia de Pentecostés C 2019)",
    "lecturas": "Jn 7, 37-39",
    "resumen": "Sed del Espíritu, sed de Agua viva. Jesús es la fuente, el que dice: «el que tenga sed que venga a mí». Lo dice a todos, y a nosotros nos toca anunciarlo. El que tenga sed, dice. No dice el católico,",
    "link": "https://drive.google.com/file/d/1GAo33B6szChfu0p5IVEDVMdwCpTJH_u0/view?usp=drive_link"
  },
  {
    "id": 84299,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El perdón de los pecados significa que «empezar de nuevo» es posible para todos, que es posible hoy y que es legal (Ascensión C 2019)",
    "lecturas": "Lc 24, 46-53",
    "resumen": "Lo que debemos predicar los cristianos es el perdón de los pecados. Predicamos como testigos, porque hemos sido perdonados. Predicamos no en nombre propio, porque no somos quién, sino en Nombre de Jes",
    "link": "https://drive.google.com/file/d/1pvQ_PfqeY5GTBu-w8veat-Rb74UgkmNK/view?usp=drive_link"
  },
  {
    "id": 67809,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las tres moradas de la Palabra (Pascua 6 C 2019)",
    "lecturas": "Jn 14, 22-31",
    "resumen": "Tres “moradas” y un «ir y volver». Cuando Judas -el fiel, no el Iscariote- le pregunta a Jesús “Señor, cómo es (eso de) que te vas a manifestar a nosotros y no al mundo”, Jesús le responde hablando de",
    "link": "https://drive.google.com/file/d/1O8ovpciRhoKS2wCBfIoaulpWpghCqXgc/view?usp=drive_link"
  },
  {
    "id": 71206,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Y cómo nos amó Jesús? Como un hermano (Pascua 5 C 2019)",
    "lecturas": "Jn 13, 31-35; Jn 1, 2",
    "resumen": "Así como Yo… les decía Jesús a sus discípulos. Así como Yo los he amado, ámense también ustedes los unos a los otros. Aquí ni Tomás se hubiera animado a preguntar «Señor: y cómo nos has amado». Porque",
    "link": "https://drive.google.com/file/d/1hVHyU11KZq7JAWU2r9Mu8Cdx2ZDiLkkP/view?usp=drive_link"
  },
  {
    "id": 62561,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Somos suyos, a Él pertenecemos, somos ovejas de su rebaño y Él, no solo es nuestro Pastor, sino nuestro hermano, el mejor Cordero, (Pascua 4 C 2019)",
    "lecturas": "Jn 10, 27-30; Rm 8, 39",
    "resumen": "En aquel tiempo, Jesús dijo: «Mis ovejas escuchan mi voz, Yo las conozco y ellas me siguen. Yo les doy Vida eterna: ellas no perecerán jamás y nadie las arrebatar á de mis manos. Mi Padre, que me las",
    "link": "https://drive.google.com/file/d/1Mp_TcVwlgU4BHuM_6a6gBLlIuuMNSkPV/view?usp=drive_link"
  },
  {
    "id": 46737,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "«Me amas como amigo?» o «En qué extraña cosa convertimos los valores cristianos – las bienaventuranzas, las obras de misericordia, la oración, la misma fe – cuando los ejercemos sin la amistad» (Pascua 3 C 2019)",
    "lecturas": "Jn 21,1-19; Jn 16, 2",
    "resumen": "Tres escenas de amistad para que queden en nuestras pupilas y les acerquemos otras nuestras, de amistad en el Señor. La primera imagen es la de los apóstoles que salen juntos a pescar: «Vamos contigo»",
    "link": "https://drive.google.com/file/d/1Tdvs3UrSfC6fIvk6aIdlLAtyFNjNTFVB/view?usp=drive_link"
  },
  {
    "id": 70657,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Los discípulos se llenaron de alegría al ver al Señor – Felices los que creen sin haber visto (Pascua 2 C 2019 y fiesta de Beatificación de los mártires riojanos)",
    "lecturas": "Jn 20,19-31",
    "resumen": "Entre dos alegrías plenas se desarrolla el pasaje del Evangelio de hoy: la que llenó el corazón de los discípulos al ver a Jesús y la alegría sellada con una bienaventuranza del Señor resucitado que l",
    "link": "https://drive.google.com/file/d/1d5S-4aoFr2ODn746WL-PUV4ixQGJO9HG/view?usp=drive_link"
  },
  {
    "id": 88120,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las palabras de las mujeres (Pascua C 2019)﻿",
    "lecturas": "Lc 24, 1-12",
    "resumen": "Si se pudieran filmar los sentimientos, veríamos que en el corazón de las mujeres en la mañana de Pascua, el peso decisivo lo tenía su Señor Jesús. Su Cuerpo, lo que quedaba de Él, pensaban, era lo qu",
    "link": "https://drive.google.com/file/d/1OPz-ngu1_vVj5adN4Re9Z7-ilawCFJ6D/view?usp=drive_link"
  },
  {
    "id": 96257,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Diálogos de actualidad: el descanso y la Cruz de nuestro Amigo Jesús (Viernes Santo, 2019)﻿",
    "lecturas": "Lc 22, 53; Jn 17, 1; Mc 4,37-41",
    "resumen": "de hoy, viernes. Pero siempre es -o debe ser- la cruz con Jesús. Está bueno preguntarnos porqué el Señor eligió la Cruz, o porqué Dios eligió el dolor de su hijo para redimirnos? ¿Es el dolor de Jesús",
    "link": "https://drive.google.com/file/d/1CvA6tiGWdxjMUTxG4aMVIjG3xwOya4aq/view?usp=drive_link"
  },
  {
    "id": 37694,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las cosas que el rey necesita (Domingo de ramos C 2019)",
    "lecturas": "cas 19, 28-40",
    "resumen": "Tres puntos, tres frases del evangelio de Lucas para entrar a nuestra Semana Santa -una entre las 54 semanas del año, acompañando al Señor, el humilde rey que va a la cruz para salvarnos de la autosuf",
    "link": "https://drive.google.com/file/d/1O6V-13Ksd_N3Ex7IwkfKtRaMAWsnUMy2/view?usp=drive_link"
  },
  {
    "id": 70582,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "«De ahora en adelante…»: el examen de conciencia de la novedad que Dios tiene para mi vida (Cuaresma 5 C 2019)",
    "lecturas": "Jn 8, 1-11; Lc 5, 10",
    "resumen": "«A partir de ahora» ( apo to nun ) es una de las frases más hermosas pronunciadas por los labios de Jesús. De ahora en adelante, de ahora en más… Es lo que les dice a Simón Pedro y a sus compañeros lu",
    "link": "https://drive.google.com/file/d/14jYDrOL_CahcVfYWxDxTToNCp3obz2wE/view?usp=drive_link"
  },
  {
    "id": 68837,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "El ternero alimentado a grano y la fiesta como signos de la Misericordia inesperada (Cuaresma 4 C 2019)",
    "lecturas": "ros 1.146",
    "resumen": "“El ternero alimentado a grano”. Tres veces es mencionado en la parábola: por el padre, que da la orden a los servidores de matarlo y asarlo, por uno de los servidores, cuando le cuenta todo al hijo m",
    "link": "https://drive.google.com/file/d/1CeVQFEERyX1W70Q4b0EoELiVvst5S1-i/view?usp=drive_link"
  },
  {
    "id": 18516,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "La dinámica de los dos temores -el del empleado y el del hijo amado- que impulsan el amor (Cuaresma 3 C 2019)",
    "lecturas": "Lc 13, 1-9",
    "resumen": "San Ignacio termina el libro de los Ejercicios Espirituales con las reglas para sentir con la Iglesia. No son un apéndice de lo esencial sino un verdadero «cierre eclesial» de la experiencia de hacer",
    "link": "https://drive.google.com/file/d/1E_RM7GPwxRHOWuk2l0Pr30_3nS30osUb/view?usp=drive_link"
  },
  {
    "id": 92210,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Al fin y al cabo, lo que hizo Dios al decirnos que Jesús es el Predilecto fue mostrarnos su Corazón (Cuaresma 2 C 2019)",
    "lecturas": "Lc 9, 28; Ef 3, 16; Pd 3, 4",
    "resumen": "El Señor se lleva a sus tres discípulos y amigos al monte Tabor porque quiere que vean su gloria, que tengan acceso a la vida que Él vive en ese ámbito misterioso de su intimidad. Le llamo así «ámbito",
    "link": "https://drive.google.com/file/d/1Mlo5cpt8BuOZYrvQsXYMgzTnyQzDPueq/view?usp=drive_link"
  },
  {
    "id": 5708,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "La tercera tentación: la de los que el demonio hace hablar de teología desde el techo del Templo en vez de estar adentro, adorando y sirviendo, junto con su pastor y toda la Asamblea (1 C Cuaresma 2019).",
    "lecturas": "Lc 4, 1-13; Lc 7,7",
    "resumen": "La tentación del mal espíritu siempre tiene una trampa, alguna falacia o «verdad falsa». Y el Señor nos enseña a discernirla, es decir a rechazarla, a no caer en ella. Jesús habla con la Escritura, es",
    "link": "https://drive.google.com/file/d/1bTyN6tld3UCfYhZsdyG7kt2vnh7zNRiD/view?usp=drive_link"
  },
  {
    "id": 52803,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El árbol bueno, de la bondad que atesora su corazón, saca frutos buenos (8 C 2019)",
    "lecturas": "Lc  6, 39-45; Jn 16, 13; Hec 8, 31",
    "resumen": "r en su contexto. Si no parecen enseñanazas sueltas sobre temas distintos, cuando en realidad lo que hace el Señor es englobar las bienaventuranzas y su énfasis puesto",
    "link": "https://drive.google.com/file/d/1iI40CLt_Cj4s-nRuiQD-B45ntZUi7R7W/view?usp=drive_link"
  },
  {
    "id": 92204,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La felicidad de respirar a fondo la libertad que uno siente al moverse en el Cielo de la misericordia (7 C 2019)",
    "lecturas": "Lc 6, 27-38; Rm 12, 2",
    "resumen": "Lucas no había puesto la bienaventuranza de los misericordiosos y la desarrolla ahora de un modo particular, no tanto como un «comportamiento» sino más bien como un modo de ser. «Sean misericordiosos",
    "link": "https://drive.google.com/file/d/1_1zSlbZlFYE8RayK7-uhPeHvqSUQEVOu/view?usp=drive_link"
  },
  {
    "id": 83261,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La palabra que les falta al Padre nuestro y a las bienaventuranzas (6 C 2019)",
    "lecturas": "Lc 6, 17",
    "resumen": "Me quedaron resonando en el corazón las palabras del Papa Francisco en la audiencia del miércoles pasado, 13 de febrero. Fueron sobre el Padre nuestro y, más que decirlas, las dramatizó con preguntas,",
    "link": "https://drive.google.com/file/d/1K4Z9XBWcJWdOG_eQzuy2ER5a1DBXNbKI/view?usp=drive_link"
  },
  {
    "id": 37616,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contemplar es pescar, es echar las redes en su Nombre (5 C 2019)",
    "lecturas": "Lc 5, 1-11",
    "resumen": "«En tu palabra echaré las redes». En boca de Simón la palabra «palabra» ( ῤῆμα ), no es algo abstracto: es algo que dijo Jesús, un «dicho» con un significado preciso, algo que se dice en un momento co",
    "link": "https://drive.google.com/file/d/1M0jsr-jQYNN6-sGe_dyyZcJiM-p0U9vh/view?usp=drive_link"
  },
  {
    "id": 81733,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La autoridad del Señor le viene de adentro, de su corazón (4 C 2019)",
    "lecturas": "Lc 4, 21-30; Sal 123, 7",
    "resumen": "Con la expresión «esta escritura se ha cumplido en sus oídos», el Señor le dice a sus paisanos: Ustedes han entendido perfectamente que esto que he leido no son simples palabras. Esto que he leído es",
    "link": "https://drive.google.com/file/d/1mpEd0qmF3500IlMMfr23F8vbxaa5xLWJ/view?usp=drive_link"
  },
  {
    "id": 77046,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«… Que alguien como usted se tome el tiempo para escuchar a alguien como yo» (3 C 2019)",
    "lecturas": "Lc 1, 1-4; Cor 11, 1-15",
    "resumen": "Francisco fue, como es su costumbre, a un centro de detención de jóvenes, esta vez a «Las Garzas», en Pacora, Panamá. Es un centro modelo que ofrece procesos de resocialización a jóvenes que han delin",
    "link": "https://drive.google.com/file/d/121net2OMZWTSmYxvtDe1Q8VvcfvkUdW3/view?usp=drive_link"
  },
  {
    "id": 94404,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las bodas de Caná o «los milagros indirectos» (2 C 2019)",
    "lecturas": "Jn 2, 1-11; Jn 12, 3",
    "resumen": "r la escena en el momento en el que el weeding planner lo llama al esposo y, al mismo tiempo que alaba ese vino tan especial, al dec",
    "link": "https://drive.google.com/file/d/1zmJX_BWuXeF_ZUlP3ChBlQUoGqBX9b4M/view?usp=drive_link"
  },
  {
    "id": 53259,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las limosnas del Bautismo del Señor (C 2019)",
    "lecturas": "Lc 3, 15-16",
    "resumen": "La Palabra que me afecta hoy es ese «estando Jesús en oración». Luego de la experiencia de ser bautizado, Jesús se pone en oración. Es oración de súplica. Jesús pide, suplica, con actitud de reverenci",
    "link": "https://drive.google.com/file/d/1ZOqxIem6oY7gpyyTHmcX9dEi2moOkj-3/view?usp=drive_link"
  },
  {
    "id": 81091,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La magia poderosa que convierte el oro en don (Epifanía C 2019)",
    "lecturas": "Mt 2, 1-12",
    "resumen": "Al leer que los Reyes le regalaron oro al Niño pensé que ese oro, en un primer momento, lo habrá turbado a San José, ya que seguramente no era alguien que manejara oro con sus manos. Pero luego lo hab",
    "link": "https://drive.google.com/file/d/1_UzfymMgLDZZ4jXLaJ2JDBV613i_Xl-y/view?usp=drive_link"
  },
  {
    "id": 73664,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Comenzar el año como quien carga el sueño de un hijo sobre las espaldas",
    "lecturas": "Lc 2, 15-19",
    "resumen": "María no solo se maravilla con las cosas que cuentan los pastores acerca del Niño, sino que las «atesora». Guarda como un tesoro en el corazón todo lo que dicen estos hombres sencillos que anuncian la",
    "link": "https://drive.google.com/file/d/16z07e6jvjeP9YxDqbKQaxSz2EXb99dRJ/view?usp=drive_link"
  },
  {
    "id": 70848,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las lecciones de vida doméstica de la sagrada familia (C 2018)",
    "lecturas": "Lc  2, 40-52; cas 5, 22; Jn 13, 12",
    "resumen": "Un año termina y otro comienza y la liturgia nos pone en clima de familia. Con la palabra «clima de familia» quiero señalarte algo muy preciso. Nuestra familia es el ámbito de los que somos nacidos y",
    "link": "https://drive.google.com/file/d/1wpgStRZboedNnGOFmIRVk2MjniN30x2x/view?usp=drive_link"
  },
  {
    "id": 57505,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "«Por la mañana sácianos de tu Misericordia y nuestra vida será alegría y júbilo» – Salmo 89- (Navidad C 2018)",
    "lecturas": "teo 1,18-25; cas 2, 1-14; cas 2, 15-20",
    "resumen": "La imagen me pareció justa. Son los protagonistas los que hacen que la vida tenga sentido, que tenga sentido este año 2018, que para algunos es un «annus orribilis» (así lo dicen, en latín). Yo lo con",
    "link": "https://drive.google.com/file/d/12Ad6INZtXG7S7oPMNTfA7iTDCmS2PiQq/view?usp=drive_link"
  },
  {
    "id": 65661,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Caminar y cantar -como María- las maravillas de Dios con los humildes (4 C Adviento 2018)",
    "lecturas": "Lc 1, 39-45",
    "resumen": "En breves palabras, Lucas nos narra el encuentro de Isabel con María en clave de escucha. María e Isabel son las mujeres de la escucha. En el mosaico de Rupnik, que está en el monasterio de las ursuli",
    "link": "https://drive.google.com/file/d/1jmj9k7PHIHok4eVGh3cmqzWxMC-V4Q4u/view?usp=drive_link"
  },
  {
    "id": 55119,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "La Fidelidad sin Cables de la conexión al Espíritu Santo (3 C Adviento 2018)",
    "lecturas": "cas 3, 10-18; Gn 1, 2; Dt 32, 11-12",
    "resumen": "Bautismo significa sumergir, lavar sumergiendo. Para lavarse uno se sumerge en el agua limpia y sale purificado. En la vida nos sumergimos en muchas cosas. Nos sumergimos las cosas cotidianas, en el t",
    "link": "https://drive.google.com/file/d/1NBAIOClIxokhBQmhyHoq3SMwXj_CAeo-/view?usp=drive_link"
  },
  {
    "id": 37881,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "What’s up?",
    "lecturas": "Lc 3, 1-6; Lc 22, 8; Ap 21, 2",
    "resumen": "Vino la Palabra de Dios sobre Juan, y comenzó a decir: Preparen el camino del Señor (Ἑτοιμάσατε). Juan el Bautista toma esta Palabra de Isaías, que hablaba de la venida del Señor. Jesús la usará para",
    "link": "https://drive.google.com/file/d/16fQOxvWcOYLAxtjHEhzlDZLrG-ZEuKB0/view?usp=drive_link"
  },
  {
    "id": 48581,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Apesebrar el corazón- nuevo libro",
    "lecturas": "ros 1.146",
    "resumen": "es: Salió el librito APESEBRAR EL CORAZÓN. Contemplaciones de Adviento. Se puede conseguir en Kindle y leer en el celular. Son las contemplaciones de siempre y espe",
    "link": "https://drive.google.com/file/d/1n0wIgykjQzxn7-Wm5A2gYjBvXnNYWVHA/view?usp=drive_link"
  },
  {
    "id": 65035,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "La gran oración que nos hace falta (1 C Adviento 2018)",
    "lecturas": "Lc 21, 25-36",
    "resumen": "Dice el Papa en «Francisco, un hombre de palabra»: «Queda mucho por hacer… Y debemos hacerlo juntos». Y para eso, reza. Y nos encomienda la oración: «No pierdan la oración. Recen como puedan, pero rec",
    "link": "https://drive.google.com/file/d/1bm4om7VpDDL4x6o1C9eVNTqi-7v_tADA/view?usp=drive_link"
  },
  {
    "id": 84263,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "«Esperando una limosna de su voz» (Cristo Rey B 2018)",
    "lecturas": "Jn 18, 33-38; Cor 13, 6",
    "resumen": "El que es de la verdad, escucha mi voz. Qué dice la Voz de Jesús? Qué testifica el Señor con su vida, con su humildad, con su paciencia? Todo en Él nos habla del Amor misericordioso del Padre para con",
    "link": "https://drive.google.com/file/d/1uAvioVnm_rfRZSmyHK46e7fLhdNUOlll/view?usp=drive_link"
  },
  {
    "id": 8903,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Partir de las Palabras que no pasan, rezando cada día (33 B 2018)",
    "lecturas": "Mc 13, 24-32",
    "resumen": "ndo el templo. Pedro y tres de los otros discípulos -Santiago, Juan y Andrés-, le preguntaban: Dinos ¿cuá",
    "link": "https://drive.google.com/file/d/1fNIm8cl_UTwni6J15BT3jpwhbHDiFi7X/view?usp=drive_link"
  },
  {
    "id": 36315,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús se sentó a mirar cómo la gente «se ponía» (32 B 2018)",
    "lecturas": "Mc 12, 38-44; Mc 16,19",
    "resumen": "El pasaje de hoy es importante. No es la anécdota de la viejita santa que dio sus moneditas de limosna. Tampoco la de la viuda heroica que se inmola dando todo lo que tiene. Hay que contextualizar bie",
    "link": "https://drive.google.com/file/d/1oEjHBKKfT658LbOkl7fvKoTYzOCfCjkO/view?usp=drive_link"
  },
  {
    "id": 12189,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La medida y el ritmo del amor según Jesús (para los adultos que cursan la escuela nocturna) (31 B 2018)",
    "lecturas": "Mc 12, 28",
    "resumen": "Escucha Israel, Escucha Iglesia, Pueblo fiel! El Señor nuestro Dios es el Señor único. El Dueño absoluto, el que manda. Y no te manda que «hagas» algo -esto o aquello- sino que ames. Te manda amar. Qu",
    "link": "https://drive.google.com/file/d/19lXMgPhXAMtk9kkZLU2Esu9iECeFMuPh/view?usp=drive_link"
  },
  {
    "id": 9913,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bartimeo: el discípulo mendigo ciego de Jesús «su Rabbuní», el que quería recobrar la vista – la había perdido!- y volver a ver las cosas con altura, con fe, para poder seguir a Jesús en vez de estar tirado al costado del camino (30 B 2018).",
    "lecturas": "Mc 10, 46-52",
    "resumen": "«Rabbuní, mi Maestro! Me gusta imaginarlo a Bartimeo, al costadito del camino, con su tacita para las limosnas entre las manos, sumido en sus meditaciones de ciego, con el oído atento a todos los",
    "link": "https://drive.google.com/file/d/1WN7HGWz7dY5FTEPYncD_7PtjGilGCCD3/view?usp=drive_link"
  },
  {
    "id": 84120,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No hay que dejar que nuestro sueño «de ofrecerle al Señor una entrega más bella cada día» (GE 163) se devalúe por los delirios de los necios con poder (29 B 2018)",
    "lecturas": "Mc 10, 35-45",
    "resumen": "Hoy la",
    "link": "https://drive.google.com/file/d/1v79oGH9iMRieVdudWdijE3-pVRhpnVN9/view?usp=drive_link"
  },
  {
    "id": 68343,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los pobres primero reciben: agarran la moneda y después miran cuánto les diste. Los ricos piensan que siempre les vienen a pedir. Por eso desconfían… Y Dios es uno que solo viene a dar… (28 B 2018)﻿",
    "lecturas": "Mc 10, 17-31",
    "resumen": "El Señor dice que el Reino de Dios “es” de los pobres. Y de los ricos dice que les será muy difícil “entrar”. Lo dice no por nada sino a raíz de este jóven rico que lo fue a buscar y que se ve que ten",
    "link": "https://drive.google.com/file/d/18YzZ1M7xpUPOuuMWbgjZNzDTQDRbangN/view?usp=drive_link"
  },
  {
    "id": 10527,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "De verdad les digo que el que no reciba el reino de Dios como un niño, no entrará en él (27 B 2018)",
    "lecturas": "Mc 10, 2-16",
    "resumen": "Habían vuelto a casa luego de la discusión con los fariseos en torno al tema espinoso del divorcio y los discípulos le preguntaban a Jesús sobre el tema. Como siempre, la gente se enteraba de que Jesú",
    "link": "https://drive.google.com/file/d/1fSq9AhjorAZrWVQODEA8ZgfYn6uz9d9J/view?usp=drive_link"
  },
  {
    "id": 13431,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Nombre de Jesús como criterio de discernimiento contra los escándalos (26 B 2018)",
    "lecturas": "Mc 9, 38-48",
    "resumen": "En torno a la cuestión del Nombre de Jesús, que Juan siente que algunos están utilizando sin derecho porque «no son de los nuestros», dice, resulta conmovedor ver cómo el Señor no tiene miedo a ser ma",
    "link": "https://drive.google.com/file/d/1wgioib17P4WCkBbf-LhdcR6JTLFelrkY/view?usp=drive_link"
  },
  {
    "id": 67924,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Ponernos a servir, como hace todo aquel que invita a sus amigos a un asado (25 B 2018)﻿",
    "lecturas": "Mc 9, 30-37",
    "resumen": "Toda la escena se concentra en la Palabra «recibir». Jesús despliega una verdadera liturgia de gestos para hacernos entender lo que nos quiere enseñar. La suya es una Escuela de afectos, no de concept",
    "link": "https://drive.google.com/file/d/1kjFLYnq7qW4ahCG4ujv2pDd9URT10nwk/view?usp=drive_link"
  },
  {
    "id": 75348,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La lógica de la Cruz: Hoy no basta «pensar» ni «mirar bien» la realidad. Solo el peso de la propia cruz cargada aviva el sentido del discernimiento (24 B 2018)",
    "lecturas": "Mc 8, 27-35",
    "resumen": "Cuando se arma confusión en el corazón de Simón, escandalizado porque Jesús les enseñaba que sería rechazado por los ancianos, los sumos sacerdotes y los escribas, el Señor llama a todos, al pueblo ju",
    "link": "https://drive.google.com/file/d/1ANfwqTMbWYpFNVA3p5Z1ddyI18fa5FkG/view?usp=drive_link"
  },
  {
    "id": 43045,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La dimensión social de una sordera y de un hablar mal que solo Jesús puede curar (23 B 2018)",
    "lecturas": "Mc 7, 31-37",
    "resumen": "Ese sordo que apenas podía hablar somos nosotros. No tanto cuando hablamos en familia, con nuestros amigos más cercanos o de las cosas de trabajo de todos los días, sino cuando intentamos escucharnos",
    "link": "https://drive.google.com/file/d/1gC3jG7b4AT4OwzoZfSUG3ycbU3Izaq3j/view?usp=drive_link"
  },
  {
    "id": 72338,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La alegría que dilata el corazón como criterio de discernimiento (22 B 2018)",
    "lecturas": "Mc 7, 1-23; Cor 10, 23",
    "resumen": "Jesús apuesta todas las fichas al corazón del hombre. Lo hace con el lenguaje de “todo/nada”: Nada de lo que entra desde afuera nos puede contaminar! Si algo nos envenena, no vino de afuera, Salió de",
    "link": "https://drive.google.com/file/d/1xytqXHBTKcjYy3kaSKa90d7nMWUjmnQt/view?usp=drive_link"
  },
  {
    "id": 94220,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El lenguaje duro de Jesús. En qué sentido (21 B 2018)",
    "lecturas": "Jn 6, 60-69",
    "resumen": "Juan dice que a muchos de los discípulos de Jesús, les resultó “duro” (skleros) el lenguaje de Jesús, tanto que “se volvieron atrás y no andaban ya en su compañía”. En la espiritualidad de los Ejercic",
    "link": "https://drive.google.com/file/d/1jEOimBVY_7P9uTLxUJzyc-mnbn21Bmgz/view?usp=drive_link"
  },
  {
    "id": 749,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La Eucaristía no es un suplemento alimentario. Es el modo de vivir que tienen el Padre y Jesús y que nos quieren participar (20 B 2018)",
    "lecturas": "Jn 6, 51-59",
    "resumen": "“Este hombre”. Discutían los judíos diciendo: cómo puede “este hombre” darnos a comer su carne? Verlo como un hombre común hacía que no le creyeran. Para nosotros, que Jesús pueda ser Dios siendo un h",
    "link": "https://drive.google.com/file/d/1IZGJ8kj5J1Zyigjh3AfJkf18_xJFQKqW/view?usp=drive_link"
  },
  {
    "id": 71845,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "La atracción que solo el Padre puede hacernos sentir por Jesús (19 B 2018)",
    "lecturas": "Jn 6, 41-51",
    "resumen": "Atraer (“elkyse”) en griego significa también arrastrar, como en la escena de la pesca milagrosa, después de la resurrección del Señor, en la que Pedro “arrastra” hacia Jesús la red llena con los 52 p",
    "link": "https://drive.google.com/file/d/1nyIDso6wsKrMEUqOUI3ScikdpHRSA2D1/view?usp=drive_link"
  },
  {
    "id": 99905,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El “Pan del cielo del día” y su precio caro: el de nuestro hambre espiritual (18 B 2018)",
    "lecturas": "Jn 6, 24-35",
    "resumen": "Señor, danos siempre de ese pan! La petición de la gente del pueblo que buscaba a Jesús es verdadero deseo que se transmite de generación en generación entre los que tienen fe. Si existe ese pan, pien",
    "link": "https://drive.google.com/file/d/1NipsiScV9o-8o_-6gjnaKDodmMTx_sSW/view?usp=drive_link"
  },
  {
    "id": 37801,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La canasta del propio corazón (17 B 2018)",
    "lecturas": "Jn 6, 1-15",
    "resumen": "Las canastas multiplicadas El Señor envió a los doce a recoger los fragmentos “para que no se perdiera nada”. El Evangelio dice simplemente que “los recogieron y llenaron doce canastas con los trozos",
    "link": "https://drive.google.com/file/d/12eWOUG5cm0bMj4KQ5pqJjot1P56Y2kDq/view?usp=drive_link"
  },
  {
    "id": 3361,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«Es propio de Dios no tener límites para su inmensa grandeza y al mismo tiempo ‘dejarse contener enteramente’ dentro de un espacio mínimo» (como el de un rato nuestro de oración) (16 B 2018)",
    "lecturas": "Mc 6, 30-34",
    "resumen": "Este evangelio de Marcos tiene varias «palabras-pan», palabras que son en sí mismas, cada una, un evangelio, una buena noticia, porque comulgando con ellas se saborea el evangelio entero. Las escribo",
    "link": "https://drive.google.com/file/d/1EiiOFc6dpTD0jA4xGZ7gcdG5suiefV-x/view?usp=drive_link"
  },
  {
    "id": 93779,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La tala y el bastón (15 B 2018)",
    "lecturas": "Mc 6, 7-13",
    "resumen": "El Señor envió de dos en dos a los apóstoles y les encomendó que llevaran solo un bastón. El baston del peregrino , el bastón del que se larga a caminar por el monte y lo usa para todo: como apoyo par",
    "link": "https://drive.google.com/file/d/187PHJe8MNrRxkz6k8ZcW5TK_VGv6bAIe/view?usp=drive_link"
  },
  {
    "id": 95585,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El único paradigma profético capaz de hablar hoy al corazón: el de la misericordia (14 B 2018)",
    "lecturas": "cos 6, 1-6",
    "resumen": "El maestro de alma, que se pone a enseñar Vemos a Jesús que «se puso a enseñar» en la Sinagoga. Marcos no nos dice qué enseñaba, pero si escuchamos lo que decía la gente, vemos que se admiraba de su s",
    "link": "https://drive.google.com/file/d/1vbHSH1KNVd0m5q28greNj6OC6kj76oy_/view?usp=drive_link"
  },
  {
    "id": 34957,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La prioridad la tiene la fe, porque es lo que nos vuelve protagonistas, con Jesús, en medio del pueblo (13 B 2018)",
    "lecturas": "Mc 5, 21-43",
    "resumen": "El fotógrafo se llama Richard Tsong-Taatarii. La foto es de octubre del año pasado. La pesqué buscando imágenes para las",
    "link": "https://drive.google.com/file/d/15TJHOCsylexrKnnq3n--FFfXHIhusOcA/view?usp=drive_link"
  },
  {
    "id": 52586,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Ley sobre el aborto: El cambio de manos del poder y con qué cara llevamos de la mano a nuestras hijas y nietos",
    "lecturas": "ros 1.146",
    "resumen": "Un momento emotivo, al finalizar la sesión en la que Diputados dio media sanción al proyecto de ley sobre la interrupción voluntaria del embarazo, estuvo a cargo de la diputada Lospenatto. Dijo varias",
    "link": "https://drive.google.com/file/d/1wg3AO-4DK-v1Io6p_kS3TECRwpAwjqSJ/view?usp=drive_link"
  },
  {
    "id": 99468,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Si dejáramos que Dios engrandezca su Misericordia con nosotros se nos soltaría la lengua y se nos volverían creativas las manos en obras de misericordia con los más pobres (12 B 2018 Nacimiento de Juan Bautista)",
    "lecturas": "Lc 1, 57-66; Mt 11, 2-6",
    "resumen": "En el nombre «Juan» está la idea de que «Dios tiene misericordia», Dios se ha apiadado, se ha mostrado benigno. La verdad es que quería conectar lo que captaron los vecinos de Zacarías e Isabel, «los",
    "link": "https://drive.google.com/file/d/1L9Jl9tDgCOiitHTDG9qUaqXiEie4y9FT/view?usp=drive_link"
  },
  {
    "id": 74270,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Hay que salir a sembrar de nuevo semillas del evangelio que se sembraron menos (11 B 2018)",
    "lecturas": "Mc 4, 26-33",
    "resumen": "El reino de los cielos es un misterio. El misterio de cómo está presente Dios -el Padre, Jesús, el Espíritu Santo- en medio de nosotros, cómo es que actúa en la vida de la gente, cómo inicia, como se",
    "link": "https://drive.google.com/file/d/1QGVdYwdBJGj25YEhZjQE8PxUL2WQIUhh/view?usp=drive_link"
  },
  {
    "id": 18793,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las dos parábolas contra el Maligno, que quiere robarnos la Palabra torciendo la lógica del Amor (10 B 2018)",
    "lecturas": "Mc 3, 20-35; ngo 11, 12; Pe 5, 8",
    "resumen": "Este evangelio de Marcos aparece pocas veces en la liturgia dominical ya que el tiempo ordinario suele comenzar por el domingo 11, 12 o 13. De hecho, nunca me ha tocado hacer esta",
    "link": "https://drive.google.com/file/d/11cM1Jrlj-JsJPtXRBQTyQSASGWLHwtRt/view?usp=drive_link"
  },
  {
    "id": 30293,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Preparar, realizar, agradecer… todo es uno en la comunión con Jesús  (Corpus B 2018)",
    "lecturas": "Mc 14, 12-26",
    "resumen": "Siempre me impresiona que el Señor ya tenía «contratada» la sala en el piso alto de la hospedería  («mi» habitación de huéspedes»- dice-) en la que celebraría su última cena de Pascua -la primera Euca",
    "link": "https://drive.google.com/file/d/1WyJ35M0W5oD-Up5q68lPP0AX0XklBury/view?usp=drive_link"
  },
  {
    "id": 44072,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Perder el miedo al Espíritu, Dedo de la Mano del Padre (Santísima Trinidad B 2018)",
    "lecturas": "Mt 28, 16-20; Ts 5,21",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1JHqZdQQyr8PzTElrEKGIvPlV1J4uFbj8/view?usp=drive_link"
  },
  {
    "id": 21077,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las lenguas en que el Espíritu nos concede hablar (Pentecostés B 2018)",
    "lecturas": "Jn 20, 19-23; Hc 2, 1",
    "resumen": "Las llagas del Señor que los pacifican, la misión del Padre con que son enviados, el Espíritu Santo que reciben y que los llena con su Soplo y con su Llama, el perdón de los pecados -para sí y para da",
    "link": "https://drive.google.com/file/d/1NHQh5HmXgDpn7qyBt9ci4IV9BJqVbg4A/view?usp=drive_link"
  },
  {
    "id": 69741,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Un cristianismo que se ha quedado mirando al cielo de reojo? (Ascensión B 2018)",
    "lecturas": "Mc 16, 15-20; Jn 16, 27",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/18MiDZ7v317Yxjo1Ys5OPKZbUnD6DhqUo/view?usp=drive_link"
  },
  {
    "id": 55567,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "En Jesús podemos ser amigos de todos los hombres (Pascua 6 B 2018)",
    "lecturas": "Jn 15, 9-17; Pe 3, 8; Qo 7, 14-15",
    "resumen": "«Yo los he llamado amigos» dice Jesús en la última Cena. Nos quedamos con esa frase y le dedicamos este rato de",
    "link": "https://drive.google.com/file/d/1hvpivtJKLaxIc1g88hTUUkv3pwhbIAty/view?usp=drive_link"
  },
  {
    "id": 78606,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Padre es el que custodia y cultiva la unidad entre Jesús y los hombres (Pascua 5 B 2018)",
    "lecturas": "Jn 15, 1-8; Lc 13, 7",
    "resumen": "La imagen de Jesús como «la vid verdadera» es una imagen que me suena tan familiar como la de «el buen pastor», aunque está menos desarrollada. Al poner atención hoy en la imagen del agricultor (ge-or",
    "link": "https://drive.google.com/file/d/1gyae4sPSxoEnfxBZUVcZuz3K3piXye3i/view?usp=drive_link"
  },
  {
    "id": 35432,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "La cooperativa (para no terminar siendo algún tipo de mercenario) (Pascua 4 B 2018)",
    "lecturas": "Jn 10, 11-18",
    "resumen": "No sé si será tan así como lo voy a decir, pero para mí que a la imagen del mercenario no hay que oponerle la de un buen pastor individual sino la de una cooperativa de pastores . Porque, como decía u",
    "link": "https://drive.google.com/file/d/1DL2qC0-Yh7iNXh2Qj8M14jlxczIw-nDy/view?usp=drive_link"
  },
  {
    "id": 99571,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Señor «resetea» la comunidad desde su Corazón (Pascua 3 B 2018)",
    "lecturas": "Lc 24, 35-48; Ef 2, 14",
    "resumen": "Lucas dice que Jesús «se puso» en medio de ellos. Es una palabra técnica que usa Lucas. Se traduce de muchas maneras: se presentó, se apareció… Me llamó la atención que en inglés en algunas explicacio",
    "link": "https://drive.google.com/file/d/1iaM40yBoKrAMqeskD_Ck7qcuggTwWhah/view?usp=drive_link"
  },
  {
    "id": 7924,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "El Señor no se cansa de darnos la paz. Los criterios de discernimiento que brotan de la alegría de Jesús resucitado (2 B Pascua 2018)",
    "lecturas": "Jn 20, 19-29",
    "resumen": "El Anuncio de la Resurrección requiere discernimiento. Hemos visto cómo las discípulas tuvieron que discernir que ese miedo que se apoderaba de ellas y las hacía callar el Anuncio, era del mal espírit",
    "link": "https://drive.google.com/file/d/1AozEGlYfpqpHlFnDgWWSl2LYLZJc5v-E/view?usp=drive_link"
  },
  {
    "id": 68969,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Discernir la verdad de la resurrección para que se nos vuelva «cercana», para que nos toque el corazón y nos movilice la vida! (Vigilia de Pascua B 2018)",
    "lecturas": "Mc 16, 1-8; Mc 1, 31; Mc 2, 9",
    "resumen": "No se espanten! les dice el Ángel. Y con esa indicación les «discierne» a las tres discípulas ese sentimiento dominante que se ha apoderado de su corazón y las paraliza. El «no se espanten» les abre l",
    "link": "https://drive.google.com/file/d/1VA8DLxKdnQb-cTqP-V4NUOza8sgoxkW5/view?usp=drive_link"
  },
  {
    "id": 56259,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contemplación de la Pasión según san Marcos en clave de discernimiento espiritual (Domingo de Ramos B 2018)",
    "lecturas": "Mc 11, 1-10; cos 14, 1",
    "resumen": "de la Pasión del Señor ayuda a asimilar este discernimiento de fondo, gustándolo en cada paso del Vía Crucis, en cada personaje, en cada situación límite que vive el Señor. Jesús entra en nuestra vida",
    "link": "https://drive.google.com/file/d/13w9JQyuBkoZ3GemwDIV_sM7GLP_BdPxf/view?usp=drive_link"
  },
  {
    "id": 57040,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús también discernía «el momento». No es que «las tuviera todas claras»",
    "lecturas": "Jn 12, 20-33",
    "resumen": "En el evangelio de hoy podemos encontrar una de las fuentes de lo que en Ejercicios se llama un “proceso de discernimiento”. El Señor nos enseña a estar atentos a los acontecimientos, a dejarnos tocar",
    "link": "https://drive.google.com/file/d/1sZ1Ya055blpEp4rgEDhkiuJ2_URK5Uby/view?usp=drive_link"
  },
  {
    "id": 35436,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Practicar la verdad -personalizarla, más bien- a la luz del evangelio (4 B cuaresma 2018)",
    "lecturas": "uan 3, 14-21",
    "resumen": "Jesús le habla a Nicodemo de «practicar la verdad». Qué significa «practicar la verdad»?. Cuando tenemos la gracia de que el Espíritu Santo nos de a conocer una verdad, sobre Jesús, sobre nuestro cora",
    "link": "https://drive.google.com/file/d/16FRwycRKYoSYhC1qeQ5JayFkXItJIevq/view?usp=drive_link"
  },
  {
    "id": 78492,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "El templo de su Cuerpo y nuestros nombres (3 B cuaresma 2018)",
    "lecturas": "Sal 69, 10; uan 2, 13-25; Ap 2, 17",
    "resumen": "El templo de su cuerpo. La frase de Juan para hablar del cuerpo de Jesús me inspiró para sumarme al diálogo sobre la ley de la Interrupción legal del embarazo (ILE) como se llama, que pone en juego no",
    "link": "https://drive.google.com/file/d/1aOaM8L-KC7cPrappKYeDYd8TcGe46lP3/view?usp=drive_link"
  },
  {
    "id": 46748,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Transfigurar la resurrección o poner de nuevo en juego una palabra culturalmente opacada (2 B Cuaresma 2018)",
    "lecturas": "Mc 9, 2-10; Mc 9, 10; Os 6, 1",
    "resumen": "Cómo no decirlo de nuevo: los cristianos creemos en la resurrección de los muertos. El solo hecho de formularlo así – de decir «resurrección»- hace sentir cuánto se ha opacado esta palabra. Necesitamo",
    "link": "https://drive.google.com/file/d/1XfOTiD_hRX4kHXMkPXl5bbRdnrQA5XrX/view?usp=drive_link"
  },
  {
    "id": 22420,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "San José nos enseña a complacernos en Jesús como se complace un padre adoptivo. Jesús es uno de nosotros, el Hijo del hombre, parte de la humanidad. Pero no es nuestro, de ninguna carne ni cultura: lo tenemos que adoptar (1 B cuaresma 2018)",
    "lecturas": "Mc 1, 12-15; Col 1, 19-20; Cor 1, 21",
    "resumen": "Al elegir la palabra que el Padre le dirige a su Hijo recién bautizado – «En Ti me complazco»- me vino la imagen de San José. Encontré muchas estampitas de San José con el Niño, aunque ninguna lo expr",
    "link": "https://drive.google.com/file/d/1mIm76CQ6Ur74CrYdA19yBGo-rfd7HmlN/view?usp=drive_link"
  },
  {
    "id": 49869,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sólo el Espíritu puede darnos la gracia de una compasión como la de Jesús, que extiende la mano y toca nuestra carne y limpia las lepras de nuestro tiempo (6 B 2018)",
    "lecturas": "Mc 1, 40-45",
    "resumen": "El domingo pasado veíamos a Jesús rezando de madrugada -intercambiando deseos con el Padre-. Hoy Marcos nos muestra cómo Jesús «es movido por una compasión que toca» y sana al leproso y a toda la gent",
    "link": "https://drive.google.com/file/d/1kjZKnmxH4nCpcdPl-ndrw_Sg-OBtJzpO/view?usp=drive_link"
  },
  {
    "id": 15193,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Rezar es «intercambiar deseos» (proseuchomai) y el Espíritu es «El Deseo mismo de intercambiar» (5 B 2018)",
    "lecturas": "Mc 1, 29-39",
    "resumen": "Marcos, que nos muestra la actividad febril de un día en la vida de Jesús, nos dice que » De madrugada, muy de noche todavía, se levantó, salió y fue a un lugar desierto. Y allí rezaba. «Proseuchomai»",
    "link": "https://drive.google.com/file/d/1XOffitmt4fPd6XOf24QFKSNbQiMmcZ1f/view?usp=drive_link"
  },
  {
    "id": 33258,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las partes vulnerables del hombre, por las que entra el mal espíritu con su “lógica de la serpiente”, son tres : el bolsillo, el espejo y el pedestal (4 B 2018)",
    "lecturas": "Mc 1, 21-28",
    "resumen": "Cállate! Es la tercera palabra de Jesús en el evangelio de Marcos. La primera fue: Crean! Fue una palabra de Jesús para todo el pueblo fiel de Dios, para toda la gente de buena voluntad: Conviértanse",
    "link": "https://drive.google.com/file/d/1mowk3FUgUr4TzpcohcUOYFGMRg9irW7b/view?usp=drive_link"
  },
  {
    "id": 42779,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús, el Pescador invisible, que tironea desde arriba y nos enseña a discernir",
    "lecturas": "Mc 1, 14-20; Mt 13, 47-48",
    "resumen": "Jesús hacía fundamentalmente dos cosas: anunciaba y llamaba. El anuncio lo hacía “por atracción”, el llamado, saliendo Él a buscar. La gente se sentía atraída por Jesús e iba hacia él. Se juntaban mul",
    "link": "https://drive.google.com/file/d/1EafOgjjzqMoq5rLe-gWnS5gv0bnXXpt-/view?usp=drive_link"
  },
  {
    "id": 49286,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La hora décima,  la de las elecciones maduras, en las que uno puede gozar sintiéndose amigo de sus maestros y discípulo de sus amigos (2 B 2018)",
    "lecturas": "Jn 1, 35",
    "resumen": "Un Maestro! Querían un Maestro. “Jesús se dio vuelta y viendo que lo seguían les preguntó: “Qué quieren? Y ellos le respondieron “Rabbi” -Maestro – , dónde vives?”. De chicos, nuestros maestros los el",
    "link": "https://drive.google.com/file/d/1ReFsf4PTA9TdXLi0jTtyKsDCpMAQOZmx/view?usp=drive_link"
  },
  {
    "id": 18683,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No se pusieron en camino porque hubieran visto una estrella, sino que vieron la estrella porque estaban en camino (Epifanía B 2018)",
    "lecturas": "Mt 2, 1-12",
    "resumen": "Martín Descalzo a fines de los 80 y el Papa Francisco el año pasado toman una frase de San Juan Crisóstomo que dice que los Magos: “No se pusieron en camino porque hubieran visto una estrella, sino qu",
    "link": "https://drive.google.com/file/d/1Cb7FXP3dC1uW19DG4b8DJNh_wwXEEr3a/view?usp=drive_link"
  },
  {
    "id": 10656,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La Alegría del amor o todas las familias son sagradas (B 2017)",
    "lecturas": "Lc 2, 22-40",
    "resumen": "Suele pasar, cuando nace un niño en la familia, que la alegría de las abuelas es más expansiva que la de los papás. Los jóvenes padres vienen de pasar las angustias y los dolores del parto. Su alegría",
    "link": "https://drive.google.com/file/d/1tsDG4zlRTUhpGr3-QMnEGHoHQ3j7MnX4/view?usp=drive_link"
  },
  {
    "id": 24566,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Por eso nos atraes tanto pesebrito, por tu capacidad de registrar el peso de Jesús en tu historia (Navidad B 2017)",
    "lecturas": "cas 2, 1-20",
    "resumen": "Por eso nos atraes tanto, pesebrito… -pensé, cuando encontré la imagen después de buscar bastante y constatar que no había muchas de “pesebre solo”. Un pesebre solo no existe ni para los ojos de las v",
    "link": "https://drive.google.com/file/d/14nuBHfGndv0LdK52ewltmPbnefRez7bW/view?usp=drive_link"
  },
  {
    "id": 49654,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Una alegría sin envidia: esa cualidad que nos hace buenos testigos de la Luz (Adviento 3 B 2017)",
    "lecturas": "Jn 1, 6-28; Jn 3, 28-30",
    "resumen": "Testigos de la Luz! Como Juan Bautista, todo cristiano es -con sus pupilas y su corazón- un testigo de la luz. Juan no era la luz, eso lo deja claro, pero sí testigo de la Luz, que no es poco. ¿De qué",
    "link": "https://drive.google.com/file/d/15IUxQRLXVg-QN3-3yJCLLMcA7bGHeR7c/view?usp=drive_link"
  },
  {
    "id": 57849,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Los seis puentes y caminos del Espíritu que Francisco tendió y hay que mantener transitables (Adviento 2 B 2017)",
    "lecturas": "Mc 1, 1-8",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1puFZDbYAho-xJZGMeqYUVQzCBa8bRpIM/view?usp=drive_link"
  },
  {
    "id": 80045,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "A qué tenemos que estar despiertos? Qué es lo que nos tiene que desvelar? (1 B Adviento 2017)",
    "lecturas": "Mc 13, 33-37",
    "resumen": "A qué tenemos que estar despiertos? Qué es lo que nos tiene que desvelar? Tenemos que estar despiertos al amor. Y el amor es una fuerza que se extiende a todas las personas, pero a condición de que es",
    "link": "https://drive.google.com/file/d/18OaArG86uzJkPWq-mjHzTl8dHz9nriNN/view?usp=drive_link"
  },
  {
    "id": 68966,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Como Jesús, queremos ser gente que dice “vengan”, que deja todo para salir a buscar al que se perdió (34 A 2017)",
    "lecturas": "Mt 25, 35-46",
    "resumen": "“Vengan benditos de mi Padre”. La palabra “benditos” la usa el evangelio para nombrar a nuestra Señora y a Jesús: Bendita tú entre las mujeres –le dice Isabel- y bendito el fruto de tu vientre, Jesús.",
    "link": "https://drive.google.com/file/d/1JV1xQ_YKGuf-lWZtBJaAlVmjn3Eq-PyZ/view?usp=drive_link"
  },
  {
    "id": 37966,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "En el cielo, cada uno gozará no el amor que recibió sino el que dio, más un “bonus” extra para regalar (33 A 2017)",
    "lecturas": "Mt 25, 14-30",
    "resumen": "El talento no son los bienes –ya que a uno se le confiaron cinco, a otro dos y a otro uno- sino responder fielmente. Ese es el talento que el Señor bendice con la bienaventuranza del Servidor bueno y",
    "link": "https://drive.google.com/file/d/1CGUOKDK0vPfds719YsgDD53G4JHP7BZl/view?usp=drive_link"
  },
  {
    "id": 25108,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El que discierne que el Reino es algo único, sorprendente, especial, se prepara rezando un poco de más (32 A 2017)",
    "lecturas": "Mt 25, 1-13",
    "resumen": "El corazón de la parábola es, como en todas, el Reino de los cielos. El Reino es algo muy real pero su realidad es tan única, tan especial, que Jesús para hacer que nos despertemos a la magnitud de aq",
    "link": "https://drive.google.com/file/d/1lYbNBj7sAGAfykGpJEEWFqRSjnlUdRcz/view?usp=drive_link"
  },
  {
    "id": 92827,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Encontrar nuestro lugar de servicio es encontrar el modo de incidir –sin retóricas- en la realidad (31 A 2017)",
    "lecturas": "Mt 23, 1-12",
    "resumen": "Las filacterias… Me inquietó un poco lo de “las filacterias” porque no sabía lo que eran y no quería ponerme a buscar. Pero no me las pude sacar de la cabeza así que… comenzamos por las filacterias y",
    "link": "https://drive.google.com/file/d/1LmqIOLIVcb96-tQ8CCfHjiRJ5q4HT3eC/view?usp=drive_link"
  },
  {
    "id": 64482,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Razones para el amor Razones para la alegría (30 A 2017)",
    "lecturas": "Mt 22, 34-40",
    "resumen": "Al que ama así –con todo-, el Espíritu Santo le da una alegría que nada ni nadie le puede quitar (aunque en algunos períodos haya cosas que la ensombrezcan la mirada y atribulen el corazón). Uniendo a",
    "link": "https://drive.google.com/file/d/1y4FcuwHhk8C0I96jP4P8RNTuJD0Y7rX1/view?usp=drive_link"
  },
  {
    "id": 45794,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El dolor compartido que implica ser un pueblo (29 A 2017)",
    "lecturas": "Mt 22, 15-22",
    "resumen": "Uso expresiones nuestras para traducir: Consensuaron –los fariseos- cómo podían agarrar a Jesús en alguna de sus afirmaciones . Jesús le llama a esto “tenderle una trampa”. Y los categorizó tan rotund",
    "link": "https://drive.google.com/file/d/1jy_647dnOKK33fOClqaM7L5KmIRULCKL/view?usp=drive_link"
  },
  {
    "id": 10638,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Que el Espíritu bendiga la capacidad de los pobres de sentirse invitados del Padre al banquete de Jesús -28 A 2017",
    "lecturas": "Mt 22, 1-14; Sal 45, 11-14; Ap 19, 9",
    "resumen": "En la parábola de hoy, lo que más me llama la atención es –no sé si esta es la palabra- la obstinación del rey con la celebración de las bodas de su hijo, con que todo salga bien. Lo que depende de só",
    "link": "https://drive.google.com/file/d/1iz67oZASDDnVwJbTAI8OKypRczTo6ufP/view?usp=drive_link"
  },
  {
    "id": 79956,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La parábola de la tierra que se nos alquila para que compartamos con equidad sus frutos (27 A 2017)",
    "lecturas": "Mt 21, 33-46; Mt 5, 5; Dt 15, 4-5",
    "resumen": "El título tradicional de esta parábola es “los viñadores homicidas”. Y creo que la vuelve un poco lejana. La imagen del buen pastor ha quedado grabada en el imaginario de nuestra cultura, quizás porqu",
    "link": "https://drive.google.com/file/d/1dhsBQSwkfkmzB3UZaroM6YGM1GFWMKNy/view?usp=drive_link"
  },
  {
    "id": 17867,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los que se nos adelantan para que el trabajo se haga y la ayuda llegue (26 A 2017)",
    "lecturas": "Mt 21,28-32; Mt 21, 28; Jn 6, 29",
    "resumen": "Comienzo con algunas palabras que me llaman más la atención y desde ellas paso al contexto del ejemplo que propone Jesús a los sumos sacerdotes y ancianos del pueblo que le están cuestionando su autor",
    "link": "https://drive.google.com/file/d/1KEowV8jzdVghHhTzd_Qln__hXCP1kJIP/view?usp=drive_link"
  },
  {
    "id": 92087,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Seis retos contra los murmuradores: la bondad no confunde, es la envidia la que es demoníaca y asesina (25 A 2017)",
    "lecturas": "ros 1.146",
    "resumen": "El comienzo de estas parábolas tiene una fórmula aramea que se traduce: “Lo que s ucede con (el reino) … es como (lo que sucede) con…” . Las parábolas de Jesús van siempre directo a un punto dramático",
    "link": "https://drive.google.com/file/d/1kGF4sWX13uVc2j49ZL3R6eBubmNO-M6Y/view?usp=drive_link"
  },
  {
    "id": 80025,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Para nuestros desacuerdos de «cien denarios» hace bien escuchar a quien tiene el valor de perdonar más (24 A 2017)",
    "lecturas": "Mt 18, 21-35; Ex 3,5",
    "resumen": "Como siempre, es Simón Pedro el que se anima a preguntarle a Jesús si es que han entendido bien. El Señor, en el pasaje anterior, estaba hablando de nuestros desacuerdos, de la ofensa que supone el he",
    "link": "https://drive.google.com/file/d/1vGbYEBvXltrexspmGH89aSUI7GCdRIna/view?usp=drive_link"
  },
  {
    "id": 13785,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Señor se hace presente en los conflictos apenas alguien da el primer paso hacia un acuerdo (23 A 2017)",
    "lecturas": "Mt 18, 15-20",
    "resumen": "Hay que escuchar bien y comprender lo que está diciendo Jesús a sus discípulos en este pasaje del evangelio porque es increíble. Y cómo hacemos –nos podemos preguntar- para “leer bien”? Comparto algun",
    "link": "https://drive.google.com/file/d/1ZrBFCGSlNsZCApeIxq6cKQkz6ttmDg0a/view?usp=drive_link"
  },
  {
    "id": 38807,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Felices los Pedros que se dejan retar por Jesús y tienen así los sentimientos y la mente de Cristo (22 A 2017)",
    "lecturas": "Mt 16, 21-27; Fil 2, 5; Cor 2, 16",
    "resumen": "El reto del Señor a su amigo Simón Pedro, que acababa de confesarlo como el Cristo, el Hijo De Dios, no fue un reto así nomás. Fue un reto que lo despegó del mal espíritu que se había apoderado de su",
    "link": "https://drive.google.com/file/d/1jQv8rx9dHiijOBpr1FJUUjfeSvrCjg82/view?usp=drive_link"
  },
  {
    "id": 45440,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Felices los Pedros que necesitan que les confirmen la fe para confirmar a los demás (21 A 2017)",
    "lecturas": "Mt 16, 13-20",
    "resumen": "Feliz de ti Simón! Es la bienaventuranza de la fe. De lo feliz que hace tener fe en Jesús. La alegría que da hacerle caso a la fe cuando algo la despierta en nuestro corazón y sentimos el impulso a ad",
    "link": "https://drive.google.com/file/d/1iz2wf3N0GnXXCtWQLpcsQIih7OhT8rGt/view?usp=drive_link"
  },
  {
    "id": 80896,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Lo que nos dilata el corazon vs las razones para cerrarlo (20 A 2017)",
    "lecturas": "Mt 15, 21-28",
    "resumen": "Siempre me conmueve el pasaje de la mujer “siro-fenicia”, como la llama Mateo, porque Tiro y Sidon son parte del Líbano – tierra de mis abuelos – y la composición de lugar -el meterse en la escena, en",
    "link": "https://drive.google.com/file/d/1yPYyabeTm-ZB17pjlIVFDFh1ozN7MJgd/view?usp=drive_link"
  },
  {
    "id": 26956,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Una Barca en la que no está Jesús y un Pedro que se tira al agua para ir a su encuentro (19 A 2017)",
    "lecturas": "ros 1.146",
    "resumen": "Señor, si eres Tú, mándame ir a Ti sobre las aguas. La frase de Simón Pedro nos enseña algo que él ha aprendido del Señor: para discernir a Jesús de los fantasmas hay que jugarse. Lo mismo vale para «",
    "link": "https://drive.google.com/file/d/1NkScKiVpuc9c6JrOjtSuxPjACSP1JfqK/view?usp=drive_link"
  },
  {
    "id": 89084,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La transfiguración del Señor",
    "lecturas": "ros 1.146",
    "resumen": "Escuchadlo! Ese es el único mandato del Padre a Pedro, Santiago y Juan: que escuchen a Jesús. Por qué? Por que es \"su Hijo amado, su predilecto\". Qué supone el Padre en ellos, los testigos, para confi",
    "link": "https://drive.google.com/file/d/1qmzg3lj8pPo3CzDnMlyrhsen0sMA0ZWd/view?usp=drive_link"
  },
  {
    "id": 92662,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Enternecer el corazón activa la lógica de Jesús, que es la lógica de un más concreto, posible, encarnado (18 A 2017)",
    "lecturas": "Mt 14, 13-21",
    "resumen": "Tomamos la escena en el punto donde los discípulos consideran que “ya está bien” y Jesús les sale con un “denles ustedes de comer”. El Señor mira a su pueblo con la lógica del más. Los discípulos sigu",
    "link": "https://drive.google.com/file/d/17Xxb-Cs8mm8CTfPoqQRJEzb8l-3WO8NP/view?usp=drive_link"
  },
  {
    "id": 91677,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contra los lenguajes tramposos II: saber discernir las trampas del menos",
    "lecturas": "Mt 13, 44-52; Cor 2, 14-16; Mt 7, 9-10",
    "resumen": "Las cuatro parábolas finales del misterio del Reino de los Cielos de Mateo, son contundentes. Iluminan la inteligencia espiritual del que es y quiere ser siempre “discípulo formado en las cosas del Re",
    "link": "https://drive.google.com/file/d/1WW68xxd-YgLx2Du1-v3VUInuIlSgLjWh/view?usp=drive_link"
  },
  {
    "id": 38514,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Para hacer contra a los lenguajes tramposos no hay otro camino que crecer en el discernimiento (16 A 2017)",
    "lecturas": "Mt 13, 24; teo 5, 22",
    "resumen": "En el Ángelus del domingo pasado, el Papa Francisco, hizo una reflexión sobre el lenguaje de Jesús: “Jesús, cuando hablaba, usaba un lenguaje simple y usaba también imágenes, que eran ejemplos tomados",
    "link": "https://drive.google.com/file/d/1rvjyrAZwsolRF8qX8ESb5iWuaMzKMSwQ/view?usp=drive_link"
  },
  {
    "id": 29818,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Oír la Palabra con el corazón, como se escucha crecer una semilla, no como quien usa un registrador (15 A 2017)",
    "lecturas": "Mt 13, 1-23; Jn 16, 13; Jn 16,13",
    "resumen": "Las parábolas son siempre nuevas para el que tenga oídos y quiera oir , como dice el Señor. Estos oídos y este oír son algo complejo. No es que cualquiera pueda oír lo que el Señor dice. Sus palabras",
    "link": "https://drive.google.com/file/d/1AtjjpzghT_jjP5gnRbx0VSQTQqseDhIu/view?usp=drive_link"
  },
  {
    "id": 7919,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Termómetro de la humildad: Cuanto más gente mejor que uno reconoce uno, es que menos se la cree (14 A 2017)",
    "lecturas": "Mt 11, 25-30; Mt 11, 20",
    "resumen": "Este pasaje tan consolador del Evangelio, en que Jesús homologa lo que hace al Padre, que oculta sus cosas a los sabios y prudentes y se las revela a los pequeñitos –al pueblo fiel de Dios-, Mateo y L",
    "link": "https://drive.google.com/file/d/1hwPRgMnp2-o7R2yvXMxWt2B0UrRbj5Em/view?usp=drive_link"
  },
  {
    "id": 45462,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La Palabra de Dios no se muestra como una secuencia de tesis abstractas sino como una compañera de viaje (13 A 2017)",
    "lecturas": "Mt 10, 37-42",
    "resumen": "El que pierda su vida por Mí… la encontrará! Perder la vida por Él. Por Jesús. Perderla por la gente, por los más pequeñitos, por los demás. Perder la vida en esas tareas pequeñas en las que se nos pu",
    "link": "https://drive.google.com/file/d/18f47U7VAjuN2WnqFOf1AD9sMvcfH9emE/view?usp=drive_link"
  },
  {
    "id": 21712,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tres cosas muy personales donde no hay que tener miedo a jugarse (12 A 2017)",
    "lecturas": "Mt 10, 26-33",
    "resumen": "No teman. No teman. No teman. No teman confesarse los pecados y predicar públicamente el evangelio. No teman a las persecuciones externas, que no pueden matarles el alma. Ustedes son valiosos para el",
    "link": "https://drive.google.com/file/d/1FVw2t2f-yDoj-pg7I3EAClGo_kEhb0UM/view?usp=drive_link"
  },
  {
    "id": 20768,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La gracia de aprender a recibir la Eucaristía con la ayuda del Espíritu Santo (Corpus A 2017)",
    "lecturas": "uan 6, 51-58",
    "resumen": "El que me come vivirá por mí , dice el Señor. No se trata de un comer inconsciente, sino de un comer espiritual. Recibir la Eucaristía es comer un Pan que uno elige, rodeando de preparación y cuidado",
    "link": "https://drive.google.com/file/d/1PujkI-VY1vSykO8-tq0uw6xAyjH9LYAJ/view?usp=drive_link"
  },
  {
    "id": 97891,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "¡Tanto! (Trinidad A 2017)",
    "lecturas": "Jn 3, 16-18; Mt 1, 20",
    "resumen": "Si uno mira el evangelio de hoy, en que el tema daría para un tratado sobre la Trinidad que podría llevar varios tomos, ve que la Iglesia elige un textito de nada en el que sólo se nos dice que Dios a",
    "link": "https://drive.google.com/file/d/1j2bYKcDQnNmcxfYy6DaplPEKeLfUcWxm/view?usp=drive_link"
  },
  {
    "id": 27111,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pentecostés: Amar la unidad del Pueblo de Dios, muchedumbre reunida en la unidad del Espíritu Santo  (Lumen gentium 4) Pentecostés A 2017",
    "lecturas": "Jn 20, 19-23; Rm 5, 5; Re 17, 14",
    "resumen": "Cómo se hace para que en nuestra vida se de un “nuevo Pentecostés”? En un mundo donde el consumo y la prisa nos petrifican el corazón, necesitamos una verdadera y literal reanimación espiritual. Hay q",
    "link": "https://drive.google.com/file/d/1Lc1qumKbi7AkYDfoR4kVj495bRGW_F88/view?usp=drive_link"
  },
  {
    "id": 83332,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El punto de inflexión en el que se juega la presencia de Jesús en nuestra vida (Ascensión A 2017)",
    "lecturas": "teo 28, 16-20",
    "resumen": "Hoy es la fiesta de la Ascensión del Señor al Cielo, donde está sentado a la derecha del Padre, para interceder siempre por nosotros. Jesús nos prometió que estará con nosotros todos los días, hasta e",
    "link": "https://drive.google.com/file/d/1Z0z2NYLuzqrbjpBEFG7Rx5-cVZIAYBmW/view?usp=drive_link"
  },
  {
    "id": 81077,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Solo en un camino nuestro inclusivo -de misericordia y alegría- puede Jesús mostrarse al mundo (Pascua 6 A 2017)",
    "lecturas": "Jn 14, 15-26",
    "resumen": "Al igual que Judas Tadeo, nosotros también preguntamos: “¿Por qué Jesús no se manifiesta a todo el mundo, de una sola vez, para que todos crean? El Señor no corrige la pregunta de Judas Tadeo (como ha",
    "link": "https://drive.google.com/file/d/1L2etxKl5oUqk8Fe2QyIY4xkWvv13Ww87/view?usp=drive_link"
  },
  {
    "id": 41822,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Fátima: el Señor se revela a cada persona y a cada época según su carácter y su corazón. Pascua 5 A 2017",
    "lecturas": "uan 14, 1-12",
    "resumen": "“No se agite su corazón. Ustedes creen en Dios? Crean también en mí”. “No teman. Yo soy el ángel de la paz. Recen conmigo! Dios mío, yo creo, adoro, espero y te amo”. Cuando uno lee los diálogos del á",
    "link": "https://drive.google.com/file/d/1s8nlM8lmFUOQPH0HFcbkiN3haGjdWhQ3/view?usp=drive_link"
  },
  {
    "id": 75483,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Si las ovejitas hablaran (Pascua 4 A 2017)",
    "lecturas": "Jn 10, 1-13; Jn 10, 16",
    "resumen": "¿Cómo presentar a los que van a hablar hoy, siguiendo aquello de San Ignacio en los Ejercicios de “mirar a las personas y escuchar lo que dicen”? Había comenzado imaginando que decían: “Somos las ovej",
    "link": "https://drive.google.com/file/d/1RLey2WF_FXYELtPdeQMNaOlKhWMqse3S/view?usp=drive_link"
  },
  {
    "id": 16673,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Emaús: Antes de verlo lo escuchamos, antes de reconocerlo lo hospedamos. Después volvimos corriendo a la comunidad",
    "lecturas": "cas 24, 13-35; Hc 15, 28; Mt 18, 19-20",
    "resumen": "Se habrán dado cuenta de que el Evangelio, aunque sólo pone el nombre de Cleofás, nos considera como si fuéramos uno solo. Lucas siempre dice “los discípulos”. Y hace ver cómo  el Señor nos pregunta,",
    "link": "https://drive.google.com/file/d/1KGKLViHZO4abqPjB3DVZvecxxlyAccqw/view?usp=drive_link"
  },
  {
    "id": 67066,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Si lo veo, no lo creo o Las ondas gravitacionales y el lieto anuncio del Señor resucitado (Pascua 2 A 2017)",
    "lecturas": "Jn 20, 19-31",
    "resumen": "Estas",
    "link": "https://drive.google.com/file/d/1NUpJ_wcNYEDGUG6LRulxzI7P6MfbmHya/view?usp=drive_link"
  },
  {
    "id": 65380,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Las que anuncian una y otra vez que el Maestro ha resucitado y nos espera en Galilea (Pascua A 2017)",
    "lecturas": "Mt 28, 1-10; Lc 8, 2-3; Gal 3, 26-28",
    "resumen": "Aunque al narrar el evangelio así, en primera persona, saqué mi nombre, y dejé el de “la otra” María, como la llama Mateo, ya se habrán dado cuenta de quién es la que habla. La tradición se hace lío c",
    "link": "https://drive.google.com/file/d/15mkGRNZbpeWd-XWaAFNl-cPbj0-W-f36/view?usp=drive_link"
  },
  {
    "id": 24959,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Betfagé. Domingo de ramos. Habla de Jesús y de su entrada en Jerusalén el dueño del asna y del burrito",
    "lecturas": "Mt 21, 1-11",
    "resumen": "“Si alguien les dice algo…” Yo soy ese “alguien”. Pero no les dije nada a los discípulos. Más aún, yo mismo desaté mi asna y le dí una palmada al burrito que se fue con ellos de lo más contento, como",
    "link": "https://drive.google.com/file/d/1qH8PMPc10WUkALd-qBNtYoDS-37ECzeb/view?usp=drive_link"
  },
  {
    "id": 91036,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "En el mundo de hoy, el diálogo -si es que no ha muerto- está enfermo. Sólo la amistad en Jesús lo puede resucitar",
    "lecturas": "uan 11, 1-45",
    "resumen": "Caravaggio, Resurrección de Lázaro Había un hombre enfermo, Lázaro de Betania, del pueblo de María y de su hermana Marta. María era la misma que derramó perfume sobre el Señor y le secó los pies con s",
    "link": "https://drive.google.com/file/d/11mcHdikeq3aFANoD5hRc8Kb-f_r7ulb8/view?usp=drive_link"
  },
  {
    "id": 1713,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "“Con mis ojos sin culpa, recién modelados por Jesús, lo defendía yo contra los opinadores” (El ciego)",
    "lecturas": "uan 9, 1-41",
    "resumen": "Jesús, al pasar, vio a un hombre ciego de nacimiento. Sus discípulos le preguntaron: «Maestro, ¿quién ha pecado, él o sus padres, para que haya nacido ciego?» «Ni él ni sus padres han pecado, respondi",
    "link": "https://drive.google.com/file/d/1ASbXQRZZGj7wBmLCG3sVAr_CxT8wnU30/view?usp=drive_link"
  },
  {
    "id": 32181,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Al Padre la agrada la gente que adora… y que enseña a otros a adorar (3 A Cuaresma 2017)",
    "lecturas": "Jn 4, 5-42; Jn 4, 13; Hc 2, 38",
    "resumen": "Adelanto de Pentecostés “Si conocieras el Don de Dios…”. La Samaritana “adelantó” algo que el Señor tenía planeado para después de su ascensión al Cielo. Ella le pidió a Jesús el Don del Agua viva, al",
    "link": "https://drive.google.com/file/d/1LH7jYl5vX0WOVd4M7u_M75FHdIHeDXAy/view?usp=drive_link"
  },
  {
    "id": 49004,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Este es mi Hijo amado, el predilecto. Escúchenlo, les pido: es mi Hijo (2 A Cuaresma 2017)",
    "lecturas": "Mt 17, 1-9",
    "resumen": "¡Escúchenlo! Esta es la Palabra del Padre para todos los hombres: Escuchen a mi Hijo, escuchen a Jesús. Toda la escena de la transfiguración apunta a inculcar para siempre este mensaje: tomar aparte a",
    "link": "https://drive.google.com/file/d/1aa4tlyvrZVBMQ6s_r3loMOOGdXlyhj85/view?usp=drive_link"
  },
  {
    "id": 51928,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Ha desaparecido una palabra: la que expresa lo que significa ser conducidos por el Espíritu (Cuaresma 1 A 2017)",
    "lecturas": "Mt 4, 1-11; Lc 4, 5; Lc 8, 22",
    "resumen": "r la “desaparición de una palabra”: anagogía. En castellano ha quedado la palabra “analogía”, que usamos para explicar algo “por analogía”, es decir con otra cosa semejante. Pero",
    "link": "https://drive.google.com/file/d/1TKknVyLTfrDwiOKxxQszXvnmDEEBFd0f/view?usp=drive_link"
  },
  {
    "id": 30371,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Al-ḥamdu li-l-lāh (8 A 2017)",
    "lecturas": "Mt 6, 24-34",
    "resumen": "Siempre me impresiona una frase que mis amigos musulmanes del Centro San Saba tienen a flor de labios cada vez que cuentan algo triste o duro que les pasó. La primera vez que presté atención fue cuand",
    "link": "https://drive.google.com/file/d/1WJMzCOQebXC6u1QsKCLEHD1FhRYh5lbf/view?usp=drive_link"
  },
  {
    "id": 81321,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Para que se habría gastado el Señor en enviarnos a su Espíritu, si con la ley bastara (7 A 2017)",
    "lecturas": "Mt 6, 38-48",
    "resumen": "Estamos viviendo en un mundo en el que cada país se arma para aniquilar a sus enemigos y se construye muros para no permitirles entrar. Sostener que al enemigo hay que eliminarlo lleva a aceptar como",
    "link": "https://drive.google.com/file/d/1WIXbP3uMQjW0nt6uGEvlVqEwZPmnTVCh/view?usp=drive_link"
  },
  {
    "id": 56770,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Espíritu es como las madres, que nos hacen gustar la dulzura interior de las leyes de la casa (6 A 2017)",
    "lecturas": "Mt 5, 17-37",
    "resumen": "Un pueblo que ama sus costumbres y cumple la ley interiormente, no por miedo a la policía, es un pueblo sabio y maduro. Solo el Espíritu Santo es capaz de dar esta gracia: la ley interior de la carida",
    "link": "https://drive.google.com/file/d/1fIFyzCaxWPpLbtNNQSKp-bxzj-A7vWa3/view?usp=drive_link"
  },
  {
    "id": 92798,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Inculturar el Evangelio y evangelizar las culturas",
    "lecturas": "ros 1.146",
    "resumen": "Presentación de la edición de La Civiltà Cattolica Iberoamericana en la Embajada de España (Roma -9 de febrero de 2017) La edición en español de La Civiltà Cattolica , con su número 1 estampado allí d",
    "link": "https://drive.google.com/file/d/12BAX_oSRYyVnRlayRXg2I7oGpdDVw9T8/view?usp=drive_link"
  },
  {
    "id": 41434,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Por la acción del Espíritu, la Escritura se anima: resplandece de luz y adquiere sabor (5 A 2017)",
    "lecturas": "ros 1.146",
    "resumen": "Ustedes son la sal de la tierra. Pero si la sal pierde su sabor, ¿con qué se la volverá a salar? Ya no sirve para nada, sino para ser tirada y pisada por los hombres. Ustedes son la luz del mundo. No",
    "link": "https://drive.google.com/file/d/1686qz5ts2N4WUEtCjY1fwUw-OOtWUc7Q/view?usp=drive_link"
  },
  {
    "id": 97915,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las Bienaventuranzas: 9 bendiciones consoladoras de Jesús que forman al Pueblo fiel de Dios (4 A 2017)",
    "lecturas": "teo 5, 1-12",
    "resumen": "El Señor, al comienzo de su ministerio, retoma al profeta Isaías. Le dice a la gente que el Espíritu Santo lo ha ungido para anunciar la buena noticia a los pobres y consolar a los afligidos. Las bien",
    "link": "https://drive.google.com/file/d/1VP2Gu39tPoDxJw7jAg_zNojD8vmEfKjH/view?usp=drive_link"
  },
  {
    "id": 71889,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El Reino está cerca de los lugares donde se mezclan –donde se amigan- las culturas (3 A 2017)",
    "lecturas": "Is 9, 2; teo 4, 12-23",
    "resumen": "Galilea de las naciones paganas…, orillas del mar…, pescadores echando las redes…, la gente con sus dolencias… El papa Francisco usa la palabra “periferias”. Periferias geográficas, culturales, existe",
    "link": "https://drive.google.com/file/d/15hrfN7qPBaFqJEW9wfP3avJilEtPkZBg/view?usp=drive_link"
  },
  {
    "id": 98210,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nunca tenemos que pensar al Espíritu Santo solo, aislado. Es el Espíritu que descendió sobre Jesús (2 A 2017)",
    "lecturas": "Jn 1, 29-34; Jn 19, 30; Jn 20, 22",
    "resumen": "En este tiempo estoy rezando con “El canto del Espíritu”, un libro de Raniero Cantalamesa, el predicador del Papa. En nuestra casa no faltan libros –la biblioteca tiene más de 400.000- pero este lo pe",
    "link": "https://drive.google.com/file/d/1_ZLOSI0HDs4S0VNkIQIOMYR_FXOmtCkm/view?usp=drive_link"
  },
  {
    "id": 71816,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Con el Bautismo la gracia actúa desde adentro y el demonio desde afuera – Diadoco de Fótice (Bautismo A 2017)",
    "lecturas": "Mt 3, 13-17",
    "resumen": "Siempre impresiona ver a Jesús haciendo fila en medio del pueblo de Dios, como si fuera un pecador más, para hacerse bautizar por Juan. El estar metido de lleno en las costumbres populares, no solo en",
    "link": "https://drive.google.com/file/d/10cMj6VyMpNTNymkqw8lHTiCH-48Iuc54/view?usp=drive_link"
  },
  {
    "id": 37297,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Nuestra Señora, Maestra espiritual en el discernimiento que pide el Papa Francisco (1º enero 2017)",
    "lecturas": "Lc 2, 16-21; Jn 2, 5",
    "resumen": "Me gusta la traducción que dice que María “atesoraba” los acontecimientos de su Hijo y lo hacía no de manera estática, como quien saca una foto y la guarda, sino “ponderándolas” en su corazón. “Sym-ba",
    "link": "https://drive.google.com/file/d/1CSxkid7Rm3VCVBt00tsled3VEb4xNDkz/view?usp=drive_link"
  },
  {
    "id": 33270,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "La Palabra se hizo carne, no tengamos miedo de encarnar la espiritualidad (Navidad A 2016)",
    "lecturas": "cas 2, 1-14",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1R3OwU8d6bNMsFFawxzlJUcVVOrJnfIzH/view?usp=drive_link"
  },
  {
    "id": 88395,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "La ayuda de San José para discernirlo todo con una sola Palabra: Jesús (Adviento 4 A 2016)",
    "lecturas": "Mt 1, 18-24; Gn 2, 19-20",
    "resumen": "El título que San Ignacio da a sus Reglas de discernimiento es “Reglas para en alguna manera sentir y conocer las varias mociones que en el alma se causa, las buenas para recibir y las malas para lanz",
    "link": "https://drive.google.com/file/d/1wMWkoJv-tfhJQ3vns3OCdW30G9YbUmKn/view?usp=drive_link"
  },
  {
    "id": 85413,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "30 años de Ordenación sacerdotal",
    "lecturas": "ros 1.146",
    "resumen": "El 12 de diciembre de 1986 fuimos ordenados en el Colegio Máximo de San Miguel. Recuerdo siempre a Chela, misionera del Barrio de Sumampa, que después de la misa y en medio del tumulto de la gente que",
    "link": "https://drive.google.com/file/d/1Rp-6R6hPKOKGp1HekHxVsR9D5YogCXe-/view?usp=drive_link"
  },
  {
    "id": 79652,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Ante el escándalo (adviento 3 A 2016)",
    "lecturas": "Mt 11, 2-11; Mt 15, 12; Mat 13, 55-57",
    "resumen": "La palabra que me golpea del evangelio de hoy es “escándalo”. Estoy pensando en el escándalo que sacude a Mendoza y a la Iglesia por el caso de los sacerdotes implicados en el abuso de menores hipoacú",
    "link": "https://drive.google.com/file/d/1AOAWECz-2NH4pzUavXbhciAdFL6QxhC_/view?usp=drive_link"
  },
  {
    "id": 15233,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Amoris Laetitia, Misericordia et misera… Hay firmas que no necesitan aclaración (Adviento 2 A 2016)",
    "lecturas": "Mt 3, 1-12; Ef 5,2",
    "resumen": "Conviértanse! Conversión -metanoia- es la palabra preferida de Juan. Una palabra, una misión: hacer que la gente se convierta a Jesús que viene. Ese Jesús que viene después de Juan, que es más poderos",
    "link": "https://drive.google.com/file/d/1Wt8lWg_jNCAMOG_JT6sH2_dptd9hctPH/view?usp=drive_link"
  },
  {
    "id": 72864,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Si Jesús dice que vendrá, entonces es que hay una puerta abierta (Adviento 1 A 2017)",
    "lecturas": "Mt 24, 37-44; Gn 6, 5-6",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1DBb2knqCOzXQ7YxlXFDtPphhlyPsGLA2/view?usp=drive_link"
  },
  {
    "id": 31911,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Consejos del buen ladrón antes de que se cierre la puerta de la Misericordia (34 C 2016)",
    "lecturas": "Lc 23, 35-49; Col 2, 3",
    "resumen": "Al terminar el Año Santo de la Misericordia, nos identificamos con el buen ladrón y entre hoy y mañana, le “robaremos” a Jesús crucificado una mirada suya. Le hablaremos como el buen ladrón y le direm",
    "link": "https://drive.google.com/file/d/18KMuwpCqdQCyzDKcwI1ddPAn_p8cCrYp/view?usp=drive_link"
  },
  {
    "id": 99671,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El aguante cristiano en la misericordia, la ternura y el sentido del humor (33 C 2016)",
    "lecturas": "Lc 21, 5-19; Jn 18, 23; Lc 23, 46",
    "resumen": "Entramos en la última semana del Jubileo de la misericordia. El evangelio es apocalíptico y nos concentramos, más que en las imágenes de destrucción, en algunas palabras esenciales que salen de los la",
    "link": "https://drive.google.com/file/d/1SyP_S30_7b_z8vsY-X83qmxR25SNz5cl/view?usp=drive_link"
  },
  {
    "id": 61742,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Interior a sí el hombre sólo puede serlo con el corazón, no con el espíritu (32 C 2016)",
    "lecturas": "Lc 20, 27-38",
    "resumen": "La “antiparábola” de la viuda que se casó siete veces debió parecerle muy ingeniosa a los saduceos. Ingeniosa como es ingenioso el mal, cuando quiere ser cruel, burlarse y herir. Sin embargo es patéti",
    "link": "https://drive.google.com/file/d/1_Lz_nqy1FtTinVqrKj05PtzcqRmPV3o6/view?usp=drive_link"
  },
  {
    "id": 68246,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El efecto Zaqueo: decidirse en un instante por Jesús y hacer las cosas de corazón (31 C 2016)",
    "lecturas": "Lc 19, 1-10",
    "resumen": "Para Zaqueo el encuentro con Jesús debe haber sido como un solo instante. Así como lo que escribí, todo de corrido: desde el momento en que Jesús entré en Jericó y le avisaron hasta que se cruzaron su",
    "link": "https://drive.google.com/file/d/1IqNtrPLs9nr3-JY151m7oKNFn8Sdq7a5/view?usp=drive_link"
  },
  {
    "id": 17656,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Dios mío, sé propicio conmigo (bancame, decimos en argentino) que soy un pecador (30 C 2016)",
    "lecturas": "Lc 18, 9-14; Hb 2, 17; Jn 4, 8",
    "resumen": "La frase del publicano es “sé propicio conmigo” ( ilastheti ), se benigno, indulgente, muéstrate favorable. Bancame, decimos en argentino. “Yo te banco” es: “estoy con vos”, “te apoyo”, “te sostengo”,",
    "link": "https://drive.google.com/file/d/1NJmi9LvKIDlycEIXR986kr_T7_5N1kVA/view?usp=drive_link"
  },
  {
    "id": 47464,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Parábola de un Dios velocísimo, que socorre y hace justicia en abrires y cerrares de ojos (29 C 2016)",
    "lecturas": "Lc 18, 1-8; Jn 11, 42",
    "resumen": "La parábola es sobre el Padre. Sobre el Padre Presente y Atento, lleno de cariño para socorrernos y rápido para actuar. En segundo lugar, se habla sobre la insistencia en la oración. Pero en primer lu",
    "link": "https://drive.google.com/file/d/1h6-evX27e89S2xjhxR6d_x5T2BBuHRbo/view?usp=drive_link"
  },
  {
    "id": 7835,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Uno de ellos, al ver que había sido sanado volvió glorificando a Dios en alta voz (28 C 2016)",
    "lecturas": "Lc 17, 11-19; Fil 3, 8; Ef 2, 10",
    "resumen": "Esta es “la”",
    "link": "https://drive.google.com/file/d/1eolzGXGA4eOomi-9hiCZprD44L43indp/view?usp=drive_link"
  },
  {
    "id": 45901,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "No se trata de que el Señor nos aumente la fe, sino de que nosotros nos ubiquemos como lo que somos: simples servidores (27 C 2016)",
    "lecturas": "Lc 17, 5-10",
    "resumen": "Jesús estaba diciendo: “si tu hermano peca, repréndelo. Y si se arrepiente, perdónalo” Y si se repite la cosa siete veces por día, perdónalo. Aquí es donde los Apóstoles, a coro, dicen ese “Auméntanos",
    "link": "https://drive.google.com/file/d/10sfkGiGhXmZmvg_Hxsx-T-wR3hIk-OH2/view?usp=drive_link"
  },
  {
    "id": 55625,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Lázaro el pobre es quien puede refrescarnos la vida con la gota del brillo agradecido de sus ojos cada vez que le damos una mano (26 C 2016)",
    "lecturas": "Lc 16, 19-31",
    "resumen": "Impresiona en la parábola cómo las intuiciones del rico no le alcanzan para pensar bien. Ve a Abraham y a su lado a Lázaro y de alguna manera intuye que es el pobre el que lo puede ayudar. Lázaro, el",
    "link": "https://drive.google.com/file/d/1Jy2V2a-1mPz1WizGMnQVT5SII6YdlEM-/view?usp=drive_link"
  },
  {
    "id": 30488,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gánense amigos que les den entrada en las moradas del cielo",
    "lecturas": "Lc 16, 1-13; Lc 12, 42",
    "resumen": "El Señor alaba al mayordomo infiel porque obró sagaz y prudentemente. La parábola nos recuerda otra parábola, la del administrador “fiel y prudente a quien el Señor podrá al frente de su familia para",
    "link": "https://drive.google.com/file/d/1btK5w9GDmUq9oNCijjbypWdd7_Xu7ejU/view?usp=drive_link"
  },
  {
    "id": 85462,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Todo lo que ayude a que se de este abrazo, debe ser bendecido y todo lo que lo impida, debe ser desechado (24 C 2016)",
    "lecturas": "Lc 15, 1-32",
    "resumen": "Pensaba que si Lucas pone juntas estas tres parábolas no es porque quiera insistir tres veces en lo mismo sino porque quiere mostrarnos tres estrategias de la misericordia según qué sea lo que se nos",
    "link": "https://drive.google.com/file/d/1dbE1KXU0BNEvSh3D8HIEzBbWijNRHpkK/view?usp=drive_link"
  },
  {
    "id": 77394,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "En la columna del «haber»: solo Jesús; o «todas las cosas», pero en Él (C 23 2016)",
    "lecturas": "Lc 14, 25-33; Fil 3, 8; Rm 13, 8",
    "resumen": "Dice el padre Guillermo Ortiz S.I. en su reflexión sobre Madre Teresa, en Radio Vaticana: “La pobreza en Calcuta bien podría representarse con la imagen del poderoso y fuerte Goliat, un asesino armado",
    "link": "https://drive.google.com/file/d/1CxHKQUxhlbkf3mDF4Nzlw1m-K06ejypQ/view?usp=drive_link"
  },
  {
    "id": 58301,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Tratar de embalsamar las parabolas de Jesus: una operacion del mal espiritu y sus secuaces (C 22 2016)",
    "lecturas": "Lc 14, 1",
    "resumen": "Jesús inventa dos parábolas de mirar a la gente nomás, con solo ver un detalle, eso que se hace evidente cuando todo el mundo busca el mejor lugar en una fiesta. Es algo espontáneo: al entrar en un lu",
    "link": "https://drive.google.com/file/d/15ojSmGXUqySesE6Gg9oeiMECRLKUgHCS/view?usp=drive_link"
  },
  {
    "id": 65956,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Como si fuera un salmo, sonaba el rap del taxi por la ciudad (21 C 2016)",
    "lecturas": "Lc 13, 22-30",
    "resumen": "Entren por la puerta angosta, es el consejo de Jesús. La puerta angosta no es la del esfuerzo ascético. Me gusta pensar que es la puerta de la fe. De la fe en Jesús, en primer lugar. La fe de confiar",
    "link": "https://drive.google.com/file/d/1HHQV1lDMz21rVieRwnqB6XUKOnWn-Zi_/view?usp=drive_link"
  },
  {
    "id": 16211,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El fuego que trae Jesús es el de la misericordia doble (20 C 2016)",
    "lecturas": "Lc 12, 49-53",
    "resumen": "El Señor viene a traer fuego y ese fuego, tiene un aspecto purificador. Decía Hurtado: tenemos que dejar que el fuego de Jesús elimine “todo lo que choca, molesta, apena, inquieta a los otros, todo lo",
    "link": "https://drive.google.com/file/d/1wx3Legh2V0zrdX1WxcVEMTSMU9fpdVmM/view?usp=drive_link"
  },
  {
    "id": 33475,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Feliz el servidor a quien el Señor encuentre ocupado en este trabajo (19 c 2016)",
    "lecturas": "Lc 12, 32-48",
    "resumen": "En el evangelio de hoy escuchamos hablar a Jesús muy familiarmente con los suyos y todos sus consejos y recomendaciones apuntan a un solo punto: a centrarnos en Él. No lo dice pero se trata de Él. Son",
    "link": "https://drive.google.com/file/d/1DYIPMqSEN8kGjV9uBk5tqg2y0epE4Bij/view?usp=drive_link"
  },
  {
    "id": 77462,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El papa Francisco y los jóvenes. Entrevista de Lucia Capuzzi (Julio 2016)",
    "lecturas": "ros 1.146",
    "resumen": "A pesar de ser un hombre de 79 años, el Papa Francisco consigue comunicar muy bien con los jóvenes. Claro que es muy simpático, pero no es solo esto. Según usted cual parte de su mensaje fascina tanto",
    "link": "https://drive.google.com/file/d/1ss3sDPQg2CFxQXXXMlT5xptJrYu-7ayg/view?usp=drive_link"
  },
  {
    "id": 54883,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "“Yo no veo un refugiado. Veo una niña que sufre”. Y tus ojos ¿qué ven? (18 C 2016)",
    "lecturas": "Lc 12, 13-21; Cor 11, 19; Gal 3, 1",
    "resumen": "Cuídense de la avidez –les dijo Jesús- en cualquiera de sus formas. Y contó la parábola de Epulón, el rico insensato. Jesús es uno de esos hombres que hacen su trabajo, que tienen los ojos puestos en",
    "link": "https://drive.google.com/file/d/1e_LeeSDwL4Dw3Kx0WK6eL5QJtPZvwIwN/view?usp=drive_link"
  },
  {
    "id": 71696,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La oración… La oración es suponer que uno tiene un Amigo a quien puede recurrir a cualquier hora (17 C 2016)",
    "lecturas": "Lc 11, 1-13",
    "resumen": "La primera moción, al leer la oración de petición en que Abraham busca cambiarle el corazón a Dios, haciendo que se compadezca por los diez justos de Sodoma, me hizo sentir que la oración que se adent",
    "link": "https://drive.google.com/file/d/1pzy9ckxHVI3Eh6RzDTJML6jn9rZRrjMY/view?usp=drive_link"
  },
  {
    "id": 91642,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "María y Marta: elegir la mejor parte o distraerse en lo que hacen los demás (16 C 2016)",
    "lecturas": "Lc 10, 38-42",
    "resumen": "Jesús entró en un pueblo, y una mujer que se llamaba Marta lo recibió como huésped en su casa. Tenía una hermana llamada María, que sentada a los pies del Señor, escuchaba su Palabra. Marta, que andab",
    "link": "https://drive.google.com/file/d/135J19TVmgziT_xqWkmtId4qEUzV5OuH4/view?usp=drive_link"
  },
  {
    "id": 91903,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "A Dios lo encontraremos a mitad del camino que emprendimos para ir ayudar a un necesitado (15 C 2016)",
    "lecturas": "cas 10, 25-37; el 9,2; los 15,4",
    "resumen": "El “Qué debo hacer” lo sabe el Antiguo Testamento, el Nuevo y también todo hombre de buena voluntad de cualquier religión o creencia que tenga. Por eso Jesús felicita al Doctor de la ley por la respue",
    "link": "https://drive.google.com/file/d/1nHUJh9iT1RFwhZ1gOHmPbWzwbIetLXoh/view?usp=drive_link"
  },
  {
    "id": 48002,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Papa Francisco – Fotos",
    "lecturas": "ros 1.146",
    "resumen": "Tu voto: Comparte esto: Haz clic para compartir en Facebook (Se abre en una ventana nueva) Facebook Haz clic para compartir en X (Se abre en una ventana nueva) X Me gusta Cargando... Relacionado",
    "link": "https://drive.google.com/file/d/1ZlZfCt0ClHjdSjdwcNLy5RavWPhJXvaF/view?usp=drive_link"
  },
  {
    "id": 65290,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Como ovejas entre lobos, solo armados con la misión, para darle paz a la gente al anunciar el Reino (14 C 2016)",
    "lecturas": "Lc 10, 1-12",
    "resumen": "“Si somos ovejas venceremos, si nos convertimos en lobos seremos vencidos” (San Juan Crisóstomo). Quizás sólo viniendo de Asís se pueda sentir que es verdad esto de que es bueno permanecer siendo ovej",
    "link": "https://drive.google.com/file/d/1315wYRljDct8yaADgYEQCk1i5DQ5qGTS/view?usp=drive_link"
  },
  {
    "id": 80784,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Gozar esa libertad que da seguir ahora a Jesús sin poseer otra cosa que su misión (13 C 2016)",
    "lecturas": "Lc 9, 51-62",
    "resumen": "Tener una misión en la vida lo es todo. Y si esa misión nos la encomienda Jesús, qué mejor. Y ser cristiano es gozar esa libertad que da seguir ahora a Jesús sin poseer otra cosa que su misión El evan",
    "link": "https://drive.google.com/file/d/1AX9KUuivo5f394s-QKYKncNr03a6Qnka/view?usp=drive_link"
  },
  {
    "id": 70079,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La cercanía física de Francisco ha borrado distancias y ha llevado lo sagrado a otro lugar",
    "lecturas": "Lc 9, 18-24",
    "resumen": "¿Qué dice de mí la gente; qué dicen ustedes? A Jesús le interesaba estar en boca de la gente y saber qué pensaban sus discípulos. Pero no para hacer encuestas de popularidad. Con estas preguntas, el S",
    "link": "https://drive.google.com/file/d/1iWIBECkdr34jlO066GRvNScVrZiHzIbm/view?usp=drive_link"
  },
  {
    "id": 65066,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "«El receptáculo de la misericordia es nuestro pecado» -Francisco- (11C 2016)",
    "lecturas": "Lc 7, 36-8",
    "resumen": "En un acontecimiento sin precedentes, el Papa Francisco nos dio un día de Ejercicios Espirituales a los sacerdotes y a los seminaristas de todo el mundo. Como dijo un periodista: nos habló “con el ton",
    "link": "https://drive.google.com/file/d/137mUWt6k0No6JW8TfKmLxNCkm8OO7MnK/view?usp=drive_link"
  },
  {
    "id": 22313,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "El pueblo de Dios escucha la Palabra abrazando a Jesús con su fe y cariño. Sin este ámbito la palabra es solo un rumor (Domingo 10 c 2016)",
    "lecturas": "Lc 7, 11-17",
    "resumen": "Hay noticias que se transmiten solas. En un mundo que inventa noticias, que las arma y las difunde con medios poderosos, hay otras, que por la fuerza misma de su verdad, se transmiten boca a boca y se",
    "link": "https://drive.google.com/file/d/1sAgXGpRtwxWRCJW4e4hvefH9VnmkAZoW/view?usp=drive_link"
  },
  {
    "id": 37336,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Los pequeños gestos de Jesús (Corpus C 2016)",
    "lecturas": "Lc 9, 11",
    "resumen": "El jueves, en la misa del Corpus en San Juan de Letrán, una frase del Papa me gustó para compartirla. Habló de dos pequeños gestos que son parte de la Eucaristía: ofrecer los pocos panes y peces que t",
    "link": "https://drive.google.com/file/d/1FyKwVFLNv0cyc0YxKFJ21XT_jKGjMh6b/view?usp=drive_link"
  },
  {
    "id": 4652,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Pequeña Trinidad (Trinidad C 2016)",
    "lecturas": "Jn 16, 12-15",
    "resumen": "Miércoles de primavera en San Saba, nuestra Iglesia antigua en el Aventino, cerca del Circo Máximo y de las Termas de Caracalla. La tarde es apacible y en el patio del Centro de Acogida, Margherita, s",
    "link": "https://drive.google.com/file/d/1eACInH_YhcyI8Icivu7YDjoN_LKmMjB9/view?usp=drive_link"
  },
  {
    "id": 38817,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "La misericordia es del Espíritu Santo (Pentecostés C 2016)",
    "lecturas": "Jn 20, 19-23",
    "resumen": "En el año de la Misericordia, retomamos la frase de San Ireneo que dice así: “El Señor encomendó́ al Espíritu Santo al hombre que había caído en manos de ladrones y del que se compadeció́, vendó sus h",
    "link": "https://drive.google.com/file/d/1rqBPcR89j6KQQ-9jdoiAQnkuBNIVgxY2/view?usp=drive_link"
  },
  {
    "id": 75836,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Razonar como quien danza (Ascensión C 2016)",
    "lecturas": "Lc 24, 46-53",
    "resumen": "Razonar bien ¿Qué quiere decir Lucas con la frase: “les abrió la mente – la facultad de razonar- para que comprendieran las Escrituras”? Comprender es “poner juntas las ideas”, en este caso las de tod",
    "link": "https://drive.google.com/file/d/1tjjpR9w8J2eoQXc9AYvvais7qcL5bwvU/view?usp=drive_link"
  },
  {
    "id": 85948,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Guardar su Palabra es cuestión de amor (no de palabras) (Pascua 6 C 2016)",
    "lecturas": "Jn 14, 22-31",
    "resumen": "Nos centramos en la respuesta de Jesús a Judas Tadeo. Judas pregunta “qué pasa”, por qué decís que te vas a manifestar a nosotros y no al mundo… Por la respuesta del Señor vemos que preguntó con inqui",
    "link": "https://drive.google.com/file/d/1kWBmc9pP2kQvB49cmctFPUK-NozsGxxM/view?usp=drive_link"
  },
  {
    "id": 35344,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las diez señales de que Jesús responde al amor (Pascua 5C 2016)",
    "lecturas": "Jn 13, 31-35",
    "resumen": "Amense, nos dice Jesús. Así como Yo los he amado. Eso hará que la gente crea que ustedes son mis discípulos. Es decir: gente que aprende de Mí, gente que va ha hacer las cosas como Yo le diga (como en",
    "link": "https://drive.google.com/file/d/1jQ6xXqt5dwvrjl72ud5oSeZfmg-Wp7lT/view?usp=drive_link"
  },
  {
    "id": 59645,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Una presentación de Amoris Laetitia en clave contemplativa (Pascua 4 c 2016)",
    "lecturas": "Jn 10, 27-30; Si 14,16; Mc 10,21",
    "resumen": "El acontecimiento más fuerte de esta semana ha sido la presentación de la Exhortación apostólica Amoris Laetitia , del Papa Francisco. Y el evangelio del Buen Pastor –ese al que sus ovejas escuchan y",
    "link": "https://drive.google.com/file/d/165nPJgiUVtBBKLCL5sGXmSQAhSqi01h1/view?usp=drive_link"
  },
  {
    "id": 56812,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Criterios de amistad (Pascua 3 C 2016)",
    "lecturas": "Jn 21, 1-19",
    "resumen": "Se aclara el día, se aclara la fe. Juan ve a Jesús en la orilla y le dice a Pedro: Es el Señor. Fuego encendido. Nadie se anima a preguntar: Quien eres? porque saben muy bien… Jesús se hace de nuevo E",
    "link": "https://drive.google.com/file/d/1bGMoLgJUVZV23QGRoLgMEUgodVqMCqNa/view?usp=drive_link"
  },
  {
    "id": 96606,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Resucitar en una comunidad (Pascua 2 C 2016)",
    "lecturas": "Jn 20, 19-31",
    "resumen": "Prestemos atención a este encuentro de Jesús resucitado con sus discípulos. Juan condensa todo en un momento. Pentecostés se adelanta al mismo Domingo de la Resurrección por la tarde. “Presentándose e",
    "link": "https://drive.google.com/file/d/1zCJkfLITbxdckE7XhKd17g2V7TZImgNb/view?usp=drive_link"
  },
  {
    "id": 16035,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "En el corazón de las mujeres (Pascua C 2016)",
    "lecturas": "Lc 24, 1-12",
    "resumen": "Qué es lo que acontece en la Resurrección del Señor? Acontece la Buena Noticia. Donde acontece primero? En el corazón de las mujeres. La anuncian los ángeles a las discípulas y esta corren a anunciarl",
    "link": "https://drive.google.com/file/d/18BsEW-nyzDsHbkw8axjWGNq-4rbjMPE1/view?usp=drive_link"
  },
  {
    "id": 46863,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sentencia de muerte para el individualismo y germen de resurreción en una comunidad (Pasión 2016)",
    "lecturas": "Lc 22, 14-23",
    "resumen": "r el espectáculo, al ver lo sucedido, regresaba golpeándose el pecho. Todos sus amigos y las mujeres que lo habían acompañado desde Galilea permanecían",
    "link": "https://drive.google.com/file/d/10oM3r-euIib4WfdXwUOpB39yuOj7Tfd4/view?usp=drive_link"
  },
  {
    "id": 18771,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Dios no se ahoga o «los tres años de pontificado de Francisco» (Cuaresma 5 C 2016)",
    "lecturas": "Jn 8, 1-11",
    "resumen": "Mañana celebramos tres años del Pontificado de Francisco. Digo “pontificado” y primero me suena solemne. Pero pienso un poco en la palabra misma y me viene la imagen de una “red de puentes” que se han",
    "link": "https://drive.google.com/file/d/1nTrLCpFtPvY9n3teey3H4w55NPfp5U_O/view?usp=drive_link"
  },
  {
    "id": 27110,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "El amor de nuesto padre (Cuaresma 4 C 2016)",
    "lecturas": "Lc 15, 1-3",
    "resumen": "Seguramente el hijo más chico sentía que su padre no lo amaba, al menos como él quería. Igual que el más grande, que le reprocha “tantos años que te sirvo haciendo todo lo que me mandás y nunca me dis",
    "link": "https://drive.google.com/file/d/1fTBWsOqApMm1YK2btxRxv6a_UUM6PDkP/view?usp=drive_link"
  },
  {
    "id": 37885,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Impresiones sobre una expresión (contemplación fuera del domingo)",
    "lecturas": "ros 1.146",
    "resumen": "Una cosa tiene de buena las opiniones tan contrastantes que se suscitaron en nuestro país a raíz del encuentro del presidente Mauricio Macri con el Papa Francisco. Digo, una cosa buena, porque creo qu",
    "link": "https://drive.google.com/file/d/1szKs5KKxbeBA8eAzsHy3OXbRrO9RuCoH/view?usp=drive_link"
  },
  {
    "id": 47187,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "La misericordia como mentalidad (Cuaresma 3 C 2016)",
    "lecturas": "Lc 13, 1-9",
    "resumen": "Hace unos días un cura amigo que está en Roma me regaló el librito de Stella Morra “Dios no se cansa” (espero lo traduzcan pronto), en que habla de la Misericordia como “categoría generatriz”, que da",
    "link": "https://drive.google.com/file/d/1Ye3kEQKY1rA3J4l5OFZ_HnacVdAKRMap/view?usp=drive_link"
  },
  {
    "id": 6680,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Lo que nos transfigura es la misericordia (Cuaresma 2 C 2016)",
    "lecturas": "Lc 9, 28",
    "resumen": "Lo que nos transfigura es la misericordia. Lo único capaz de cambiarnos la cara y los gestos desde el corazón. Dos ejemplos, solamente, de estas transfiguraciones, tomados de la visita del Papa Franci",
    "link": "https://drive.google.com/file/d/1dbZv-klq0UpTQhNS4f-n2yJsQLk0REkI/view?usp=drive_link"
  },
  {
    "id": 6228,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Disponibilidad activa para dejarse conducir (Cuaresma 1 C 2016)",
    "lecturas": "Lc 4, 1-13; las 17,00",
    "resumen": "Lucas nos dice que el Espíritu Santo “conduce” a Jesús y Jesús, lleno del Espíritu, se deja conducir. De una manera especial, porque después el Espíritu no aparece. Pero en las respuestas que da el Se",
    "link": "https://drive.google.com/file/d/1PNSzOpCaQESS9ycloYRcJ7xPndVcUztd/view?usp=drive_link"
  },
  {
    "id": 28912,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Por qué será que alejamos a Jesús (Domingo 5 C 2016)",
    "lecturas": "Lc 5, 1-11; Lc 22, 60-62",
    "resumen": "Dice el dominico Bernard Bro, en su conmovedor librito “ Se necesitan pecadores ” (en castellano pusieron “Dios necesita pecadores”) que Simón Pedro no comprendía cuál era su pecado porque no había vi",
    "link": "https://drive.google.com/file/d/1v4OCuEfX8Z15miMH3yHj1MwsbZprWgrB/view?usp=drive_link"
  },
  {
    "id": 60801,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "carismas con minúsculas (Domingo 4 C 2016)",
    "lecturas": "Lc 4, 21-30",
    "resumen": "En el pasaje de hoy me quedo con la sensación de la gente que Lucas describe como “admiración de las palabras de gracia que salían de los labios de Jesús”. Lucas mira a Jesús y mira a la gente y nos d",
    "link": "https://drive.google.com/file/d/1tbYa1K1d8Pbzojk7BnfUpJAyVbtQxRW5/view?usp=drive_link"
  },
  {
    "id": 82560,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Amigos de Dios (Domingo 3 C 2016)",
    "lecturas": "Lc 1, 1-4",
    "resumen": "Me gusta entrar en la",
    "link": "https://drive.google.com/file/d/1XtI1WNT35sr-9mvt_rR4baz1qSUQ3vLn/view?usp=drive_link"
  },
  {
    "id": 1943,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Selfies. Como gente que tiene escondida una promesa y lleva en sí una semilla de paz y oculta dicha (Domingo 2 C 2016)",
    "lecturas": "Jn 2, 1-11",
    "resumen": "Sobre la fe de María dice el padre Lucio Gera (lo cito separando los renglones según esa cadencia poética que tiene su prosa cuando rima: dicha, escondida, alegría y vida): “La fe constituía la dicha",
    "link": "https://drive.google.com/file/d/1dftsWOEsYy7MQTiO0koH2rwv0rq80C0T/view?usp=drive_link"
  },
  {
    "id": 22450,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Engordar las raíces (Bautismo del Señor C 2016)",
    "lecturas": "Lc 3, 15-16; lmo 2, 7",
    "resumen": "Siempre me impresiona ver a Jesús en la fila, entre la gente, como uno más de los que se van a hacer bautizar por Juan, cumpliendo con los gestos de devoción y de culto que el pueblo fiel de Dios prac",
    "link": "https://drive.google.com/file/d/1Db8nI1GqjBempW4nnoL8S-C3av-_HVnl/view?usp=drive_link"
  },
  {
    "id": 64566,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "A la luz de la misericordia (Navidad 2 C 2016)",
    "lecturas": "uan 1, 1-5",
    "resumen": "La Palabra es la luz verdadera que ilumina a todo hombre… Qué y cómo es esa luz? El Papa decía, al comenzar el año, que “la misericordia es la luz para mirar el pasado y ver las huellas de Dios en nue",
    "link": "https://drive.google.com/file/d/1Jro8aH-7mnMEIbzA_HBKvts3sicDCWwf/view?usp=drive_link"
  },
  {
    "id": 67577,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Un Dios encontrable (Sagrada Familia C 2015)",
    "lecturas": "Lc 2, 40-52",
    "resumen": "r a Jesús en su familia, que el patio de casa en Mendoza, tomando unos mates. Después de la varías misas de Nochebuena celebradas con mis queridas comunidades",
    "link": "https://drive.google.com/file/d/1pq-7hqPDKL58xZ8YNsi-UQExgJIfCKRa/view?usp=drive_link"
  },
  {
    "id": 96762,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Tantos años de Jesús con nosotros (Navidad C 2015)",
    "lecturas": "teo 1, 18-25; Jn 8, 56; Jn 6, 32",
    "resumen": "Mateo sitúa a San José y a María al final de 42 generaciones de abuelos y abuelas que vivieron esperando que naciera el Mesías. 2.000 años han pasado desde que Abraham “se regocijó pensando en ver el",
    "link": "https://drive.google.com/file/d/1Y1mJHhnVtQZLI0KADWoYaUkd1UCNF5Pb/view?usp=drive_link"
  },
  {
    "id": 6113,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Que nadie se de cuenta, pero que Jesús nazca (Adviento 4 C 2015)",
    "lecturas": "Lc 1, 39-45; de 6,30",
    "resumen": "“María nuestra Señora cuida la gracia levantándose tempranito y yendo a servir”. Este pensamiento me consoló en la acción de gracias de la misa de 6,30 hs., en la Iglesia grande, solos el Hno Rizzo y",
    "link": "https://drive.google.com/file/d/1YJVp2o5rbl6s0rPXKUlCAX7lG3_Bfmkt/view?usp=drive_link"
  },
  {
    "id": 77558,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Nuestro quehacer y la Virgen (Adviento 3 C 2015)",
    "lecturas": "cas 3, 10-18",
    "resumen": "En el día de nuestra Señora de Guadalupe, los tres “qué debemos hacer” de la gente se conjugan en el “hágase en mí lo que dice tu Palabra” de María. Qué puedo hacer, qué hago, qué tengo que hacer… son",
    "link": "https://drive.google.com/file/d/1meUaQ5PGy-joEtrKJqbOPLd4d5yeUwz6/view?usp=drive_link"
  },
  {
    "id": 78448,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Los preparadores de caminos (Adviento 2 C 2015)",
    "lecturas": "cas 3, 1-6",
    "resumen": "La sola mención de los nombres y lugares nos hace ver que la geografía política en la que viene a la historia el Señor fue siempre, y sigue siendo, un espacio de conflictos. En aquella época, luego de",
    "link": "https://drive.google.com/file/d/1PsoUoS8OqkxOZ0GHVltx2OUmC-1_0rBG/view?usp=drive_link"
  },
  {
    "id": 13738,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Las anécdotas y el cielo (Adviento 1 C 2015)",
    "lecturas": "Lc 21, 25-36",
    "resumen": "“Verán al hijo del hombre viniendo…” El Hijo del hombre es una expresión que Jesús usa para hablar de sí mismo. De todos los títulos que le dan otros, este es su preferido. Consuela pensar que al Seño",
    "link": "https://drive.google.com/file/d/1ou9wOILWbRP3fQFxtvmRDT40GWmUZTUE/view?usp=drive_link"
  },
  {
    "id": 80463,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contra el odio, mucha Misericordia (Domingo 34 B Cristo Rey)",
    "lecturas": "Jn 18, 33-38",
    "resumen": "Jesús no quizo que “los suyos combatieran” para salvarlo. Jesús reina, va reinando a través de sus amigos y servidores, dando testimonio de la única Verdad: el amor del Padre al mundo. Un amor a todos",
    "link": "https://drive.google.com/file/d/1_t1qtFprPHt-XVlXDKiwkB0MkMt3l_ek/view?usp=drive_link"
  },
  {
    "id": 56388,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Dense cuenta (Domingo 33 B 2015)",
    "lecturas": "Mc 13, 24-32",
    "resumen": "Dense cuenta. Es una de esas frases de Jesús que por ahí pasan de largo y, precisamente esta, es de esas de las que “hay que darse cuenta”. Este “darse cuenta” integra ese universo del “velar” por los",
    "link": "https://drive.google.com/file/d/1SfYFgdi5Y-fTRqc8PqTjHLADI--JdgSL/view?usp=drive_link"
  },
  {
    "id": 27326,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Las dos moneditas (Domingo 32 B 2015)",
    "lecturas": "Mc 12, 38-44",
    "resumen": "Me llamó la atención la observación “muchos ricos daban en abundancia”. Jesús no juzga la abundancia sino que contrapone la actitud de dar de lo que a uno le sobra con la de dar todo lo que uno tiene",
    "link": "https://drive.google.com/file/d/1Q12NK5FaxuUw5mD95ZCwTY915GkZrP0i/view?usp=drive_link"
  },
  {
    "id": 8482,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Santidad familiar, en equipo y popular (Todos los santos – 31 B 2015)",
    "lecturas": "Mt 4, 25",
    "resumen": "Los santos se nos han quedado un poco lejos. Pensaba en esto durante la canonización de los papás de santa Teresita del Niño Jesús, San Luis Martín y Santa Celia Guerin. Dice la crónica: “Es la primer",
    "link": "https://drive.google.com/file/d/1DlFAG54vCbn9JNmB5GenmcxPlp0x5jKx/view?usp=drive_link"
  },
  {
    "id": 74646,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Y al instante comenzó a ver y lo seguía en el camino (Domingo 30 B 2015)",
    "lecturas": "Mc 10, 46-52; Mc 1, 10; Mc 1, 12",
    "resumen": "Jericó es la ciudad más baja del mundo, está a más de doscientos metros bajo el nivel del mar. Era el comienzo obligada, en tiempos del Señor, de la subida a los mil metros de altura de las montañas d",
    "link": "https://drive.google.com/file/d/1LeA6E87lhMFbc1VFL2z2kvwi333znaP1/view?usp=drive_link"
  },
  {
    "id": 26788,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Cuestiones de Familia (Domingo 29 B 2015)",
    "lecturas": "Mc 10, 35-45",
    "resumen": "En la fiesta de canonización de los papás de Santa Teresita, meditamos sobre la Familia. La muerte temprana de la mamá de Teresita la hizo sentir siempre en esta vida como en «exilio». La frase « la v",
    "link": "https://drive.google.com/file/d/1HV8Eh4fxHhwrqYVaysoUhrW760jbg-0I/view?usp=drive_link"
  },
  {
    "id": 99885,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jesús no puede creer que las posesiones le hagan fracasar la mirada (Domingo 28 B 2015)",
    "lecturas": "Mc 10, 17-31; Jn 1, 42; Ef 3, 8",
    "resumen": "Jesús no puede creer que las posesiones le hagan fracasar la mirada. Dos veces mira Jesús a los ojos: con amor al joven, para ganarle el corazón y con fijeza a los discípulos, para despejarles las dud",
    "link": "https://drive.google.com/file/d/1g1boFsU7Tb4trIOnlQ5bOeKYjEuiJRY1/view?usp=drive_link"
  },
  {
    "id": 22287,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Saberse indignar (Domingo 27 B 2015)",
    "lecturas": "ros 1.146",
    "resumen": "ndo una acti",
    "link": "https://drive.google.com/file/d/1dYNkdw6K7zUYuzAMlnO2PMsLVRNW6xyS/view?usp=drive_link"
  },
  {
    "id": 60419,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Un corazón católico (Domingo 26 B 2015)",
    "lecturas": "Mc 9, 38-48",
    "resumen": "Cuenta Michel de Certau, en sus «Notas» al Memorial de San Pedro Fabro (el jesuita compañero de Ignacio y Javier que canonizó el papa junto con otros «Santos evangelizadores de Pueblos», que entre los",
    "link": "https://drive.google.com/file/d/1SzLMeyAILjATOxA1agdggg4gW8wnK2Im/view?usp=drive_link"
  },
  {
    "id": 24483,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Invisible como un mendigo en «Termini» (Domingo 25 B 2015)",
    "lecturas": "Mc 9, 30-37",
    "resumen": "Cuando nos acercamos a un pequeñito -pienso ahora en Constantino, un abuelo de largo cabello y barba blanca, en su silla de ruedas, en medio de la Estación de Termini, que mira con ojos que gritan súp",
    "link": "https://drive.google.com/file/d/1vUgws_Sj4b5l6qrOck94RgeDKjqhk8CE/view?usp=drive_link"
  },
  {
    "id": 14577,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Venir hacia los que lo siguen (Domingo 24 B 2015)",
    "lecturas": "Mc 8, 27-35; Hb 2, 18; Jn 2, 5",
    "resumen": "Del diario de la visita de Manos Abiertas al Papa Francisco «… De golpe quedamos como un grupito compacto, con nuestro cartel de M a nos Abiert a s , mirando a la plaza de San Pedro -rebosante de gent",
    "link": "https://drive.google.com/file/d/1ReAbw3SO52QUIEUt17QyJD3CEc9H3KJf/view?usp=drive_link"
  },
  {
    "id": 9058,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 B 2015",
    "lecturas": "Mc 7, 31-37; el 0,06; el 0,9",
    "resumen": "La Decapolis eran diez ciudades confederadas, a las que Roma permitía acuñar moneda propia y que eran territorio pagano -frontera- para el Señor. Era la zona donde Jesús curó al endemoniado y los demo",
    "link": "https://drive.google.com/file/d/1mbNI9H_udjPoGVVyNyunRjeuMfqmD5h4/view?usp=drive_link"
  },
  {
    "id": 93341,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 B 2015",
    "lecturas": "Mc 7, 1-23",
    "resumen": "La palabra «contaminación» me saltó a los ojos y pensé en la lista de pecados, no solo desde el punto de vista moral, como malas acciones, sino en sus efectos sociales y ecológicos. Al dañarnos como e",
    "link": "https://drive.google.com/file/d/1aXpeENKYVFiCb-1cA9WU8UO4QnpGMBHf/view?usp=drive_link"
  },
  {
    "id": 91868,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 B 2015",
    "lecturas": "Jn 6, 60-69; Gal 2, 20",
    "resumen": "Palabras de vida. Esa es la frase que le queda a Simón Pedro, de la que se agarra -como cuando se hundía en el mar y le tendió la mano a Jesús diciendole «Señor, sálvame» – para poder seguir con Jesús",
    "link": "https://drive.google.com/file/d/1YgM-qSWNIqgZpxkvaYvbIGRXoAJRXja_/view?usp=drive_link"
  },
  {
    "id": 17512,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 B 2015",
    "lecturas": "Jn 6, 51-59",
    "resumen": "«Vivirá por mí». Qué quiere decir «vivir por Jesús, gracias a la Eucaristía». Para esta meditación me ayudo con algunas cosas de San Ignacio y otras de su amigo Pedro Fabro, fiel discípulo de Ignacio",
    "link": "https://drive.google.com/file/d/1MHGFkUo-Q0irKfR3Av-Cu7CbGIo3BuZE/view?usp=drive_link"
  },
  {
    "id": 72901,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo 19 B 2015",
    "lecturas": "Jn 6, 41-51",
    "resumen": "Rezando con la resurrección del Señor, San Pedro Fabro -el compañero de Ignacio, amigo de Francisco Javier, al que el Papa canonizó sin necesidad de milagro, como gran evangelizador de Europa- contemp",
    "link": "https://drive.google.com/file/d/1m8YXQ6atPiM_G-ewbgW9RxqX-MUKUQBO/view?usp=drive_link"
  },
  {
    "id": 32253,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 18 B 2015",
    "lecturas": "Jn 6, 24-35",
    "resumen": "El Pan del Cielo, dice Jesús, es el Pan que el Padre nos da. Se trata de un Pan que no está en un mostrador a la espera de que alguien lo compre sino que desciende del Cielo. Tiene su propia iniciativ",
    "link": "https://drive.google.com/file/d/1OsUQI22hxXeQ59X6VkHdJBxyk0Y05QND/view?usp=drive_link"
  },
  {
    "id": 90276,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 B 2015",
    "lecturas": "Jn 6, 1-15; Hc 10, 47",
    "resumen": "La así llamada “multiplicación de los panes” aparece seis veces en los evangelios. La primera, en el territorio de Israel, aparece en los cuatro evangelistas, y la segunda, en territorio pagano, apare",
    "link": "https://drive.google.com/file/d/1w8dGObk8-Fg0tQ_eQ0fJ5xHcelHKH5_F/view?usp=drive_link"
  },
  {
    "id": 80691,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 B 2015",
    "lecturas": "cos 6, 30-34",
    "resumen": "a Jesús, a su pueblo y a sus apóstoles. El viaje del papa Francisco a las naciones más pequeñas de nuestra antigua Patria Grande, nos ayuda a hacer la “composición del lugar”, como dice S",
    "link": "https://drive.google.com/file/d/1XrRrNMYyp3-H8oN_z3OxYO3xzningWhl/view?usp=drive_link"
  },
  {
    "id": 57468,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 B 2015",
    "lecturas": "Mc 6, 7-13; Hc 16, 14",
    "resumen": "Tomo algunos puntos del evangelio para que contemplemos con ellos el viaje del Papa. “Si no los reciben…” Me decían algunos curas de Roma que el viaje del Papa a América Latina no estaba teniendo much",
    "link": "https://drive.google.com/file/d/1Ev9l1US-a-EtBgzbBCjYa8p7PU7szgHS/view?usp=drive_link"
  },
  {
    "id": 35400,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 B 2015",
    "lecturas": "cos 6, 1-6; Jn 18, 38; Jn 1, 1",
    "resumen": "Escepticismo, no-fe, incredulidad. Esa es la palabra que nuclea lo que narra Marcos de la vuelta de Jesús a su patria. Veamos un poco este escepticismo tal como lo describe Marcos. Es una actitud muy",
    "link": "https://drive.google.com/file/d/1-qZQAnhYgrFJzRozecKy1UYnvUKYXtBp/view?usp=drive_link"
  },
  {
    "id": 6962,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 13 B 2015",
    "lecturas": "Mc 5, 21-43",
    "resumen": "El de hoy es uno de esos “evangelios dobles”, en el que dos hechos de Jesús quedaron unidos para siempre. Vaya uno a saber si la hemorroisa fue después a casa de Jairo a ver a la pequeña o si le conta",
    "link": "https://drive.google.com/file/d/1DkxD00_tYM1vE0d3GC9L3kbdFd5VE4a0/view?usp=drive_link"
  },
  {
    "id": 34937,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 12 B 2015",
    "lecturas": "Mc 4, 35-40",
    "resumen": "Con la alegría de la Encíclica de Francisco, Laudato Si , comenzamos la",
    "link": "https://drive.google.com/file/d/1_5x7-u4L1sJmDmWFBtSroaIrhgLmMJyb/view?usp=drive_link"
  },
  {
    "id": 98134,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 11 B 2015 Corazón de Jesús",
    "lecturas": "Mc 4, 26-33",
    "resumen": "Nuestra Iglesia del Gesù, la Iglesia madre de todas las iglesias de la Compañía, está dedicada al Corazón de Jesús. Hay dos imágenes, la del altar mayor –de serena grandeza-, que sólo se muestra duran",
    "link": "https://drive.google.com/file/d/1oWyp3kXiyVAyNwpvZdsq95vLOMnHVCWa/view?usp=drive_link"
  },
  {
    "id": 4276,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Corpus B 2015",
    "lecturas": "Mc 14, 12-26",
    "resumen": "En la misa del Corpus el Papa Francisco tomó las palabras de San Agustín: “ Coman el vínculo que los mantiene unidos, no sea que se disgreguen; beban el precio de su redención, no sea que se desvalori",
    "link": "https://drive.google.com/file/d/1qquUO1pfjC_DFDs870XLxxnX7vzIsfZG/view?usp=drive_link"
  },
  {
    "id": 66490,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Trinidad B 2015",
    "lecturas": "Mt 28, 16-20",
    "resumen": "Preámbulos para la",
    "link": "https://drive.google.com/file/d/1pFNrPKdsdtvAXoUixeG-cNO1mXRn-xQX/view?usp=drive_link"
  },
  {
    "id": 9349,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pentecostés B 2015",
    "lecturas": "Jn 20, 19-23; Lc 24, 13-27",
    "resumen": "El Señor dice que no hay que agregar ni una “i” a la ley pero aquí me animo a agregar, entre paréntesis, una “y”. Es necesesaria, me parece, para conectar al Espíritu Santo con la misericordia. Es que",
    "link": "https://drive.google.com/file/d/1fSONDz2E6XT5K-qnH3IU7OooTQo06LCs/view?usp=drive_link"
  },
  {
    "id": 51617,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Ascensión B 2015",
    "lecturas": "Mc 16, 15-20",
    "resumen": "Lo más fuerte de esta semana lo viví el miércoles en la Asamblea de Caritas Internationalis. Se juntaron en la Domus Maríae de la Acción Católica representantes de más de 130 países donde trabaja Cari",
    "link": "https://drive.google.com/file/d/1JYp2C_LaIysyUMKGwMowY_1u8M0iZf8f/view?usp=drive_link"
  },
  {
    "id": 64814,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 6 B 2015",
    "lecturas": "Jn 15, 9-17; las 8,32",
    "resumen": "Acabo de leer de un tirón el libro “Desde mis zapatos” de María Luján Rey, la mamá de Lucas Menghini Rey, la última víctima en ser encontrada 62 horas después de ocurrida la Tragedia de Once, el 22 de",
    "link": "https://drive.google.com/file/d/1vL5vot0NgV5deTrcC3LCR8JLWWiwyHcv/view?usp=drive_link"
  },
  {
    "id": 63020,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 5 B 2015",
    "lecturas": "Jn 15, 1-8",
    "resumen": "Dar fruto. Si no permanecen en mí, no pueden dar fruto. Esto es lo que estamos acostumbrados a oír: si permanezco unido a Jesús puedo dar mucho fruto. Pero el verbo griego – pherein – no significa dar",
    "link": "https://drive.google.com/file/d/1Lf3qPviV7jNRy3T_SMrGhEHmEc3a9DpE/view?usp=drive_link"
  },
  {
    "id": 43663,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 4 B 2015",
    "lecturas": "Jn 10, 11-18",
    "resumen": "ndo a las ovejitas que se hundieron en el Mar Mediterráneo el domingo pasado. Se murieron sin poder para recuperar su vida. Y esta impotencia llama a Jesús. “Buscaban una vid",
    "link": "https://drive.google.com/file/d/1HlP-8jHR3bSUq6gJyCEIHf2s_CA5ZXAe/view?usp=drive_link"
  },
  {
    "id": 97985,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 3 B 2015",
    "lecturas": "Lc 24, 35-48",
    "resumen": "El oficio del Señor Resucitado es consolar a sus amigos, como dice Ignacio en los EE. Consolar es un oficio, no algo así nomás. Y el Señor lo ejercita, me imagino yo, con el “oficio” –como se dice- co",
    "link": "https://drive.google.com/file/d/18O2wdvw1L44yxtcF9l40FO3eLCYk9Tn7/view?usp=drive_link"
  },
  {
    "id": 6320,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Pascua 2 B 2015",
    "lecturas": "Jn 20, 19-29",
    "resumen": "Esperaba que esta semana tocara alguno de los encuentros del Señor Resucitado con las santas mujeres (para hablar de la Hna Juliana, nuestra encargada de la cocina del Hogar de San José, que hoy cumpl",
    "link": "https://drive.google.com/file/d/1CBdA1jaVo4EiBvTCzJP2EbaPn2cfnISE/view?usp=drive_link"
  },
  {
    "id": 32371,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Semana Santa B 2015",
    "lecturas": "Fil 3, 13-17",
    "resumen": "Esta semana pedí poder participar en las ceremonias del Papa y me lo concedieron, cosa que no siempre es posible. Como ya llevo cuatro –el domingo de Ramos, la misa Crismal, la celebración de la Pasió",
    "link": "https://drive.google.com/file/d/1iZrHeTxmZmsjeLKn_abKDRjZUY45fdYA/view?usp=drive_link"
  },
  {
    "id": 72706,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos B 2015",
    "lecturas": "cos 14, 1; Flp 4, 13",
    "resumen": "No es larga la Pasión según san Marcos. Le he puesto algunos títulos para leerla en estos días. Responden a una pregunta: ¿qué podemos “hacer” en la Pasión. No mucho, pareciera. Y sin embargo… Podemos",
    "link": "https://drive.google.com/file/d/1JPP-dBOEfNhZNqNMqHRP6CpCi4ptXid_/view?usp=drive_link"
  },
  {
    "id": 3399,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 5 B 2015",
    "lecturas": "Jn 12, 20-33",
    "resumen": "“El que quiera servirme, será honrado por mi Padre”, dice el Señor en un momento de su vida en que “todos lo quieren ver”, hasta los griegos, y él habla de una atracción más profunda que quiere ejerce",
    "link": "https://drive.google.com/file/d/1rWFFCksqN2_5gQmyVsXsLo7PaDCVKig1/view?usp=drive_link"
  },
  {
    "id": 64878,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 4 B Cuaresma 2015",
    "lecturas": "uan 3, 14-21; Lc 6, 36",
    "resumen": "Me impresionó esa foto del Papa Francisco confesándose por que todos están mirando para otro lado mientras él, de blanco y con los zapatitos juntos, como un chico de escuela, se confiesa en esos confe",
    "link": "https://drive.google.com/file/d/17vPVj_KP904uNect_h9LqFI5zcTis7U3/view?usp=drive_link"
  },
  {
    "id": 47559,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 3 B 2015",
    "lecturas": "Sal 69, 10; uan 2, 13-25",
    "resumen": "Me quedo con la imagen del Señor “devorado por el celo” y que, a los vendores de palomitas, no les tira la mesa ni los corre a latigazos, sino que les pide “saquen esto de aquí, no hagan de la casa de",
    "link": "https://drive.google.com/file/d/1KULO7GGOCYVfAh4_GHE8a02DqiZUeFtQ/view?usp=drive_link"
  },
  {
    "id": 13761,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 2 B 2015",
    "lecturas": "Mc 9, 2-10; las 9,30; las 12,30",
    "resumen": "Como me levanto tempranito para rezar, me gusta imaginar que fue de madrugada que Jesús “tomo en su Compañía” a sus amigos (como traduce Ignacio en los Ejercicios) y los condujo a ellos solos a un mon",
    "link": "https://drive.google.com/file/d/1ZLfwFbI3fh-sQLG2ijuBw7T7ZuAax7xT/view?usp=drive_link"
  },
  {
    "id": 93259,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 1 B 2015",
    "lecturas": "Mc 1, 12-15",
    "resumen": "La Iglesia nos regala cuarenta días (ya pasaron cuatro y este primer Domingo de Cuaresma es el quinto) de Ejercicios Espirituales en la vida cotidiana. San Ignacio dice que los Ejercicios son para mej",
    "link": "https://drive.google.com/file/d/1BV9IT5QHqO4K1BBV3lyt1QMxiYiqlwX6/view?usp=drive_link"
  },
  {
    "id": 45339,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 6 B 2015",
    "lecturas": "Mc 1, 40-45; Job 29, 15",
    "resumen": "“Jesús, movido por la compasión, extendiendo su mano lo tocó ”. El Señor no tiene miedo al contacto físico con el leproso. Imaginémonos hoy un enfermo de ébola… Los médicos se acercan vestidos como as",
    "link": "https://drive.google.com/file/d/1xWA7bqXEjvkA2UVamDPgttmPJ29TndQD/view?usp=drive_link"
  },
  {
    "id": 10026,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 B 2015",
    "lecturas": "Mc 1, 29-39",
    "resumen": "“Todo el mundo te busca”. Salvadas las distancias y siguiendo con el espíritu con que nacieron estas “",
    "link": "https://drive.google.com/file/d/13TdEoNKXvSlnSZp6jSwouQxzjLJLoJWJ/view?usp=drive_link"
  },
  {
    "id": 23407,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 B 2015",
    "lecturas": "cos 1, 21-28",
    "resumen": "El evangelio de Marcos conecta dos cosas que hacen a la autoridad: a quiénes  admira y mueve al seguimiento y a quién hace callar, y mueve a la persecución. El pueblo fiel de Dios se alegra con la doc",
    "link": "https://drive.google.com/file/d/1IZko1wXAwkEUeV8FJFJdnMVcUVd9rDq9/view?usp=drive_link"
  },
  {
    "id": 59360,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 A 2015 – La conversión de San Pablo",
    "lecturas": "Mc 16, 15; Hc 9, 1-22; Flp 1,4",
    "resumen": "En el avión de regreso de Manila, el P. Lombardi inició la conferencia de prensa pidiendo al Papa Francisco que se explayara un poco acerca de las personas que está canonizando de acuerdo a la metodol",
    "link": "https://drive.google.com/file/d/1mjiIJSfk4KbNfIxc5GgC4eLHg1Wh35ld/view?usp=drive_link"
  },
  {
    "id": 49392,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 B 2015",
    "lecturas": "Jn 1, 35-42; Sal 105, 4; Is 55, 6",
    "resumen": "La palabra del Evangelio de hoy es “seguimiento”: “los dos discípulos siguieron a Jesús”, dice Juan. Y la imagen que se me cruzó y no pude apartar es la del San José dormido del Papa Francisco”. Vamos",
    "link": "https://drive.google.com/file/d/1sQ198YtfxmQiHwpP12lyKkZCqGFR0hYz/view?usp=drive_link"
  },
  {
    "id": 3215,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bautismo del Señor B 2015",
    "lecturas": "Mc 1, 7-11",
    "resumen": "Tres imágenes de Epifanía, esa entrada total y para siempre de Dios en nuestra historia humana: los reyes paganos que vienen a adorar, Jesús haciendo fila con los pecadores y el Señor con su Madre y s",
    "link": "https://drive.google.com/file/d/12Qd-lPuJJ4U4_STTGNIBkym1rYQmWDd2/view?usp=drive_link"
  },
  {
    "id": 51376,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Domingo 2 B Navidad 2015",
    "lecturas": "uan 1, 1-5",
    "resumen": "El 2 de Enero es la fiesta de los Santos Basilio y Gregorio, que vivieron en el siglo IV en la actual Turquía y, junto con el cuidado de los pobres, que es la nota permanente y distintiva en el Catoli",
    "link": "https://drive.google.com/file/d/1OoxuQ2weKzuJjJoJ7iQ7jeJA5kqrjv_r/view?usp=drive_link"
  },
  {
    "id": 60548,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Santa María Madre de Dios B 2015",
    "lecturas": "Lc 2, 16-21",
    "resumen": "Noticias Los pastores fueron rápidamente y encontraron a María, a José, y al recién nacido acostado en el pesebre . Al verlo, contaron lo que habían oído decir sobre este niño, y todos los que los esc",
    "link": "https://drive.google.com/file/d/1A8C8C1uThC-qp5L1VgUJ0BHLdPg_cImJ/view?usp=drive_link"
  },
  {
    "id": 65598,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sagrada Familia B 2014",
    "lecturas": "Lc 2, 22-40",
    "resumen": "La imagen de la sagrada familia que nos presenta Lucas es la de José y María con el Niño Jesús en medio del pueblo fiel, yendo al Templo a cumplir con la ley de dar gracias a Dios por el recién nacido",
    "link": "https://drive.google.com/file/d/159TPgJcej-ONYAy27N2X3nz1TW3D86Oo/view?usp=drive_link"
  },
  {
    "id": 11712,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad B 2014",
    "lecturas": "cas 2, 1-14; Mt 10, 12; Mt 5, 47",
    "resumen": "El almuerzo del 24 en El Hogar tiene aire de Belén. No por el frío, por supuesto, sino por la gente. Los dos turnos tuvieron lugar y gracias a Dios no quedó nadie afuera. Lindos cuartos de pollo con p",
    "link": "https://drive.google.com/file/d/1byK9VCMh7OVuCd9D2AuZetE5Na4tsaxs/view?usp=drive_link"
  },
  {
    "id": 13145,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Para ir preparando la Nochebuena 2014",
    "lecturas": "cas 2, 1-20; Lc 12, 37",
    "resumen": "Cómo escribir una",
    "link": "https://drive.google.com/file/d/1pDx66DjyLP-_PwBqJGeVXOLu67uyDTvT/view?usp=drive_link"
  },
  {
    "id": 18342,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 4 B 2014",
    "lecturas": "cas 1, 26-38",
    "resumen": "La expresión de María, nuestra Señora, “hágase en mí según tu palabra” ( genoito moi) tiene una contraria que la aclara. Muchas veces se dice en la Biblia “que eso no suceda” ( me genoito ), y se trad",
    "link": "https://drive.google.com/file/d/1yolMizj6yTE346sM12uoB2naqWolm1wg/view?usp=drive_link"
  },
  {
    "id": 44473,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 3 B 2014",
    "lecturas": "Jn 1, 6-8",
    "resumen": "Jesús ya está en tu vida, aunque a veces no lo notes. Y viene siempre después, a  bendecir y completar todo lo bueno que ha hecho en vos. Allanale el camino. Tenemos que ingeniárnosla para abrirle nue",
    "link": "https://drive.google.com/file/d/1R1I3yLeRdkT4aPomure7HBzCyZOxsZdY/view?usp=drive_link"
  },
  {
    "id": 83139,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2 B 2014",
    "lecturas": "Mc 1, 1-8",
    "resumen": "Tomamos con Juan Bautista la palabra de Isaías: Preparen el “camino” del Señor, rectifiquen sus “senderos” . La palabra “preparar” es central en el Adviento. ………….. El otro día subo a un taxi y el pib",
    "link": "https://drive.google.com/file/d/1sNA27OVPXj9hhTnKrvein0d_XIoBq1cQ/view?usp=drive_link"
  },
  {
    "id": 77590,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 1 B 2014",
    "lecturas": "Mc 13, 33-37",
    "resumen": "Adviento es un tiempo de gracia, un “kairos”, tiempo pleno de Dios que viene y de Dios que ya está. El mundo actual nos sumerge en un tiempo muy “puntillar”: en cada instante nos ofrece la posibilidad",
    "link": "https://drive.google.com/file/d/1yZVSPEVizYOynpw6mNPEss0icWUEz1Mx/view?usp=drive_link"
  },
  {
    "id": 8322,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 A 2014 Cristo Rey",
    "lecturas": "Mt 25,31-46",
    "resumen": "Bajé de mi oficinita, en la planta alta del Hogar, para ir a la Casa de la Bondad a despedir a Julita, que falleció hoy (y que me dice Celina que no tenía a nadie nadie y que apenas pudimos conocer, y",
    "link": "https://drive.google.com/file/d/1j53u_JD2izEEWRa05-bmZamASQF8zCEV/view?usp=drive_link"
  },
  {
    "id": 46828,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 A 2014",
    "lecturas": "ros 1.146",
    "resumen": "«Porque has sido fiel en lo poco…» Se ve que el hombre que iba a salir de viaje a tierras lejanas era muy rico ya que consideraba que los 35 kg de oro, que le dio al servidor perezoso, o los 175 kg de",
    "link": "https://drive.google.com/file/d/1oy_LU3mis2R117Nyni_2E7s7VkNfcUVC/view?usp=drive_link"
  },
  {
    "id": 68580,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 A 2014 Dedicación de la Basílica de Letrán",
    "lecturas": "ene 7.140; ros 1.146",
    "resumen": "«Pero Él hablaba del templo de su cuerpo». Humanamente, calculamos las cosas en términos temporales. 46 años habían demorado los judíos en construir el Templo de Jerusalén y les resultaba pretencioso",
    "link": "https://drive.google.com/file/d/1xSDE5smTlGhZXYhD4KIGLQit1A5DwuRi/view?usp=drive_link"
  },
  {
    "id": 81627,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 A 2014 Todos los Santos",
    "lecturas": "Mt 4,25",
    "resumen": "Releo la homilía radial de von Balthasar para la fiesta de todos los Santos y encuentro a George Bernanos, con sus imágenes tan poderosas sobre la comunión de los santos. Antes de transcribirlas me de",
    "link": "https://drive.google.com/file/d/1X8NYpPyBx47OuxS3TW9hb5tDeI7MmpHp/view?usp=drive_link"
  },
  {
    "id": 36914,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 A 2014",
    "lecturas": "Mt 22, 34-40; Rm 13, 10",
    "resumen": "Un autor de nombre difícil (para nosotros) –Erich Przywara sj-, muy apreciado por Francisco, tiene un tratadito del amor –el ágape- que es de lo mejor que he leído: trata de cómo el Amor es lo único e",
    "link": "https://drive.google.com/file/d/1lGPzXeLo-niaUUYLum82koXt7YiDqXdJ/view?usp=drive_link"
  },
  {
    "id": 41193,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Discurso del Papa Francisco al finalizar el Sínodo de la Familia (18-10-2014)",
    "lecturas": "Lc 4, 1-4; Jn 8,7; Lc 10,27",
    "resumen": "«Queridos: Eminencias, Beatitudes, Excelencias, hermanos y hermanas: ¡Con un corazón lleno de reconocimiento y de gratitud quiero agradecer junto a ustedes al Señor que nos ha acompañado y nos ha guia",
    "link": "https://drive.google.com/file/d/1ax-X4q0LsDl2hWD8VMJGrKgto9Cp3CDs/view?usp=drive_link"
  },
  {
    "id": 43408,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 29 A 2014",
    "lecturas": "Mt 22, 15-16",
    "resumen": "Ponemos la",
    "link": "https://drive.google.com/file/d/1V9GR0_jv09yohFZeJA9sDP3267eW2MUb/view?usp=drive_link"
  },
  {
    "id": 86200,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 A 2014",
    "lecturas": "Mt 22, 1-14",
    "resumen": "Hoy tengo algo para escribir que me desborda y se me amontona, como la gente que quiere entrar al Hogar y se acerca –siempre se va acercando, por más que hagamos hacer fila y ordenemos…- por todos lad",
    "link": "https://drive.google.com/file/d/1eB7ndQMwo6zaGQ7q_D2pRdxGMBdOVj1Y/view?usp=drive_link"
  },
  {
    "id": 51859,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 27 A 2014",
    "lecturas": "Mt 21, 33-46; Gn 2, 8; Is 5, 2",
    "resumen": "Este padre de familias y señor de su casa que plantó una viña con amor y esperaba frutos de ella, es imagen de nuestro Padre del Cielo. El primero que “plantó una viña” en la Biblia fue Noé (que despu",
    "link": "https://drive.google.com/file/d/1JJpx64DTScdkwpWgUEOktt-Y3INEAdx2/view?usp=drive_link"
  },
  {
    "id": 17925,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 A 2014",
    "lecturas": "Mt 21, 28-32; Lc 6, 45",
    "resumen": "Para nuestra Jornada de Oración y Formación de este año en El Hogar, hicimos más de veinte reuniones por áreas en las que nos preguntamos cosas como: por qué elegimos trabajar en el Hogar; por qué seg",
    "link": "https://drive.google.com/file/d/1WEnm9QYPpJux1LnRKRMK5OX0UyxQUQC8/view?usp=drive_link"
  },
  {
    "id": 8243,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 A 2014",
    "lecturas": "ros 1.146",
    "resumen": "Sería tiempo de Vendimia (a los mendocinos esta sola palabra nos trae aires de comienzos de otoño, tiempo de uvas y de cosecha, fiesta con carrozas y reinas de la vendimia, hallazgos de vinos buenos…)",
    "link": "https://drive.google.com/file/d/1d1mkSBgS6AbPUg2a6vfLNL3f0RvgrORw/view?usp=drive_link"
  },
  {
    "id": 4158,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 A 2014",
    "lecturas": "Mt 18, 21-35; Lc 22, 23-24; Hc 15, 2",
    "resumen": "r pensando en concreto en todo lo que el Señor me ha perdonado a mí y compararlo con algo que me está costando perdonar a alguno de mis hermanos. Comienz",
    "link": "https://drive.google.com/file/d/1yVLNImL29fECD2YdlMN9qTrTQjZ3Mct4/view?usp=drive_link"
  },
  {
    "id": 39728,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 A 2014",
    "lecturas": "Mt 18, 15-20; dad 151, 199",
    "resumen": "Hay un librito de Martini -¿Qué debemos hacer? Meditaciones sobre San Mateo – que es una joya. De este capítulo, sobre el “actitudes que hacen la Iglesia (y las que la boicotean), se pregunta: ¿ Hay i",
    "link": "https://drive.google.com/file/d/1WJMMaJagQleJC2Pky39aSBxuRSK2Ejcp/view?usp=drive_link"
  },
  {
    "id": 10728,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 A 2014",
    "lecturas": "Mt 16, 21-27",
    "resumen": "El juicio acertado, que no la chinga, es que «la vida hay que perderla por Jesús para encontrarla, porque el que trata de salvarla para sí, la perderá». Cada uno puede entender como quiera todo lo que",
    "link": "https://drive.google.com/file/d/1sy6bn5Pnq4e0Lj8maQHtWxbUVajFjT6u/view?usp=drive_link"
  },
  {
    "id": 11805,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 A 2014",
    "lecturas": "Mt 16, 13-20",
    "resumen": "Podemos comenzar con una pregunta: ¿Por qué Jesús quiere saber quién es él para los demás? Hay una frase que se repite en el evangelio y que puede ayudarnos a responder esta pregunta. La frase es “muc",
    "link": "https://drive.google.com/file/d/1L8XdiaafQKimclTPT5JQoVr0vF5YbW1s/view?usp=drive_link"
  },
  {
    "id": 92156,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 A 2014",
    "lecturas": "Mt 15, 21-28",
    "resumen": "El encuentro con la mujer siro-fenicia es un encuentro en la frontera, de esos de los que habla Francisco. “Oríon” significa frontera, región vecina. Pero no sólo se trata de una frontera geográfica s",
    "link": "https://drive.google.com/file/d/1cOG0tcIC5btB-qcrJCz7EWVFACJ0U8ov/view?usp=drive_link"
  },
  {
    "id": 4937,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 A 2014",
    "lecturas": "teo 14, 22-33; Mt 14, 13; Jn 8, 29",
    "resumen": "Jesús solo. Subió al monte para orar a solas y al atardecer todavía estaba allí, solo . Y siguió solo hasta la madrugada, en que fue hacia los discípulos caminando sobre el mar, en medio de la torment",
    "link": "https://drive.google.com/file/d/1EXeDgKu11Mun-SmjKdORlT0_z_QIDJQ6/view?usp=drive_link"
  },
  {
    "id": 86606,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 A 2014",
    "lecturas": "Mt 14, 13-21",
    "resumen": "Dice un autor: “El evangelio de Mateo es un drama sobre la venida del Reino de los cielos: luego de exponer el  Misterio del reino en parábolas, Mateo presenta ahora las Primicias del reino y nos va d",
    "link": "https://drive.google.com/file/d/11GfN-qKcbWticOo32xy0Nnp2XGg3CIdJ/view?usp=drive_link"
  },
  {
    "id": 22931,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 A 2014",
    "lecturas": "Mt 13, 44-52; Mt 13, 44",
    "resumen": "Estoy dudando, al escribir la",
    "link": "https://drive.google.com/file/d/1-MhmcxT_PIhy2vb2-OLp3svfcki-qK9B/view?usp=drive_link"
  },
  {
    "id": 10861,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 A 2014",
    "lecturas": "Mt 13, 24",
    "resumen": "¡Tres parábolas juntas! Jesús, y la Iglesia que nos regala la liturgia, piensan que somos como niños pequeños. ¿Vieron cómo los chicos chiquitos despliegan primero todos sus  juguetes en el suelo y lu",
    "link": "https://drive.google.com/file/d/1WFNydIwz_9_bX8GRKj6OqnY47ug5K0lw/view?usp=drive_link"
  },
  {
    "id": 9585,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 A 2014",
    "lecturas": "Mt 13, 1-23",
    "resumen": "Me gustó un párrafo de José A. Pagola: “Jesús sembraba con el realismo y la confianza de un labrador de Galilea. Todos sabían que la siembra se echaría a perder en más de un lugar en aquellas tierras",
    "link": "https://drive.google.com/file/d/1CpvOkEg15qZcidnkf58X3rH4pjMFZJw7/view?usp=drive_link"
  },
  {
    "id": 82375,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 A 2014",
    "lecturas": "Mt 11, 25-30",
    "resumen": "r la alegría en los ojos de Jesús al experimentar que el",
    "link": "https://drive.google.com/file/d/16mnH7QVMGl2HNfl0FZkqhdXsc-vwQHgD/view?usp=drive_link"
  },
  {
    "id": 18020,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "San Pedro y San Pablo 2014",
    "lecturas": "Mt 16, 13-19",
    "resumen": "Pedro es uno de esos pequeños a quienes el Padre les revela el secreto del Reino, quién es Jesús, su Hijo amado, nuestro Mesías Salvador. Y esta revelación, que no es de nadie de carne y hueso sino di",
    "link": "https://drive.google.com/file/d/1ThT0aBS-omVOq6cq3eco9pwOYXUyH2S_/view?usp=drive_link"
  },
  {
    "id": 9690,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Corpus A 2014",
    "lecturas": "uan 6, 51-58",
    "resumen": "Comulgar con la Carne y la Sangre de Jesucristo es comulgar con el Jesús de todos. Pensando caseramente, que el Señor Resucitado nos insufle su Espíritu, equivale a compartirnos una realidad –a Alguie",
    "link": "https://drive.google.com/file/d/17QNgNcGhoNfaptILUGfozhneyuIoD4jW/view?usp=drive_link"
  },
  {
    "id": 28856,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Trinidad A 2014",
    "lecturas": "Ex 34, 4-10; Jn 3, 16-18; Cor 13, 11-13",
    "resumen": "Anoche, en esas charlas de sobremesa que requieren especial atención, porque el padre Boasso anda por los 92 y está muy sordo, me dijo algo de la Trinidad que me quedó picando: “la Trinidad tiene hist",
    "link": "https://drive.google.com/file/d/1sxSqR9VkeAx7kQ94nPiEurSs3u3xfKiM/view?usp=drive_link"
  },
  {
    "id": 82943,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pentecostés A 2014",
    "lecturas": "Hc 2, 1-11; Jn 20, 19-23",
    "resumen": "En esta fiesta del Espíritu Santo, nuestro otro “ayudante”, como dice Jesús, quisiera dar testimonio de su ayuda contando algunas gracias que he recibido para la comunidad china en Buenos Aires, de la",
    "link": "https://drive.google.com/file/d/1QXBwJIs0fyCJs4_KhXMQlmJvPTm3Zd49/view?usp=drive_link"
  },
  {
    "id": 13105,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Ascensión A 2014",
    "lecturas": "teo 28, 16-20; hos 1, 1-14; Jn 15,15",
    "resumen": "Las dos imágenes, la de la Ascensión del Señor al Cielo, a la intimidad del Padre, y la de la comunidad de los discípulos reunidos en el Cenáculo antes de salir a misionar, están ligadas entre sí. La",
    "link": "https://drive.google.com/file/d/1g0qSNWVYLsKqe3CXFwLXJ7trlhTKoORD/view?usp=drive_link"
  },
  {
    "id": 48420,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 6 A 2014",
    "lecturas": "Cor 12, 4-7",
    "resumen": "¡Jesús nos promete otro Ayudante! Me gustó esta palabra que no había visto sustantivada antes para nombrar el Espíritu.  Es que “Paráclito” es alguien a quien se “lo llama para que venga en ayuda ”, u",
    "link": "https://drive.google.com/file/d/1L5JU3hsPVZH2adWkEl5hAg_gCMdK5TfU/view?usp=drive_link"
  },
  {
    "id": 65540,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 5 A 2014",
    "lecturas": "uan 14, 1-12",
    "resumen": "La foto del niño sirio es de agosto de 2012. La usaron en diciembre de 2013 para ilustrar la frase de un niño de 3 años (el de la foto es más grande) que dijo antes de morir “le voy a contar todo a Di",
    "link": "https://drive.google.com/file/d/19vIDvXUQv5KHEwT4oer4_GBTwhkVpanW/view?usp=drive_link"
  },
  {
    "id": 829,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 4 A 2014",
    "lecturas": "Jn 10, 1-13",
    "resumen": "Una de las tareas del Buen Pastor consiste en “hacer salir a las ovejas…”. Y eso es lo que está haciendo el papa  Francisco con nosotros: nos está haciendo salir. Salir a las periferias. A todas las p",
    "link": "https://drive.google.com/file/d/1IwclWNr_O0Wx8Zf2btzOgxti3fbu9g19/view?usp=drive_link"
  },
  {
    "id": 53237,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 3 A 2014",
    "lecturas": "cas 24, 13-35; He 1, 21-22; Cor 3, 15-17",
    "resumen": "Modos de estar de Jesús Emaús nos narra “los modos de estar” de Jesús Resucitado. Había agregado: los modos de estar “presente”, pero creo que dificulta la mirada. Jesús no siempre está “presente”, pe",
    "link": "https://drive.google.com/file/d/1LU9rHISoYTXCzPbQWmj4If1wugV0DdCs/view?usp=drive_link"
  },
  {
    "id": 80863,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua 2 A 2014",
    "lecturas": "Jn 20, 19-31",
    "resumen": "el evangelio en que el Señor “ abre la mente de los discípulos para que comprendan la Escritura” y, en",
    "link": "https://drive.google.com/file/d/1JLQkX60LcVq3AL46ijYoqHX9JryyTCcD/view?usp=drive_link"
  },
  {
    "id": 32731,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua A 2014",
    "lecturas": "Mt  28, 1-10; Tes 5, 16; Fil 4, 4",
    "resumen": "“¡ Alégrense !”. Este saludo de Jesús a sus amigas, María Magdalena y María de Cleofás (la esposa del que pudo ser hermano de San José y por eso se la llama “hermana de la Virgen”, en cuanto que era s",
    "link": "https://drive.google.com/file/d/1_Tm63LkSshTY4FRnENT9RQBmPOU10ojH/view?usp=drive_link"
  },
  {
    "id": 8518,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jueves Santo A 2014",
    "lecturas": "Jn 13, 1",
    "resumen": "“Hagan”. El cristianismo que Jesús nos encomienda –su seguimiento- es acción. No sólo “reciban” –la eucaristía, el lavado de pies, el perdón del Espíritu Santo- sino “hagan”. Hagan la Eucaristía, lave",
    "link": "https://drive.google.com/file/d/1gc5NcKCkkss4fFLhmdBr_JTAY5WZ0zpf/view?usp=drive_link"
  },
  {
    "id": 56088,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos 2014",
    "lecturas": "Mt 21, 1-11; Mt 5, 3",
    "resumen": "Jesús entra en Jerusalén “manso y montado en un asna y un burrito”. Les mandó decir a los dueños que se lo presten, que “los necesita y se los mandará de vuelta enseguida”. Es un pedido como los que h",
    "link": "https://drive.google.com/file/d/1NC8TC7zI89rnf7T8kvdE0a0EOiI1tN74/view?usp=drive_link"
  },
  {
    "id": 50971,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 5 A 2014",
    "lecturas": "uan            11, 1-45; Jn 16,12-13; Mt 13,24-30",
    "resumen": "Si algo llama la atención en el evangelio de Lázaro es el tiempo. Iba a decir “el manejo del tiempo”, pero no se trata de un manejo. Jesús vive su tiempo de una manera única, única pero compartible. E",
    "link": "https://drive.google.com/file/d/1GrxpCApTWCuqCWOAM8s3ujqONNaxYQu6/view?usp=drive_link"
  },
  {
    "id": 36475,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 4 A 2014",
    "lecturas": "uan 9, 1-41",
    "resumen": "Me llamó la atención que Jesús diga “mientras estoy en el mundo soy la Luz del mundo”. Pensaba en qué quiere decir ese “mientras”. Primero lo pensé mirando las idas y venidas del Señor. El se va al ci",
    "link": "https://drive.google.com/file/d/1QlJZ9WYp1XUsqMu41exDAa8jMSD1dB6x/view?usp=drive_link"
  },
  {
    "id": 63779,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 3 A",
    "lecturas": "Jn 4, 5-42",
    "resumen": "En el corazón del Evangelio de la Samaritana se encuentra este pasaje: “En eso volvieron sus discípulos y se sorprendieron de que estuviese conversando con una mujer, pero nadie le dijo ‘qué preguntas",
    "link": "https://drive.google.com/file/d/19zitQqDWvp9fS1lE-XqClFbAz3c9wbhm/view?usp=drive_link"
  },
  {
    "id": 96368,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "San José 2014",
    "lecturas": "Mt 1, 16",
    "resumen": "Se cumple hoy un año del comienzo del pontificado del Papa Francisco. Fue en esta fiesta de San José que llegó a la Plaza de San Pedro en el Jeep descapotable y todo el mundo sintió que se venía otro",
    "link": "https://drive.google.com/file/d/1M92l-yo4PykRs_GZTG4wLsyIiqt-1kMf/view?usp=drive_link"
  },
  {
    "id": 35187,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de cuaresma 2 A 2014",
    "lecturas": "Mt 17, 1-9",
    "resumen": "Contemplo hoy releyendo",
    "link": "https://drive.google.com/file/d/1_XCezOOG5AdMPidK44W1a2RRdmZnFB6u/view?usp=drive_link"
  },
  {
    "id": 19053,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 1 A 2014",
    "lecturas": "Mt 4, 1-11; Lc 22, 3; Jn 13, 27",
    "resumen": "Me llamaron la atención los lugares donde es tentado el Señor: el desierto, la ciudad y el monte. Al desierto Jesús fue por propia voluntad, impulsado por el Espíritu Santo. Al Templo, desde donde se",
    "link": "https://drive.google.com/file/d/16QgR3sMmMAsOi9NCsn16AFGql77TOiAg/view?usp=drive_link"
  },
  {
    "id": 83967,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 8 A 2014",
    "lecturas": "Mt 6, 24-34; Lc 12,32; Lc 10,21",
    "resumen": "Así como en el evangelio pasado el Señor tocó todos los registros de la ira, hoy hace lo mismo con la ansiedad. Preocupaciones económicas, agobio ante los problemas, angustia ante la enfermedad y la m",
    "link": "https://drive.google.com/file/d/1Y6VRpQcxxxHnG_u2MpXPgtcGj2rO8hyX/view?usp=drive_link"
  },
  {
    "id": 92196,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "A nuestras queridas y sagradas 52 víctimas de la evitable tragedia de Once",
    "lecturas": "ros 1.146",
    "resumen": "A nuestras queridas y sagradas 52 víctimas de la evitable tragedia de Once El día de hoy, en memoria de nuestras 52 queridas víctimas de la tragedia de Once, tiene varios momentos. Este es de intimida",
    "link": "https://drive.google.com/file/d/1TxO8QCzJxGud6tDxvuMxXwhuyoiBLKNx/view?usp=drive_link"
  },
  {
    "id": 1698,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 7 A 2014",
    "lecturas": "Mt 6, 38-48; ago 7, 4; ios 6, 11",
    "resumen": "La de hoy es una “reflexión” o “deliberación” con el fin de ayudar a pensar el tema de “los enemigos” o de “la agresividad”. “No confronten a la persona mala” ¿Es posible no confrontar? Creo que no, p",
    "link": "https://drive.google.com/file/d/1PEeCzH59lvBGrCRFxbDOhed6Zu10_FVJ/view?usp=drive_link"
  },
  {
    "id": 39454,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contemplacciones del Evangelio",
    "lecturas": "Mt 5, 17-37",
    "resumen": "Apenas releí esta mañana el evangelio saltó la imagen de “los pequeños mandamientos…”. El que no los cumple, el que los deja pasar por pequeños será considerado “pequeño en el Reino”. Nunca me había f",
    "link": "https://drive.google.com/file/d/12BAX_oSRYyVnRlayRXg2I7oGpdDVw9T8/view?usp=drive_link"
  },
  {
    "id": 92386,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 A 2014",
    "lecturas": "Lc 12,32; Mt 5,13-16",
    "resumen": "Sal y luz, dice el Señor que somos. Y el Papa Francisco, en Evangelii Gaudium: «Precisamente en esta época, y también allí donde son un « pequeño rebaño» (Lc 12,32), los discípulos del Señor son llama",
    "link": "https://drive.google.com/file/d/1BQjT1wYWOfO4_aX-HUdqagvImc3eNxgC/view?usp=drive_link"
  },
  {
    "id": 24127,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 A 2014",
    "lecturas": "Mt 5, 1-12",
    "resumen": "Asré , en hebreo, Makarios , en griego, you fú , en chino, ser bendecido y dichoso , en español… Todos los hombres buscamos la felicidad y esta tiene siempre una medida personal y una medida interpers",
    "link": "https://drive.google.com/file/d/1XsBfYrhrN3M7s-22slI8WCpiXQ9Edps7/view?usp=drive_link"
  },
  {
    "id": 40127,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 A 2014",
    "lecturas": "Is 9, 2; teo 4, 12-23",
    "resumen": "Pequeño diccionario periferiológico Salir a la periferia geográfica: pasar cerca del que sé que me va a pedir. Salir a la periferia temporal: quedarme charlando con el que visito un rato más de lo que",
    "link": "https://drive.google.com/file/d/1gySvOxJ1Q1hEFVBp7Mt3dfOK1L3M2If9/view?usp=drive_link"
  },
  {
    "id": 90919,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 A 2014",
    "lecturas": "Jn 1, 29-34; Mt 3, 14",
    "resumen": "Leyendo las palabras de Juan se me presentó su imagen entera al sentir que podía compartir, por un instante, su conciencia de saber con mucha precisión quién era él y quién Jesús. Esa alegría de Juan",
    "link": "https://drive.google.com/file/d/16Ym3upaqPv8VAmTya8ZS5OkRiGYRfy__/view?usp=drive_link"
  },
  {
    "id": 34840,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bautismo del Señor A 2014",
    "lecturas": "Mt 3, 13-17; lmo 22, 6; Gal 3, 26-27",
    "resumen": "El miércoles pasado, el Papa comenzó la catequesis sobre los sacramentos, que irá dando a lo largo del año. Y comenzó con el Bautismo haciendo notar la feliz coincidencia con la fiesta de este domingo",
    "link": "https://drive.google.com/file/d/12kcDbijF6wWTZRseL_RTAPI6ymUp0rh5/view?usp=drive_link"
  },
  {
    "id": 52798,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad 2 A 2014",
    "lecturas": "uan 1,1-18",
    "resumen": "r con el Prologo de Juan, una metáfora, un poco de neurociencia y un poema. ……………. A algunos, Navidad, les parece un sueño de niños. Y es verdad. Eso sí, los sueños de niño son los más v",
    "link": "https://drive.google.com/file/d/13JQNy_xBSqmNxaAmhQLc8FFnUhrx3qGv/view?usp=drive_link"
  },
  {
    "id": 74938,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Sagrada Familia A 2013",
    "lecturas": "ros 1.146",
    "resumen": "Dejar cuidar nuestra pequeñez por San José Después de que los magos partieron de Belén, el ángel del Señor se le apareció en sueños a José y le dijo: «Levántate, toma al niño y a su madre, y huye a Eg",
    "link": "https://drive.google.com/file/d/1pn5nzDJsQIEUMDsPjYcnIYpcp15AUuRz/view?usp=drive_link"
  },
  {
    "id": 49797,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad A 2013",
    "lecturas": "cas 2, 1-14; Lc 2,10",
    "resumen": "¿Se dieron cuenta de que el mensaje de la Navidad baja del cielo al pesebre? Digo si se dieron cuenta en el sentido de que todos los mensajes navideños del mundo van al revés: salí de lo cotidiano y p",
    "link": "https://drive.google.com/file/d/1IaVO58dVJFKL8CIQqZSBqAES3mcifLhd/view?usp=drive_link"
  },
  {
    "id": 3842,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Contemplacciones del Evangelio",
    "lecturas": "Mt 1, 18-24",
    "resumen": "De las muchas cosas lindas que el Papa Francisco nos comparte, me hizo meditar una reflexión suya acerca del Nombre de Jesús: “Dios con nosotros”. Decía Francisco que Dios toma nuestro apellido, nuest",
    "link": "https://drive.google.com/file/d/12BAX_oSRYyVnRlayRXg2I7oGpdDVw9T8/view?usp=drive_link"
  },
  {
    "id": 68874,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 3 de Adviento 2013",
    "lecturas": "ros 1.146",
    "resumen": "Eres tú el que ha de venir… En aquel tiempo, Juan, que en la cárcel había tenido noticia de las obras de Cristo, envió a preguntarle por mediación de sus discípulos: ¿Eres tú el que va a venir, o espe",
    "link": "https://drive.google.com/file/d/1IAgkUzF61lxGGBH1iJRA20ogkEJFZJto/view?usp=drive_link"
  },
  {
    "id": 17615,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2 A 2013 – Inmaculada concepción",
    "lecturas": "Lc 1, 26-38",
    "resumen": "Evangelii Gaudium termina con una hermosa frase del corazón del Papa Francisco que llama a la Virgen “Manantial de alegría para los pequeños”: “Madre del Evangelio viviente, manantial de alegría para",
    "link": "https://drive.google.com/file/d/1OY4jHE_0o-ewYe5K9QLBPdLLWK1ZD2dx/view?usp=drive_link"
  },
  {
    "id": 20640,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 1 A 2013",
    "lecturas": "Mt 24, 37-44",
    "resumen": "Adviento. Venida… El Señor quiere hacernos tomar conciencia del tiempo. Las imágenes que utiliza son de diluvios y robos. Pero su intención no es asustarnos con cataclismos sino despertarnos para que",
    "link": "https://drive.google.com/file/d/11_Zky_HJKUfTXYmMHGZ4GQaHiPQe0h_w/view?usp=drive_link"
  },
  {
    "id": 1604,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2013",
    "lecturas": "ace 15.000; ace 2.700; ros 1.146",
    "resumen": "¿Estamos abiertos a las “sorpresas de Dios”? Mañana saldrá a la luz “La alegría del Evangelio” – Evangelii Gaudium -, la nueva exhortación apostólica del Papa sobre la evangelización. Esperamos sus pa",
    "link": "https://drive.google.com/file/d/1ReFyy66ptFx-zY5s7XbRYCA0Z8Vjal8s/view?usp=drive_link"
  },
  {
    "id": 84587,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 C 2013 – Cristo Rey",
    "lecturas": "Lc 23, 35-49; Jn 19, 37; Jn 12, 32",
    "resumen": "n a Jesús en la Cruz. El pueblo permanecía y contemplaba . Lucas, unos versículos después de los que hoy elige la liturgia de Cristo Rey, nos revela que “Todos sus amigos y las mujeres",
    "link": "https://drive.google.com/file/d/18rMyu-V8YGhx0fuoAeACMbYIWB4pBHpt/view?usp=drive_link"
  },
  {
    "id": 37711,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 C 2013",
    "lecturas": "Lc 21, 5-19; Cor 2, 5",
    "resumen": "Jesús nos promete: “Yo les daré un lenguaje y una sabiduría que nadie podrá resistir ni contradecir…”. San Pablo lo expresa así: ¡Nosotros no hablamos de estas cosas con palabras aprendidas de la sabi",
    "link": "https://drive.google.com/file/d/1_8plj4PcC92abyyT8_Wy1DEbfdWKBhPA/view?usp=drive_link"
  },
  {
    "id": 86103,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 C 2013",
    "lecturas": "Lc 20, 27-38; Cor 2, 5",
    "resumen": "Siempre impresiona el espíritu sarcástico de los Saduceos. Inventar una “anti-parábola” para poner en aprietos a Jesús. Se ve que escuchaban las parábolas que Jesús creaba y a alguno se le ocurrió est",
    "link": "https://drive.google.com/file/d/1lf_kfLOAXN_BiUysGH1NS0MW1EwLCVFq/view?usp=drive_link"
  },
  {
    "id": 60999,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 C 2013",
    "lecturas": "Lc 19, 1-10; Ecl 3, 30; Tb 4, 7-11",
    "resumen": "Seguimos en la línea de los últimos domingos con la intención de animarnos a rezar. Son muchas las tentaciones que nos desaniman para rezar, y es tan lindo poder rezar que vale la pena superar todas l",
    "link": "https://drive.google.com/file/d/1Jva_hqlCgmRT3wPJunn89U-ES3CBxtc1/view?usp=drive_link"
  },
  {
    "id": 81128,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 C 2013",
    "lecturas": "Lc 18, 9-14",
    "resumen": "“Que recemos sin desanimarnos”, ese era el deseo al que Jesús convirtió en la parábola de la viuda insistente. Hoy podríamos decir que la parábola del fariseo y el publicano Jesús la creó para expresa",
    "link": "https://drive.google.com/file/d/1e3GkiIGGAoyWOGx3_r3g5fujrzYaDMj-/view?usp=drive_link"
  },
  {
    "id": 95834,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 29 C 2013",
    "lecturas": "Lc 18, 1-8; Hc 2, 6-8",
    "resumen": "En la última charla de dirección espiritual, antes de que el padre Jorge fuera Papa Francisco, charlábamos de la confianza en la oración y recordó un versículo del salmo 65 –el 20- que dice: “¡Bendito",
    "link": "https://drive.google.com/file/d/1bz9vWnfnoqWlRri3pAmd-rvLQp7FlO6V/view?usp=drive_link"
  },
  {
    "id": 44553,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 C 2013",
    "lecturas": "Lc 17, 11-19",
    "resumen": "la escena: el leproso curado, rostro en tierra a los pies de Jesús, le agradece. La frase “era un samaritano” saca a la luz el sentimiento del grupo. Y el Señor aprovecha la fe agradecida",
    "link": "https://drive.google.com/file/d/1e_p12n5kkGdj9gX_BSGFAj81Hl3YwHlz/view?usp=drive_link"
  },
  {
    "id": 85208,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 27 C 2013",
    "lecturas": "Lc 17, 5-10",
    "resumen": "El evangelio de hoy viene a coronar la semana de Teresita y de Francisco, dos de los santos más queribles Tienen en común el amor por la pequeñez y por eso son amigables, cercanos, hermanos de todos.",
    "link": "https://drive.google.com/file/d/1KSRdhFuUJR0YJhKwNEn4ll5opU8AKIDH/view?usp=drive_link"
  },
  {
    "id": 32467,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 C 2013",
    "lecturas": "Lc 16, 19-31",
    "resumen": "Esta",
    "link": "https://drive.google.com/file/d/1MFPnE87qOcQ6dygJb7N-4tsaPNhGnSlG/view?usp=drive_link"
  },
  {
    "id": 64620,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Google+",
    "lecturas": "ros 1.146",
    "resumen": "Google+ . Tu voto: Comparte esto: Haz clic para compartir en Facebook (Se abre en una ventana nueva) Facebook Haz clic para compartir en X (Se abre en una ventana nueva) X Me gusta Cargando... Relacio",
    "link": "https://drive.google.com/file/d/1S7_I3KZZjTa5C3iMIayXBNFPbeLikMWQ/view?usp=drive_link"
  },
  {
    "id": 96859,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 C 2013",
    "lecturas": "Lc 16, 1-13; as 12, 9; as 4, 16",
    "resumen": "Jesús contaba parábolas para hacer pensar a la gente por sí misma. El lenguaje narrativo hace que uno mire un caso, opine y, al reflexionar sobre lo que le llamó la atención, descubra –sorprendido y c",
    "link": "https://drive.google.com/file/d/1ao8hLx8P-WV3BCHOI_IlrmSKqRM2d1Wb/view?usp=drive_link"
  },
  {
    "id": 9682,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 C 2013",
    "lecturas": "Lc 15, 1-32",
    "resumen": "“Salir a buscar”, “buscar con cuidado hasta encontrar”, “correr a abrazar” esos son los impulsos del corazón del Padre. Dice von Balthasar que “la búsqueda de Dios de aquel que anda perdido no signifi",
    "link": "https://drive.google.com/file/d/1axBItw6BaBnNf6hMu-uEXs3sRd7ca2OP/view?usp=drive_link"
  },
  {
    "id": 69190,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 C 2013",
    "lecturas": "Lc 14, 25-33; Fil 3, 8; el 0,1",
    "resumen": "¿Qué hay que hacer para seguir a Jesús? Pablo es quien mejor lo expresa cuando dice: “Y aún más, yo estimo como pérdida todas las cosas en vista del incompara-ble valor (hyperejon) de conocer a Cristo",
    "link": "https://drive.google.com/file/d/1mVKMB5UcQJtRhH2WpY6IwITBBspD5IQR/view?usp=drive_link"
  },
  {
    "id": 73128,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 C 2013",
    "lecturas": "Lc 14, 1",
    "resumen": "Apenas leí “para que cuando llegue el que te convocó, te diga: ‘Amigo, acércate más’”, automáticamente lo veo a Paolo Menghini que me ficha desde el pequeño escenario montado en el hall central de Onc",
    "link": "https://drive.google.com/file/d/11bBvDRXjqOTc5gAZJnasmmmMQeWMRa9h/view?usp=drive_link"
  },
  {
    "id": 17049,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 C 2013",
    "lecturas": "Lc 13, 22-30",
    "resumen": "No sé si serán muchos o pocos los que se salven pero por las dudas elijo la fila de la puerta estrecha: la de los que están despiertos y atentos, la de los que saben que hay que hacer cola, la puerta",
    "link": "https://drive.google.com/file/d/1g5595SRaWvk5wGbwEoiDU1rTLtVpwkws/view?usp=drive_link"
  },
  {
    "id": 42626,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 C 2013",
    "lecturas": "Lc 12, 49-53; Hc 2, 3; Ap 2, 18",
    "resumen": "Me llamó la atención que el evangelio no diga (como se traduce habitualmente) “cómo desearía que ya estuviera encendido” sino que Jesús se pregunta a sí mismo: “Y qué deseo si (ese fuego que vine a tr",
    "link": "https://drive.google.com/file/d/1CyVwjC5E6Zh50Mmeblf9BoNKFheFk4dX/view?usp=drive_link"
  },
  {
    "id": 843,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "La altura de María -Fiesta de la Asunción",
    "lecturas": "Lc 1, 39-56",
    "resumen": "r a María a través de todos los tex",
    "link": "https://drive.google.com/file/d/1NwlxKx37-qa1CPiJ7Icmb6GyCmwBnj76/view?usp=drive_link"
  },
  {
    "id": 70868,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 C 2013",
    "lecturas": "Lc 12, 32-48",
    "resumen": "El primer “gusto” espiritual al leer el evangelio fue sentir que me conmovía la multitud de imágenes “llenas de gracia” que se agolpan en este pasaje de Lucas. Las palabras rebañíto, lámpara encendida",
    "link": "https://drive.google.com/file/d/1WuyXvjyGcbJhvH0IUoX5RPWgPy3KOwnn/view?usp=drive_link"
  },
  {
    "id": 18279,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Entrevista",
    "lecturas": "ros 1.146",
    "resumen": "Como Francisco me confirmó lo que le había dicho al Periodista Darío Menor acerca de nuestros libros (porque me dijo que «no sabía a quién recomendar. Hice un silencio y me vino tu nombre y luego le d",
    "link": "https://drive.google.com/file/d/1hVN4svSSw-UYEUHXwZzYhTqKo5dYbrSi/view?usp=drive_link"
  },
  {
    "id": 56933,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 C 2013",
    "lecturas": "Lc 12, 13-21",
    "resumen": ", pero creo que es bueno profundizar en esto porque lo opuesto a «almacenar» cosas no es «dar cosas», que está bien, pero no es el fondo. Lo opuesto a almacenar bienes es compartir nuestro tiempo. Esa",
    "link": "https://drive.google.com/file/d/1ZsZBt4oHlvvqJcP2R9otR-Bj0WwPtH3c/view?usp=drive_link"
  },
  {
    "id": 97999,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 C 2013",
    "lecturas": "Lc 11, 1-13",
    "resumen": "Mateo pone el Padre Nuestro en el contexto de la oración hecha en secreto y remarca la condición de perdonar a los enemigos para ser perdonados por nuestro Padre. Lucas pone el Padre Nuestro en el con",
    "link": "https://drive.google.com/file/d/1cmbvSqa8wOL_-vFA1LPJoWljhLvRR2Q-/view?usp=drive_link"
  },
  {
    "id": 82701,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 C 2013",
    "lecturas": "Lc 10, 38-42",
    "resumen": "tiva, entre oración y servicio-, pinta, digo, un ícono de las relacione",
    "link": "https://drive.google.com/file/d/1Fhcz7h_anTYT9uA6b6T2cU2xYAYBEHoF/view?usp=drive_link"
  },
  {
    "id": 21773,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 C 2013",
    "lecturas": "cas 10, 25-37",
    "resumen": "¿Quién es mi prójimo? pregunta el doctor de la ley y todos preguntamos con él. Lo que quiero decir es que esta pregunta es básica y hace bien tomar conciencia de ella, porque es la que ilumina nuestra",
    "link": "https://drive.google.com/file/d/119Fsh_OtN-Li50nNUurCPMgUymjqu1Vh/view?usp=drive_link"
  },
  {
    "id": 64410,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 C 2013",
    "lecturas": "Lc 10, 1-12; Ga 5,6; Hb 11,33",
    "resumen": "“Que descienda la paz sobre esta casa”. Este es el evangelio que llevan los setenta y dos discípulos misioneros: un evangelio de paz. La paz en medio de los lobos es la señal de los misioneros de Jesú",
    "link": "https://drive.google.com/file/d/1u32DFYSv4iaZcjoN0_b4PniXS243CskB/view?usp=drive_link"
  },
  {
    "id": 80483,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 13 C 2013",
    "lecturas": "Lc 9, 51-62",
    "resumen": "Seguimiento es la palabra que nos regala el evangelio de hoy. Seguir a Jesús es acompañarlo, obedecerle, convertirse en discípulo suyo, andar por la vida atento a sus enseñanzas, ir a los lugares adon",
    "link": "https://drive.google.com/file/d/1R_jBszwgSYhxONHJPdBN3eYQOhDnv2CY/view?usp=drive_link"
  },
  {
    "id": 86773,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 12 C 2013",
    "lecturas": "Lc 9, 18-24",
    "resumen": "Quien es Pedro para mi. Pedro es, antes que nada un gusto por su persona. Cuando digo su persona no es un estereotipo de esta o aquella cualidad, sino los más personal suyo: su amistad incondicional c",
    "link": "https://drive.google.com/file/d/16Wjm59jATpUkvg8dhghkFAz_gdJzrQx0/view?usp=drive_link"
  },
  {
    "id": 32991,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 11 C 2013",
    "lecturas": "Lc 7, 36-8; Lc 11, 42",
    "resumen": "Amar mucho. De eso trata el evangelio de hoy: de amar mucho. Eso lo que le agrada al Señor. La escena y la parábola de los deudores –el que debía 500 y el que debía 50- es una adaptación al horizonte",
    "link": "https://drive.google.com/file/d/18lnDWGlWaFsj2XEbJkBK-sA5iFENS_iS/view?usp=drive_link"
  },
  {
    "id": 78207,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo 10 C 2013",
    "lecturas": "Rey 17, 17-24; l 1, 11-19; Lc 7, 11-17",
    "resumen": "Lo escribo así, raro, para llamar la atención: Res ( ucit ) ar . En el interior de la oración acontece una resurrección. Al que reza, Jesús le da Vida, lo resucita, lo despierta de sus sueños. ………… ¡L",
    "link": "https://drive.google.com/file/d/1PiC1XxspnND8OypuBQCmjItekDSzU3sp/view?usp=drive_link"
  },
  {
    "id": 27446,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Corpus Christi C 2013",
    "lecturas": "Lc 9, 11",
    "resumen": "“Jesús partió los panes y los fue entregando a los discípulos para que se los sirvieran a la gente. Y todos comieron hasta saciarse…”. Como dice Bernárdez: Al empezar a comer notan que el pan del Seño",
    "link": "https://drive.google.com/file/d/1NY5gsT2nwug5r1dvaNR9Vi3mnLUmB6oG/view?usp=drive_link"
  },
  {
    "id": 23750,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "La Trinidad: una Casa de puertas abiertas",
    "lecturas": "Jn 16, 12-15",
    "resumen": "r el misterio de la Santísima Trinidad es un texto muy humilde, si lo que uno busca son definiciones, pero riquísimo, si uno lo toma como una puertita abier",
    "link": "https://drive.google.com/file/d/1L87OfKs82Zmwfu4CedM1iU6D2yuoQh9q/view?usp=drive_link"
  },
  {
    "id": 24453,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pentecostés C 2013",
    "lecturas": "Jn 20, 19-23",
    "resumen": "Primero que todo invocamos al Espíritu Santo. Cada día, como nos lo pidió el Papa Francisco: “de ahora en adelante, todos los días, récenle al Espíritu Santo”. Ven Creador, Espíritu Santo, a visitar l",
    "link": "https://drive.google.com/file/d/1NPDCuCKWujh3y7Mcbs1ebB7MtPNsPxj7/view?usp=drive_link"
  },
  {
    "id": 46531,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Ascensión C 2013",
    "lecturas": "Lc 24, 46-53; Sm 21, 14",
    "resumen": "Jesús Resucitado realiza entre los suyos una serie de acciones que son todas para siempre , para ser comunicadas a todos los que creemos en Él. En otros pasajes el Señor “da la paz”, “insufla el Espír",
    "link": "https://drive.google.com/file/d/1CygXyyoHZ_tUgQFmx3FI0gk8F6W1H_PZ/view?usp=drive_link"
  },
  {
    "id": 38378,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 6 C 2013",
    "lecturas": "Jn 14, 22-31",
    "resumen": "Judas expresa ese deseo tan básico que lo invade a uno cuando siente que otro se le va lejos o para siempre. La pregunta parece que tiene en mente al mundo: ¿cómo es eso de que vas a ser entendible pa",
    "link": "https://drive.google.com/file/d/1cic5ZCb0zO-kY8UTwhxYrzm9Lw4gDnRy/view?usp=drive_link"
  },
  {
    "id": 80351,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 5 C 2013",
    "lecturas": "Jn 13, 31-35; Jn 3, 18-19",
    "resumen": "“En esto todos reconocerán que son mis discípulos”: en que se aman como Yo los he amado. El amor de Jesús es el signo creíble, lo que permite reconocer quién es su discípulo. Un amor “no de palabra si",
    "link": "https://drive.google.com/file/d/1A8_GyHLcI2rk92QRc5laSfbPpWwixjEa/view?usp=drive_link"
  },
  {
    "id": 33631,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 4 C 2013",
    "lecturas": "Jn 10, 27-30; Ex 28,6-14; Ex 28,21",
    "resumen": "haciendo presentes algunas imágenes que nos va regalando el Papa Francisco. Una es sobre Jesús Abogado: «¡Es lindo sentir que tenemos un abogado!», e",
    "link": "https://drive.google.com/file/d/1cA2z3rUe6f232JRxZeRs_hvKGj36gwvf/view?usp=drive_link"
  },
  {
    "id": 96354,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 3 C 2013",
    "lecturas": "Jn 21, 1-19",
    "resumen": "En la ordenación de un compañero jesuita, nuestro obispo Vicente en vez de decir Jesús enviado del Padre dijo Jesús Misionero del Padre. La palabra misionero me lo volvió más cercano al Señor y sentí",
    "link": "https://drive.google.com/file/d/12R2rJCiei-b9dDZN7PtTF9yObAb4n622/view?usp=drive_link"
  },
  {
    "id": 76242,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 2 C 2013",
    "lecturas": "Jn 20,19-31; Jn 11, 25",
    "resumen": "Tanto el reproche que el Señor resucitado hace Tomás como la bienaventuranza de la fe, si pensamos un poco, no son algo del todo lógico. Jesús le dice: “¿Crees porque me has visto? Felices los que cre",
    "link": "https://drive.google.com/file/d/1CygXyyoHZ_tUgQFmx3FI0gk8F6W1H_PZ/view?usp=drive_link"
  },
  {
    "id": 93211,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Vigilia Pascual C 2010",
    "lecturas": "ros 1.146",
    "resumen": "Si leemos juntos los evangelios de Lucas y Juan, lo primero que resalta son dos tipos de experiencia de fe: las discípulas experimentan y dan testimonio en común, Pedro y Juan hacen cada uno su propia",
    "link": "https://drive.google.com/file/d/1YPQMviKAzdviGS8AksZ-v-5zlqs8o_Bj/view?usp=drive_link"
  },
  {
    "id": 21693,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Viernes Santo C 2013",
    "lecturas": "Jn 13, 2",
    "resumen": "¿Qué es, precisamente, lo que carga Jesús sobre sí que nos libera a nosotros? Nuestros pecados, decimos, siguiendo la Escritura. Isaías amplía más: Jesús carga nuestras dolencias, nuestros dolores, nu",
    "link": "https://drive.google.com/file/d/1XgVK-NEyPwAxqjF8P6O8NdZ9YjIr7j3g/view?usp=drive_link"
  },
  {
    "id": 17947,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jueves Santo C 2013",
    "lecturas": "Jn 13, 1",
    "resumen": "Dice San Gregorio Nacianceno: “¡Vamos a participar de la Pasión…! Si eres Simón Pedro, deja que el Señor te lave los pies…” En la misa del Lunes Santo, el Papa Francisco nos regaló una perla preciosa",
    "link": "https://drive.google.com/file/d/105kF0seqOIoqp3NdpJQdUxQLyB3SLper/view?usp=drive_link"
  },
  {
    "id": 86164,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Ramos 2013 C",
    "lecturas": "cas 19, 28-40; Lc 19, 27",
    "resumen": "San Gregorio Nacianceno tiene una hermoso Sermón llamado “Vamos a participar de la Pascua” en el que nos va diciendo “Si eres el Cirineo, toma tu cruz y sigue a Cristo. Si estás crucificado con él com",
    "link": "https://drive.google.com/file/d/138utuF38yJ6-86S8uUf-m3ELevKf6svO/view?usp=drive_link"
  },
  {
    "id": 48195,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 5 C 2013",
    "lecturas": "Jn 8, 1-11; sis 12, 10; Jn 8, 44",
    "resumen": "Lo que nos narra Juan en este pasaje de la pecadora es cómo logró Jesús atajar y dar vuelta la feroz e incontenible dinámica de un ajusticiamiento: inclinándose. Ya venían con las piedras en las manos",
    "link": "https://drive.google.com/file/d/1DOgVHAq4uZJ-np14sezjJkypV5yzkeKb/view?usp=drive_link"
  },
  {
    "id": 97147,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 4 C 2013",
    "lecturas": "Lc 15, 1-3",
    "resumen": "La conversión que Jesús predica es conversión al Padre. A su Padre, a nuestro Padre. El Padre que habita en nuestro interior y al que no conocemos. Todo lo que hace el Señor y todas sus parábolas son",
    "link": "https://drive.google.com/file/d/1ll1W58KUGJTiShSHkEXWvDfCuBvWkb_b/view?usp=drive_link"
  },
  {
    "id": 419,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 3 C 2013",
    "lecturas": "Lc 13, 1-9",
    "resumen": "Metanoia –conversión, arrepentimiento- tiene una traducción literal que es impresionante lo bien que nos viene para nuestra mentalidad de juicios inmediatos: significa “percibir después del hecho”, (n",
    "link": "https://drive.google.com/file/d/1cRivv6BML-vwisae_xekHwjo1VHhJodG/view?usp=drive_link"
  },
  {
    "id": 45221,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 2 C 2013",
    "lecturas": "Lc 9, 28; Dt 5, 24; Pe 1, 16",
    "resumen": "La palabra transfiguración nos trae a los ojos de la imaginación la blancura refulgente del vestido de Jesús y la Gloria de su Rostro mientras conversa con Moisés y Elías, circundados también de Glori",
    "link": "https://drive.google.com/file/d/1rn2fNxirWHl__v7BbZDC_JWPw6sjEXNc/view?usp=drive_link"
  },
  {
    "id": 3211,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 1 C 2013",
    "lecturas": "Lc 4, 1-13",
    "resumen": "“Jesús, que tomó sobre sí nuestros pecados, quiso conocer también nuestras tentaciones, su poder maligno e ilusorio de seducción” (von Balthasar). Me llamó la atención esta frase de Balthasar que cali",
    "link": "https://drive.google.com/file/d/1NPDCuCKWujh3y7Mcbs1ebB7MtPNsPxj7/view?usp=drive_link"
  },
  {
    "id": 53148,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 C 2013",
    "lecturas": "Lc 5, 1-11",
    "resumen": "Antes del “Duc in altum” –conduce la nave mar adentro-, hubo un “… duc pusillum” –alejá un poquito la nave de la tierra-. “Duc” es “llevar” y nosotros lo usamos para indicar muchas acciones –conducir,",
    "link": "https://drive.google.com/file/d/19mbN-HqmP-KTs5OSoXqdZa26zpbfzIXM/view?usp=drive_link"
  },
  {
    "id": 21363,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 C 2013",
    "lecturas": "Lc 4, 21-30",
    "resumen": "Jesús desconcierta. Sus paisanos primero se admiran de las palabras que salen de su boca y luego se sienten provocados y tratan de despeñarlo. ¿Por que los provoca el Señor? Convengamos que todo lo qu",
    "link": "https://drive.google.com/file/d/1CEg0_W73nv9KjBkJZiQ-X66l6Cy27AIR/view?usp=drive_link"
  },
  {
    "id": 43692,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 C 2013",
    "lecturas": "Lc 1, 1-4; Lc 7, 6",
    "resumen": "Comienzo del Evangelio de Lucas, comienzo del ministerio de Jesús… Lucas le escribe a Teófilo (a todo el que quiere ser “amigo de Dios”) y acredita su relato en la fe de los que fueron testigos ocular",
    "link": "https://drive.google.com/file/d/1q3vRgbd5shIx5TYd19f6lsVvKYHZueOc/view?usp=drive_link"
  },
  {
    "id": 51960,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 C 2013",
    "lecturas": "Jn 2, 1-11",
    "resumen": "Buscando imágenes me gustaron estas tinajas, no se bien porqué, pero comenzamos con ellas. En el taller con las imágenes del tríptico de Aparecida algo había salido acerca de “llenar las tinajas de la",
    "link": "https://drive.google.com/file/d/1b992gy8_4-OzSZ2cSyPyDt43RHALJZOz/view?usp=drive_link"
  },
  {
    "id": 34584,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo del Bautismo del Señor C 2013",
    "lecturas": "Lc 3, 15-16",
    "resumen": "Dice von Balthasar que para gozar plenamente de mi vida y potenciar a full todas mis capacidades necesito “experimentar que yo represento un bien para Dios y un tú”. Algo así como que se abra el cielo",
    "link": "https://drive.google.com/file/d/1tzzEjpXRHxgzi5Jxm5M_vqn-hIgbSqeg/view?usp=drive_link"
  },
  {
    "id": 36244,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Epifanía C 2013",
    "lecturas": "Mt 2, 1-12",
    "resumen": "Los magos anhelaban encontrar al Niño de la estrella para adorarlo. Y cuando la estrella se detuvo encima del lugar donde estaba el Niño, se llenaron de inmensa alegría, entraron en la casa, vieron al",
    "link": "https://drive.google.com/file/d/1CygXyyoHZ_tUgQFmx3FI0gk8F6W1H_PZ/view?usp=drive_link"
  },
  {
    "id": 38103,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Santa María, Madre de Dios C 2013",
    "lecturas": "ros 1.146",
    "resumen": "Al Jesús que se nos ha perdido, como veíamos en el evangelio de la Sagrada Familia, lo podemos encontrar «en las cosas del Padre». Una de las cosas que nos reveló Jesús acerca del Padre es que habita",
    "link": "https://drive.google.com/file/d/18Zdp4QRPBc9kKp6AB-Ts6lG0DgtdMnLL/view?usp=drive_link"
  },
  {
    "id": 92746,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sagrada Familia C 2012",
    "lecturas": "Lc 2, 40-52",
    "resumen": "¡Se nos ha perdido Jesús! Hay que anunciarlo. Los que venimos de familia católica y habitamos en un país mayoritariamente cristiano, vamos tomando conciencia, en el camino de vuelta de alguna de nuest",
    "link": "https://drive.google.com/file/d/16n7SPcyE9BW8I3k_HBk_4yGOIESfIiTa/view?usp=drive_link"
  },
  {
    "id": 74362,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad C 2012",
    "lecturas": "cas 2, 1-20",
    "resumen": "En el Hogar, esta mañana, hicimos un almuerzo especial. Como era feriado convocamos a los colaboradores que desearan y pudieran venir y ofrecimos un choripán y medio, helado (medio derretido por el ca",
    "link": "https://drive.google.com/file/d/101Ig6JqnXtXnxWYmDezSGq4BOxDxNN1w/view?usp=drive_link"
  },
  {
    "id": 69770,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 4 C Adviento 2013",
    "lecturas": "Lc 1, 39-45",
    "resumen": "Ya está cerca la Navidad y no hablamos más de “metáforas” sino de la realidad de la fe de María, que recibe una felicitación de su prima anciana Isabel: “dichosa tú que has creído”. Y que has creído “",
    "link": "https://drive.google.com/file/d/1OC-XAfL7uAOZ4CH-E4-ry437fQblCwSJ/view?usp=drive_link"
  },
  {
    "id": 50500,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 3 C Adviento 2012",
    "lecturas": "cas 3, 10-18",
    "resumen": "¡El fuego! Francisco nos lo hermanó en su cántico de las creaturas: Alabado seas mi Señor por el hermano fuego; con él alumbras la noche, y es alegre y robusto y fuerte y bello. Escribe E. Galeano: El",
    "link": "https://drive.google.com/file/d/1j5u3B31yjt3lPzeG8ia61-AsvKsQp_Z6/view?usp=drive_link"
  },
  {
    "id": 16296,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 2 C Adviento 2012",
    "lecturas": "cas 3, 1-6",
    "resumen": "Adviento es tiempo de preparación. Y cualquiera comprende lo que es preparar algo. Preparamos el arbolito y el pesebre, preparamos la comida para las fiestas, preparamos los regalos, preparamos el áni",
    "link": "https://drive.google.com/file/d/1DhgA6V7vIFbTxYPAlFinIeDQnmrJWwtx/view?usp=drive_link"
  },
  {
    "id": 88042,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 1 C Adviento 2012",
    "lecturas": "Lc 21, 25-36",
    "resumen": "Nuestra fe es fe en una Persona. Creemos en Alguien que ya vino –el Niñito Jesús, el Hijo amado del Padre y de María-; creemos en Alguien que vendrá –el mismo Jesús, que vendrá como Señor, con gran po",
    "link": "https://drive.google.com/file/d/1nNLwPzXsWJCXZZ1WlLbeYZWBzTGTkgWQ/view?usp=drive_link"
  },
  {
    "id": 96438,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 B 2012 Cristo Rey",
    "lecturas": "Jn 18, 33-37",
    "resumen": "Jesús maniatado ante Pilato. ¡Qué imagen de nuestro Rey! ¿Y de qué hablan? Del poder y de la verdad. ¿Eres el Rey de los judíos?, le pregunta Pilato. ¿Lo preguntas por ti mismo o porque te lo dijeron…",
    "link": "https://drive.google.com/file/d/1HoqtkFRcL54wgBYFb9V4d2jzD-y4LXy2/view?usp=drive_link"
  },
  {
    "id": 62255,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 B 2012",
    "lecturas": "Mc 13, 24-32",
    "resumen": "el Templo de Jerusalén. Los discípulos más amigos aprovechan el momento para preguntarle acerca del fin. Y el Señor apela a su",
    "link": "https://drive.google.com/file/d/11_v0HWgCvhkmL59LACmyTMZrAre69OJm/view?usp=drive_link"
  },
  {
    "id": 98570,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 B 2012",
    "lecturas": "Mc 12, 38-44",
    "resumen": "Esta",
    "link": "https://drive.google.com/file/d/15OWIKFgIf4aLTeUhkM0VZBFjvTsKJY5S/view?usp=drive_link"
  },
  {
    "id": 81905,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 B 2012",
    "lecturas": "Mc 12, 28; Lc 24, 35; Tm 1, 12",
    "resumen": "Algunos me dijeron que la",
    "link": "https://drive.google.com/file/d/1CPnHS8b70yCW2WpwQNlIC6sMQml8d9T7/view?usp=drive_link"
  },
  {
    "id": 63935,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 B 2012",
    "lecturas": "Mc 10, 46-52",
    "resumen": "Cuando predico a los chicos siempre les hago trampita con Bartimeo. Voy contando la historia tal cual, teatralizando un poco los gritos del ciego mendigo y cómo tiró el manto y se puso de pie de un sa",
    "link": "https://drive.google.com/file/d/1tEZg0XcTlGlWohfsArFyeZ60vwWUpjk2/view?usp=drive_link"
  },
  {
    "id": 48334,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 29 B 2012",
    "lecturas": "Mc 10, 35-45",
    "resumen": "La puerta de la fe, que nos abre Jesús, es, ante todo, una puerta de servicio. Puerta de servicio en sentido de «puerta estrecha»: la puertita de atrás, no la principal. Uno entra a creer no por un ac",
    "link": "https://drive.google.com/file/d/1V4yMMcAQAHX-q-3w0NTQJXZ55hPUQ5wP/view?usp=drive_link"
  },
  {
    "id": 3796,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 B 2012",
    "lecturas": "Mc 10, 17-31",
    "resumen": "Como siempre: primero la Palabra de Dios. Con el libro de la Sabiduría “invocamos al Señor y le pedimos que nos de Espíritu de sabiduría” para saborear estos 30 años de vida del Hogar de San José. Les",
    "link": "https://drive.google.com/file/d/13F-C-m1bqYu5oowN_AGQ3lHNhM__LRP8/view?usp=drive_link"
  },
  {
    "id": 57423,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 27 B 2012",
    "lecturas": "Mc 10, 2-16",
    "resumen": "Hago esta",
    "link": "https://drive.google.com/file/d/1qRoEeiYGgi8F_vNvY2Gr7qA-xWd0qMnd/view?usp=drive_link"
  },
  {
    "id": 66190,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 B 2012",
    "lecturas": "Mc 9, 38-48; Rm 8, 31",
    "resumen": "A favor Le dice Juan: ─ Maestro, vimos a uno, que no anda con nosotros, expulsar demonios en tu Nombre, y se lo prohibimos. Pero Jesús dijo: ─ No se lo prohíban, porque no habrá nadie que obre un mila",
    "link": "https://drive.google.com/file/d/1mSgcKgwCZUMHK0Q8iFgWV7Lf9oF9MHeD/view?usp=drive_link"
  },
  {
    "id": 51892,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 B 2012",
    "lecturas": "Mc 9, 30-37; Mc 3, 14",
    "resumen": "¿De qué discutían? La pregunta de Jesús nos viene bien a todos. ¿De qué discutimos? Si uno hace una pausa en medio de la vida de cualquier familia, en medio del trabajo de cualquier institución, en me",
    "link": "https://drive.google.com/file/d/1Cw-AvrIOcBUinlIkCz9rUZqepxxqiHNP/view?usp=drive_link"
  },
  {
    "id": 83419,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 B 2012",
    "lecturas": "Mc 8, 27-35",
    "resumen": "En la fiesta de Regina Martyrum –de Nuestra Señora de los dolores y Reina de los mártires- el evangelio de hoy se ilumina de manera especial. Mártir es testigo y vemos que al Señor le interesa tener t",
    "link": "https://drive.google.com/file/d/1f_3eQQYYScmxkryCaWaHm_Te5ATas1yi/view?usp=drive_link"
  },
  {
    "id": 59399,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 B 2012",
    "lecturas": "Mc 7, 31-37",
    "resumen": "¡Es hermosísimo el pasaje de Marcos: la curación del sordo balbuciente! Y brilla más toda la liturgia del Effeta que celebra Jesús (y que repetimos con los dos pequeños gestos de tocar con el dedo la",
    "link": "https://drive.google.com/file/d/1N0AnaTI8ffjiQTeCAUSttkcEMF4BMmrH/view?usp=drive_link"
  },
  {
    "id": 44282,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 B 2012",
    "lecturas": "Mc 7, 1-23",
    "resumen": "Me llamó la atención la palabra que se utilizaba en tiempos de Jesús para expresar “lo que contamina” o “lo impuro”. Los judíos utilizaban la palabra “común” (koinos), en el sentido de lo ordinario, l",
    "link": "https://drive.google.com/file/d/1WF2VM2vnetAyll7mPvO3JHXqPH6HTUrQ/view?usp=drive_link"
  },
  {
    "id": 52811,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 B 2012",
    "lecturas": "Jn 6, 60-69",
    "resumen": "r este último evangelio sobre la Eucaristía. Simón Pedro sintetiza las cosas, sin duda por gracia del P",
    "link": "https://drive.google.com/file/d/1yRBe79rXbEc4zCsGUdbtJjZ3Bu9GacS2/view?usp=drive_link"
  },
  {
    "id": 62479,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 B 2012 (Vísperas de San Alberto Hurtado)",
    "lecturas": "uan 6, 51-58; Jn 4,20",
    "resumen": "El año pasado reflexionamos sobre la frase de Hurtado “el pobre es Cristo”. Este año quiero seguir profundizando en “el sentido del pobre” acerca del cual Hurtado quería escribir: él lo describía como",
    "link": "https://drive.google.com/file/d/1JqFNNWlzH_PAjzVikhYtCCERI2AT0xdn/view?usp=drive_link"
  },
  {
    "id": 29336,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 B 2012",
    "lecturas": "Jn 6, 41-51; Gn 15, 24; Pe 4, 9",
    "resumen": "Comulgar o murmurar, esa es la opción ante la que nos pone Jesús cuando se presenta como Pan de Vida. El invitaba a “comer de su Pan para tener vida eterna” y los judíos murmuraban contra él por que h",
    "link": "https://drive.google.com/file/d/1FppHWU6T9RCCSCWTsRFaJvkmItgfMFZs/view?usp=drive_link"
  },
  {
    "id": 36250,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 B 2012",
    "lecturas": "Tes 1, 3; Jn 6, 24-35; Jn 14, 12",
    "resumen": "“Trabajos”, “obras”… la palabra clave del evangelio de hoy pone las “señales” de Jesús en clave laboral. Y el Señor aclara bien en qué consiste el trabajo que hay que hacer: nuestro trabajo es “creer",
    "link": "https://drive.google.com/file/d/1mZuGKhvxorddd5Qdq7TQ-XyQrwX2b82H/view?usp=drive_link"
  },
  {
    "id": 45848,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 B 2012",
    "lecturas": "Jn 6, 1-15; Jn 20, 31",
    "resumen": "La escena es propiamente una",
    "link": "https://drive.google.com/file/d/18kzJuh0p6HSeUJFOaJbM8rpNnpK15H7v/view?usp=drive_link"
  },
  {
    "id": 78703,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 B 2012",
    "lecturas": "Mc 6, 30-34",
    "resumen": "Marcos acentúa las relaciones de amistad personal entre Jesús y los discípulos y entre Jesús y la gente. No se detiene en “lo que hicieron y enseñaron” sino que pone de relieve los gestos de cercanía",
    "link": "https://drive.google.com/file/d/18NtFts9K4tJtDikxnyCNDG4_TPfKQWOs/view?usp=drive_link"
  },
  {
    "id": 78180,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 B 2012",
    "lecturas": "Mc 6, 7-13; Mt 10, 1; Mc 6, 30",
    "resumen": "De dos en dos y sólo con un bastón. La imagen de los apóstoles así enviados es una imagen llena de dinamismo evangélico: en el corazón el anuncio y la mirada puesta en el camino. ¿Y en qué consiste la",
    "link": "https://drive.google.com/file/d/1TsFHyVrv--X_oilUJWNe4xyAJP5Oee6g/view?usp=drive_link"
  },
  {
    "id": 21940,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 B 2012",
    "lecturas": "Mc 6, 1-6",
    "resumen": "La admiración. Los paisanos de Jesús se asombraban de él, de su sabiduría y de los milagros que realizaban sus manos de carpintero. Se asombraban de que Alguien como Él hubiera vivido en medio de ello",
    "link": "https://drive.google.com/file/d/1OUG9P1X0AV7TzZ8C1-CJC3c7pveMQZfA/view?usp=drive_link"
  },
  {
    "id": 92051,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 13 B 2012",
    "lecturas": "Mc 5, 21-43",
    "resumen": "La expresión de Jairo está llena de cariño y de lúcida desesperación. Como papá se dio cuenta de que su “hijita querida” (el diminutivo en la familia expresa el cariño) está “en las últimas” (esjatos)",
    "link": "https://drive.google.com/file/d/13mfQ-p03K024bFAngXtOFhaCgIREUbVR/view?usp=drive_link"
  },
  {
    "id": 74334,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Domingo 12 B 2012 Nacimiento de Juan Bautista",
    "lecturas": "Lc 1, 57-66; Jn 3, 29-30; Lc 1, 14",
    "resumen": "Von Balthasar dice que “ninguna Figura se perfila en la Biblia más solitaria que la del Bautista”. Solitario, esa es la palabra. Pero Solitario por plenitud, no por defecto. ¿En qué sentido hablamos d",
    "link": "https://drive.google.com/file/d/1fGbD3BKke-SYDfhtowjO3uW88FC2zT15/view?usp=drive_link"
  },
  {
    "id": 29951,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 11 B 2012",
    "lecturas": "Mc 4, 26-33",
    "resumen": "Las cosas del Reino se dan sin que sepamos cómo. Con las parábolas el Señor “se acomoda” a nuestra capacidad de entender y despierta el deseo de que nos explique más. Para ello tenemos que quedarnos u",
    "link": "https://drive.google.com/file/d/15HAN5mH_rBajhl5zsQKTzM0OmhPvGxve/view?usp=drive_link"
  },
  {
    "id": 8066,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Corpus B 2012",
    "lecturas": "Mc 14, 12-26",
    "resumen": "Esta imagen de Cristo en Cruz con la custodia adelante, en la que la hostia trasparenta el Corazón herido por la lanza, es una imagen que invita a entrar en el misterio del Corpus Christi, en el miste",
    "link": "https://drive.google.com/file/d/1gsb64f8Gz-in7yg2ha_9ElpGFsxHi8bK/view?usp=drive_link"
  },
  {
    "id": 31214,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la SantísimaTrinidad B 2012",
    "lecturas": "Mt 28, 16-20",
    "resumen": "La última recomendación de Jesús Resucitado en Mateo sigue un orden sobre el que puede hacernos bien reflexionar. En el corazón de su envío está primero el “bautizar” y segundo “el enseñar a guardar”.",
    "link": "https://drive.google.com/file/d/1NKMwsq4-RFGaHv4j_ol7fwOnJu7sEvco/view?usp=drive_link"
  },
  {
    "id": 48953,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pentecostés B 2012",
    "lecturas": "Jn 20, 19-23",
    "resumen": "“Reciban el Espíritu Santo. Los pecados serán perdonados a los que ustedes se los perdonen.” Leyendo a Guardini, lo que dice del Espíritu Santo al final de su libro “El Señor”, me quedé gustando un en",
    "link": "https://drive.google.com/file/d/1dRJQRIY0Ic8DXkBf8QcMgmJPzLjPFwj_/view?usp=drive_link"
  },
  {
    "id": 2304,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Ascensión B 2012",
    "lecturas": "Mc 16, 15-20",
    "resumen": "Seguimos con el “oficio” del Señor. Marcos nos dice que luego de la Ascensión a lo más Alto de la intimidad sagrada del Padre, eso que llamamos “el Cielo”, desde donde ambos nos envían su Espíritu San",
    "link": "https://drive.google.com/file/d/1R5s2rp3AOxoe0bOswlBZli40G4dTRyMh/view?usp=drive_link"
  },
  {
    "id": 2980,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 6 B 2012",
    "lecturas": "Jn 15, 9-17",
    "resumen": "Una buena noticia para los que valoramos la amistad con nuestros amigos: además de todos los tipos de amistad humana (cada amistad es única), existe “una amistad en el Señor”. ¡Aleluya! ¡bendito sea D",
    "link": "https://drive.google.com/file/d/1iyRgixMirKHWbnD6IHsBBKNpH8A9EKYe/view?usp=drive_link"
  },
  {
    "id": 75637,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 5 B 2012",
    "lecturas": "Jn 15, 1-8",
    "resumen": "Buscaba la imagen de una cepa y encontré esta en forma de cruz, y vale aunque no le pude sacar el cartelito de adentro. Buscaba una cepa, digo, porque es con lo que Jesús se compara. Y pensaba que uno",
    "link": "https://drive.google.com/file/d/1paPnFK2omQQqb6-HaqZb5Yl5MWRoFQn6/view?usp=drive_link"
  },
  {
    "id": 44932,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 4 B 2012",
    "lecturas": "Jn 10, 11-18",
    "resumen": "Leo a Jesús que dice: “Yo soy el Buen Pastor, esto no es una changa ocasional para mí –lo de brindar algunos servicios a ovejas ajenas- sino que son mis ovejas y yo doy la vida por mis ovejas”. Leo y",
    "link": "https://drive.google.com/file/d/1oCB0ZYyxGwmYCuNZGwTdle5qNmy4oZgr/view?usp=drive_link"
  },
  {
    "id": 95749,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 3 B 2012",
    "lecturas": "Lc 24, 35-48; Hc 16, 14; Lc 2, 23",
    "resumen": "“Les abrió sus mentes”. Lucas utiliza “abrir” ( Di-anoigo ) para expresar lo que hace y quiere hacer Jesús Resucitado con nuestros ojos, nuestra mente y nuestro corazón. El Señor viene para abrir y, e",
    "link": "https://drive.google.com/file/d/10UArS2jWGI9EUgdQsG4gvTneZ0ZG_VAA/view?usp=drive_link"
  },
  {
    "id": 45439,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 2 B 2012",
    "lecturas": "Jn 20, 19-29",
    "resumen": "En la Eucaristía del viernes de la Octava de Pascua, al leer la frase en la que dice que a Pedro, el que le hace notar la presencia del Señor resucitado, es Juan, me cayó una ficha nueva (recibí una g",
    "link": "https://drive.google.com/file/d/1R5s2rp3AOxoe0bOswlBZli40G4dTRyMh/view?usp=drive_link"
  },
  {
    "id": 98905,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Vigilia de Pascua B 2012",
    "lecturas": "Mc 16, 1-8; Mc 15, 40-46; Mc 16, 10",
    "resumen": "a las Discípulas… Siempre tomo alguna frase de",
    "link": "https://drive.google.com/file/d/1e0B5AFMMvE6rWxhrKjCz7Ts5Og-L9gxp/view?usp=drive_link"
  },
  {
    "id": 97179,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos B 2012",
    "lecturas": "Mc 14, 1; Fil 2, 5; poc 8, 1-4",
    "resumen": "Entramos en la Pasión con el reclamo del Señor: “A los pobres los tendrán siempre con ustedes… pero a mí no me tendrán siempre”. Es uno de esos “sentimientos de Jesús” que Pablo nos invita a cultivar:",
    "link": "https://drive.google.com/file/d/1FC_o50G7Gg4OtOr0CuHUHxdbvSSBdkjh/view?usp=drive_link"
  },
  {
    "id": 99105,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 5 B 2012",
    "lecturas": "Jn 12, 20-33",
    "resumen": "“Esta Voz no se oyó por mí sino por ustedes”. Toda la vida de Jesús esta centrada y referida al Padre. Pensemos si no en su oración: siempre con un “te doy gracias, Abba”, “concuerdo con Vos, agradeci",
    "link": "https://drive.google.com/file/d/1NZ3l34zBiYLYW3UTktnlApfoDyeX15EO/view?usp=drive_link"
  },
  {
    "id": 70772,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "San José 2012",
    "lecturas": "Mt 1, 16",
    "resumen": "El Evangelio nos dice que San José era un hombre justo. Algo que es justo es algo que «se ajusta», como un zapato: tiene que calzar justo, ni demasiado ajustado ni demasiado suelto. En la Biblia, ser",
    "link": "https://drive.google.com/file/d/1RQx66lhxq3DRiHtSRbctiHw8cU-bPHdH/view?usp=drive_link"
  },
  {
    "id": 93245,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 4 B Cuaresma 2012",
    "lecturas": "uan 3, 14-21",
    "resumen": "“Sí, porque tanto amó Dios al mundo…”. Este “tanto” o “de tal manera”, esté adverbio “así amó Dios al mundo”, indica la inmensidad de ese amor (Crisóstomo), de modo que hay que reconocer una distancia",
    "link": "https://drive.google.com/file/d/1_DAO0usaWo0uuzUimgQWFzEcfxR6OYY0/view?usp=drive_link"
  },
  {
    "id": 25220,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 3 B Cuaresma 2012",
    "lecturas": "Sal 69, 10; uan 2, 13-25",
    "resumen": "r el amor celoso del Señor por la casa del Pad",
    "link": "https://drive.google.com/file/d/1aNpiK_U2-gXMRtDJ6RDlPqdESGvWivIp/view?usp=drive_link"
  },
  {
    "id": 83687,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 2 B Cuaresma 2012",
    "lecturas": "Mc 9, 2-10; Lc 9, 29",
    "resumen": "¡Que se nos transfigure Jesús! ¡Cuánto lo necesitamos! Nuestra cultura, herida en la imaginación religiosa, sufre el empobrecimiento de las imágenes de Dios. El mundo ha cambiado y las imágenes de Dio",
    "link": "https://drive.google.com/file/d/1vnW9Ho28TxVLTm84aRWP3cmC5qqYTQc8/view?usp=drive_link"
  },
  {
    "id": 9342,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 1 B Cuaresma 2012",
    "lecturas": "Mc 1, 12-15",
    "resumen": "das en oración y no solo mostradas, una y mil veces, en la pared de la pantalla, que es tan dura como la",
    "link": "https://drive.google.com/file/d/10xau4xvLwHMaSfSoc5hMOTCv7tJupEPl/view?usp=drive_link"
  },
  {
    "id": 45145,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 7 B 2012",
    "lecturas": "cos 2, 1-12",
    "resumen": "Todos concordamos en que la escena que pinta Marcos del paralítico bajado por el techo es de esas que se quedan grabadas en la imaginación. Más allá de cómo se imagine uno los techos de la época, los",
    "link": "https://drive.google.com/file/d/1sv4EEE5uy79GYM8hZNyA5-BSEMDhWjZu/view?usp=drive_link"
  },
  {
    "id": 20886,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 6 B 2012",
    "lecturas": "Mc 1, 40-45; Mc 3, 5; lmo 41, 2",
    "resumen": "Marcos describe siempre vivamente los sentimientos y pasiones que mueven a Jesús. Y la compasión es el primero que aparece explícitamente. El segundo será la ira y la profunda pena que experimenta el",
    "link": "https://drive.google.com/file/d/1SxZSz33pqCaDxQAbFiRTBZ2nMxz6RcFl/view?usp=drive_link"
  },
  {
    "id": 61610,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 B 2012",
    "lecturas": "Mc 1, 29-39; Jn 8, 42; Jn 16, 26-28",
    "resumen": "Le estuve dando vueltas al evangelio toda la semana y, esta mañana, al levantarme tempranito para hacer la",
    "link": "https://drive.google.com/file/d/1a4qdSzx8G1rbClgIn0cbSqhoRnbdratL/view?usp=drive_link"
  },
  {
    "id": 48570,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 B 2012",
    "lecturas": "cos 1, 21-28",
    "resumen": "Del griego nos han quedado algunas palabras casi tal cual. Uno sonríe un poco al ver que los que llamamos “escribas” eran los “grammaticos”… Gramma significa letra y decir de uno que es “un letrado” t",
    "link": "https://drive.google.com/file/d/1cWtwQuQaIqiY2ISl_o6lq0TaONZdYETx/view?usp=drive_link"
  },
  {
    "id": 54256,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 B 2012",
    "lecturas": "Mc 1, 14-20",
    "resumen": "“Pescadores de hombres” es una metáfora difícil. Siempre he admirado a los que tienen la gracia de “pescarnos para Jesús”. Si se mira de afuera pareciera que tiene trampa: pescar a otro, engancharlo…,",
    "link": "https://drive.google.com/file/d/1FmvMTDQ95-vSJo0r0vYrAkSJIN2p7qdg/view?usp=drive_link"
  },
  {
    "id": 7045,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 B 2012",
    "lecturas": "Jn 1, 35-42",
    "resumen": "Fano está inspirado. Su dibujito de Jesús Camino, hecho con tierra de todos los terrenos, surcado de hondonadas y horizontes, hecho de tierra y cielo, camino ancho que viene de abajo, caminito estrech",
    "link": "https://drive.google.com/file/d/1ffP0PDpNm6XtXxu-tQZ1cdRYUennck9J/view?usp=drive_link"
  },
  {
    "id": 90391,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bautismo del Señor B 2012",
    "lecturas": "Mc 1, 7-11",
    "resumen": "Me quedé mirando el Cielo de Fano. Si lo miran bien es un Cielo real y contrasta con los dibujitos. Una de dos, o dibujó sobre una foto o lo pintó de manera realista, para que resalte. Me gustó porque",
    "link": "https://drive.google.com/file/d/10zWnOghgaJivVXLu0F5gKEkrQYHPOnp_/view?usp=drive_link"
  },
  {
    "id": 811,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Santa María Madre de Dios B 2012",
    "lecturas": "cas 2, 16-21",
    "resumen": "En estos días los medios nos resumen el 2011 con las fotos del año, las frases del año, los personajes y los acontecimientos más importantes… El evangelio nos regala una linda imagen de María que sint",
    "link": "https://drive.google.com/file/d/1xtGnVsSubb3ooatbdG22lgSz3MxDDmlJ/view?usp=drive_link"
  },
  {
    "id": 61659,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad B 2011",
    "lecturas": "cas 2, 15-20; Lc 1, 1-4; teo 1, 18-25",
    "resumen": "Recibir a la Palabra hecha carne Estuve rezando esta semana para encontrar algunas imágenes simples para compartir en Navidad. Buscaba algo sencillo y que hiciera bien, que alimentara el corazón y ref",
    "link": "https://drive.google.com/file/d/1SJXVG81FMV_piIsAmx4Q7h_II1c1ded_/view?usp=drive_link"
  },
  {
    "id": 92222,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 4 B 2011",
    "lecturas": "cas 1, 26-38; Rm 7, 18-25",
    "resumen": "La preparación inmediata para la Navidad va de la mano de María, la Llena-de-gracia (la Gratia Plena en latín; en griego la Kejaritomene). Llenadegracia es una palabra especial, a medida de María. Es",
    "link": "https://drive.google.com/file/d/1KccKG45Kh_K-zyqnHSI2jCB-T_HiZLVt/view?usp=drive_link"
  },
  {
    "id": 10317,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 3 B 2011",
    "lecturas": "Jn 1, 6-8",
    "resumen": "El título “cualquiera puede ser testigo de la luz” lo puse pensando en el ciego de nacimiento. El que defendía a Jesús que lo había curado ¿se acuerdan? La imagen me vino por el tono del interrogatori",
    "link": "https://drive.google.com/file/d/1RdrGiJRcQYhVWl6s-EG3tYHM91bBPqjx/view?usp=drive_link"
  },
  {
    "id": 53118,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2 B 2011",
    "lecturas": "Mc 1, 1-8",
    "resumen": "Alessandro Pronzato, que es una especie de Juan Bautista moderno (con sus “Evangelios molestos” y su palabra siempre intranquilizante) hace notar que Juan se va al desierto, no a la plaza pública. El",
    "link": "https://drive.google.com/file/d/1qiRmQf6d3ziIXSOukzyKnLMiyMevo3FO/view?usp=drive_link"
  },
  {
    "id": 56764,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 1 B 2011",
    "lecturas": "Mc 13, 33-37",
    "resumen": "“Miren, estén despiertos, porque no saben cuándo es el tiempo de gracia”. … Y con una parábola el Señor ilustra esta frase suya que muestra la comprensión esencial que tiene sobre lo que es la vida y",
    "link": "https://drive.google.com/file/d/1N5ymlQ0CSHuxOPTmIhQU3iB4sr1XSwtq/view?usp=drive_link"
  },
  {
    "id": 12269,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 A 2011",
    "lecturas": "Mt 25, 35-46",
    "resumen": "El fin del año nos pone ante los ojos del corazón “las cosas últimas”, las decisivas. Lo último será un acontecimiento personal. El universo no terminará con una gran catástrofe ni con un apagamiento",
    "link": "https://drive.google.com/file/d/1-qOAPgXEBOWAoBfyqoA0wHOKHQiVMN12/view?usp=drive_link"
  },
  {
    "id": 24411,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 A 2011",
    "lecturas": "Mt 25, 14-30",
    "resumen": "Hay dos palabras de la parábola de los talentos en las que no había reparado antes. Una es la que utiliza Mateo para decir que el señor le confió talentos a cada servidor según su capacidad. ¿De qué c",
    "link": "https://drive.google.com/file/d/1OEPaun4ZE7pQYATrFk2C6Ea_VdTYGlwO/view?usp=drive_link"
  },
  {
    "id": 43911,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 A 2011",
    "lecturas": "Mt 25, 1-13",
    "resumen": "La de las jóvenes del casamiento es una parábola de “llegada”. El Señor quiere que se nos grabe en el corazón una imagen clara de “cómo llega el Reino de los Cielos a nuestra vida”. La palabra antigua",
    "link": "https://drive.google.com/file/d/1qCY6w5Voqepknjd1XZMaDw7bXz6NMG19/view?usp=drive_link"
  },
  {
    "id": 2936,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 A 2011",
    "lecturas": "Mt 23, 1-12",
    "resumen": "Estaba escribiendo sobre “hacerse servidor”, sobre lo que implica llegar a ser “mesaret”,“diakono”,“ministro”: el que obedece la voluntad de otro y está atento para ayudarlo en lo que necesita y para",
    "link": "https://drive.google.com/file/d/1_jfDGgQ8l9WrFaMOdcP1b0n2qfUn_lbS/view?usp=drive_link"
  },
  {
    "id": 82744,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 A 2011",
    "lecturas": "Mt 22, 34-40",
    "resumen": "Hoy toma su primera comunión Agustina. Celebraremos misa en la Casa de la Bondad donde está su papi, Mauricio, que nos sigue regalando fiestas. La primera fiesta fue la exposición de sus cuadros, en j",
    "link": "https://drive.google.com/file/d/1Bj2-TgSm3qZfmESgXJznun-PtETRlbmt/view?usp=drive_link"
  },
  {
    "id": 21286,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 29 A 2011",
    "lecturas": "Mt 22, 15-16",
    "resumen": "En la liturgia hay fiestas que “priman” sobre el domingo y tienen sus oraciones y lecturas propias – la Asunción, la solemnidad de San José… -. El día de la madre aunque no tenga lecturas propias tien",
    "link": "https://drive.google.com/file/d/10-i7itbcwQA2cZhxh9HAAa6xuJV80JtT/view?usp=drive_link"
  },
  {
    "id": 16582,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 A 2011",
    "lecturas": "Mt 22, 1-14",
    "resumen": "Con el reino de los cielos pasa que nos cuesta creer que lo que Dios quiere, libre y gloriosamente, es “celebrar las bodas de su Hijo”. Las Bodas del Cordero con la humanidad. Una humanidad que al des",
    "link": "https://drive.google.com/file/d/1QrCRMNJ-F84fcogrIIk57azV4FNMSxpx/view?usp=drive_link"
  },
  {
    "id": 1831,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 27 A 2011",
    "lecturas": "Mt 21, 33-46",
    "resumen": "Este fin de semana tenemos un encuentro de Manos Abiertas en Mar del Plata. El tema es el voluntariado. El voluntariado que transforma el mundo humanizando el presente. El voluntariado como instrument",
    "link": "https://drive.google.com/file/d/1CCHUUnCyxDxMsepvoMnH2qUwpZg_2XZr/view?usp=drive_link"
  },
  {
    "id": 63736,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 A 2011",
    "lecturas": "Mt 21, 28-32",
    "resumen": "Decía San Alberto Hurtado: “Ser cocinero o fogonero no es menos noble que ser escritor, poeta o abogado. ¿De dónde viene la ‘excelencia’ de estas profesiones intelectuales? Del falso concepto platónic",
    "link": "https://drive.google.com/file/d/1vqHh6dmQSuRfNc6ZjWRnmg4fMQYURV_2/view?usp=drive_link"
  },
  {
    "id": 60308,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 A 2011",
    "lecturas": "ros 1.146",
    "resumen": "¿Qué es “lo que sucede” en la parábola? Es importante descubrirlo bien porque lo mismo sucede en el reino de los cielos. Suceden muchas cosas pero la “anécdota” de fondo es que hay un Señor que es bue",
    "link": "https://drive.google.com/file/d/1skPcmW-gMhatDC0Pg_2Vwy1A3oYQCs93/view?usp=drive_link"
  },
  {
    "id": 95133,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 A 2011",
    "lecturas": "Mt 18, 21-35",
    "resumen": "r las dos imágenes de la parábola: la del Señor que “lo deja",
    "link": "https://drive.google.com/file/d/1HQijOYhY2GmDZnyMPYZx3YjMTmYUliX9/view?usp=drive_link"
  },
  {
    "id": 38336,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 A 2011",
    "lecturas": "Mt 18, 15-20; Mt 18,20",
    "resumen": "Hay una prédica de Hurtado sobre “El misterio del hombre” en la que muestra la paradoja del hombre moderno: la mezcla de un gozo y un sufrimiento desmedidos. Observa Hurtado: “Jamás, en otros períodos",
    "link": "https://drive.google.com/file/d/1GQYtOYLRLKnMpikeWBpCnkfW7IBPiNzp/view?usp=drive_link"
  },
  {
    "id": 2670,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 A 2011",
    "lecturas": "Mt 16, 21-27; Mt 6,33; Mt 11,12",
    "resumen": "Como dice el Papa Benedicto en su libro “Jesús de Nazaret”, “la confesión de fe Pedro –Tú eres el Cristo, el Hijo del Dios viviente- sólo se puede entender en el contexto en que aparece: en relación c",
    "link": "https://drive.google.com/file/d/1logIhwFUvUfu-pzr_nkEKAIwifTXYtXe/view?usp=drive_link"
  },
  {
    "id": 19579,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 A 2011",
    "lecturas": "Mt 16, 13-20",
    "resumen": "Con ocasión de la visita que le hizo un obispo argentino, Monseñor Rau de La Plata, en 1953, Romano Guardini escribió en su Diario: “Para mí un Obispo es siempre una personificación de la autoridad ec",
    "link": "https://drive.google.com/file/d/1eN3baDZdw5uC2mudS66DDMnS2dzA1FtP/view?usp=drive_link"
  },
  {
    "id": 54428,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "18 de Agosto 2011 San Alberto Hurtado",
    "lecturas": "Mt 25,40",
    "resumen": "El pobre es Cristo El año pasado tomamos la frase “Contento, Señor, Contento”, ¿recuerdan? Descubrimos que San Alberto la dirigía en primer lugar a Jesús: Contento, Señor, con Vos. Hurtado no estaba c",
    "link": "https://drive.google.com/file/d/1hb_Mi_xSYkjgUqamMuNCC7iywexJ25_9/view?usp=drive_link"
  },
  {
    "id": 85245,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 A 2011",
    "lecturas": "Mt 15, 21-28; Hb 4, 15-16",
    "resumen": "Hay gente a la que uno no le responde. En Buenos Aires, en algunas calles muy concurridas como Florida, hay mujeres que gritan lastimeramente mostrando a sus hijitos y pidiendo una limosna. La impresi",
    "link": "https://drive.google.com/file/d/12_xeIbvcHCxCaSY86_wiQSoIAEVnqJHv/view?usp=drive_link"
  },
  {
    "id": 99162,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 A 2011",
    "lecturas": "teo 14, 22-33",
    "resumen": "Lo que sentía al releer varias veces este evangelio es que es lindo entero. En otras ocasiones elijo una palabra o una sola escena, o parto de algún acontecimiento de la vida diaria que se ilumina con",
    "link": "https://drive.google.com/file/d/1-ZtylJwt2RZoG95hW2HBMu9qjam4JgUs/view?usp=drive_link"
  },
  {
    "id": 41627,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 A -San Ignacio",
    "lecturas": "Mt 14, 13-21",
    "resumen": "La imagen del corazón del Señor que se enternece al ver a toda esa gente que lo sigue, con sus enfermedades y sin pensar en la comida, me trajo a la mente la ternura de San Ignacio que se mostraba de",
    "link": "https://drive.google.com/file/d/1uQ5R1FDDxv1WR6_frX7QfAllgjBmm8Zp/view?usp=drive_link"
  },
  {
    "id": 19193,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 A 2011",
    "lecturas": "Mt 13, 44-52",
    "resumen": "Al leer estas cuatro parábolas de Jesús, lo primero que “brilló” y me gustó fue una frase que me vino a la mente: “encontrar perlas”. De eso se trata, pensé. Luego busqué los verbos del reino y salió",
    "link": "https://drive.google.com/file/d/1UcZm8zt2zF2vzO1ebOOjJy8uP_ya_7k8/view?usp=drive_link"
  },
  {
    "id": 63342,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 A 2011",
    "lecturas": "Mt 13, 24",
    "resumen": "Me llamó la atención cómo el evangelio nota el momento dramático en que aparece la cizaña: La cizaña aparece a los ojos de los servidores justo cuando la semilla buena comienza a dar fruto. Cuando bro",
    "link": "https://drive.google.com/file/d/1NojCCWt1KRS6j9k1WA0oh-sS2sXrjo6S/view?usp=drive_link"
  },
  {
    "id": 83754,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 A 2011",
    "lecturas": "Mt 13, 1-23",
    "resumen": "y Audición Releo varias veces el evangelio buscando comprender una vez más la parábola del Sembrador, y me viene al corazón una frase: los terrenos son maneras de oír. Maneras de oír y maneras de mira",
    "link": "https://drive.google.com/file/d/1jE6YPeo-MXuLj51p4gwmNs4vMBqHTfAr/view?usp=drive_link"
  },
  {
    "id": 59048,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo 14 A 2011",
    "lecturas": "Mt 11, 25-30",
    "resumen": "El evangelio de este domingo coincide con el del Sagrado Corazón de Jesús, la última fiesta del tiempo de Pascua, que se celebra en viernes para significar que lo más íntimo del Señor –su Corazón Resu",
    "link": "https://drive.google.com/file/d/1FHMzZngGBPTikNcOhoMBKWjYLrmVOdkg/view?usp=drive_link"
  },
  {
    "id": 24152,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Corpus A 2011",
    "lecturas": "uan 6, 51-58",
    "resumen": "En el taller de espiritualidad, ayer, hicimos esta",
    "link": "https://drive.google.com/file/d/1Z3ZNuwbirnqPEuDxGoK9Zz-6gdu9HF-E/view?usp=drive_link"
  },
  {
    "id": 33700,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Trinidad A 2011",
    "lecturas": "Co 13, 13; Jn 3, 16-18; Jn 2, 15",
    "resumen": "“Tanto amó Dios al mundo, que nos dio a Jesús”. Me llama la atención la palabra mundo en la fiesta de la Santísima Trinidad. Esta palabra “mundo”, lo mundano, suele tener una connotación negativa. Lo",
    "link": "https://drive.google.com/file/d/1jK7DwlpI0ucvEByH0Q1mp1OzCCTDvgA2/view?usp=drive_link"
  },
  {
    "id": 89080,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pentecostés A 2011",
    "lecturas": "Hc 2, 1; Tm 4, 3; Gal 3, 1-3",
    "resumen": "En Pentecostés, el Espíritu Vivificante se reparte y se posa sobre cada uno de los discípulos y discípulas que están con María, la Madre de Jesús, en forma de “lenguas como de fuego”. Y el milagro del",
    "link": "https://drive.google.com/file/d/19EuJ2Pe93_zXkDg9x66IecIJkQ8Ru8dd/view?usp=drive_link"
  },
  {
    "id": 82594,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ascensión A 2011",
    "lecturas": "hos 1, 1-14; teo 28, 16-20",
    "resumen": "“Queda en Soldati… tarambanas! Che, la gente de las noticias, pónganse de acuerdo sobre dónde quedan los monoblocks tomados… Para TN es Parque Avellaneda, en Radio América es alternativamente el Bajo",
    "link": "https://drive.google.com/file/d/1x6j8Mntmo4RYIdnlc8Ms2MOd3p0QhA-x/view?usp=drive_link"
  },
  {
    "id": 50395,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 6 A 2011",
    "lecturas": "Jn 14, 15-26",
    "resumen": "En su libro “Jesús de Nazareth” (el segundo tomo), el Papa Benedicto tiene una hermosa reflexión sobre “la venida de Dios en nuestro presente” en la que cita el evangelio de hoy. Evidentemente, dice,",
    "link": "https://drive.google.com/file/d/1oOfs_U2Mguypb5B4zsdWlG7Qw8I5RTRd/view?usp=drive_link"
  },
  {
    "id": 61732,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 5 A 2011",
    "lecturas": "uan 14, 1-12",
    "resumen": "La liturgia del 5º Domingo de Pascua elige este evangelio en que el Señor hace un “acercamiento” de realidades que para nosotros “quedan lejos”. En la perspectiva que hemos tomado, de la pedagogía de",
    "link": "https://drive.google.com/file/d/1UwRSE49lM10SiifFPzwO8FafelBjmP9u/view?usp=drive_link"
  },
  {
    "id": 500,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 4 A 2011",
    "lecturas": "Jn 10, 1-13; Jn 16, 12-14; Jn 12, 32",
    "resumen": "El evangelio del Buen Pastor nos conduce por un caminito de interiorización. Para reconocer a Jesús Resucitado el evangelio nos dice que tenemos que estar atentos a su Voz. La vista no es un camino di",
    "link": "https://drive.google.com/file/d/1n5ytbOAa-FWrN8rzFzvn67MDlj1wBIOW/view?usp=drive_link"
  },
  {
    "id": 26720,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 3 A 2011",
    "lecturas": "cas 24, 13-35",
    "resumen": "“Ver al Resucitado”. Ya estamos en la tercera semana de Pascua y quizás, mientras sentimos cómo vamos volviendo a la vida cotidiana que nos mete su ritmo y sus preocupacio-nes, podemos decir como los",
    "link": "https://drive.google.com/file/d/1OBq8Wwrd6CdvbhSpF2yqJSEJMK5UGxak/view?usp=drive_link"
  },
  {
    "id": 55857,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 2 A 2011",
    "lecturas": "Jn 20, 19-31",
    "resumen": "Ver a Jesús resucitado. El evangelio es el del domingo de la Misericordia que nos regaló Juan Pablo II, a quien ahora podemos invocar como amigo intercesor y no solo vivar o aplaudir. Es una gracia po",
    "link": "https://drive.google.com/file/d/1x6j8Mntmo4RYIdnlc8Ms2MOd3p0QhA-x/view?usp=drive_link"
  },
  {
    "id": 66307,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Pascua A 2011",
    "lecturas": "Mt 28, 1-10",
    "resumen": "Si leemos con ojos sencillos el relato de Mateo surge con fuerza que hay ciertas “condiciones para ver a Jesús Resucitado”. El mismo mensaje repetido dos veces, por el Ángel y por Jesús, “lo verán –me",
    "link": "https://drive.google.com/file/d/1uieIBTjI82s28ZIZE2qvOuiyY6pvgUYW/view?usp=drive_link"
  },
  {
    "id": 58689,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Viernes santo A 2011",
    "lecturas": "ros 1.146",
    "resumen": "CRUZ Y CONFESIÓN En la Pasión según San Juan Jesús confiesa ante Pilato: “Para esto he venido al mundo: para dar testimonio de la Verdad” Cuál es la verdad que Jesús confiesa? La Verdad del Amor infin",
    "link": "https://drive.google.com/file/d/1kjFQrZ0xv83ewnylH1z3ALp_CeeEha8_/view?usp=drive_link"
  },
  {
    "id": 55714,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Jueves Santo A 2011",
    "lecturas": "ros 1.146",
    "resumen": "El Lavatorio de los pies puede tomarse como una “parábola en acción”. Así como la entrada en Jerusalén es un gesto profético del Señor, también el Lavatorio puede leerse así, como una parábola que dic",
    "link": "https://drive.google.com/file/d/1lAU5yaHfcGxxE_GpXmx4cLRKA04kfaha/view?usp=drive_link"
  },
  {
    "id": 52208,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Pasión de nuestro Señor Jesucristo según san Mateo A 2011",
    "lecturas": "ros 1.146",
    "resumen": "La Pasión C. En aquel tiempo: Uno de los Doce, llamado Judas Iscariote, fue a ver a los sumos sacerdotes y les dijo: S. «¿Cuánto me darán si se lo entrego?» C. Y resolvieron darle treinta monedas de p",
    "link": "https://drive.google.com/file/d/1JDfje76UmjOEnmBuaWhC3uTTBwvpngYw/view?usp=drive_link"
  },
  {
    "id": 33836,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos A 2011",
    "lecturas": "Mt 21, 1-11",
    "resumen": "El domingo de Ramos el Señor, con su entrada en Jerusalen, realiza una acción profética. Estas acciones proféticas a la vista de todo el pueblo son como una parábola puesta en acción: tienen un mensaj",
    "link": "https://drive.google.com/file/d/14cZaXCs9mY9IbGmDYHWYjTZj2EdRtZnh/view?usp=drive_link"
  },
  {
    "id": 29619,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 5 A 2011",
    "lecturas": "uan 11, 1-45; Rm 14, 7-9",
    "resumen": "Nos vamos quedando en alguna frase que nos tocan más. “Tu amigo está enfermo”. En otra",
    "link": "https://drive.google.com/file/d/1kDDXCkLgBs5uZWPipRDPEr0NmRXC-oj1/view?usp=drive_link"
  },
  {
    "id": 50582,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 5 A (2005)",
    "lecturas": "uan\t11, 1-45",
    "resumen": "El que tú amas… Había un hombre enfermo, Lázaro de Betania, del pueblo de María y de su hermana Marta. María era la misma que derramó perfume sobre el Señor y le secó los pies con sus cabellos. Su her",
    "link": "https://drive.google.com/file/d/1QCgGH_LN3-Zi39E6CD8cTWgg_JOTjtfm/view?usp=drive_link"
  },
  {
    "id": 35086,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Cuaresma 4 A 2011",
    "lecturas": "uan 9, 1-41; Mt 9, 9; Mc 1, 16",
    "resumen": "“Jesús, al pasar, vio a un hombre ciego de nacimiento”. No fue que lo vio así nomás, como de pasadita. Si los discípulos le preguntaron por las culpas debe haber sido porque les llamó la atención la m",
    "link": "https://drive.google.com/file/d/12lpG4r4mMLgU7teom__ITndYl4gT6q0i/view?usp=drive_link"
  },
  {
    "id": 85588,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Cuaresma 4 A (2005)",
    "lecturas": "uan 9, 1-41",
    "resumen": "Ojos sin culpa Jesús, al pasar, vio a un hombre ciego de nacimiento. Sus discípulos le preguntaron: «Maestro, ¿quién ha pecado, él o sus padres, para que haya nacido ciego?» «Ni él ni sus padres han p",
    "link": "https://drive.google.com/file/d/1vdSbYp5nYB5CMI_xtS35ID0Bh7O1PlP7/view?usp=drive_link"
  },
  {
    "id": 73154,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 3 A 2011",
    "lecturas": "Jn 4, 5-42",
    "resumen": "Quizás porque últimamente ando medio apurado con la gente que se me acerca me impresiona todo el tiempo que Jesús le dedica a la Samaritana. Y me quedo con esto: a perder un rato de tiempo con estos d",
    "link": "https://drive.google.com/file/d/1heAE9__hhtX1aXigkL6JvDORI9f-P_o_/view?usp=drive_link"
  },
  {
    "id": 54254,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 2 A 2011- San José",
    "lecturas": "Mt 17, 1-9; Mt 1, 20; Jn 21, 12",
    "resumen": "Tomar consigo. “Tomó en su compañía”, dice Ignacio en los Ejercicios. Hoy la Transfiguración coincide con la fiesta de San José, de quien podemos pensar que Jesús aprendió lo que significa “tomar cons",
    "link": "https://drive.google.com/file/d/17sgo3i5xCHOAd-N_U0HZQWD0hCY32ajE/view?usp=drive_link"
  },
  {
    "id": 72480,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 2 A (2005)",
    "lecturas": "Mt 17, 1-9; Jn 3, 8; Rm 13, 13",
    "resumen": "(o “Audición”) “¡Escúchenlo!” La frase del Padre mostrando a su Hijo amado termina con este imperativo: “escúchenlo”. Escuchar a Jesús es uno de los pasos de las",
    "link": "https://drive.google.com/file/d/1R2BNoXvJbtaEuMCvhKxXeAuHgLqUyrxN/view?usp=drive_link"
  },
  {
    "id": 1667,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Cuaresma 1 A 2011",
    "lecturas": "Mt 4, 1-11; Jn 9, 35-38",
    "resumen": "¿Qué significa estar tentado? ¿Cómo me doy cuenta de que estoy siendo tentado? Partimos de la experiencia de la gracia. Lo más lindo de recibir una gracia, lo que realmente da consolación, es cuando u",
    "link": "https://drive.google.com/file/d/1ua7DU2wI0kyA5StEyoQpdpjxcMa6m_HA/view?usp=drive_link"
  },
  {
    "id": 877,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 9 A 2011",
    "lecturas": "Mt 7, 21-27; Cor 10, 4; Cor 10, 16",
    "resumen": "Al escuchar este evangelio nos viene al corazón la canción del Salmo 17: Yo te amo, Señor mi fortaleza, mi roca, mi baluarte, mi liberador. Eres la peña en que me amparo, mi escudo y mi fuerza, mi Sal",
    "link": "https://drive.google.com/file/d/1zeDh2YE9MfmRcvJMVMWFipCZZxsQRPPx/view?usp=drive_link"
  },
  {
    "id": 37626,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 8 A 2011",
    "lecturas": "Mt 6, 24-34; Jn 4, 18; Fil 4, 4-6",
    "resumen": "No se angustien por nada Nadie puede servir a dos señores, porque aborrecerá a uno y amará al otro, o bien, se interesará por el primero y menospreciará al segundo. No se puede servir a Dios y al Dine",
    "link": "https://drive.google.com/file/d/1QqF7JXNkcyg4BaNp5UNqbvXy0p3Ip7Eo/view?usp=drive_link"
  },
  {
    "id": 65359,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 7 A 2011",
    "lecturas": "Mt 6, 38-48",
    "resumen": "Dos cosas llaman mucho la atención en el evangelio de hoy: una es eso de “sean perfectos como el Padre es perfecto”; la otra, lo de “no hagan frente al malo”. Pareciera que aquí Jesús se fue al mundo",
    "link": "https://drive.google.com/file/d/1S6bvSi8orw_sEUwQXRg39T8Wga9MT-xs/view?usp=drive_link"
  },
  {
    "id": 36570,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 6 A 2011",
    "lecturas": "Mt 5, 17-37",
    "resumen": "Jesús plenifica. El Señor viene a dar plenitud a todas las cosas, a las naturales y también a las sobrenaturales, aunque parezca una redundancia. No sólo el corazón del hombre, lastimado y disminuido",
    "link": "https://drive.google.com/file/d/1L63nqL5IYz0DXX8PxJVmZviTWTy2FynG/view?usp=drive_link"
  },
  {
    "id": 52197,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 A 2011",
    "lecturas": "Mt 5, 13-16; las 7, 45",
    "resumen": "Comienzo con Don Carlos Luna. Carlitos. Hay",
    "link": "https://drive.google.com/file/d/1yz6ELDa_dzHowcwaN4JZatADoOtsXjZG/view?usp=drive_link"
  },
  {
    "id": 89745,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 A 2011",
    "lecturas": "Mt 5, 1-12",
    "resumen": "Rezando con las Bienaventuranzas me quedé con la palabra “felices”. Y la traduje por “benditos” que es una de las acepciones de “´ašrê” en hebreo (como sea que se pronuncie). “´ašrê significa “feliz”",
    "link": "https://drive.google.com/file/d/1OFha-ckEIyM4Srvp3c_AKQ4B04x1UIFS/view?usp=drive_link"
  },
  {
    "id": 49415,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 A 2011",
    "lecturas": "teo 4, 12-23",
    "resumen": "Jesús pesca con Luz: atrae porque brilla. ¿Y qué es lo que resplandece en Él? Su persona, antes que nada. Una Persona que se entrega entera en cada gesto, en cada palabra, en cada acción. Todo lo que",
    "link": "https://drive.google.com/file/d/1qxyLQUqSnNilJbnzgMt0BYoz_C7jeAho/view?usp=drive_link"
  },
  {
    "id": 22007,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 A 2011",
    "lecturas": "Jn 1, 29-34; Jn 4, 10",
    "resumen": "Hay diferencia entre “dar testimonio” y “hacer publicidad”. El Evangelio no se publicita, se testimonia. Como dijo el Papa en Aparecida: “La Iglesia no hace proselitismo, la Iglesia crece mucho más po",
    "link": "https://drive.google.com/file/d/1gbl-n2KzHJXnUE40oyapb6NlhDMYhxYG/view?usp=drive_link"
  },
  {
    "id": 66432,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Bautismo del Señor A 2011",
    "lecturas": "Mt 3, 13-17",
    "resumen": "r. “La foto” de la Epifanía es la del cuadro del Greco. Es la foto de la manifestación del Amor que Dios",
    "link": "https://drive.google.com/file/d/17_LXA7ZGJVIckZZolO9-x9ZAj_NCK6Sv/view?usp=drive_link"
  },
  {
    "id": 86378,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Santa María Madre de Dios 1º de Enero 2011",
    "lecturas": "Lc 2, 16-21; Gn 3, 5; Jn 15, 3",
    "resumen": "María es La que Piensa Bien. La invitación entonces es a sintonizar con ella. Porque pensar bien es antes que nada sintonizar: con las cosas, con la gente, con las situaciones, con el evangelio en don",
    "link": "https://drive.google.com/file/d/1IsuWCDzSfRByJT8oSfSfBYvCDmVOA4Zu/view?usp=drive_link"
  },
  {
    "id": 76284,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sagrada Familia A 2010",
    "lecturas": "Mt 2, 13-15",
    "resumen": "Rezando con el evangelio de los sueños de San José sentí el imperioso deber de compartir una responsabilidad que tenemos entre todos: la de cuidar a los Soñadores. Cuidarlos en todos los ámbitos pero",
    "link": "https://drive.google.com/file/d/1Cup_q4k-JlcUyMv8ihqJU8zgwrZJVM3g/view?usp=drive_link"
  },
  {
    "id": 12905,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad A 2010",
    "lecturas": "cas 2, 1-14",
    "resumen": "La pobreza del signo, la pobreza de la Palabra… En un mundo poblado de palabras, saturado de mensajes que intentan atrapar nuestra atención, la luz de la Navidad nos viene de una Palabrita simple, que",
    "link": "https://drive.google.com/file/d/1S9CFYeZO9xHa0vbbz8TfxK42OxqsMGF3/view?usp=drive_link"
  },
  {
    "id": 56283,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 4 A 2010",
    "lecturas": "Mt 1, 18-24",
    "resumen": "En la",
    "link": "https://drive.google.com/file/d/1Y1jEZ6njSXClqHlquGaudehFJxPMlMMR/view?usp=drive_link"
  },
  {
    "id": 60128,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 3 A 2010",
    "lecturas": "Mt 11, 2-11",
    "resumen": "Reconciliarnos con nuestra pequeñez… Elegí este título porque me parece que la mentalidad reinante nos lleva a no estar contentos con nuestra pequeñez y porque por ahí va la respuesta de Jesús a un Ju",
    "link": "https://drive.google.com/file/d/1v4Ay1OflY0GPPFqJu_dRj_8fG7fcOc_5/view?usp=drive_link"
  },
  {
    "id": 93052,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2 A 2010",
    "lecturas": "Mt 3, 1-12; ech 5, 41; Sl 34, 18",
    "resumen": "Dos imágenes para entrar en la",
    "link": "https://drive.google.com/file/d/1lVt6GGqT3SM9uCXBygvDLhUPPQ5reXBS/view?usp=drive_link"
  },
  {
    "id": 75502,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 1 A 2010",
    "lecturas": "Mt 24, 37-44",
    "resumen": "La palabra central en este evangelio es “venida”. Par-ousía en griego significa literalmente pre-sencia. Lo contrario es la au-sencia. La venida es “el hacerse presente alguien”, de manera tal que lo",
    "link": "https://drive.google.com/file/d/1NjwX13tS-4wFWABoB63ftZ36pdRYZM4O/view?usp=drive_link"
  },
  {
    "id": 33513,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2010",
    "lecturas": "ros 1.146",
    "resumen": "Tu voto: Comparte esto: Haz clic para compartir en Facebook (Se abre en una ventana nueva) Facebook Haz clic para compartir en X (Se abre en una ventana nueva) X Me gusta Cargando... Relacionado",
    "link": "https://drive.google.com/file/d/1-FPUW0n2M9Y-9c2OUKzwldT5-RfBLnhh/view?usp=drive_link"
  },
  {
    "id": 40394,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 C 2010 Cristo Rey",
    "lecturas": "Lc 23, 35-43; Hb 12, 2; Mc 15, 31",
    "resumen": "Así como en la",
    "link": "https://drive.google.com/file/d/1mWEcblVV8mNaNEyz_7XQOtrvFkxwQo8t/view?usp=drive_link"
  },
  {
    "id": 76626,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 C 2010",
    "lecturas": "Lc 21, 5-19; Ef 2, 18; Tes 3, 13",
    "resumen": "Ante los tiempos que iban a venir después de Él –los nuestros incluidos-, Jesús no quiere que nos distraigamos ni con la grandiosidad del Templo, ni con las catástrofes apocalípticas, ni con las guerr",
    "link": "https://drive.google.com/file/d/1NFhDXSlvE6vAx-o5rmNuB4QbczP7nt53/view?usp=drive_link"
  },
  {
    "id": 82039,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 C 2010",
    "lecturas": "Lc 20, 27-38",
    "resumen": "Comencé a releer las “Confesiones de un Saduceo” del año 2007 y me quedé gustándolas de nuevo, repitiendo lo que me hizo bien sin deseo de pasar a otro tema… Así que las comparto como estaban, agregan",
    "link": "https://drive.google.com/file/d/1UqzF_bL930A7UXMSn4Esr7IbSX32d55K/view?usp=drive_link"
  },
  {
    "id": 33895,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 C 2010",
    "lecturas": "Lc 19, 1-10",
    "resumen": "“Esta noche en casa” (“Home tonight”), es el título del último librito (póstumo) de Nouwen. Se trata de “Más reflexiones sobre la parábola del hijo pródigo” y son desgrabaciones hechas por amigos de c",
    "link": "https://drive.google.com/file/d/1mfFKNPjeni3d8GefxCvORihCMSHKFksJ/view?usp=drive_link"
  },
  {
    "id": 63536,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 C 2010",
    "lecturas": "Lc 18, 9-14; Gen 25, 34; Sm 17, 42",
    "resumen": "La parábola del Fariseo y el Publicano tiene algo especial. No me animo a definirlo exegéticamente pero sí a decir que me llama la atención que Lucas diga de entrada en qué se fijó Jesús para inventar",
    "link": "https://drive.google.com/file/d/1XcEA52Ly2_DRH6F-aI1INq6z92ESJysM/view?usp=drive_link"
  },
  {
    "id": 37131,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 29 C 2010",
    "lecturas": "Lc 18, 1-8; Lc 3, 21-22; Lc 5, 16",
    "resumen": "La gracia a pedir en la",
    "link": "https://drive.google.com/file/d/1g_KBJe86vh0YIAwzGqRsHlFNO4gwXDWD/view?usp=drive_link"
  },
  {
    "id": 84586,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 C 2010",
    "lecturas": "Lc 17, 11-19; Jn 15,3",
    "resumen": "Agradecer. Eucaristizar la vida. La",
    "link": "https://drive.google.com/file/d/16h2JGlen1IFRXfn-6-0qfB4QyDUwu38L/view?usp=drive_link"
  },
  {
    "id": 64553,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 27 C 2010",
    "lecturas": "Lc 17, 5-10",
    "resumen": "Escuchemos bien el pasaje tratando de comprender lo que se dice: ¡Auméntanos la fe! Esta expresión nos lleva directamente al corazón de los discípulos. Es una expresión de deseos y podemos simpatizar",
    "link": "https://drive.google.com/file/d/1gjFYTlfuZV-wcjGdVWqEg6fR16EiPDYv/view?usp=drive_link"
  },
  {
    "id": 57601,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 C 2010",
    "lecturas": "Lc 16, 19-31",
    "resumen": "Lo que más me conmovió del evangelio de hoy es que Jesús le pone nombre a Lázaro. Estuve rezando estos días con lo del nombre y esta mañana, recién, caí en la cuenta de que el de Lázaro es el único no",
    "link": "https://drive.google.com/file/d/14xaD58QlFUs6FRrip7w8jrHWV3LvPbEZ/view?usp=drive_link"
  },
  {
    "id": 42628,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 C 2010",
    "lecturas": "Lc 16, 1-13",
    "resumen": "Inmediatamente después de las parábolas de la misericordia, Jesús cuenta la parábola del administrador astuto y alaba su “viveza criolla”. Se trata de esas situaciones en las que la rapidez del estafa",
    "link": "https://drive.google.com/file/d/13vSUvzEmiEKcH4MxfcWfUx4VUHqeLfZz/view?usp=drive_link"
  },
  {
    "id": 72683,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Exaltación de la Santa Cruz",
    "lecturas": "uan 3, 13-17; Jn 12, 32; Jn 3, 14-15",
    "resumen": "rla bien. El Cardenal Martini (“El evangelio de San Juan, Meditación 12ª) dice que esto de ver la Cru",
    "link": "https://drive.google.com/file/d/1HjgO0EcScmgoW98x86PWb369yU3U3FcH/view?usp=drive_link"
  },
  {
    "id": 69253,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 C 2010",
    "lecturas": "Lc 15, 1-32; Hc 10, 44; y 11, 15",
    "resumen": "El dibujito de Fano nos muestra al Padre en el preciso instante en que sale corriendo –volando, más bien- al encuentro de su hijo que vuelve. Las palabras de Lucas no tienen desperdicio: cada una es c",
    "link": "https://drive.google.com/file/d/1a3GsE9-E_tv3W9pAT8lMRCDwJ2Ua4KVp/view?usp=drive_link"
  },
  {
    "id": 19231,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 23 C 2010",
    "lecturas": "Lc 14, 25-33",
    "resumen": "Caminaba con Jesús mucha gente, esperanzada con el Maestro, con sus milagros y enseñanzas. Y Jesús, deteniéndose, aprovecha el momento de consolación para hacernos reflexionar. La palabra clave de est",
    "link": "https://drive.google.com/file/d/1jW-5i3V9tEGfg0pLqmjmLVMqwmiVnRB8/view?usp=drive_link"
  },
  {
    "id": 64503,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 C 2010",
    "lecturas": "Lc 14, 1",
    "resumen": "¿De qué tratan las parábolas? Observamos atentamente al Señor. Por supuesto que no con el espíritu de los fariseos, que lo siguen de cerca para criticarlo, sino con espíritu de discípulos, que lo que",
    "link": "https://drive.google.com/file/d/1R2oRWhOLGb59tdpgjC-pWW4Gfom61aHm/view?usp=drive_link"
  },
  {
    "id": 88959,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 C 2010",
    "lecturas": "Lc 13, 22-30",
    "resumen": "La pregunta de aquella persona: “Señor ¿es verdad que son pocos los que se salvan?” motivó a Jesús a contar la parábola de la puerta estrecha. La pregunta parece que apunta para el lado de las estadís",
    "link": "https://drive.google.com/file/d/1OxvljxFnjLs2Hn0Vr4hLb-tzYJyazZUq/view?usp=drive_link"
  },
  {
    "id": 37609,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "San Alberto Hurtado sj",
    "lecturas": "l 6,2; Mt 11,29-30; Jn 7,38",
    "resumen": "De a poco se nos va haciendo familiar llamarlo San Alberto Hurtado. Al comienzo parecía que “el padre Hurtado” era más familiar. San Alberto  Hurtado: sin dejar de ser cercano, su figura se nos va agi",
    "link": "https://drive.google.com/file/d/14u3n0yVvKgbLWVzpQ2BzZiX0nb83xTJI/view?usp=drive_link"
  },
  {
    "id": 90163,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 C 2010 Asunción de María",
    "lecturas": "Lc 1, 39-56",
    "resumen": "En la fiesta de la Asunción, el pasaje del evangelio que nos propone la liturgia no es el de la partida de María sino el de su Visita a su prima Isabel. Desde la Anunciación, María es la mujer conecta",
    "link": "https://drive.google.com/file/d/1i6TGL-Nlq6307DDE-D-fZWAQ0WJu3tD3/view?usp=drive_link"
  },
  {
    "id": 83173,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 C 2010",
    "lecturas": "Lc 12, 32-48",
    "resumen": "Al comenzar a escribir “hagan bolsas que no envejezcan” se me vino la imagen de las “bolsas del cielo”. Quizás fue que pasaba el camión de Manliba recogiendo las bolsas de basura y se me ocurrió pensa",
    "link": "https://drive.google.com/file/d/1AVsQaJA-_NZPVAx47im3Tv3EX_xLYls3/view?usp=drive_link"
  },
  {
    "id": 47817,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 C 2010",
    "lecturas": "Lc 12, 13-21",
    "resumen": "r el evangelio de hoy me quedé con el de “cuidar la fraternidad”. Porque la parábola del Rico necio y la enseñanza de “ser rico a los ojos de Dios”,surge",
    "link": "https://drive.google.com/file/d/1ZE5TI84GNCTU8R8MnQ3ADW96g5me9zmC/view?usp=drive_link"
  },
  {
    "id": 2493,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 C 2010",
    "lecturas": "Lc 11, 1-13",
    "resumen": "El dibujo de Fano con esa María pequeñita que, con sus manitos juntas y su mirada pícara, “capta” la atención del Espíritu, me conmovió el corazón. La mente me decía que no era el dibujo que correspon",
    "link": "https://drive.google.com/file/d/1wYAMBgCE034EztvuUfdTuAB7MjG0YQF1/view?usp=drive_link"
  },
  {
    "id": 25371,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 C 2010",
    "lecturas": "Lc 10, 38-42; Jn 15, 15; Jn 11, 28",
    "resumen": "Elegir la mejor parte es escuchar la Palabra de Jesús ¿Por qué? Porque: “Todo lo que he escuchado de mi Padre Yo se los he dado a conocer (por eso los llamo amigos)” (Jn 15, 15). La Palabra de Jesús e",
    "link": "https://drive.google.com/file/d/1e6r8Wg06Cy3wTG69JAWuWdflgu6JFwxJ/view?usp=drive_link"
  },
  {
    "id": 69463,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 C 2010",
    "lecturas": "cas 10, 25-37",
    "resumen": "Volvernos cercanos es poner en obra la misericordia que el Señor nos da a sentir. San Agustín dice que “la misericordia es la compasión que experimenta nuestro corazón ante la miseria de otro, sentimi",
    "link": "https://drive.google.com/file/d/1rS-wa7dtAH3EhD4j7IHdOWXCSU5Ef_sz/view?usp=drive_link"
  },
  {
    "id": 19262,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 C 2010",
    "lecturas": "Lc 10, 1-12",
    "resumen": "r cómo el Padre se revela a los pequeñitos. Los ojos del Señor y todo su corazón e",
    "link": "https://drive.google.com/file/d/1llamCKQOvyFnsQHk2Zg_l20jZSX8lOQx/view?usp=drive_link"
  },
  {
    "id": 49027,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 13 C 2010",
    "lecturas": "Lc 9, 51-62",
    "resumen": "El evangelio de hoy, a los que tenemos la gracia de haber hecho los Ejercicios de San Ignacio en alguna de sus formas, nos evoca la Meditación del Reino. En ella, Ignacio nos presenta caballerezcament",
    "link": "https://drive.google.com/file/d/1tL5ItPmJeHcxgPV7z2Ym0x6GQEaP0TgZ/view?usp=drive_link"
  },
  {
    "id": 21445,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 12 C 2010",
    "lecturas": "Lc 9, 18-24",
    "resumen": "“No hay que darle más vueltas: sólo el que está convencido de ser conocido personalmente por Jesús, logra acceder al conocimiento de Él; y sólo el que tiene la seguridad de conocer a Jesús tal cual es",
    "link": "https://drive.google.com/file/d/1q3gg__Mb0hGa1HVayrc99Jt5kJbGGq10/view?usp=drive_link"
  },
  {
    "id": 58748,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 11 C 2010",
    "lecturas": "Lc 7, 36-8",
    "resumen": "“Le han sido perdonados sus numerosos pecados porque amó mucho. En cambio a quien poco se le perdona, poco ama» La frase de Jesús nos introduce en el abismo misterioso de su amor o nos deja afuera. No",
    "link": "https://drive.google.com/file/d/1q3gg__Mb0hGa1HVayrc99Jt5kJbGGq10/view?usp=drive_link"
  },
  {
    "id": 51529,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Corpus Christi C 2010",
    "lecturas": "Lc 9, 11",
    "resumen": "Este dibujo de Patxi, en el que Jesús aparece en una actitud servicial tan linda y nuestro corazón aparece tan corazón, me encantó porque me recordó las épocas del Cottolengo, en que servíamos la comi",
    "link": "https://drive.google.com/file/d/1_vZ3QEKqrG4_64TLgdmBBrTzatJlgCqq/view?usp=drive_link"
  },
  {
    "id": 9268,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Trinidad C 2010",
    "lecturas": "Jn 16, 12-15",
    "resumen": "Buscando imágenes de la Trinidad me encantó este dibujo y lo elegí entre todas las imágenes más sublimes y serias. Lo elegí más que todo por los colores y por la alegría que transmite el hecho de que",
    "link": "https://drive.google.com/file/d/1HmoLu2Wjp0mGPyJjYH7n2Q1qqxCN3nv-/view?usp=drive_link"
  },
  {
    "id": 91557,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pentecostés C 2010",
    "lecturas": "Jn 20, 19-23",
    "resumen": "El Espíritu es libre. Por eso, para tratar con Él, lo primero es invocarlo. En voz baja, suavemente, con insistencia de Salmo, pedirle que quiera venir: ¡Ven Espíritu Santo! Y para ello nada mejor que",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 31567,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Ascensión C 2010",
    "lecturas": "Lc 24, 46-53; Jn 14, 31",
    "resumen": "La escena de la Ascensión contiene la esencia del Evangelio. Primero, Jesús da testimonio de que en su vida se ha cumplido todo lo que estaba escrito en la Ley de Moisés, en los profetas y en los Salm",
    "link": "https://drive.google.com/file/d/1yhtA0zQHMcG_P2qfV3VBOqiLeJLn_YH-/view?usp=drive_link"
  },
  {
    "id": 18283,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 6 C 2010",
    "lecturas": "Jn 14, 22-31; Jn 20, 17",
    "resumen": "“Señor ¿qué pasa que vas a manifestarte a nosotros y no al mundo? “ Manifestarte (enfanizein) es “volverte claro”, visible, comprensible, creíble. La pregunta es de Judas Tadeo. Se ve que le impresion",
    "link": "https://drive.google.com/file/d/1prMoyZF7TCOZZazelxmTwWVcLMbohxi7/view?usp=drive_link"
  },
  {
    "id": 377,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 5 C 2010",
    "lecturas": "Jn 13, 31-35",
    "resumen": "Dice un exegeta que la Pasión, en San Juan no es, como en los demás Evangelistas, pura acción, sino Palabra, Verbo: Jesús habla con sus discípulos largamente, y pone en Palabras de Vida el sentido de",
    "link": "https://drive.google.com/file/d/1yhtA0zQHMcG_P2qfV3VBOqiLeJLn_YH-/view?usp=drive_link"
  },
  {
    "id": 12652,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 4 C 2010",
    "lecturas": "Jn 10, 27-30; Cor 8, 6",
    "resumen": "“Las ovejas, que están custodiadas en esta unidad entre Padre e Hijo, poseen la vida eterna; ningún poder terreno puede hacerles mal”, dice Balthasar. Y la pequeña condición para un Bien tan grande co",
    "link": "https://drive.google.com/file/d/1Bs3hP3KhfYQrTj-XcN6toNA3wM9g3Pei/view?usp=drive_link"
  },
  {
    "id": 91718,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 3 C 2010",
    "lecturas": "Jn 21, 1-19; Pe 1, 8; Pe 3, 8",
    "resumen": "“Simón ¿Me amas más que estos?” Jesús hace como hacemos con los chicos: “¿A quién querés más?” “¿Hasta dónde me querés?” “Hasta el cielo”. El amor expresa su profundidad en esta manera ingenua del com",
    "link": "https://drive.google.com/file/d/1LWxRoHxuTyL6Tkk7-1xMSqjzXyWWj1TA/view?usp=drive_link"
  },
  {
    "id": 68278,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 2 C 2010",
    "lecturas": "Jn 20,19-31",
    "resumen": "¿Qué evangelio, qué buena noticia quiere comunicarnos el Señor Resucitado con estos encuentros en los que, por un lado, se presenta físicamente y por otro lado, desaparece una semana; estos encuentros",
    "link": "https://drive.google.com/file/d/1yhtA0zQHMcG_P2qfV3VBOqiLeJLn_YH-/view?usp=drive_link"
  },
  {
    "id": 4731,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Vigilia Pascual C 2010",
    "lecturas": "Lc 24, 1-12; Pe 1, 3",
    "resumen": "Estaban las cosas pero no estaba el Cuerpo del Señor. Estaba la tumba, con la piedra removida, pero las mujeres no encontraron el Cuerpo del Señor Jesús. Pedro se asomó agachándose y “vio sólo las sáb",
    "link": "https://drive.google.com/file/d/1YPQMviKAzdviGS8AksZ-v-5zlqs8o_Bj/view?usp=drive_link"
  },
  {
    "id": 91126,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Viernes Santo C 2010",
    "lecturas": "Jn 20, 30-31",
    "resumen": "Antes que nada, leemos la Pasión desde el consuelo que nos da sentir en nosotros la ayuda y la comprensión del Espíritu Santo. En el texto de Juan, los recuerdos se estructuran en torno a núcleos fuer",
    "link": "https://drive.google.com/file/d/1eC9Dpl-_XCqP1w6Gimv_5bweZAUd92YX/view?usp=drive_link"
  },
  {
    "id": 1247,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Jueves Santo C 2010",
    "lecturas": "Jn 13, 1",
    "resumen": "Antes que nada, la Pasión hay que leerla desde la Resurrección. La Vida entera de Jesús está narrada desde el consuelo y la alegría que el Resucitado les comunicó a sus discípulos. Las cosas que cuent",
    "link": "https://drive.google.com/file/d/1bdEKgQcl68rWxx8n3hEWSgf9kSYCsyP5/view?usp=drive_link"
  },
  {
    "id": 11211,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos C 2010",
    "lecturas": "ros 1.146",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1M28WNIMrlEMthDPLeaGifAMK8Le_tone/view?usp=drive_link"
  },
  {
    "id": 66386,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 5 C 2010",
    "lecturas": "Jn 8, 1-11",
    "resumen": "“Mujer ¿dónde están? ¿Ninguno te ha condenado?” Con su sola presencia en medio de la situación, con el peso de su silencio, de su inclinarse y ponerse a escribir con el dedo en el suelo (¿qué habrá es",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 30599,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 4 C 2010",
    "lecturas": "Lc 15, 1-3",
    "resumen": "La oración de hoy es una",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 40446,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 3 C 2010",
    "lecturas": "Lc 13, 1-9; Lc 21, 8",
    "resumen": "Le comentan a Jesús dos noticias de aquellos tiempos que bien podrían ser de nuestra actualidad: una se refiere a asesinatos infamantes, con odio religioso, la otra noticia es de una catástrofe natura",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 41775,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 2 C 2010",
    "lecturas": "Lc 9, 28",
    "resumen": "Balthasar dice que “La transfiguración no es un anticipo de la Resurrección, en la que el Cuerpo de Jesús se verá transformado en dirección a Dios, sino, al contrario, la presencia del Dios Trinitario",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 74498,
    "ciclo": "C",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo de Cuaresma 1 C 2010",
    "lecturas": "Lc 4, 1-13; Gal 3, 11; Jn 11, 25",
    "resumen": "Pongo primero una caracterización de las tentaciones para luego centrarnos en las respuestas de Jesús. La tentación de convertir las piedras en panes nos afecta a todos en nuestra relación con los bie",
    "link": "https://drive.google.com/file/d/1aDtS5FRj-loElr9byluLtPHNm8Nxdx1m/view?usp=drive_link"
  },
  {
    "id": 78359,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 6 C 2010",
    "lecturas": "Lc 6, 17",
    "resumen": "¿Dichosos los pobres? ¿Bienaventurados los que tienen hambre, los que lloran? ¿Felices nosotros cuando nos odian, nos excluyen, nos injurian, nos persiguen por seguir a Jesús? … En estos meses de calo",
    "link": "https://drive.google.com/file/d/1e6r8Wg06Cy3wTG69JAWuWdflgu6JFwxJ/view?usp=drive_link"
  },
  {
    "id": 46113,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 C 2010",
    "lecturas": "Lc 5, 1-11",
    "resumen": "La escena de la pesca milagrosa nos resulta bien conocida, pero la solemos tener incorporada como si estuviera en todos los evangelios y la verdad es que sólo está en Lucas y en Juan. Y Lucas es el ún",
    "link": "https://drive.google.com/file/d/1rS-wa7dtAH3EhD4j7IHdOWXCSU5Ef_sz/view?usp=drive_link"
  },
  {
    "id": 98064,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 C 2010",
    "lecturas": "Lc 4, 21-30",
    "resumen": "Como en la",
    "link": "https://drive.google.com/file/d/1llamCKQOvyFnsQHk2Zg_l20jZSX8lOQx/view?usp=drive_link"
  },
  {
    "id": 43274,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 C 2010",
    "lecturas": "Lc 1, 1-4; Cor 3, 17",
    "resumen": "a Jesús que comienza a obrar en la dinámica del Espíritu Santo. Lo contemplamos sintiendo una diferencia con lo que nos pasa a nosotros, diferencia que nos muestra la singularidad de Jesú",
    "link": "https://drive.google.com/file/d/1kJkdntt5xTNrrIXGZVJbbGsKTklJKBDK/view?usp=drive_link"
  },
  {
    "id": 25025,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 C 2010",
    "lecturas": "Jn 2, 1-11",
    "resumen": "La vida del Señor tiene sus lugares privilegiados. La casa de Caná, en Galilea, es uno de ellos. Nos podemos quedar un rato tratando de imaginar la casa de Caná. Está vestida de fiesta: se celebran la",
    "link": "https://drive.google.com/file/d/1q3gg__Mb0hGa1HVayrc99Jt5kJbGGq10/view?usp=drive_link"
  },
  {
    "id": 56362,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo del Bautismo del Señor C 2010",
    "lecturas": "Lc 3, 15-16",
    "resumen": "En estas",
    "link": "https://drive.google.com/file/d/1yJI5UbBcbAT3yLW9smi9fJz1kVs_mWkM/view?usp=drive_link"
  },
  {
    "id": 34537,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Domingo 2 C de Navidad 2010",
    "lecturas": "uan 1, 1-5",
    "resumen": "Para comenzar bien el Año Nuevo –el 2010- la Iglesia nos invita a profundizar en el misterio de la Encarnación. Proclama la fiesta de María Madre de Dios y en el Prólogo de Juan nos dice que “la Palab",
    "link": "https://drive.google.com/file/d/1RCrtbz93gd7y3V7g62zjfIi97IaAXlNH/view?usp=drive_link"
  },
  {
    "id": 83311,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sagrada Familia C 2009-2010",
    "lecturas": "Lc 2, 40-52",
    "resumen": "«¿Y por qué me buscaban? ¿No sabían que Yo tenía que estar en las cosas de mi Padre?» Así responde Jesús preadolescente a la pregunta de su Madre. José con la mirada y María con palabras le reprochaba",
    "link": "https://drive.google.com/file/d/1Cup_q4k-JlcUyMv8ihqJU8zgwrZJVM3g/view?usp=drive_link"
  },
  {
    "id": 43959,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad C 2009-2010",
    "lecturas": "cas 2, 1-14",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/1hmnDtFAyNcJ_UEdkfSAkxD2PoM5pn_Dq/view?usp=drive_link"
  },
  {
    "id": 54572,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 4 C Adviento 2009-10",
    "lecturas": "Lc 1, 39-45; Jn 6, 35-45; uan 3, 8",
    "resumen": "La Visitación: “¿De dónde a mí esta alegría: que la Madre de mi Señor venga a mí?” María con Jesús en su seno visita a todos. María visita a Isabel, su prima anciana, y hace que todo el Antiguo Testam",
    "link": "https://drive.google.com/file/d/1XjSeyZyIYCkJBbJUqEnR_DojKrziBGI2/view?usp=drive_link"
  },
  {
    "id": 78581,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 3 C Adviento 2009-2010",
    "lecturas": "cas 3, 10-18; Cor 12, 7",
    "resumen": "Hemos identificado y resignificado dos “lugares de Adviento”, dos espacios o ámbitos donde Jesús viene a nosotros: el cielo y el desierto. Que Jesús viene del cielo quiere decir que viene “desde más a",
    "link": "https://drive.google.com/file/d/1zh1GL96XXQpwhz1LkTHeev1rzfyU_eFc/view?usp=drive_link"
  },
  {
    "id": 62634,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 2 C Adviento 2009-2010",
    "lecturas": "cas 3, 1-6; Jl 2, 22; Sal 65,13",
    "resumen": "En la",
    "link": "https://drive.google.com/file/d/11CAsyXG7w_aUTPuMeXOJU2HRKtG9IZ5o/view?usp=drive_link"
  },
  {
    "id": 11563,
    "ciclo": "C",
    "tiempo_liturgico": "Adviento",
    "titulo": "Domingo 1 C Adviento 2009-10",
    "lecturas": "Lc 21, 25-36",
    "resumen": "“Verán al Hijo del hombre viniendo en una nube, con potestad y gloria grande…”. “Padre, venga a nosotros tu reino. Hágase tu voluntad así en la tierra como en el cielo…” Las imágenes evangélicas nos h",
    "link": "https://drive.google.com/file/d/1ZaTe9KWCks3l6OhwwGxN0M5sA_PVFSyv/view?usp=drive_link"
  },
  {
    "id": 43345,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 34 B 2009 Cristo Rey",
    "lecturas": "Jn 18, 33-38",
    "resumen": "r a Jesucristo Rey del universo, la liturgia de este año nos sitúa en el drama de la Pasión. Entramos en la escena en el preciso instante en que Pilato está interrogando al Señor y le pr",
    "link": "https://drive.google.com/file/d/1mWEcblVV8mNaNEyz_7XQOtrvFkxwQo8t/view?usp=drive_link"
  },
  {
    "id": 25724,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 33 B 2009",
    "lecturas": "Mc 13, 24-32; Is 64, 7",
    "resumen": "El Padre. Sólo el Padre. Es la última palabra de este evangelio. Esa “Palabra de Jesús que no pasará”. Jesús grabó en el corazón de la humanidad la Palabra Padre. Y quizás lo más lindo de este evangel",
    "link": "https://drive.google.com/file/d/1jyarOr5Opk7WuvJ-XiueUicum4taXuai/view?usp=drive_link"
  },
  {
    "id": 75288,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 32 B 2009",
    "lecturas": "Mc 12, 38-44",
    "resumen": "r a la gente “cómo da limosna”. No mira simplemente, contempla con atención. Se fija en el modo como la gente echa las monedas de cobre en los tambores que hacen de alcancía",
    "link": "https://drive.google.com/file/d/1wvWCiUCA38TzNGVmO-lxqH8lHjfqtUYh/view?usp=drive_link"
  },
  {
    "id": 23909,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 31 B 2009 Fiesta de Todos los Santos",
    "lecturas": "Mt 4, 25; Rm 8, 19",
    "resumen": "¿Qué es lo que canonizamos en los santos? ¿Los grandes milagros? ¿Los hechos heroicos? ¿La vida sacrificada en bien de los demás…? Lo que canonizamos es el amor. Sólo el amor es canonizable. Después v",
    "link": "https://drive.google.com/file/d/1SRFz6E8hj6VkIPqMGWvXnF27YXnvz8g2/view?usp=drive_link"
  },
  {
    "id": 20207,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 30 B 2009",
    "lecturas": "Mc 10, 46-52",
    "resumen": "“¿Qué quieres que haga para ti?”. Es la misma pregunta que les hizo el domingo pasado a Santiago y Juan: “¿qué quieren que haga por ustedes?”. Quizás Jesús haya remarcado la pregunta haciéndoles notar",
    "link": "https://drive.google.com/file/d/1kYoZpREylyPv0hVPkqpbnEIf5G0pdxOD/view?usp=drive_link"
  },
  {
    "id": 99071,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo 29 B 2009",
    "lecturas": "Mc 10, 35-45; Mc 16, 7",
    "resumen": "“Jesús se les adelantaba” (proagon). Marcos utiliza de nuevo este verbo al final de su evangelio y lo pone en boca de los ángeles de la Resurrección que les dicen a las mujeres: “Vayan, digan a sus di",
    "link": "https://drive.google.com/file/d/1Xx_ynTAn5unVqzxiegPrStnHwV_dlnJw/view?usp=drive_link"
  },
  {
    "id": 19131,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 28 B 2009",
    "lecturas": "Mc 10, 17-31; Ecl 6, 14; Ecl 7, 18",
    "resumen": "“Ninguno es Bueno sino el único Dios”. Jesús pesca la palabra justa en torno a la cual giran los deseos del corazón del joven rico: Maestro “Bueno”. Salía Jesús para ponerse de nuevo en camino y esto",
    "link": "https://drive.google.com/file/d/1fvpCVafUimT1-JtZrXl1wGya130Tg4ZE/view?usp=drive_link"
  },
  {
    "id": 35297,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 27 B 2009",
    "lecturas": "Mc 10, 2-16",
    "resumen": "Otro “evangelio molesto” el de hoy, diría Pronzato. El tema del divorcio suscita opiniones destempladas. Basta leer un poco los comentarios al libro de Martini y Verzé, “Todos estamos en la misma barc",
    "link": "https://drive.google.com/file/d/1t27ca8hV9qn9nknE210gRTRxbA3TgTWn/view?usp=drive_link"
  },
  {
    "id": 95170,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 26 B 2009",
    "lecturas": "Mc 9, 38-48",
    "resumen": "Las últimas imágenes son duras y atrapan la atención. Llevan a discutir si Jesús habla literal o simbólicamente. Esta vez busqué bastantes explicaciones y no me terminaron de convencer. Como dice un a",
    "link": "https://drive.google.com/file/d/1VcsHZqFLTpxFekiH3gap7yKnSYX-s_Ev/view?usp=drive_link"
  },
  {
    "id": 85461,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 25 B 2009",
    "lecturas": "Mc 9, 30-37",
    "resumen": "Les enseñaba… El pasaje de hoy hace dos alusiones a la enseñanza: una explícita, “Jesús les enseñaba por el camino, sin detenerse…”, y la otra implícita, al decir “habiéndose sentado” muestra a Jesús",
    "link": "https://drive.google.com/file/d/10-VzJ7XjVNuFPtZUY7SiMR6TWP5oGvV1/view?usp=drive_link"
  },
  {
    "id": 77025,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 24 B 2009",
    "lecturas": "Mc 8, 27-35",
    "resumen": "en el camino Jesús salió con sus discípulos hacia los poblados de Cesarea de Filipo, y en el camino los interrogaba preguntándoles: ─ « ¿Quién dice la gente que soy yo?» Ellos le respondieron: ─ «Algu",
    "link": "https://drive.google.com/file/d/1MD7vIyycaifmnW_jpI4oGUDxMRPMan7J/view?usp=drive_link"
  },
  {
    "id": 36603,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 23 B 2009",
    "lecturas": "Mc 7, 31-37",
    "resumen": "Para curar al sordo que habla con dificultad ─ símbolo de Israel, pueblo duro de oídos, y de la humanidad entera, en la que nos incluimos cada uno de nosotros ─, Jesús pone todo su ser. Se lo lleva ap",
    "link": "https://drive.google.com/file/d/1Um64M7SMHXVeljbtiLP9EAihyafaqnt0/view?usp=drive_link"
  },
  {
    "id": 17919,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 22 B 2009",
    "lecturas": "Mc 7, 1-23; Sal 28, 7",
    "resumen": "El centro del evangelio de hoy está en la frase que Jesús elige de Isaías, su profeta amado: “Este pueblo me honra de labios, pero su corazón anda lejos de mí.” Es un reproche del Señor. Los fariseos",
    "link": "https://drive.google.com/file/d/1pmrctzdRUVQ_KvFGO_9vH9xUn-WX-6TF/view?usp=drive_link"
  },
  {
    "id": 66202,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 21 B 2009",
    "lecturas": "Jn 6, 60-69",
    "resumen": "Pedro y Jesús se entienden bien: se trata de “andar en compañía”, de ser amigos fieles, de adhesión de corazón a las personas. Jesús eligió a Pedro y a los discípulos como personas, no por sus cualida",
    "link": "https://drive.google.com/file/d/1pCYlRcXhPpsYGLtW6vWNownBDSxdOsBT/view?usp=drive_link"
  },
  {
    "id": 69312,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 20 B 2009",
    "lecturas": "Jn 6, 51-59",
    "resumen": "La",
    "link": "https://drive.google.com/file/d/17epULcQqkTpaRqth8GFh3r9VVV91aQwF/view?usp=drive_link"
  },
  {
    "id": 99424,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 19 B 2009",
    "lecturas": "Jn 6, 41-51; Mt 1, 20; as 54, 13",
    "resumen": "La mención de San José en medio del evangelio del Pan de vida me encanta. Es verdad que se trata sólo de una mención indirecta, que no está dicha con cariño sino con menosprecio y que más que alabar a",
    "link": "https://drive.google.com/file/d/1W3X19jsqVOPa9jnFsHY-Tf_2bOZ6m5BA/view?usp=drive_link"
  },
  {
    "id": 35847,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 18 B 2009",
    "lecturas": "Jn 6, 24-35; de 6,30",
    "resumen": "Pan del Cielo. Sabe linda la frase de Jesús. Digo que “sabe” porque no es una mera imagen que Jesús imaginó. Nosotros saboreamos ese Pan del Cielo, en la Eucaristía, cotidianamente. Aquellas primeras",
    "link": "https://drive.google.com/file/d/11ojZc0Zb--isxcxtHyB4x4ss6bKxiKAK/view?usp=drive_link"
  },
  {
    "id": 371,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 17 B 2009",
    "lecturas": "Jn 6, 1-15",
    "resumen": "Multiplicación de panes, unificación del Gozo. La escena de la multiplicación de los panes es una escena de magnífica belleza: no solo las canastas rebosan de panes, el rostro de la gente está rebosan",
    "link": "https://drive.google.com/file/d/12bfsnUrmu00XLNrNHfED_YyXY8sgmriM/view?usp=drive_link"
  },
  {
    "id": 60281,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 16 B 2009",
    "lecturas": "Mc 6, 30-34",
    "resumen": "Este evangelio es uno de mis preferidos. Se respira en él compañerismo. Y eso hace a lo más hondo que descubrió Ignacio de Jesús y por eso le puso el nombre de “Compañía de Jesús” a la manera de vivir",
    "link": "https://drive.google.com/file/d/1ivgQTS6oA6cfGapIRcMuw_4u_vIsQeUt/view?usp=drive_link"
  },
  {
    "id": 81770,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 15 B 2009",
    "lecturas": "Mc 6, 7-13; Mt 25, 40",
    "resumen": "Antes que nada una pequeña historia de San Francisco de Asís, que es quien mejor comprendió la alegría y la fuerza de conversión que tiene el evangelio desnudo. La leí hace poco y me encantó. Se cuent",
    "link": "https://drive.google.com/file/d/1qyTfTTXppvyKUPT9HnK7lxWki22Ci3dj/view?usp=drive_link"
  },
  {
    "id": 69380,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 14 B 2009",
    "lecturas": "cos 6, 1-6",
    "resumen": "Los milagros que Jesús no pudo hacer… San Ignacio consideraba que era “todo impedimento” con respecto a las maravillas que el Señor quería hacer por él y con él. Y sin embargo se sentía muy amado, es",
    "link": "https://drive.google.com/file/d/16feeGQmc1n5sl9twvYRPXlyVOY9Ty6RX/view?usp=drive_link"
  },
  {
    "id": 88856,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 13 B 2009",
    "lecturas": "Mc 5, 21-43",
    "resumen": "Gente que piensa en Jesús “…Pensaba: con sólo tocar su manto quedaré curada.” Entramos en la",
    "link": "https://drive.google.com/file/d/1Ry1SPBzv1OFxwhB02fdFC6HvNc51a0t8/view?usp=drive_link"
  },
  {
    "id": 75942,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 12 B 2009",
    "lecturas": "cos 4, 35-41; Hb 2, 15; Rm 8, 15",
    "resumen": "“Contra los miedos”. Titulé la meditación así para entrar rápido en contacto con lo decisivo. Sólo Jesús calma la tormenta de mis miedos, de los miedos que todos tenemos. Sólo Jesús es nuestra paz. Só",
    "link": "https://drive.google.com/file/d/1y59_6HwLhRIpu-QiWh8d4w7gRUIzjBSO/view?usp=drive_link"
  },
  {
    "id": 28214,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Corpus B 2009",
    "lecturas": "Mc 14, 12-26",
    "resumen": "El Corpus esconde muchas paradojas y hay que avivarse, como siempre decía Jesús con sus “el que pueda entender que entienda”, avivarse, digo para ser co-protagonistas de un banquete de convivialidad y",
    "link": "https://drive.google.com/file/d/1Q2dn6OBvanoUwJDF1mMF5fJeU0leRU3B/view?usp=drive_link"
  },
  {
    "id": 43282,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Santísima Trinidad B 2009",
    "lecturas": "Mt 28, 16-20; Hc 17, 28",
    "resumen": "Bautizar, dice el diccionario bíblico, es sumergir, empapar, mojar… Lo sabemos. Pero me sorprendió ver citado también a Platón que usa el término en el Eutidemo para expresar que uno “está abrumado co",
    "link": "https://drive.google.com/file/d/1QZXWNPMRQgygGsVJ9n5lWIPLP4fEjncn/view?usp=drive_link"
  },
  {
    "id": 37558,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pentecostés B 2009",
    "lecturas": "Cor 12, 3; Jn 20, 19-23; Hc 2, 1",
    "resumen": "En la liturgia de las horas de Pentecostés hay un hermoso pasaje de San Ireneo sobre el Envío del Espíritu Santo, en el que lo compara con el Hospedero a quien el Buen Samaritano le confió al hombre h",
    "link": "https://drive.google.com/file/d/1rACurCf90ua2eH3piFlb7jwVa7z-T5_e/view?usp=drive_link"
  },
  {
    "id": 3084,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de la Ascensión B 2009",
    "lecturas": "Mc 16, 15-20",
    "resumen": "“Anuncien la buena nueva a toda creatura ”, les mandó Jesús; y ellos partiendo de allí “predicaron por todas partes ”. El Señor nos encargó la misión de evangelizar a toda creatura, de predicar por to",
    "link": "https://drive.google.com/file/d/1UBWbj6LUIDFpC0p3NJimRsvqC3iVAntv/view?usp=drive_link"
  },
  {
    "id": 31788,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 6 B 2009",
    "lecturas": "Jn 15, 9-17; Hc 2, 44-47",
    "resumen": "rlo saboreando la Eucaristía. Mientras uno comulga espiritualmente, recordando su última comunión en la Misa, y siente la paz de tener esos instantes el",
    "link": "https://drive.google.com/file/d/1OspyYNWZgD6kaWXABQXDJcUbj4WNcqx6/view?usp=drive_link"
  },
  {
    "id": 81668,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 5 B 2009",
    "lecturas": "Jn 15, 1-8; Mt 15, 13",
    "resumen": "La humanidad es una vid. No somos seres aislados. La humanidad es una viña plantada para dar uvas dulces que por la pandemia del virus del pecado comenzó a dar uvas agrias por todos lados. Pero somos",
    "link": "https://drive.google.com/file/d/1Ehkhn_huygfVk_7MD3Ob6FlaygCJFSUk/view?usp=drive_link"
  },
  {
    "id": 31673,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 4 B 2009",
    "lecturas": "Jn 10, 11-18",
    "resumen": "El párroco de la calle de la muerte , Jorge Fernández Díaz , LA NACION, Jueves 23 de abril de 2009… “Con voz pausada, suave, serena , el padre ‘Pepe’ anunció que no piensa salir de la Villa 21. ‘Nos d",
    "link": "https://drive.google.com/file/d/1uEfpVBiWQIZcXezy6qPx8BDzxweQ8169/view?usp=drive_link"
  },
  {
    "id": 67865,
    "ciclo": "C",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 3 B 2009",
    "lecturas": "Lc 24, 35-48",
    "resumen": "al Señor Resucitado que viene a trayendo la paz a sus amigos. Convengamos que la",
    "link": "https://drive.google.com/file/d/1EOiWKUcLgbXxUiHK4Eac9HuPAgCQ80R0/view?usp=drive_link"
  },
  {
    "id": 33000,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Domingo de Pascua 2 B 2009",
    "lecturas": "Jn 20, 19-29; Ef 2, 14",
    "resumen": "la paz que el Señor nos da, pidiendo la gracia de gustar su dulzura y suavidad. En el evangelio de hoy el Señor comunica su paz personal a su comunidad para que luego difundan esta paz a",
    "link": "https://drive.google.com/file/d/1UBWbj6LUIDFpC0p3NJimRsvqC3iVAntv/view?usp=drive_link"
  },
  {
    "id": 52175,
    "ciclo": "B",
    "tiempo_liturgico": "Pascua",
    "titulo": "Las Discípulas",
    "lecturas": "Lc 24, 23; Mc 15, 41",
    "resumen": "nació poniendo el título. Había puesto “insignificancia y resurrección” y estaba escribiendo acerca de la importancia que la liturgia da a esta primera aparición de Jesús a las santas mujeres… Insigni",
    "link": "https://drive.google.com/file/d/1f-AWqJ171vqvFkzXjmXCM36Cg0_5TeBh/view?usp=drive_link"
  },
  {
    "id": 80496,
    "ciclo": "A",
    "tiempo_liturgico": "Pascua",
    "titulo": "Triduo Pascual B 2009",
    "lecturas": "Fil 3, 13-17; Jn 13, 1; Jn 15, 13-16",
    "resumen": "Ponemos entero el Evangelio del lavatorio de los pies porque incluye en sí toda la pasión y la resurrección del Señor. La dicha de la resurrección perfuma ya el gesto de cariñoso abajamiento de Cristo",
    "link": "https://drive.google.com/file/d/1Ia7pUbQg_e8Mn6GDDVCIFBhbR0J2maba/view?usp=drive_link"
  },
  {
    "id": 39280,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo de Ramos B 2009",
    "lecturas": "Mc 11, 7-11; Mc 14, 3; ant 1, 2-3",
    "resumen": "Jesús entra en la pasión “perfumado” “Trajeron el burrito a Jesús y le echaron encima sus mantos y montó en él… La gante aclamaba Hosanna! Bendito el que viene en el nombre del Señor!… Y entró Jesús e",
    "link": "https://drive.google.com/file/d/1jiIGiX9hMDiYKsUBSBSA2myOPUk56ofd/view?usp=drive_link"
  },
  {
    "id": 39335,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 5 B Cuaresma 2009",
    "lecturas": "Jn 12, 20-33",
    "resumen": "Estos pasajes de Juan son fáciles y difíciles. Fáciles porque uno va leyendo y encuentra frases muy profundas de Jesús que hacen bien. Algunas son duras, ─ como la del grano de trigo que debe morir pa",
    "link": "https://drive.google.com/file/d/1X82PDjB0om7vdWjOS8HhOFfnACp6ruCw/view?usp=drive_link"
  },
  {
    "id": 6057,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 4 B Cuaresma 2009",
    "lecturas": "uan 3, 14-21",
    "resumen": "hoy a Nicodemo el “discípulo oculto de Jesús”, el que lo visita de noche y no se adhiere públicamente al Señor hasta después de su muerte en la Cruz. Nicodemo tiene un corazón de esos “qu",
    "link": "https://drive.google.com/file/d/14AN6gny-YKyR_VVYaHP5DmBrbJWVA-a1/view?usp=drive_link"
  },
  {
    "id": 90709,
    "ciclo": "A",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 3 B Cuaresma 2009",
    "lecturas": "Sal 69, 10; uan 2, 13-25",
    "resumen": "San Juan de la Cruz, en su “Subida al Monte Carmelo” tiene una serie de consejos para que: El alma espiritual encuentre su quietud y descanso, de manera tal que, no codiciando nada, nada le fatigue ha",
    "link": "https://drive.google.com/file/d/1OciphvGHKym50zPpeu7s8kvNyY8sXS0H/view?usp=drive_link"
  },
  {
    "id": 97215,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 2º B Cuaresma 2009",
    "lecturas": "Mc 9, 2-10; Rm 13, 14; nes 8, 12",
    "resumen": "También nosotros nos preguntamos (o más bien “tememos preguntarnos”) que significará “resucitar de entre los muertos”. La verdad es que no lo sabemos ni podremos entenderlo nunca si pretendemos saberl",
    "link": "https://drive.google.com/file/d/1SaaGVrl6_iesH_-IUi4Ew1dteRkBp_gF/view?usp=drive_link"
  },
  {
    "id": 17696,
    "ciclo": "B",
    "tiempo_liturgico": "Cuaresma",
    "titulo": "Domingo 1º B Cuaresma 2009",
    "lecturas": "Mc 1, 12-15; Os 2, 16",
    "resumen": "El Espíritu condujo a Jesús al desierto. Tras haber escuchado en su corazón la voz de su Padre diciéndole “Tú eres mi Hijo amado, el predilecto”, Jesús necesita estar solo y en silencio. Necesita esta",
    "link": "https://drive.google.com/file/d/1b1NZ73ZYTMcDsA9aNpkiEj7AeJbm8ij0/view?usp=drive_link"
  },
  {
    "id": 8304,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 7 B 2009",
    "lecturas": "Mc 2, 1-12; Os 2, 16; Pe 3, 3-4",
    "resumen": "El corazón es el tema del evangelio de hoy. El corazón y las palabras que llegan al corazón. “¿Qué es más fácil decir?” es la palabra clave sobre la que Jesús hace girar la escena. ¿Qué es más fácil,",
    "link": "https://drive.google.com/file/d/1a9JJVxLbvOM7wFCOz102wds-TkH4P8T8/view?usp=drive_link"
  },
  {
    "id": 72717,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 6 B 2009",
    "lecturas": "Mc 1, 40-45; Mc 14, 36; Mt 9, 13",
    "resumen": "“Si quisieras puedes limpiarme”. Y conmovido de compasión, extendiendo su mano lo tocó y le dice: “Quiero, límpiate”. Miramos al leproso. Se ha arrojado literalmente a los pies de Jesús, se le ha acer",
    "link": "https://drive.google.com/file/d/1QVLeyFdS8T9OOJCwCVkweDrsePz4Un41/view?usp=drive_link"
  },
  {
    "id": 96339,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 5 B 2009",
    "lecturas": "Mc 1, 29-39; Cor 9, 16-23",
    "resumen": "“Anunciar gratuitamente el evangelio… ─ dice hoy Pablo en la segunda lectura ─: esa es la misión que se me ha confiado”. “Predicar ─ dice Jesús ─ : para eso he salido” del Padre y he bajado del Cielo.",
    "link": "https://drive.google.com/file/d/1amLE1QY5EeQN0QX2pJu9cpGKBrDAbJnL/view?usp=drive_link"
  },
  {
    "id": 21553,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 4 B 2009",
    "lecturas": "cos 1, 21-28",
    "resumen": "¡La autoridad de la enseñanza de Jesús, de su doctrina (didajé): la autoridad de su Palabra! La gente, al escuchar a Jesús enseñando, quedó espantada por su autoridad (exousía = potestad para ejercer",
    "link": "https://drive.google.com/file/d/1JHi81ZPNjYcDgvV5Bv5XqdsZNMcAaCQM/view?usp=drive_link"
  },
  {
    "id": 46529,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 3 B 2009",
    "lecturas": "Mc 1, 14-20; sis 1, 1; Ap 22, 20",
    "resumen": "“Se ha cumplido el tiempo y está pleno…” La Palabra de Jesús es una Palabra que no solo dice cosas nuevas, hermosas y verdaderas, sino que, al mismo tiempo que dice cosas, crea también un Tiempo espec",
    "link": "https://drive.google.com/file/d/1JQl_kJuTy8wuRYaAbSEPyCMHmUF1jZ8W/view?usp=drive_link"
  },
  {
    "id": 47958,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo 2 B 2009",
    "lecturas": "Jn 1, 35-42; Jn 1, 38; Jn 1, 39",
    "resumen": "“Comienza el tiempo de los llamados”… Recordaba algunos puntos de este evangelio que hace tres años me hicieron mucho bien y los repetí ignacianamente, gustando la gracia de la interpretación de Marti",
    "link": "https://drive.google.com/file/d/1GoPXuiLTD_8Nb71xQK-vbGektL1v7om8/view?usp=drive_link"
  },
  {
    "id": 94754,
    "ciclo": "B",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Domingo del Bautismo del Señor B 2009",
    "lecturas": "Mc 1, 7-11; Gal 3, 27; Jn 5, 1",
    "resumen": "Si dejamos que el cuadro del Greco atraiga nuestra mirada con sus formas y colores, la vista recibe el impacto de la blancura del Espíritu que baja del Padre -como las gotas de Agua que derrama Juan-",
    "link": "https://drive.google.com/file/d/1RNfb1iLWhOITPtrJntgvKyEuUp_bV5HD/view?usp=drive_link"
  },
  {
    "id": 71078,
    "ciclo": "C",
    "tiempo_liturgico": "Navidad",
    "titulo": "Domingo 2 Navidad 2009",
    "lecturas": "uan 1, 1-5; Lc 12, 13; Cor 2, 12",
    "resumen": "Con el prólogo de Juan, volvemos a poner la mirada sobre Jesús –sobre Jesús Niño en este tiempo de Navidad- como Palabra. ¿Qué quiere comunicarnos Juan con esta",
    "link": "https://drive.google.com/file/d/1nz3bhJb9vzudaiVfXcLVhq7Va8NPCbmp/view?usp=drive_link"
  },
  {
    "id": 15416,
    "ciclo": "A",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Santa María Madre de Dios B 2009",
    "lecturas": "cas 2, 16-21; Mt 5, 9; cas 2, 16-21",
    "resumen": "La Iglesia comienza el año con la misa de la Madre de Dios, pidiendo la paz. “Felices los que pacifican porque serán llamados ‘hijos de Dios’” (Mt 5, 9). Hijo de Dios es el nombre de Jesús. Esta biena",
    "link": "https://drive.google.com/file/d/1CSTSqw4MD3BoSEKWByK-olqPLxsThTYW/view?usp=drive_link"
  },
  {
    "id": 1208,
    "ciclo": "C",
    "tiempo_liturgico": "Tiempo Ordinario",
    "titulo": "Sagrada Familia 2008",
    "lecturas": "Lc 2, 22-40",
    "resumen": "Lucas narra magistralmente la historia de un Encuentro-coincidencia: el de cin-co corazones en un momento de la vida. Tres escenas se desarrollan simultá-neamente y coinciden en un momento de gracia (",
    "link": "https://drive.google.com/file/d/1Z4OMny-0YMKLVE56etK8wMc98qmu-Sru/view?usp=drive_link"
  },
  {
    "id": 19977,
    "ciclo": "A",
    "tiempo_liturgico": "Navidad",
    "titulo": "Navidad 2008-9",
    "lecturas": "Jn 1, 1",
    "resumen": "En medio de las celebraciones del Hogar –las de la mañana, con cantos y humildes regalos para nuestros comensales, junto con una rica comida, y las de la tarde, con la Eucaristía de Nochebuena, junto",
    "link": "https://drive.google.com/file/d/1cVoiivRFBGq4jLqpv00gtbHbKe6x7vdc/view?usp=drive_link"
  },
  {
    "id": 32779,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 4 B 2008-9",
    "lecturas": "cas 1, 26-38; Jn 12, 20-21",
    "resumen": "¡Alégrate!, llena de gracia, el Señor está contigo! Palabras del Angel Gabriel, Palabras para andar alegres… Palabras que despiertan a la Fe el oído de María y con el de ella el nuestro. “Yo soy la se",
    "link": "https://drive.google.com/file/d/1_iVDYaI_6lwE-YYZrzc2MHNxW1EmOvuc/view?usp=drive_link"
  },
  {
    "id": 9027,
    "ciclo": "A",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 3 B 2008-9",
    "lecturas": "Flp 4, 4-5; Jn 1, 6-8; Tes 5, 16-24",
    "resumen": "El tercer domingo de Adviento se llama domingo “gaudete” en latín, y podríamos traducirlo: “domingo para andar alegres”. Toma el nombre de la primera palabra de la liturgia Eucarística: “Alégrense sie",
    "link": "https://drive.google.com/file/d/1o7a4jGVeggpjirE-0K2McqkmliuDTVOn/view?usp=drive_link"
  },
  {
    "id": 96895,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 2 B 2008-9",
    "lecturas": "Mc 1, 1-8; Col 1, 15",
    "resumen": "Es solemne el comienzo del evangelio de Marcos. Al escuchar “principio del Evangelio de Jesús, el Mesías-Cristo, el Hijo de Dios, nos disponemos a leer lo que sigue en el libro. Pero “Evangelio” no es",
    "link": "https://drive.google.com/file/d/1MWK1OQ8LgPDs1SPAqA59ExCPIy4PYZxp/view?usp=drive_link"
  },
  {
    "id": 17218,
    "ciclo": "B",
    "tiempo_liturgico": "Adviento",
    "titulo": "Adviento 1 B 2008-9",
    "lecturas": "Mc 13, 33-37; Ef 6, 12-20; Lc 24, 36",
    "resumen": "Comienza el Adviento con un sonido de campanilla, cuya música –como en los retiros- nos invita a despertar. ¡Estén despiertos y vigilen! Estén atentos!, ¡Velen!, ¡Cuiden! Miren que no saben cuando vie",
    "link": "https://drive.google.com/file/d/1oqiQJoKxOh3cGI3bH56XgQmEp-Ap79Sj/view?usp=drive_link"
  }
];

export type Season = 'Advent' | 'Christmas' | 'Lent' | 'Easter' | 'Ordinary Time' | 'Triduum'

export interface SeasonInfo {
  season: Season
  start: Date
  end: Date
  keyDates: {
    easter: Date
    ashWednesday: Date
    pentecost: Date
  }
}

export interface Contemplacion {
  id: number
  ciclo: 'A' | 'B' | 'C'
  tiempo_liturgico: string
  titulo: string
  lecturas: string
  resumen: string
  link: string
}

export interface ContemplacionesSemana {
  fecha: Date
  temporada: Season
  ciclo: 'A' | 'B' | 'C'
  contemplaciones: Contemplacion[]
}

/**
 * Calcula la fecha de Pascua (domingo de Pascua) para un año dado usando el algoritmo de Meeus/Jones.
 */
export function easterDate(year: number): Date {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31) // 3=March, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Date.UTC(year, month - 1, day))
}

export function addDays(d: Date, days: number): Date {
  const nd = new Date(d.getTime())
  nd.setUTCDate(nd.getUTCDate() + days)
  return nd
}

export function subDays(d: Date, days: number): Date {
  return addDays(d, -days)
}

/**
 * Calcula el inicio del Adviento para un año calendario: cuarto domingo antes de Navidad (25 de diciembre).
 */
export function adventStart(year: number): Date {
  // Start from Dec 25
  const dec25 = new Date(Date.UTC(year, 11, 25))
  // find the fourth Sunday before Dec 25: go back to the nearest Sunday on or before Dec 25, then go back 3 more weeks
  const dow = dec25.getUTCDay() // 0=Sun
  const daysToLastSunday = dow // how many days to subtract to reach Sunday
  const lastSunday = subDays(dec25, daysToLastSunday)
  const fourthSundayBefore = subDays(lastSunday, 21)
  return fourthSundayBefore
}

/**
 * Calcula el Miércoles de Ceniza (46 días antes de Pascua)
 */
export function ashWednesday(year: number): Date {
  const e = easterDate(year)
  return subDays(e, 46)
}

export function pentecost(year: number): Date {
  const e = easterDate(year)
  return addDays(e, 49)
}

/**
 * Determina el año litúrgico para una fecha determinada.
 * El año litúrgico comienza el primer día del Adviento, que es el cuarto domingo antes de Navidad.
 */
export function liturgicalYearForDate(date: Date): number {
  const year = date.getUTCFullYear()
  const advStart = adventStart(year)
  if (date >= advStart) return year + 1
  return year
}

/**
 * Devuelve información de la temporada litúrgica para una fecha dada.
 */
export function getLiturgicalSeason(date: Date): SeasonInfo {
  // Work in UTC dates for consistency
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const ly = liturgicalYearForDate(d)
  const easter = easterDate(ly)
  const ash = ashWednesday(ly)
  const pent = pentecost(ly)

  const advStart = adventStart(ly - 1) // Advent that begins the liturgical year (usually in previous calendar year)
  const christmasStart = new Date(Date.UTC(ly - 1, 11, 25)) // Dec 25 of previous calendar year
  const christmasEnd = new Date(Date.UTC(ly, 0, 13)) // conservatively to Jan 13

  // Lent: Ash Wednesday .. Holy Saturday (day before Easter)
  const lentStart = ash
  const lentEnd = subDays(easter, 1)

  const triduumStart = subDays(easter, 3)
  const triduumEnd = subDays(easter, 1)

  // Easter season: Easter Sunday .. Pentecost
  const easterStart = easter
  const easterEnd = pent

  // Ordinary Time: from after Baptism of the Lord (approx Jan 13) to Ash Wednesday, and from Pentecost+1 to AdventStart
  const ordinary1Start = christmasEnd
  const ordinary1End = subDays(ash, 1)
  const ordinary2Start = addDays(pent, 1)
  const ordinary2End = subDays(adventStart(ly), 1)

  if (d >= advStart && d < christmasStart) {
    return { season: 'Advent', start: advStart, end: subDays(christmasStart, 1), keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= christmasStart && d <= christmasEnd) {
    return { season: 'Christmas', start: christmasStart, end: christmasEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= lentStart && d <= lentEnd) {
    return { season: 'Lent', start: lentStart, end: lentEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= triduumStart && d <= triduumEnd) {
    return { season: 'Triduum', start: triduumStart, end: triduumEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  if (d >= easterStart && d <= easterEnd) {
    return { season: 'Easter', start: easterStart, end: easterEnd, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }
  // Ordinary time (either before Lent or after Pentecost)
  if ((d >= ordinary1Start && d <= ordinary1End) || (d >= ordinary2Start && d <= ordinary2End)) {
    // compute overall start/end for returned season
    const start = d <= ordinary1End ? ordinary1Start : ordinary2Start
    const end = d <= ordinary1End ? ordinary1End : ordinary2End
    return { season: 'Ordinary Time', start, end, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
  }

  // Fallback: return Ordinary Time
  return { season: 'Ordinary Time', start: ordinary1Start, end: ordinary2End, keyDates: { easter, ashWednesday: ash, pentecost: pent } }
}

/**
 * Obtiene el ciclo litúrgico (A, B, C) para un año litúrgico dado
 */
export function getCicloLiturgico(year: number): 'A' | 'B' | 'C' {
  const cycles = ['C', 'A', 'B'] as const
  return cycles[year % 3]
}

/**
 * Mapea las temporadas internas a los nombres usados en el JSON de contemplaciones
 */
function mapSeasonToSpanish(season: Season): string {
  const mapping: Record<Season, string> = {
    'Advent': 'Adviento',
    'Christmas': 'Navidad', 
    'Lent': 'Cuaresma',
    'Easter': 'Pascua',
    'Ordinary Time': 'Tiempo Ordinario',
    'Triduum': 'Triduo'
  }
  return mapping[season]
}

/**
 * Obtiene las contemplaciones para la semana actual
 * Genera contemplaciones para cada día de la semana usando getContemplacionesDia
 */
export function getContemplacionesSemana(fecha?: Date): ContemplacionesSemana {
  const hoy = fecha || new Date()
  const seasonInfo = getLiturgicalSeason(hoy)
  const year = liturgicalYearForDate(hoy)
  const ciclo = getCicloLiturgico(year)
  
  // Calcular el inicio de la semana (domingo)
  const inicioSemana = new Date(hoy)
  const diaActual = inicioSemana.getDay() // 0 = domingo, 1 = lunes, etc.
  inicioSemana.setDate(inicioSemana.getDate() - diaActual)
  
  // Generar contemplaciones para cada día de la semana (7 días)
  const contemplacionesSemana: Contemplacion[] = []
  
  for (let i = 0; i < 7; i++) {
    const fechaDia = new Date(inicioSemana)
    fechaDia.setDate(inicioSemana.getDate() + i)
    
    const contemplacionesDia = getContemplacionesDia(fechaDia)
    if (contemplacionesDia !== null) {
      contemplacionesSemana.push(...contemplacionesDia)
    }
  }
  
  return {
    fecha: hoy,
    temporada: seasonInfo.season,
    ciclo,
    contemplaciones: contemplacionesSemana
  }
}

/**
 * Obtiene las contemplaciones para un día específico
 * Busca contemplaciones que coincidan con la temporada litúrgica y ciclo del día dado
 * Retorna null si no se encuentran contemplaciones
 */
export function getContemplacionesDia(fecha: Date): Contemplacion[] | null {
  const seasonInfo = getLiturgicalSeason(fecha)
  const year = liturgicalYearForDate(fecha)
  const ciclo = getCicloLiturgico(year)
  const temporadaEspanol = mapSeasonToSpanish(seasonInfo.season)

  // Filtrar contemplaciones por temporada y ciclo
  let contemplaciones = (contemplacionesData as Contemplacion[]).filter(cont => {
    return cont.tiempo_liturgico === temporadaEspanol && cont.ciclo === ciclo
  })

  // Si no hay contemplaciones para esta temporada específica, buscar solo por ciclo
  if (contemplaciones.length === 0) {
    contemplaciones = (contemplacionesData as Contemplacion[]).filter(cont => {
      return cont.ciclo === ciclo
    })
  }

  // Retornar las contemplaciones encontradas o null si no hay ninguna
  return contemplaciones.length > 0 ? contemplaciones : null
}
