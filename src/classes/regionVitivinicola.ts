import { Provincia } from "./provincia";
export class RegionVitivinicola {

    private descripcion: string;
    private nombre: string;
    private provincia:Provincia | null = null;

    constructor(descripcion: string, nombre: string) {
        this.descripcion = descripcion;
        this.nombre = nombre;        
    }
    
    conocerBodega() {
    }
    contarBodegas() {
    }
    
    getRegion(){
        return this.nombre
    }

    establecerProvincia(provincia: Provincia){
        this.provincia = provincia
    }
    
}