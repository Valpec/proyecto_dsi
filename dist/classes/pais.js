export class Pais {
    nombre;
    provincias = [];
    // constructor(nombre: string, provincias: Provincia[]) {
    //     this.nombre = nombre;        
    //     this.provincias = provincias
    // }
    constructor(nombre) {
        this.nombre = nombre;
    }
    establecerProvincia(provincia) {
        this.provincias.push(provincia);
        provincia.establecerPais(this);
    }
    contarBodegas() {
    }
    getNombre() {
        return this.nombre;
    }
}
