export class RegionVitivinicola {
    descripcion;
    nombre;
    // private provincia:Provincia | null = null;
    constructor(descripcion, nombre) {
        this.descripcion = descripcion;
        this.nombre = nombre;
    }
    conocerBodega() {
    }
    contarBodegas() {
    }
    establecerProvincia(provincia) {
        // this.provincia = provincia
    }
    getNombre() {
        return this.nombre;
    }
    obtenerProvincia(provincias) {
        for (const provincia of provincias) {
            if (provincia.tieneRegion(this.nombre)) {
                return provincia;
            }
        }
    }
    buscarPais(provincias, paises) {
        console.log('entra a bsiucar pais, con los paises', paises);
        const provincia = this.obtenerProvincia(provincias);
        console.log('la provincia encontrada', provincia);
        if (provincia) {
            const pais = provincia.obtenerPais(paises);
            return pais;
        }
    }
}
