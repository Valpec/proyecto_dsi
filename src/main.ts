// import { crearVinosAutomaticos, crearResenaAleatoria} from "./crearVinos";

import { GestorReporteRankingVinos , VinoEncontrado} from "./classes/gestorReporteRankingVinos.js"
import { Pantalla } from "./classes/pantallaGenerarRankingVinos.js"
import { Vino } from "./classes/vino.js";

import { vinosArray } from "./arrayVinos.js";
// esta interfaz de reporte es la estructura que deben respetar los datos pasado como objeto del formulario del html (app.ts para ver como esta documentado)
export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}


// array de todos los vinos. A futuro meterlo en .json y usar 'fs' de node
// const vinosArray: Vino[] = vinosData
// const vinos:Vino[] = []

// instancia del gestor al que le paso los metodos
let gestorReporte = new GestorReporteRankingVinos(vinosArray)
// let pantalla = new Pantalla(gestorReporte)


export function tomarConfirmacionGenerarReporte(reporte:Reporte){
    let datosReporte = reporte
    gestorReporte.tomarConfirmacionGenerarReporte(datosReporte, vinosArray);
};

export function informarGeneracion(vinos:VinoEncontrado[]){
    // de aca, les encargo para que muestre en el front en una tabla los vinos en el top 10 con la info solicitada.
}

const reporte:Reporte = {
    fechaDesde: "13/12/2013",
    fechaHasta: "10/12/2024",
    tipoResena: "1",
    formaVisualizacion: "excel",
}

gestorReporte.tomarConfirmacionGenerarReporte(reporte, vinosArray);