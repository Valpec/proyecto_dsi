import { RegionVitivinicola } from "./regionVitivinicola";
export class Bodega {

    private coordenadasUbicacion: string[];
    private descripcion: string;
    private historia: string;
    private nombre: string;
    private periodoActualizacion: string;
    private regionVitivinicola: RegionVitivinicola;

    constructor(coordenadasUbicacion: string[], descripcion: string, historia: string, nombre: string, periodoActualizacion: string, region: RegionVitivinicola) {
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.descripcion = descripcion;
        this.historia = historia;
        this.nombre = nombre;
        this.periodoActualizacion = periodoActualizacion
        this.regionVitivinicola = region
    }
  
    contarResenias() {
    }
    mostrarTodosVinos() {
    }
    
    getNombre(){
        return this.nombre
    }

    buscarRegionProvinciaPais(){
        // para hacer esto, tuve que crear funciones dentro de cada clase para que tengan un atributo con el nombre de sus padres. 
        // creo que me mando moco, porque la asignacion es desde el padre, cuando se ejecuta un metodo, para el cual yo permito que sus hijos sea nulo. creo que eso no respeta el diagrama y la multiplicidad VERRRRRVERVER
        const region = this.regionVitivinicola.getNombre()
        const provincia = this.regionVitivinicola.obtenerProvincia()
        const pais = this.regionVitivinicola.buscarPais()
       return {region, provincia, pais}
        
    }
}