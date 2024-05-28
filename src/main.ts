import { GestorReporteRankingVinos , VinoEncontrado} from "./classes/gestorReporteRankingVinos.js"

import { vinosArray } from "./arrayVinos.js";
// esta interfaz de reporte es la estructura que deben respetar los datos pasado como objeto del formulario del html (app.ts para ver como esta documentado)
export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}

// instancia del gestor al que le paso los metodos
let gestorReporte = new GestorReporteRankingVinos(vinosArray)

export function tomarConfirmacionGenerarReporte(reporte:Reporte){
    let datosReporte = reporte
    let topDiez = gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinosArray);
    return topDiez
};
export function tomarCancelacionGenerarReporte(){
    gestorReporte.tomarCancelacionGenerarReporte()
}
export function informarGeneracion(vinos:VinoEncontrado[]){
    // de aca, que muestre en el front en una tabla los vinos en el top 10 con la info solicitada.
    console.log('Se ha generado correctamente el ranking')
}

export function noSeEncuentrasResenasSommelier(){
    console.log()
    tomarConfirmacionDeLectura()
}
export function tomarConfirmacionDeLectura(){
    gestorReporte.tomarConfirmacionDeLectura()
}
