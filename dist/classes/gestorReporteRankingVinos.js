export class GestorReporteRankingVinos {
    // a esta funcion no la use, creo que deberia borrarlo pero zzzz
    vinos;
    constructor(vinos) {
        this.vinos = vinos;
    }
    generarRankingVinos() {
        // se supone que este metodo es el triggereado por el usuario en el momento que se ejecuta el boton de generar ranking de vinos
        // quisiera impleemntar aca un window.replace, como para decir que hace algo, pero sinceramente descnozco que tanto romperia la cabeza hacer eso
    }
    validarPeriodo(desde, hasta) {
        const fechaActual = new Date();
        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        if (fechaDesde > fechaHasta || fechaActual < fechaDesde || fechaActual < fechaHasta) {
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
        // se supone que toma el tipo de visualizacion
    }
    tomarConfirmacionGenerarReporte(datosReporte, vinosArray) {
        const vinosEncontrados = this.buscarVinosEnPeriodoConResenas(datosReporte.fechaDesde, datosReporte.fechaHasta, datosReporte.tipoResena, vinosArray);
        const topDiez = this.ordenarVinosPorCalificacion(vinosEncontrados);
        return topDiez;
    }
    buscarVinosEnPeriodoConResenas(desde, hasta, tipoResena, vinos) {
        let vinosEncontrados = [];
        console.log(JSON.stringify(vinosEncontrados));
        for (let i = 0; i < vinos.length; i++) {
            // la variable puntajes es de los sommelier. El puntaje gral, de los somm, amigos, normal
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta);
            let puntajesGrales = vinos[i].conocerResenasEnPeriodoGral(desde, hasta);
            if (puntajes.length === 0) {
                console.error('no se encontraron vinos para el periodo seleccionado');
                continue;
            }
            // me fijo si el tipo de resena es uno, porque ese es el valor que se definio para el sommelier en los values. del form del html VER
            // if(tipoResena === '1'){
            const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes);
            // }
            const promedioGral = this.calcularPromCalificacionGeneral(puntajesGrales);
            const nombreVino = vinos[i].getNombre();
            const precioSugeridoVino = vinos[i].getPrecioSugerido();
            const datosBodega = vinos[i].buscarDatosBodega();
            if (!datosBodega) {
                // hacer un alert que 
                // noSeEncuentranBodegasRegistradas()
            }
            // estructura ---> {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            const varietales = vinos[i].buscarVarietal();
            // estructura --->[desc1, desc2, desc3]
            const datosVino = { nombreVino, promedioSomm, promedioGral, precioSugeridoVino, datosBodega, varietales };
            vinosEncontrados.push(datosVino);
        }
        console.log(JSON.stringify(vinosEncontrados));
        return vinosEncontrados;
    }
    calcularPromCalificacionPorSommelier(puntajes) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0);
        let promedio = (sumatoria / puntajes.length);
        console.log('sumatoria', sumatoria, 'promedio somm', promedio);
        return promedio;
    }
    calcularPromCalificacionGeneral(puntajesGral) {
        let sumatoria = puntajesGral.reduce((sum, current) => sum + current, 0);
        let promedio = (sumatoria / puntajesGral.length);
        console.log('sumatoria', sumatoria, 'promedio gral', promedio);
        return promedio;
    }
    ordenarVinosPorCalificacion(vinosEncontrados) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => b.promedioSomm - a.promedioSomm);
        console.log('vinosOrdenados', vinosOrdenados.length);
        let topDiez = vinosOrdenados.splice(0, 10);
        return topDiez;
    }
    generarReporte() {
        // deberia haber un metodo de generarReporteTop10 de la pantalla del excel
    }
    // ALTERNATIVA UNO
    tomarCancelacionGenerarReporte() {
    }
    registrarCancelacion() {
    }
    // ALTERNATIVA DOS
    informarSituacion() {
    }
    tomarConfirmacionDeLectura() {
        this.registrarCancelacion();
    }
}
