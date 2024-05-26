"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionVitivinicola = void 0;
class RegionVitivinicola {
    constructor(descripcion, nombre) {
        this.provincia = null;
        this.descripcion = descripcion;
        this.nombre = nombre;
    }
    conocerBodega() {
    }
    contarBodegas() {
    }
    establecerProvincia(provincia) {
        this.provincia = provincia;
    }
    getNombre() {
        return this.nombre;
    }
    obtenerProvincia() {
        var _a;
        return (_a = this.provincia) === null || _a === void 0 ? void 0 : _a.getNombre();
    }
    buscarPais() {
        var _a;
        return (_a = this.provincia) === null || _a === void 0 ? void 0 : _a.obtenerPais();
    }
}
exports.RegionVitivinicola = RegionVitivinicola;
