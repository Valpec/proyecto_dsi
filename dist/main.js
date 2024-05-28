import { GestorReporteRankingVinos } from "./classes/gestorReporteRankingVinos.js";
import { vinosArray } from "./arrayVinos.js";
// instancia del gestor al que le paso los metodos
let gestorReporte = new GestorReporteRankingVinos(vinosArray);
export function tomarConfirmacionGenerarReporte(reporte) {
    let datosReporte = reporte;
    let topDiez = gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinosArray);
    return topDiez;
}
;
export function tomarCancelacionGenerarReporte() {
    gestorReporte.tomarCancelacionGenerarReporte();
}
export function informarGeneracion(vinos) {
    // de aca, que muestre en el front en una tabla los vinos en el top 10 con la info solicitada.
    console.log('Se ha generado correctamente el ranking');
}
export function noSeEncuentrasResenasSommelier() {
    console.log();
    tomarConfirmacionDeLectura();
}
export function tomarConfirmacionDeLectura() {
    gestorReporte.tomarConfirmacionDeLectura();
}
