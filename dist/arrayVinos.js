import { Vino } from "./classes/vino.js";
import { Maridaje } from "./classes/maridaje.js";
import { Varietal } from "./classes/varietal.js";
import { TipoUva } from "./classes/tipoUva.js";
import { Resena } from "./classes/resena.js";
import { Bodega } from "./classes/bodega.js";
import { RegionVitivinicola } from "./classes/regionVitivinicola.js";
const maridaje_uno = new Maridaje("Un acompañamiento clásico con una variedad de quesos y embutidos.", "Quesos y Embutidos");
const maridaje_dos = new Maridaje("Un acompañamiento clásico ", "Quesos ");
const varietal_uno = new Varietal("rico", 40, new TipoUva("Uva rica", "Uva"));
const varietal_dos = new Varietal("rico", 40, new TipoUva("Uva rica", "Uva"));
const vino_uno = new Vino(1931, "", "Vino 1", "Un vino tinto con aromas intensos de frutas rojas y un toque de roble", 524, [maridaje_dos, maridaje_uno], [varietal_uno], new Bodega(["coordenadas"], "Mira que vino", "historia", "nombre", "12/05/2020", new RegionVitivinicola("descripcion", "Region 1")));
const resena_uno = new Resena("Una opción perfecta para celebraciones.", true, "10/10/2018", 10);
vino_uno.agregarResena(resena_uno);
const maridaje_tres = new Maridaje("Perfecto para una cena elegante con carne asada.", "Carne Asada");
const maridaje_cuatro = new Maridaje("Ideal para disfrutar con platos de pescado fresco.", "Pescado Fresco");
const maridaje_cinco = new Maridaje("Combina a la perfección con postres de chocolate.", "Chocolate");
const varietal_tres = new Varietal("aromático", 35, new TipoUva("Uva aromática", "Uva"));
const varietal_cuatro = new Varietal("suave", 30, new TipoUva("Uva suave", "Uva"));
const varietal_cinco = new Varietal("intenso", 45, new TipoUva("Uva intensa", "Uva"));
const vino_dos = new Vino(1950, "", "Vino 2", "Un blanco refrescante con notas cítricas y florales.", 450, [maridaje_tres, maridaje_cuatro], [varietal_tres], new Bodega(["coordenadas"], "Bodega A", "historia", "nombre", "05/03/2019", new RegionVitivinicola("descripcion", "Región 2")));
const vino_tres = new Vino(1975, "", "Vino 3", "Un rosado vibrante con aromas a frutas del bosque y un toque de especias.", 375, [maridaje_cuatro], [varietal_cuatro], new Bodega(["coordenadas"], "Bodega B", "historia", "nombre", "15/09/2015", new RegionVitivinicola("descripcion", "Región 3")));
// Crear más vinos y reseñas de manera similar...
const resena_dos = new Resena("Un vino perfecto para una tarde de verano.", true, "05/06/2019", 9);
vino_dos.agregarResena(resena_dos);
// Crear más reseñas...
const resena_diez = new Resena("Un vino con cuerpo y carácter, ideal para maridar con platos de carne roja.", true, "20/11/2021", 8.5);
vino_tres.agregarResena(resena_diez);
// Crear más reseñas...
export const vinosArray = [vino_uno, vino_dos, vino_tres];
