"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
// class Formulario{
//     fechaDesde: string;
//     fechaHasta: string;
//     tipoResena: string;
//     formaVisualizacion: string;
//     constructor(fechaDesde: string, fechaHasta: string, tipoResena: string, formaVisualizacion: string){
//         this.fechaDesde = fechaDesde
//         this.fechaHasta = fechaHasta
//         this.tipoResena = tipoResena
//         this.formaVisualizacion = formaVisualizacion
//         let confirmarBtn = document.getElementById('confirmar')
//         confirmarBtn?.addEventListener('click', (e: Event) => {
//             return Formulario.validacionFecha(this.fechaDesde, this.fechaHasta)
//         });
//     }
//     public static validacionFecha(fechaDesde: string, fechaHasta: string){
//         if (fechaDesde > fechaHasta) {
//             alert('La Fecha Hasta no puede ser Menor a la Fecha Desde')
//         } 
//     }
// }
function validacionFecha(fechaDesde, fechaHasta) {
    if (fechaDesde > fechaHasta) {
        alert('La Fecha Hasta no puede ser Menor a la Fecha Desde');
    }
}
// const botonConfirmar = document.getElementById('confirmarGeneracionReporte')!
const form = document.getElementById('reporteForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let fechaDesde = document.getElementById('fechaDesde').value;
    let fechaHasta = document.getElementById('fechaHasta').value;
    let tipoResena = document.getElementById('tipoResena').value;
    let formaVisualizacion = document.getElementById('tipoVisualizacion').value;
    validacionFecha(fechaDesde, fechaHasta);
    // let reporte = new Formulario(fechaDesde, fechaHasta, tipoResena, formaVisualizacion)
    const reporte = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        tipoResena: tipoResena,
        formaVisualizacion: formaVisualizacion
    };
    console.log(reporte);
    (0, main_1.tomarConfirmacionGenerarReporte)(reporte);
});
