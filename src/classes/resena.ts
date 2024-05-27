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

    
    parseDate(dateString: string) {
        // Divide la cadena de fecha en día, mes y año
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Los meses en JavaScript van de 0 a 11
        const year = parseInt(parts[2], 10);

        // Crea un nuevo objeto Date con los componentes descompuestos
        return new Date(year, month, day);
    }
    esEnPeriodoFecha(desde:string, hasta:string){
        const fecha = new Date(this.fechaResena)
        const desdeEnDate = this.parseDate(desde)
        const hastaEnDate = this.parseDate(hasta)

        if(fecha >= desdeEnDate && fecha <= hastaEnDate){
            return true
        }else{
            return false
        }
    }

}