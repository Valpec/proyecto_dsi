import { Provincia } from "./provincia";
export class Pais {

    private nombre: string;
    private provincias: Provincia[] =[]
    // constructor(nombre: string, provincias: Provincia[]) {
    //     this.nombre = nombre;        
    //     this.provincias = provincias
    // }
    constructor(nombre: string) {
        this.nombre = nombre;        
    }
    establecerProvincia(provincia:Provincia){
        this.provincias.push(provincia)
        provincia.establecerPais(this)
    }
    
    contarBodegas() {
    }
    
    getNombre(){
        return this.nombre
    }
}