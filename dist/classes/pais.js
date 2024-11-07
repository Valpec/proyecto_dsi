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
        console.log('pushea prov');
        this.provincias.push(provincia);
    }
    contarBodegas() {
    }
    getNombre() {
        return this.nombre;
    }
    tieneProvincia(provincia) {
        return this.provincias.some(p => p.getNombre() === provincia.getNombre());
    }
}
