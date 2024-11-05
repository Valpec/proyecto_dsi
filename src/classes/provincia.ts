import { Pais } from "./pais.js";
import { RegionVitivinicola } from "./regionVitivinicola.js";
export class Provincia {

    private nombre: string;
    private regiones: RegionVitivinicola[] = []
    private paises: Pais[] = []

    // constructor(nombre: string, regiones: RegionVitivinicola[]) {
    //     this.nombre = nombre;  
    //     this.regiones = regiones      
    // }
    constructor(nombre: string) {
        this.nombre = nombre;  

    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    
    establecerRegion(region:RegionVitivinicola){
        this.regiones.push(region);
        region.establecerProvincia(this);
    }
    establecerPais(pais: Pais){
        this.paises.push(pais)
    }


    getNombre(){
        return this.nombre
    }
    obtenerPais(){
        // return this.pais?.getNombre()
        return this.nombre
    }

}