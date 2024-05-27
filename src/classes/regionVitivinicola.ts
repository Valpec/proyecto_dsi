import { Provincia } from "./provincia.js";
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


    establecerProvincia(provincia: Provincia){
        this.provincia = provincia
    }

    
    getNombre(){
        return this.nombre
    }
    obtenerProvincia(){
        return this.provincia?.getNombre()
    }
    
    buscarPais(){
        return this.provincia?.obtenerPais()
    }
   

  
    
}