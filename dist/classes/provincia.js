export class Provincia {
    nombre;
    regiones = [];
    // TRES. COMENTADO
    // private paises: Pais[] = []
    // constructor(nombre: string, regiones: RegionVitivinicola[]) {
    //     this.nombre = nombre;  
    //     this.regiones = regiones      
    // }
    // tres, agregado lo de regiones  en el constructor !
    constructor(nombre) {
        this.nombre = nombre;
    }
    contarRegiones() {
    }
    mostrarRegiones() {
    }
    establecerRegion(region) {
        this.regiones.push(region);
        // region.establecerProvincia(this);
    }
    establecerPais(pais) {
        // this.paises.push(pais)
    }
    getNombre() {
        return this.nombre;
    }
    obtenerPais() {
        // return this.pais?.getNombre()
        return this.nombre;
    }
}
