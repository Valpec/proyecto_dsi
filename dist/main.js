import { GestorReporteRankingVinos } from "./classes/gestorReporteRankingVinos.js";
import { VinoSuperbase } from "./repositories/VinosParseadosService.js";
const vinoService = new VinoSuperbase();
const vinos = await vinoService.getAllVinos();
// instancia del gestor al que le paso los metodos
// let gestorReporte = new GestorReporteRankingVinos(vinosArray)
let gestorReporte = new GestorReporteRankingVinos(vinos);
export function tomarConfirmacionGenerarReporte(reporte) {
    let datosReporte = reporte;
    if (datosReporte.formaVisualizacion != '1' || datosReporte.tipoResena != '1') {
        console.info('No se encuentra disponible la funcionalidad de resporte a estas opciones. Intente para Sommelier y Excel');
        return [];
    }
    let topDiez = gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinos);
    console.log('TOP DIEEEEZZZ');
    console.log(topDiez);
    return topDiez;
}
;
export function tomarCancelacionGenerarReporte() {
    gestorReporte.tomarCancelacionGenerarReporte();
}
export function informarGeneracion(vinos) {
    // front muestra directamente el la tabla
    console.log('Se ha generado correctamente el ranking');
}
export function noSeEncuentrasResenasSommelier() {
    console.log();
    tomarConfirmacionDeLectura();
}
export function tomarConfirmacionDeLectura() {
    gestorReporte.tomarConfirmacionDeLectura();
}
