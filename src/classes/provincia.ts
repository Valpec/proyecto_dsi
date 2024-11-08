import { Pais } from "./pais.js";
import { RegionVitivinicola } from "./regionVitivinicola.js";
export class Provincia {

    private nombre: string;
    private regiones: RegionVitivinicola[] = []
  
    constructor(nombre: string) {
        this.nombre = nombre; 
    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    
    establecerRegion(region:RegionVitivinicola){
        this.regiones.push(region);
    } 

    tieneRegion(regionNombre: string): boolean {
        return this.regiones.some(region => region.getNombre() === regionNombre);
    }
    getNombre(){
        return this.nombre
    }
    obtenerPais(paises: Pais[]) {
        console.log('entra al obtener pais de la prov')
        for (const pais of paises) {
            if (pais.tieneProvincia(this)) {
                console.log('pais encontrado', pais)
                return pais.getNombre();
            }
        }
    }

}