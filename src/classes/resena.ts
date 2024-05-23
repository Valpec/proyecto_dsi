import { Vino } from "./vino";
export class Resena {

    private comentario: string;
    // por tema de que coincide con el metodo, renombramos a esPremium
    private premium: boolean;
    private fechaResena: string;
    private puntaje: number;
    private vino: Vino;

    // que tipo?????? poara la fechaHora

    constructor(comentario: string,  premium: boolean, fechaResena: string, puntaje: number, vino: Vino) {
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
    
}