export class Resena {
    comentario;
    // por tema de que coincide con el metodo, renombramos a esPremium
    premium;
    fechaResena;
    puntaje;
    vino = null;
    // que tipo?????? poara la fechaHora
    constructor(comentario, premium, fechaResena, puntaje) {
        this.comentario = comentario;
        this.premium = premium;
        this.fechaResena = fechaResena;
        this.puntaje = puntaje;
    }
    establecerVino(vino) {
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
        console.log(fecha, desdeEnDate, hastaEnDate);
        if (fecha >= desdeEnDate && fecha <= hastaEnDate) {
            return true;
        }
        else {
            return false;
        }
    }
}
