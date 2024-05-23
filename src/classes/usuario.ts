export class Usuario {

    private contrasena: string;
    private nombre: string;
    private premium: boolean;
    // que tipo?????? poara la fechaHora

    constructor(contrasena: string, nombre: string, premium: boolean ) {
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.premium = premium;
    }
    esPremium() {
    }
    esTuUsuario() {
    }
    mostrarNombre() {
    }
    
}