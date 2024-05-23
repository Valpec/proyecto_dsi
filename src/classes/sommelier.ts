import { Usuario } from "./usuario";
import { Resena } from "./resena";
export class Sommelier {

    // que tipo?????? poara la fechaVal
    private fechaValidacion: string;
    private nombre: string;
    private notaPresentacion: string;
    private usuario: Usuario;
    private resena: Resena;


    constructor(fechaValidacion: string, nombre: string, notaPresentacion: string, usuario: Usuario, resena: Resena) {
        this.fechaValidacion = fechaValidacion;
        this.nombre = nombre;
        this.notaPresentacion = notaPresentacion;
        this.usuario = usuario;
        this.resena = resena;
    }
    conocerCertificaciones() {
    }
    validarSommelier() {
    }
      
}