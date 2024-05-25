"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vino = void 0;
class Vino {
    constructor(anada, imagenEtiqueta, nombre, notaDeCataBodega, precioArs, maridaje, varietal) {
        // private resena: Resena[];
        this.resena = [];
        this.anada = anada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.nombre = nombre;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioArs = precioArs;
        this.maridaje = maridaje;
        this.varietal = varietal;
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
}
exports.Vino = Vino;
