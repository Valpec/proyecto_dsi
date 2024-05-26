import { Provincia } from "./provincia";
import { RegionVitivinicola } from "./regionVitivinicola";
export class Bodega {
    // readonly name: string = 'asd' // para que no se inicie afuera de este consturctor

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
    // setProvincia(provincia:Provincia){
    //     this.provincia = provincia
    // }
    //deberia la resenia ser un array? resenias.length
    contarResenias(resenas: string[]) {
        //codigo lololololol
    }
    mostrarTodosVinos(vinos: string[]) {
        //codigo ????
    }
    
    getNombre(){
        return this.nombre
    }

    buscarRegionProvinciaPais(){
        const region = this.regionVitivinicola.getRegion()
        // const provincia = this.regionVitivinicola.

        // implementar la busqueda del pais y la provincia !!!!!

        
    }
}