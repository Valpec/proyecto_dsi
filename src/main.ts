import { GestorReporteRankingVinos , VinoEncontrado} from "./classes/gestorReporteRankingVinos.js"
import { vinosArray } from "./arrayVinos.js";
import { VinoSuperbase } from "./repositories/VinosParseadosService.js";

const vinoService = new VinoSuperbase();
const vinos = await vinoService.getAllVinos()
// console.log(vinos)

// la estructura que deben respetar los datos pasado como objeto del formulario del html (app.ts para ver como esta documentado)

export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}

// instancia del gestor al que le paso los metodos
// let gestorReporte = new GestorReporteRankingVinos(vinosArray)

let gestorReporte = new GestorReporteRankingVinos(vinos)

export function tomarConfirmacionGenerarReporte(reporte:Reporte){
    let datosReporte = reporte
    if(datosReporte.formaVisualizacion != '1' || datosReporte.tipoResena != '1' ){
        console.info('No se encuentra disponible la funcionalidad de resporte a estas opciones. Intente para Sommelier y Excel')
        return []
    }
    let topDiez = gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinos);
    console.log('TOP DIEEEEZZZ')
    console.log(topDiez)
    return topDiez
};
export function tomarCancelacionGenerarReporte(){
    gestorReporte.tomarCancelacionGenerarReporte()
}
export function informarGeneracion(vinos:VinoEncontrado[]){
    // front muestra directamente el la tabla
    console.log('Se ha generado correctamente el ranking')
}

export function noSeEncuentrasResenasSommelier(){
    console.log()
    tomarConfirmacionDeLectura()
}
export function tomarConfirmacionDeLectura(){
    gestorReporte.tomarConfirmacionDeLectura()
}


