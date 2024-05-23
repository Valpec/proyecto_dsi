import { Maridaje } from "./maridaje";
import { Resena } from "./resena";
export class Vino {

    private anada: number;
    private imagenEtiqueta: string;
    private nombre: string;
    private notaDeCataBodega: string;
    private precioArs: number;
    private maridaje: Maridaje;
    private resena: Resena;


    constructor(anada: number, imagenEtiqueta: string, nombre: string,notaDeCataBodega: string, precioArs: number, maridaje: Maridaje, resena: Resena) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.resena = resena

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