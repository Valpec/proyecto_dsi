export class Provincia {
    nombre;
    regiones = [];
    paises = [];
    // constructor(nombre: string, regiones: RegionVitivinicola[]) {
    //     this.nombre = nombre;  
    //     this.regiones = regiones      
    // }
    constructor(nombre) {
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
        this.paises.push(pais);
    }
    getNombre() {
        return this.nombre;
    }
    obtenerPais() {
        // return this.pais?.getNombre()
        return this.nombre;
    }
}
