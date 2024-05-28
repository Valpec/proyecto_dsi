import { tomarConfirmacionGenerarReporte, Reporte } from "../../main.js";

import {VinoEncontrado} from "../../classes/gestorReporteRankingVinos.js"
import { Vino } from "../../classes/vino.js";

function validacionFecha(fechaDesde: string, fechaHasta: string){
    if (fechaDesde > fechaHasta) {
        alert('La Fecha Hasta no puede ser Menor a la Fecha Desde')
    } 
}

const form = document.getElementById('reporteForm')!;

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let fechaDesde = (document.getElementById('fechaDesde') as HTMLInputElement).value;
    let fechaHasta = (document.getElementById('fechaHasta') as HTMLInputElement).value;
    let tipoResena = (document.getElementById('tipoResena') as HTMLOptionElement).value;
    let formaVisualizacion = (document.getElementById('tipoVisualizacion') as HTMLOptionElement).value
    validacionFecha(fechaDesde, fechaHasta);
    const reporte: Reporte = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        tipoResena: tipoResena,
        formaVisualizacion: formaVisualizacion
    };
    console.log(reporte)
    const vec = tomarConfirmacionGenerarReporte(reporte)
    generarTablaVinos(vec)
    console.log(vec)


});

function generarTablaVinos(vinos:VinoEncontrado[]){
    const tablaContainer = document.getElementById('tablaVinos');
    if (tablaContainer) {
        // Tu código para generar y agregar la tabla aquí
        let tablaHTML = '<table class="table table-striped">';
        tablaHTML += `
            <thead>
                <tr>
                    <th>Nombre Vino</th>
                    <th>Promedio Sommelier</th>
                    <th>Promedio General</th>
                    <th>Precio Sugerido</th>
                </tr>
            </thead>
            <tbody>
        `;

        vinos.forEach(vino => {
            tablaHTML += `
                <tr>
                    <td>${vino.nombreVino}</td>
                    <td>${vino.promedioSomm}</td>
                    <td>${vino.promedioGral}</td>
                    <td>${vino.precioSugeridoVino}$</td>
                </tr>
            `;
        });

        tablaHTML += '</tbody></table>';
        tablaContainer.innerHTML = tablaHTML;

    } else {
        console.error('No se encontró ningún elemento con el id "tablaVinos"');
    }

}