export class Provincia {
    nombre;
    regiones = [];
    pais = null;
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
        this.pais = pais;
    }
    getNombre() {
        return this.nombre;
    }
    obtenerPais() {
        return this.pais?.getNombre();
    }
}
