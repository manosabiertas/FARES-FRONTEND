import { traerContemplacionesSemanaPorIds } from '../../lib/traerContemplacionesSemanaPorIds';

const fiestas = {
  '1-1': [11221, 37297, 86378],
  '6-24': [78774],
  '8-15': [59118],
  '11-1': [58851],
  '11-9': [68580],
  '12-8': [66726, 17615],
  '12-25': [98245, 33270, 49797, 12905],
};
const years = [2025, 2026];

describe('Fiestas fijas - ids presentes en semana', () => {
  for (const year of years) {
    for (const key in fiestas) {
      const [m, d] = key.split('-');
      const month = parseInt(m, 10) - 1;
      const day = parseInt(d, 10);
      const fecha = new Date(Date.UTC(year, month, day));
      const idsSemana = traerContemplacionesSemanaPorIds(fecha);
      for (const id of fiestas[key as keyof typeof fiestas]) {
        it(`El id ${id} está presente en la semana de la fiesta fija ${key} (${year})`, () => {
          expect(idsSemana).toContain(id);
        });
      }
    }
  }
});
