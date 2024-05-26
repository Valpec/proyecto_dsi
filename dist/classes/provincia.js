"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provincia = void 0;
class Provincia {
    // constructor(nombre: string, regiones: RegionVitivinicola[]) {
    //     this.nombre = nombre;  
    //     this.regiones = regiones      
    // }
    constructor(nombre) {
        this.regiones = [];
        this.pais = null;
        this.nombre = nombre;
    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    establecerRegion(region) {
        this.regiones.push(region);
        region.establecerProvincia(this);
    }
    establecerPais(pais) {
        this.pais = pais;
    }
    getNombre() {
        return this.nombre;
    }
    obtenerPais() {
        var _a;
        return (_a = this.pais) === null || _a === void 0 ? void 0 : _a.getNombre();
    }
}
exports.Provincia = Provincia;
