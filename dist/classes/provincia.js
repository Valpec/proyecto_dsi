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
