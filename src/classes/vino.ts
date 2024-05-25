import { Maridaje } from "./maridaje";
import { Resena } from "./resena";
import { Varietal } from "./varietal";
import { Bodega } from "./bodega";
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
    private bodega: Bodega


    constructor(anada: number, imagenEtiqueta: string, nombre: string,notaDeCataBodega: string, precioArs: number, maridaje: Maridaje[],varietal: Varietal[], bodega: Bodega) {
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal
        this.bodega = bodega

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

    getNombre(){
        return this.nombre
    }
    getPrecioSugerido(){
        return this.precioArs
    }
    conocerResenasEnPeriodo(desde:string, hasta:string){
        let puntajes = []
        for(let i=0; i< this.resena.length; i ++){
            let esSommelier = this.resena[i].sosDeSommelier()
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta)

            if(esSommelier && esDePeriodo){
                let punt = this.resena[i].getPuntaje()
                puntajes.push(punt)
            }
        }
        return puntajes
    }

    buscarDatosBodega(){
        const nombreBodega = this.bodega.getNombre()
        const regionProvinciaPais = this.bodega.buscarRegionProvinciaPais()
        
        return this.bodega
    }
    
    buscarVarietal(){
        let varietales = []
        for(let i=0; i< this.varietal.length; i ++){
            let varietal = this.varietal[i].getDescripcion()
            varietales.push(varietal)
        }
        return varietales
    }

    // al parecer, los get y set son mala practica !!!!!!
}