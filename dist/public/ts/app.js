import { tomarConfirmacionGenerarReporte, tomarCancelacionGenerarReporte } from "../../main.js";
function validacionFecha(fechaDesde, fechaHasta) {
    if (fechaDesde > fechaHasta) {
        alert('La Fecha Hasta no puede ser Menor a la Fecha Desde');
    }
}
const form = document.getElementById('reporteForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let fechaDesde = document.getElementById('fechaDesde').value;
    let fechaHasta = document.getElementById('fechaHasta').value;
    let tipoResena = document.getElementById('tipoResena').value;
    let formaVisualizacion = document.getElementById('tipoVisualizacion').value;
    validacionFecha(fechaDesde, fechaHasta);
    const reporte = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        tipoResena: tipoResena,
        formaVisualizacion: formaVisualizacion
    };
    console.log(reporte);
    const vec = tomarConfirmacionGenerarReporte(reporte);
    generarTablaVinos(vec);
    console.log(vec);
});
function generarTablaVinos(vinos) {
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
            const varietales = vino.varietales.join(', ');
            const datosBodega = vino.datosBodega;
            const Region = datosBodega.regionProvinciaPais;
            tablaHTML += `
                <tr>
                    <td>${vino.nombreVino}</td>
                    <td>${vino.promedioSomm}</td>
                    <td>${vino.promedioGral}</td>
                    <td>$${vino.precioSugeridoVino}</td>
                    <td>${datosBodega.nombreBodega}</td>
                    <td>${varietales}</td>
                    <td>${Region.region}</td>
                    <td>${Region.provincia ?? 'N/A'}</td>
                    <td>${Region.pais ?? 'N/A'}</td>
                </tr>
            `;
        });
        tablaHTML += '</tbody></table>';
        tablaContainer.innerHTML = tablaHTML;
    }
    else {
        console.error('No se encontró ningún elemento con el id "tablaVinos"');
    }
}
const cancelarGeneracionReporteButton = document.getElementById('cancelarGeneracionReporte');
const errorPopup = document.getElementById('errorPopup');
cancelarGeneracionReporteButton.addEventListener('click', (e) => {
    e.preventDefault();
    tomarCancelacionGenerarReporte();
    errorPopup.style.display = 'block';
});
