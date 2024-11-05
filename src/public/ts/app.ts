import { tomarConfirmacionGenerarReporte, Reporte, tomarCancelacionGenerarReporte } from "../../main.js";

import {VinoEncontrado} from "../../classes/gestorReporteRankingVinos.js"


function validacionFecha(fechaDesde: string, fechaHasta: string){
    const fechaDesdeObj = new Date(fechaDesde);
    const fechaHastaObj = new Date(fechaHasta);
    const errorFecha = document.getElementById('errorFecha') as HTMLElement;
    console.log(fechaDesde, fechaHasta, fechaDesdeObj, fechaHastaObj)
    if (fechaDesdeObj > fechaHastaObj) {
        errorFecha!.style.display = 'inline'
        return false; 
    }
    return true;
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
    console.log(vec)

    const msjError = document.getElementById('msjError') as HTMLElement

    if (vec.length > 0) {
        generarTablaVinos(vec)
    }else{
        msjError.style.display = 'block'
    }

});

function generarTablaVinos(vinos:VinoEncontrado[]){

    const tablaContainer = document.getElementById('tablaVinos');
    if (tablaContainer) {
        let tablaHTML = '<table class="table table-striped">';
        tablaHTML += `
            <thead>
                <tr>
                    <th>Nombre Vino</th>
                    <th>Promedio Sommelier</th>
                    <th>Promedio General</th>
                    <th>Precio Sugerido</th>
                    <th>Bodega</th>
                    <th>Varietales</th>
                    <th>Region</th>
                    <th>Provincia<th>
                    <th>Pais</th>
                </tr>
            </thead>
            <tbody>
        `;

        vinos.forEach(vino => {
            const varietales = vino.varietales.join(', ')
            const datosBodega = vino.datosBodega
            const Region = datosBodega.regionProvinciaPais
            tablaHTML += `
                <tr>
                    <td>${vino.nombreVino}</td>
                    <td>${vino.promedioSomm}</td>
                    <td>${vino.promedioGral}</td>
                    <td>$${vino.precioSugeridoVino}</td>
                    <td>${datosBodega.nombreBodega}</td>
                    <td>${varietales}</td>
                    <td>${Region.region}</td>
                    <td>${Region.provincia ?? 'N/A' }</td>
                    <td>${Region.pais ?? 'N/A'}</td>
                </tr>
            `;
        });

        tablaHTML += '</tbody></table>';
        tablaContainer.innerHTML = tablaHTML;

    } else {
        console.error('No se encontró ningún elemento con el id "tablaVinos"');
    }

}

// / Código para el boton de cancelar la operación.
// Código para el botón de cancelar la operación
window.addEventListener("DOMContentLoaded", () => {
    const botonCancelar = document.getElementById("cancelarGeneracionReporte") as HTMLButtonElement;
    const formulario = document.getElementById("reporteForm") as HTMLElement;
    const msjCancelacion = document.getElementById("msjCancelacion") as HTMLElement;
    const volverAlInicio = document.getElementById("volverInicio") as HTMLButtonElement;
    const tablaContainer = document.getElementById("tablaVinos") as HTMLElement;

    // Verificar que los elementos existen antes de añadir listeners
    if (botonCancelar && formulario && msjCancelacion && volverAlInicio) {
        // Asegurarse de que el mensaje de cancelación esté oculto inicialmente
        msjCancelacion.style.display = "none"

        botonCancelar.addEventListener("click", () => {
            tablaContainer.style.display= "none"
            formulario.style.display = "none" // Oculta el formulario
            // formulario.classList.add("oculto"); //oculata el form
            msjCancelacion.style.display = "block" // Muestra el mensaje de cancelación
        });

        volverAlInicio.addEventListener("click", () => {
            window.location.href = "index.html" // Redirige al índice
        });
    } else {
        console.error("Error: Uno o más elementos necesarios no se encontraron en el DOM.")
    }
});