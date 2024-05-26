"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vino = void 0;
class Vino {
    constructor(anada, imagenEtiqueta, nombre, notaDeCataBodega, precioArs, maridaje, varietal, bodega) {
        // private resena: Resena[];
        this.resena = [];
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal;
        this.bodega = bodega;
    }
    agregarResena(resenaNueva) {
        this.resena.push(resenaNueva);
    }
    mostrarResena(vinoPasado) {
        console.log(vinoPasado.resena);
    }
    calcularRanking() {
    }
    compararEtiqueta() {
    }
    esDeBodega() {
    }
    esDeRegioVitvinicola() {
    }
    getNombre() {
        return this.nombre;
    }
    getPrecioSugerido() {
        return this.precioArs;
    }
    conocerResenasEnPeriodo(desde, hasta) {
        let puntajes = [];
        for (let i = 0; i < this.resena.length; i++) {
            let esSommelier = this.resena[i].sosDeSommelier();
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta);
            if (esSommelier && esDePeriodo) {
                let punt = this.resena[i].getPuntaje();
                puntajes.push(punt);
            }
        }
        return puntajes;
    }
    buscarDatosBodega() {
        const nombreBodega = this.bodega.getNombre();
        // el regionProvPais es un obtejo
        const regionProvinciaPais = this.bodega.buscarRegionProvinciaPais();
        return { nombreBodega, regionProvinciaPais };
    }
    buscarVarietal() {
        let varietales = [];
        for (let i = 0; i < this.varietal.length; i++) {
            let varietal = this.varietal[i].getDescripcion();
            varietales.push(varietal);
        }
        return varietales;
    }
    conocerResenas(desde, hasta) {
        let puntajesGral = [];
        for (let i = 0; i < this.resena.length; i++) {
            let esDePeriodo = this.resena[i].esEnPeriodoFecha(desde, hasta);
            if (esDePeriodo) {
                let punt = this.resena[i].getPuntaje();
                puntajesGral.push(punt);
            }
        }
        return puntajesGral;
    }
}
exports.Vino = Vino;
