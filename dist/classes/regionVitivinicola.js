export class RegionVitivinicola {
    descripcion;
    nombre;
    provincia = null;
    constructor(descripcion, nombre) {
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
        return this.provincia?.getNombre();
    }
    buscarPais() {
        return this.provincia?.obtenerPais();
    }
}
