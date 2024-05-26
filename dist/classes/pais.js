"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pais = void 0;
class Pais {
    // constructor(nombre: string, provincias: Provincia[]) {
    //     this.nombre = nombre;        
    //     this.provincias = provincias
    // }
    constructor(nombre) {
        this.provincias = [];
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
exports.Pais = Pais;
