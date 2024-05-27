import { Vino } from "./vino.js";
export class Resena {

    private comentario: string;
    // por tema de que coincide con el metodo, renombramos a esPremium
    private premium: boolean;
    private fechaResena: string;
    private puntaje: number;
    private vino: Vino | null=null;

    // que tipo?????? poara la fechaHora

    constructor(comentario: string,  premium: boolean, fechaResena: string, puntaje: number) {
        this.comentario = comentario;
        this.premium = premium;
        this.fechaResena = fechaResena;
        this.puntaje = puntaje;

    }
    establecerVino(vino:Vino){
        this.vino=vino
    }
    esPremium() {
        
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    getPuntaje(){
        return this.puntaje
    }


    sosDeSommelier(){
        if(this.premium){
            return true
        }
        else{
            return false
        }
    }

    
    esEnPeriodoFecha(desde:string, hasta:string){
        const fecha = new Date(this.fechaResena)
        const desdeEnDate = new Date(desde)
        const hastaEnDate = new Date(hasta)

        if(fecha >= desdeEnDate && fecha <= hastaEnDate){
            return true
        }else{
            return false
        }
    }

}