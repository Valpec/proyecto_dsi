import { RegionVitivinicola } from "./regionVitivinicola";
export class Provincia {

    private nombre: string;
    private regiones: RegionVitivinicola[]

    constructor(nombre: string, regiones: RegionVitivinicola[]) {
        this.nombre = nombre;  
        this.regiones = regiones      
    }
    
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    
    
}