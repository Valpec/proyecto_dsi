"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodega = void 0;
class Bodega {
    constructor(coordenadasUbicacion, descripcion, historia, nombre, periodoActualizacion, region) {
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.descripcion = descripcion;
        this.historia = historia;
        this.nombre = nombre;
        this.periodoActualizacion = periodoActualizacion;
        this.regionVitivinicola = region;
    }
    // setProvincia(provincia:Provincia){
    //     this.provincia = provincia
    // }
    //deberia la resenia ser un array? resenias.length
    contarResenias(resenas) {
        //codigo lololololol
    }
    mostrarTodosVinos(vinos) {
        //codigo ????
    }
    getNombre() {
        return this.nombre;
    }
    buscarRegionProvinciaPais() {
        const region = this.regionVitivinicola.getNombre();
        const provincia = this.regionVitivinicola.obtenerProvincia();
        const pais = this.regionVitivinicola.buscarPais();
        //COMO traigo la data de la provincia sin tanto acoplamietno !!
        return { region, provincia, pais };
    }
}
exports.Bodega = Bodega;
