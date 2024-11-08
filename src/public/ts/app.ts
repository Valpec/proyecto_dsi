import { tomarConfirmacionGenerarReporte, tomarCancelacionGenerarReporte } from "../../main.js";

interface VinoEncontrado {
    nombreVino: string;
    promedioSomm: number;
    promedioGral: number;
    precioSugeridoVino: number;
    datosBodega: {
        nombreBodega: string,
        regionProvinciaPais: {
                region: string,
                pais?: string
        }
    };
    varietales: string[];
}
// la estructura que deben respetar los datos pasado como objeto del formulario del html al main
export interface Reporte {
    fechaDesde: string;
    fechaHasta: string;
    tipoResena: string;
    formaVisualizacion: string;
}

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

    let msjAlt = document.getElementById('msjAlt') as HTMLElement

    validacionFecha(fechaDesde, fechaHasta);
    const reporte: Reporte = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        tipoResena: tipoResena,
        formaVisualizacion: formaVisualizacion
    };
    if(tipoResena != '1' || formaVisualizacion != '1'){
        msjAlt!.style.display = 'inline'

    }

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

// Selecciona el botón de cancelar y los elementos que se ocultan o muestran
const botonCancelar = document.getElementById("cancelarGeneracionReporte") as HTMLButtonElement;
const formulario = document.getElementById("reporteForm") as HTMLElement;
const msjCancelacion = document.getElementById("msjCancelacion") as HTMLElement;
const volverAlInicio = document.getElementById("volverInicio") as HTMLButtonElement;
const tablaContainer = document.getElementById("tablaVinos") as HTMLElement;

if (botonCancelar && formulario && msjCancelacion && volverAlInicio && tablaContainer) {
    msjCancelacion.style.display = "none";

    botonCancelar.addEventListener("click", () => {
        console.log('Botón de cancelar presionado');
        formulario.style.display = "none";  
        tablaContainer.style.display = "none"; 
        msjCancelacion.style.display = "block"; 
    });

    volverAlInicio.addEventListener("click", () => {
        window.location.href = "index.html"; 
    });
} else {
    console.error("Error: Uno o más elementos necesarios no se encontraron en el DOM.");
}