export class RegionVitivinicola {

    private descripcion: string;
    private nombre: string;

    constructor(descripcion: string, nombre: string) {
        this.descripcion = descripcion;
        this.nombre = nombre;        
    }
    
    conocerBodega() {
    }
    contarBodegas() {
    }
    getRegion(){
        return this.nombre
    }
}