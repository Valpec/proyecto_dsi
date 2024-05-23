import { Provincia } from "./provincia";
export class Pais {

    private nombre: string;
    private provincias: Provincia[]
    constructor(nombre: string, provincias: Provincia[]) {
        this.nombre = nombre;        
        this.provincias = provincias
    }
    
    contarBodegas() {
    }
  
}