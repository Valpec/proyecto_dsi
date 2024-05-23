export class Resena {

    private comentario: string;
    // por tema de que coincide con el metodo, renombramos a esPremium
    private premium: boolean;
    private fechaResena: string;
    private puntaje: number;

    // que tipo?????? poara la fechaHora

    constructor(comentario: string,  premium: boolean, fechaResena: string, puntaje: number) {
        this.comentario = comentario;
        this.premium = premium;
        this.fechaResena = fechaResena;
        this.puntaje = puntaje;

    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    
}