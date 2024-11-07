import { Pais } from "./pais.js";
import { Provincia } from "./provincia.js";
export class RegionVitivinicola {

    private descripcion: string;
    private nombre: string;
    // private provincia:Provincia | null = null;

    constructor(descripcion: string, nombre: string) {
        this.descripcion = descripcion;
        this.nombre = nombre;        
    }
    
    conocerBodega() {
    }
    contarBodegas() {
    }


    establecerProvincia(provincia: Provincia){
        // this.provincia = provincia
    }
 
    getNombre(){
        return this.nombre
    }
    obtenerProvincia(provincias: Provincia[]){
        for (const provincia of provincias) {
            if (provincia.tieneRegion(this.nombre)) {
                return provincia;
            }
        }
    }
    buscarPais(provincias: Provincia[], paises: Pais[]){
        console.log('entra a bsiucar pais, con los paises', paises)
        const provincia = this.obtenerProvincia(provincias);
        console.log('la provincia encontrada', provincia)
        if (provincia) {
            const pais = provincia.obtenerPais(paises);
            return pais;
        }
    }
        
    }
   

  
    
