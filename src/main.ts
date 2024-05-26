// import { crearVinosAutomaticos, crearResenaAleatoria} from "./crearVinos";

import { GestorReporteRankingVinos , VinoEncontrado} from "./classes/gestorReporteRankingVinos"
import { Pantalla } from "./classes/pantallaGenerarRankingVinos"
import { Vino } from "./classes/vino";

import vinosData from './data/vinos.json'
// esta interfaz de reporte es la estructura que deben respetar los datos pasado como objeto del formulario del html (app.ts para ver como esta documentado)
export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}


// array de todos los vinos. A futuro meterlo en .json y usar 'fs' de node
// const vinosArray: Vino[] = vinosData
const vinosArray:Vino[] = []

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