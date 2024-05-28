import { tomarConfirmacionGenerarReporte } from "../../pantallaGenerarRankingVinos.js";
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
    // let reporte = new Formulario(fechaDesde, fechaHasta, tipoResena, formaVisualizacion)
    const reporte = {
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        tipoResena: tipoResena,
        formaVisualizacion: formaVisualizacion
    };
    console.log(reporte);
    tomarConfirmacionGenerarReporte(reporte);
    //     const tablaContainer = document.getElementById('tablaVinos');
    //     let tablaHTML = '<table class="table table-striped">';
    //     tablaHTML += `
    //         <thead>
    //             <tr>
    //                 <th>Nombre</th>
    //                 <th>Calificación</th>
    //                 <th>Sommelier</th>
    //                 <th>Precio</th>
    //                 <th>Bodega</th>
    //                 <th>Varietal</th>
    //                 <th>Región</th>
    //                 <th>País</th>
    //                 <th>Fecha</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //     `;
    //     vinosFiltrados.forEach(vino => {
    //         tablaHTML += `
    //             <tr>
    //                 <td>${vino.nombre}</td>
    //                 <td>${vino.calificacion}</td>
    //                 <td>${vino.esSommelier ? 'Sí' : 'No'}</td>
    //                 <td>${vino.precio}</td>
    //                 <td>${vino.bodega}</td>
    //                 <td>${vino.varietal.join(', ')}</td>
    //                 <td>${vino.region}</td>
    //                 <td>${vino.pais}</td>
    //                 <td>${vino.fecha}</td>
    //             </tr>
    //         `;
    //     });
    //     tablaHTML += '</tbody></table>';
    //     tablaContainer.innerHTML = tablaHTML;
    //     // Log para verificar que la tabla se ha generado
    //     console.log('Tabla generada:', tablaHTML);
});
