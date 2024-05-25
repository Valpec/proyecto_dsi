import { Maridaje } from "./maridaje";
import { Resena } from "./resena";
import { Varietal } from "./varietal";
export class Vino {

    private anada: number;
    private imagenEtiqueta: string;
    private nombre: string;
    private notaDeCataBodega: string;
    private precioArs: number;
    private maridaje: Maridaje[];
    // private resena: Resena[];
    resena: Resena[] = []
    private varietal: Varietal[]


    constructor(anada: number, imagenEtiqueta: string, nombre: string,notaDeCataBodega: string, precioArs: number, maridaje: Maridaje[],varietal: Varietal[]) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal

    }
    agregarResena(resenaNueva:Resena){

        this.resena.push(resenaNueva)
    }
    mostrarResena(vinoPasado:Vino){
        console.log(vinoPasado.resena)
    }
    calcularRanking() {
    }
    compararEtiqueta() {
    }
    esDeBodega() {
    }
    esDeRegioVitvinicola() {
    }
    // al parecer, los get y set son mala practica !!!!!!
}