"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resena = void 0;
class Resena {
    // que tipo?????? poara la fechaHora
    constructor(comentario, premium, fechaResena, puntaje, vino) {
        this.comentario = comentario;
        this.premium = premium;
        this.fechaResena = fechaResena;
        this.puntaje = puntaje;
        this.vino = vino;
    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    getPuntaje() {
        return this.puntaje;
    }
    sosDeSommelier() {
        if (this.premium) {
            return true;
        }
        else {
            return false;
        }
    }
    esEnPeriodoFecha(desde, hasta) {
        const fecha = new Date(this.fechaResena);
        const desdeEnDate = new Date(desde);
        const hastaEnDate = new Date(hasta);
        if (fecha >= desdeEnDate && fecha <= hastaEnDate) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Resena = Resena;
