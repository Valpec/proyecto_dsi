// import { TipoUvatipoUva } from "./tipoUva";
import { TipoUva } from "./tipoUva";

export class Varietal {

    private descripcion: string;
    private porcentajeComposicion: number;
    private tipoUva: TipoUva

    constructor(descripcion: string, porcentajeComposicion: number, tipoUva: TipoUva) {
        this.descripcion = descripcion;
        this.porcentajeComposicion = porcentajeComposicion;
        this.tipoUva = tipoUva
        
    }
    conocerTipoUva() {
    }
    esDeTipoUva() {
    }
    mostrarPorcentaje() {
    }
    
}