import { Vino } from "./classes/vino.js";
import { Maridaje } from "./classes/maridaje.js";
import { Varietal } from "./classes/varietal.js";
import { TipoUva } from "./classes/tipoUva.js";
import { Resena } from "./classes/resena.js";
import { Bodega } from "./classes/bodega.js";
import { RegionVitivinicola } from "./classes/regionVitivinicola.js";
const maridaje_uno = new Maridaje("Un acompañamiento clásico con una variedad de quesos y embutidos.", "Quesos y Embutidos");
const maridaje_dos = new Maridaje("Un acompañamiento clásico ", "Quesos ");
const maridaje_tres = new Maridaje("Perfecto para una cena elegante con carne asada.", "Carne Asada");
const maridaje_cuatro = new Maridaje("Ideal para disfrutar con platos de pescado fresco.", "Pescado Fresco");
const maridaje_cinco = new Maridaje("Combina a la perfección con postres de chocolate.", "Chocolate");
const maridaje_seis = new Maridaje("Perfecto para disfrutar con una tabla de quesos variados.", "Tabla de Quesos");
const maridaje_siete = new Maridaje("Ideal para acompañar platos de pasta y pizza.", "Pasta y Pizza");
const maridaje_ocho = new Maridaje("Combina a la perfección con platos de carne a la parrilla.", "Carne a la Parrilla");
const maridaje_nueve = new Maridaje("Perfecto para acompañar platos de comida asiática.", "Comida Asiática");
const maridaje_diez = new Maridaje("Ideal para maridar con quesos suaves y postres de frutas.", "Quesos Suaves y Postres de Frutas");
const maridaje_once = new Maridaje("Combina a la perfección con platos de comida picante.", "Comida Picante");
const varietal_uno = new Varietal("rico", 40, new TipoUva("Uva rica", "Uva"));
const varietal_dos = new Varietal("rico", 40, new TipoUva("Uva rica", "Uva"));
const varietal_tres = new Varietal("aromático", 35, new TipoUva("Uva aromática", "Uva"));
const varietal_cuatro = new Varietal("suave", 30, new TipoUva("Uva suave", "Uva"));
const varietal_cinco = new Varietal("intenso", 45, new TipoUva("Uva intensa", "Uva"));
const varietal_seis = new Varietal("elegante", 40, new TipoUva("Uva elegante", "Uva"));
const varietal_siete = new Varietal("frutal", 35, new TipoUva("Uva frutal", "Uva"));
const varietal_ocho = new Varietal("robusto", 50, new TipoUva("Uva robusta", "Uva"));
const varietal_nueve = new Varietal("suave", 30, new TipoUva("Uva suave", "Uva"));
const varietal_diez = new Varietal("aromático", 35, new TipoUva("Uva aromática", "Uva"));
const varietal_once = new Varietal("exótico", 45, new TipoUva("Uva exótica", "Uva"));
const vino_uno = new Vino(1931, "", "Vino 1", "Un vino tinto con aromas intensos de frutas rojas y un toque de roble", 524, [maridaje_dos, maridaje_uno], [varietal_uno], new Bodega(["coordenadas"], "Mira que vino", "historia", "nombre", "12/05/2020", new RegionVitivinicola("descripcion", "Region 1")));
const vino_dos = new Vino(1950, "", "Vino 2", "Un blanco refrescante con notas cítricas y florales.", 450, [maridaje_tres, maridaje_cuatro], [varietal_tres], new Bodega(["coordenadas"], "Bodega A", "historia", "nombre", "05/03/2019", new RegionVitivinicola("descripcion", "Región 2")));
const vino_tres = new Vino(1975, "", "Vino 3", "Un rosado vibrante con aromas a frutas del bosque y un toque de especias.", 375, [maridaje_cuatro], [varietal_cuatro], new Bodega(["coordenadas"], "Bodega B", "historia", "nombre", "15/09/2015", new RegionVitivinicola("descripcion", "Región 3")));
const vino_cuatro = new Vino(1960, "", "Vino 4", "Un espumante fresco y vibrante con burbujas finas y persistentes.", 600, [maridaje_seis], [varietal_seis], new Bodega(["coordenadas"], "Bodega C", "historia", "nombre", "25/08/2018", new RegionVitivinicola("descripcion", "Región 4")));
const vino_cinco = new Vino(1982, "", "Vino 5", "Un tinto robusto con taninos suaves y notas de frutas maduras y especias.", 750, [maridaje_ocho], [varietal_ocho], new Bodega(["coordenadas"], "Bodega D", "historia", "nombre", "10/04/2016", new RegionVitivinicola("descripcion", "Región 5")));
const vino_seis = new Vino(1995, "", "Vino 6", "Un blanco seco con una acidez refrescante y aromas a frutas tropicales.", 420, [maridaje_siete], [varietal_siete], new Bodega(["coordenadas"], "Bodega E", "historia", "nombre", "30/11/2017", new RegionVitivinicola("descripcion", "Región 6")));
const vino_siete = new Vino(2000, "", "Vino 7", "Un rosado delicado con una explosión de aromas a fresas y notas florales.", 380, [maridaje_seis], [varietal_seis], new Bodega(["coordenadas"], "Bodega F", "historia", "nombre", "15/07/2015", new RegionVitivinicola("descripcion", "Región 7")));
const vino_ocho = new Vino(2005, "", "Vino 8", "Un tinto joven y frutal con una explosión de sabores a frutas del bosque.", 500, [maridaje_nueve], [varietal_nueve], new Bodega(["coordenadas"], "Bodega G", "historia", "nombre", "20/06/2014", new RegionVitivinicola("descripcion", "Región 8")));
const vino_nueve = new Vino(2010, "", "Vino 9", "Un blanco fresco y ligero con notas cítricas y un final refrescante.", 380, [maridaje_diez], [varietal_diez], new Bodega(["coordenadas"], "Bodega H", "historia", "nombre", "18/09/2013", new RegionVitivinicola("descripcion", "Región 9")));
const vino_diez = new Vino(2015, "", "Vino 10", "Un rosado seco con aromas a frutas rojas y una acidez equilibrada.", 420, [maridaje_nueve], [varietal_nueve], new Bodega(["coordenadas"], "Bodega I", "historia", "nombre", "14/03/2012", new RegionVitivinicola("descripcion", "Región 10")));
const vino_once = new Vino(2020, "", "Vino 11", "Un espumante elegante con burbujas finas y una frescura inigualable.", 600, [maridaje_diez], [varietal_diez], new Bodega(["coordenadas"], "Bodega J", "historia", "nombre", "22/08/2011", new RegionVitivinicola("descripcion", "Región 11")));
// Crear más vinos y reseñas de manera similar...
const resena_uno = new Resena("Una opción perfecta para celebraciones.", true, "2018-10-10", 10);
const resena_dos = new Resena("Un vino perfecto para una tarde de verano.", true, "2019-06-05", 9);
const resena_tres = new Resena("Un vino que sorprende por su equilibrio y complejidad.", true, "2020-10-12", 9.5);
const resena_cuatro = new Resena("Un vino con una relación calidad-precio excepcional.", true, "2021-04-07", 9);
const resena_diez = new Resena("Un vino con cuerpo y carácter, ideal para maridar con platos de carne roja.", true, "2021-11-20", 8.5);
const resena_once = new Resena("Un vino joven y fresco, perfecto para reuniones informales.", true, "2022-03-08", 8);
const resena_cinco = new Resena("Un vino con un bouquet aromático excepcional y un final largo y seductor.", true, "2023-07-15", 9.8);
const resena_seis = new Resena("Un vino que cautiva con su elegancia y sutileza, perfecto para ocasiones especiales.", true, "2023-11-28", 9.7);
const resena_siete = new Resena("Un vino que destaca por su frescura y versatilidad, ideal para maridar con una amplia variedad de platos.", true, "2024-02-10", 9.3);
const resena_ocho = new Resena("Un vino con una expresión frutal encantadora y una textura sedosa en boca.", false, "2024-05-05", 9.6);
const resena_nueve = new Resena("Un vino complejo y estructurado que revela su carácter con cada sorbo.", true, "2024-08-20", 9.9);
const resena_doce = new Resena("Un vino que sorprende por su armonía y elegancia, una joya enológica.", true, "2024-11-15", 9.8);
vino_cinco.agregarResena(resena_once);
vino_cuatro.agregarResena(resena_tres);
vino_uno.agregarResena(resena_uno);
vino_dos.agregarResena(resena_dos);
vino_ocho.agregarResena(resena_cuatro);
vino_tres.agregarResena(resena_diez);
vino_cinco.agregarResena(resena_cinco);
vino_seis.agregarResena(resena_seis);
vino_siete.agregarResena(resena_siete);
vino_ocho.agregarResena(resena_ocho);
vino_nueve.agregarResena(resena_nueve);
vino_diez.agregarResena(resena_doce);
export const vinosArray = [vino_uno,
    vino_dos,
    vino_tres,
    vino_cuatro,
    vino_cinco,
    vino_seis,
    vino_siete,
    vino_ocho,
    vino_nueve,
    vino_diez,
    vino_once];
