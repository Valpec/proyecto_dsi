"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorReporteRankingVinos = void 0;
class GestorReporteRankingVinos {
    // private vinosDeSommelier: string[]
    constructor(vinos) {
        this.vinos = vinos;
    }
    generarRankingVinos() {
    }
    // validarPeriodo(fechaDesde:string, fechaHasta:string){
    //     // yyyy/mm/dd
    //     // dd/mm/yyyy
    //     const fechaActual = new Date()
    //         //2024-05-26T17:23:48.901Z
    //     const desde = new Date(fechaDesde)
    //     const hasta = new Date(fechaHasta)
    //     console.log(fechaDesde)
    //     console.log(fechaActual)
    //    console.log(desde, hasta)
    //     if (desde > fechaActual || desde > hasta ){
    //         console.error('Fechas invalidas')
    //     }
    //     console.log('Las fechas son validas')
    //     // return periodo
    // }
    parseDate(dateString) {
        // Divide la cadena de fecha en día, mes y año
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Los meses en JavaScript van de 0 a 11
        const year = parseInt(parts[2], 10);
        // Crea un nuevo objeto Date con los componentes descompuestos
        return new Date(year, month, day);
    }
    validarPeriodo(desde, hasta) {
        const fechaActual = new Date();
        const fechaDesde = this.parseDate(desde);
        const fechaHasta = this.parseDate(hasta);
        const diferencia1 = fechaDesde.getTime() - fechaHasta.getTime();
        console.log(diferencia1);
        const diferencia2 = fechaActual.getTime() - fechaDesde.getTime();
        console.log(diferencia2);
        if (diferencia1 > 1 || diferencia2 < 1) {
            console.log('Fechas invalidas');
        }
        else {
            console.log('Las fechas son validas');
        }
    }
    tomarTipoResena() {
        // guarda la var que le pasa el user a traves de la pantalla
    }
    tomarTipoVisualizacion() {
    }
    tomarConfirmacionGenerarReporte() {
    }
    // periodo deberia ser obj con las dos fechas validadas? array por el mometno
    buscarVinosEnPeriodoConResenas(desde, hasta, tipoResena, vinos) {
        let vinosEncontrados = [];
        for (let i = 0; i < vinos.length; i++) {
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta);
            if (puntajes.length === 0) {
                console.error('No hay resenas de someelier en el periodo indicado, para el vino seleccionado');
            }
            const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes);
            const nombreVino = vinos[i].getNombre();
            const precioSugeridoVino = vinos[i].getPrecioSugerido();
            const datosBodega = vinos[i].buscarDatosBodega();
            // {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            const varietales = vinos[i].buscarVarietal();
            // [desc1, desc2, desc3]
            //VER, creo que datia problema el asignar con el indicice si es que hay sin puntaje.
            const datosVino = { nombreVino, promedioSomm, precioSugeridoVino, datosBodega, varietales };
            vinosEncontrados[i] = datosVino;
        }
        return vinosEncontrados;
    }
    calcularPromCalificacionPorSommelier(puntajes) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0);
        let promedio = sumatoria / puntajes.length;
        return promedio;
    }
    ordenarVinosPorCalificacion(vinosEncontrados) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => a.promedioSomm - b.promedioSomm);
        // COMO NO HAGO EL DE BUSCAR EL PROMEDIO DE CALIFICACION GENERAL, SACO DE ACA EL TOP 10 !!!!!!
        let topDiez = vinosOrdenados.splice(0, 10);
        return topDiez;
    }
    generarReporte() { }
}
exports.GestorReporteRankingVinos = GestorReporteRankingVinos;
