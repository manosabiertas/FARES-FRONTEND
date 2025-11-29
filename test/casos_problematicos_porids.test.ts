import { traerContemplacionesSemana } from '../lib/traerContemplacionesSemanaPorIds';
import contemplacionesData from '../lib/contemplaciones.json';

describe('Casos problemáticos de contemplaciones por semana (porIds)', () => {
  it('23-11-2025: No debe traer "Parábola de un Dios velocísimo, que socorre y hace justicia en abrires y cerrares de ojos (29 C 2016)"', () => {
    const fecha = new Date(Date.UTC(2025, 10, 23)); // 23 Nov 2025
    const semana = traerContemplacionesSemana(fecha);
    const titulos = semana.contemplaciones.map(c => c.titulo);
    expect(titulos).not.toContain("Parábola de un Dios velocísimo, que socorre y hace justicia en abrires y cerrares de ojos (29 C 2016)");
  });

  it('30-11-2025: No debe traer "La Inmaculada que “desata los nudos” y nos ayuda a tejer una vida más linda, más unida a los demás (Adviento 2 A 2019)”', () => {
    const fecha = new Date(Date.UTC(2025, 10, 30)); // 30 Nov 2025
    const semana = traerContemplacionesSemana(fecha);
    const titulos = semana.contemplaciones.map(c => c.titulo);
    expect(titulos).not.toContain("La Inmaculada que “desata los nudos” y nos ayuda a tejer una vida más linda, más unida a los demás (Adviento 2 A 2019)”");
  });

  it('7-12-2025: No debe traer "A qué tenemos que estar despiertos? Qué es lo que nos tiene que desvelar? (1 B Adviento 2017)"', () => {
    const fecha = new Date(Date.UTC(2025, 11, 7)); // 7 Dic 2025
    const semana = traerContemplacionesSemana(fecha);
    const titulos = semana.contemplaciones.map(c => c.titulo);
    expect(titulos).not.toContain("A qué tenemos que estar despiertos? Qué es lo que nos tiene que desvelar? (1 B Adviento 2017)");
  });
});
