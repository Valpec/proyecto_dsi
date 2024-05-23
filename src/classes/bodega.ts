export class Bodega {
    // readonly name: string = 'asd' // para que no se inicie afuera de este consturctor

    private coordenadasUbicacion: string[];
    private descripcion: string;
    private historia: string;
    private nombre: string;
    private periodoActualizacion: string;

    constructor(coordenadasUbicacion: string[], descripcion: string, historia: string, nombre: string, periodoActualizacion: string) {
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.descripcion = descripcion;
        this.historia = historia;
        this.nombre = nombre;
        this.periodoActualizacion = periodoActualizacion
    }
    //deberia la resenia ser un array? resenias.length
    contarResenias(resenas: string[]) {
        //codigo lololololol
    }
    mostrarTodosVinos(vinos: string[]) {
        //codigo ????
    }
    // al parecer, los get y set son mala practica !!!!!!

}