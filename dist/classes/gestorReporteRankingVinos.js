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
    // las funciones parseDate y validar periodo son porque la fecha ingresada es en formato 'dd/mm/yyyy', y para usar el Date y poder comparar, se necesita 'yyyy/mm/dd'
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
            console.log('fechas', desde, hasta);
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta);
            let puntajesGrales = vinos[i].conocerResenasEnPeriodoGral(desde, hasta);
            if (puntajes.length === 0) {
                console.error('No hay resenas de someelier en el periodo indicado, para el vino seleccionado');
            }
            console.log('lso putnajes', puntajes);
            // me fijo si el tipo de resena es uno, porque ese es el valor que se definio para el sommelier en los values. del form del html VER
            // if(tipoResena === '1'){
            const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes);
            // }
            const promedioGral = this.calcularPromCalificacionGeneral(puntajesGrales);
            console.log(promedioSomm);
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
            //VER, creo que daria problema el asignar con el indicice si es que hay sin puntaje.
            const datosVino = { nombreVino, promedioSomm, promedioGral, precioSugeridoVino, datosBodega, varietales };
            vinosEncontrados[i] = datosVino;
        }
        console.log(JSON.stringify(vinosEncontrados));
        return vinosEncontrados;
    }
    calcularPromCalificacionPorSommelier(puntajes) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0);
        let promedio = sumatoria / puntajes.length;
        // console.log('sumatoria',sumatoria)
        // console.log('puntajes',puntajes.length)
        return promedio;
    }
    ordenarVinosPorCalificacion(vinosEncontrados) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => a.promedioSomm - b.promedioSomm);
        // COMO NO HAGO EL DE BUSCAR EL PROMEDIO DE CALIFICACION GENERAL, SACO DE ACA EL TOP 10 !!!!!!
        let topDiez = vinosOrdenados.splice(0, 10);
        return topDiez;
    }
    calcularPromCalificacionGeneral(puntajesGral) {
        let sumatoria = puntajesGral.reduce((sum, current) => sum + current, 0);
        let promedio = sumatoria / puntajesGral.length;
        // console.log('sumatoria',sumatoria)
        // console.log('puntajes',puntajes.length)
        return promedio;
    }
    // DEBERIA HACER LA BUSQUEDA DE LA CALIFICACION POR GENERAL< NO SOMMELIER???????? VER
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
