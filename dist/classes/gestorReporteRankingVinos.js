import { IteradorVino } from "./iteradorVino.js";
export class GestorReporteRankingVinos {
    // private vinos: T[];
    vinos;
    constructor(vinos) {
        this.vinos = vinos;
    }
    generarRankingVinos() {
        // se supone que este metodo es el triggereado por el usuario en el momento que se ejecuta el boton de generar ranking de vinos
        // quisiera impleemntar aca un window.replace, como para decir que hace algo, pero sinceramente descnozco que tanto romperia la cabeza hacer eso
    }
    //dos. a esta creo qu no la uso, la validacion la hace el front
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
    //no tiene codigo, por el camino feliz se estima que solo se toma excel, y que el tipo de resena es de somm
    // dos. agregar codigo para id el tipo de resena y el de visualizacion
    tomarTipoResena() { }
    tomarTipoVisualizacion() { }
    tomarConfirmacionGenerarReporte(datosReporte, vinosArray) {
        // const vinosEncontrados =  this.buscarVinosEnPeriodoConResenas(datosReporte.fechaDesde, datosReporte.fechaHasta, datosReporte.tipoResena, vinosArray)
        // dos. PARA ITERADOR ES ESTE
        const vinosEncontrados = this.buscarVinosEnPeriodoConResenas(datosReporte, vinosArray);
        const topDiez = this.ordenarVinosPorCalificacion(vinosEncontrados);
        // const topDiez: [] = []
        return topDiez;
    }
    // buscarVinosEnPeriodoConResenas(desde: string, hasta: string, tipoResena: string, vinos: Vino[]) {
    //     let vinosEncontrados: VinoEncontrado[] = []
    //     console.log(JSON.stringify(vinosEncontrados))
    //     for (let i = 0; i < vinos.length; i++) {
    //         // la variable puntajes es de los sommelier. El puntaje gral, de los somm, amigos, normal. Son arrays de puntajes
    //         let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta)
    //         let puntajesGrales = vinos[i].conocerResenasEnPeriodoGral(desde, hasta)
    //         if (puntajes.length === 0) {
    //             continue
    //         }
    //         // me fijo si el tipo de resena es uno, porque ese es el valor que se definio para el sommelier en los values. del form del html VER
    //         // CAMBIAR -- si hay que agregar este tipo de re
    //         // if(tipoResena === '1'){
    //         const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes)
    //         // }
    //         const promedioGral = this.calcularPromCalificacionGeneral(puntajesGrales)
    //         const nombreVino = vinos[i].getNombre()
    //         const precioSugeridoVino = vinos[i].getPrecioSugerido()
    //         const datosBodega = vinos[i].buscarDatosBodega()
    //         // estructura ---> {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
    //         const varietales = vinos[i].buscarVarietal()
    //         // estructura --->[desc1, desc2, desc3]
    //         const datosVino = { nombreVino, promedioSomm, promedioGral, precioSugeridoVino, datosBodega, varietales }
    //         vinosEncontrados.push(datosVino)
    //     }
    //     console.log(JSON.stringify(vinosEncontrados))
    //     if (vinosEncontrados.length === 0) {
    //         this.informarSituacion("No se encontraron vinos con resena de sommelier")
    //     }
    //     return vinosEncontrados
    // }
    calcularPromCalificacionPorSommelier(puntajes) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0);
        let promedio = (sumatoria / puntajes.length);
        return promedio;
    }
    calcularPromCalificacionGeneral(puntajesGral) {
        let sumatoria = puntajesGral.reduce((sum, current) => sum + current, 0);
        let promedio = (sumatoria / puntajesGral.length);
        return promedio;
    }
    ordenarVinosPorCalificacion(vinosEncontrados) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => b.promedioSomm - a.promedioSomm);
        console.log('Cantidad vinos encontrados:', vinosOrdenados.length);
        let topDiez = vinosOrdenados.splice(0, 10);
        return topDiez;
    }
    generarReporte() {
        // deberia haber un metodo de generarReporteTop10 de la pantalla del excel
    }
    // ALTERNATIVA UNO
    tomarCancelacionGenerarReporte() {
        console.error('Se cancelo la busqueda del top 10 de vinos');
        this.registrarCancelacion();
    }
    registrarCancelacion() {
        console.error('Se registro la cancelacion del top 10 vinos');
    }
    // ALTERNATIVA DOS
    informarSituacion(msj) {
        console.log(msj);
    }
    tomarConfirmacionDeLectura() {
        this.registrarCancelacion();
    }
    //Iterator
    crearIterador(vinosArray) {
        return new IteradorVino(vinosArray);
    }
    // tipoResena deberia ir ...?, estaba como default por el cu pero hay que agrgarolo
    buscarVinosEnPeriodoConResenas(datosReporte, vinosArray) {
        let vinosEncontrados = [];
        let iteradorVino = this.crearIterador(vinosArray);
        iteradorVino.primero();
        while (iteradorVino.haTerminado() == false) {
            let vinoActual = iteradorVino.elementoActual();
            //modificar la funcion para que no devuelva el puntaje, si no que las de a las res
            // resenas en periodo es un objeto de arrays {puntajesGen, puntajesSOmm}
            let resenasEnPeriodo = vinoActual.conocerResenasEnPeriodo(datosReporte.fechaDesde, datosReporte.fechaHasta);
            if (resenasEnPeriodo.puntajesSomm.length === 0) {
                iteradorVino.siguiente();
                continue;
            }
            // VLAIDAR TIPO RESENA A A A A
            const promedioSomm = this.calcularPromCalificacionPorSommelier(resenasEnPeriodo.puntajesSomm);
            const promedioGral = this.calcularPromCalificacionGeneral(resenasEnPeriodo.puntajesGen);
            const nombreVino = vinoActual.getNombre();
            const precioSugeridoVino = vinoActual.getPrecioSugerido();
            const varietales = vinoActual.buscarVarietal();
            const datosBodega = vinoActual.buscarDatosBodega();
            const datosVino = { nombreVino, promedioSomm, promedioGral, precioSugeridoVino, datosBodega, varietales };
            vinosEncontrados.push(datosVino);
            iteradorVino.siguiente();
        }
        if (vinosEncontrados.length === 0) {
            this.informarSituacion("no se encontraron vinos con resenas de sommelier");
        }
        console.log(JSON.stringify(vinosEncontrados));
        return vinosEncontrados;
    }
}
