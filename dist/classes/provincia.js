export class Provincia {
    nombre;
    regiones = [];
    constructor(nombre) {
        this.nombre = nombre;
    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    establecerRegion(region) {
        this.regiones.push(region);
    }
    tieneRegion(regionNombre) {
        return this.regiones.some(region => region.getNombre() === regionNombre);
    }
    getNombre() {
        return this.nombre;
    }
    obtenerPais(paises) {
        console.log('entra al obtener pais de la prov');
        for (const pais of paises) {
            if (pais.tieneProvincia(this)) {
                console.log('pais encontrado', pais);
                return pais.getNombre();
            }
        }
    }
}
