import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';
import contemplacionesData from '../../lib/contemplaciones.json';

type Caso = {
  fecha: Date;
  evangelio: string;
  titulosCorrectos: string[];
};

const casos: Caso[] = [
  {
    fecha: new Date(Date.UTC(2026, 0, 18)), // 18 enero 2026
    evangelio: 'Juan 1, 29-34',
    titulosCorrectos: [
      '“No lo conocía, pero…” Gracias a que Juan se queda en la orilla del Reino podemos vislumbrar en alguna medida la magnitud del don y de las gracias que en Jesús hemos recibido en pie de igualdad con todos los pueblos (2 A 2020)',
      'Nunca tenemos que pensar al Espíritu Santo solo, aislado. Es el Espíritu que descendió sobre Jesús (2 A 2017)',
      'Domingo 2 A 2014',
      'Domingo 2 A 2011',
    ],
  },
  {
    fecha: new Date(Date.UTC(2026, 0, 25)), // 25 enero 2026
    evangelio: 'Mateo 4, 12-23',
    titulosCorrectos: [
      'El desborde de la itinerancia, una imagen de Jesús que se camina todo (3 A 2020)',
      'El Reino está cerca de los lugares donde se mezclan –donde se amigan- las culturas (3 A 2017)',
      'Domingo 3 A 2014',
      'Domingo 3 A 2011',
    ],
  },
  {
    fecha: new Date(Date.UTC(2026, 1, 1)), // 1 febrero 2026
    evangelio: 'Mateo 5, 1-12',
    titulosCorrectos: [
      'Las Bienaventuranzas: 9 bendiciones consoladoras de Jesús que forman al Pueblo fiel de Dios (4 A 2017)',
      'Domingo 4 A 2014',
      'Domingo 4 A 2011',
    ],
  },
  {
    fecha: new Date(Date.UTC(2026, 1, 8)), // 8 febrero 2026
    evangelio: 'Mateo 5, 13-16',
    titulosCorrectos: [
      'La parábola del Cocinero y la sal que perdió el sabor y la parábola del que es Luz y las lamparitas que lo hacen resplandecer (5 A 2020)',
      'Domingo 5 A 2014',
      'Domingo 5 A 2011',
    ],
  },
  {
    fecha: new Date(Date.UTC(2026, 1, 15)), // 15 febrero 2026
    evangelio: 'Mateo 5, 17-37',
    titulosCorrectos: [
      'Hay conflictos que no se resuelven por disciplinamiento sino por desborde de amor y misericordia (6 A 2020)',
      'El Espíritu es como las madres, que nos hacen gustar la dulzura interior de las leyes de la casa (6 A 2017)',
      'Domingo 6 A 2011',
    ],
  },
  // El caso del 22 de febrero de 2026 no tiene títulos correctos especificados
];

describe('Contemplaciones correctas por evangelio en semanas específicas (porIds)', () => {
  casos.forEach(({ fecha, evangelio, titulosCorrectos }) => {
    it(`Semana de ${fecha.toISOString().slice(0, 10)}: solo deben estar las contemplaciones correctas para el evangelio ${evangelio}`, () => {
      const ids = traerContemplacionesSemanaPorIds(fecha);
      const titulos = ids.map(id => {
        const c = contemplacionesData.find((x: any) => x.id === id);
        return c ? c.titulo : '';
      });
      // Solo deben estar los títulos correctos
      titulosCorrectos.forEach(titulo => {
        expect(titulos).toContain(titulo);
      });
      // No debe haber otros títulos
      const otros = titulos.filter(t => !titulosCorrectos.includes(t));
      expect(otros).toEqual([]);
    });
  });
});
