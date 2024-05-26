import { Pais } from "./pais";
import { RegionVitivinicola } from "./regionVitivinicola";
export class Provincia {

    private nombre: string;
    private regiones: RegionVitivinicola[] = []
    private pais: Pais | null = null

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

    establecerPais(pais:Pais){
        this.pais = pais
    }

    getNombre(){
        return this.nombre
    }
    obtenerPais(){
        return this.pais?.getNombre()
    }

}