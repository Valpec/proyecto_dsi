export class Vino {

    private anada: number;
    private imagenEtiqueta: string;
    private nombre: string;
    private notaDeCataBodega: string;
    private precioArs: number;

    constructor(anada: number, imagenEtiqueta: string, nombre: string,notaDeCataBodega: string, precioArs: number) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs
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