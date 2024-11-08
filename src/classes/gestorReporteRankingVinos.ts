import { Reporte } from "../public/ts/app.js";
import { IteradorVino } from "./iteradorVino.js";
import { Pais } from "./pais.js";
import { Provincia } from "./provincia.js";
import { Vino } from "./vino.js";

export class GestorReporteRankingVinos<T> {
    private vinos: Vino[]

    constructor(vinos: Vino[],) {
        this.vinos = vinos;
    }

    generarRankingVinos() {
        // se supone que este metodo es el triggereado por el usuario en el momento que se ejecuta el boton de generar ranking de vinos
        // lo hace el front
    }
    //dos. a esta creo qu no la uso, la validacion la hace el front
    validarPeriodo(desde: string, hasta: string) {
        const fechaActual = new Date();
        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        if (fechaDesde > fechaHasta || fechaActual < fechaDesde || fechaActual < fechaHasta) {
            console.log('Fechas invalidas');
        } else {
            console.log('Las fechas son validas');
        }
    }

    //no tiene codigo, de esto se encarga la pantalla y app.ts
    tomarTipoResena() { }
    tomarTipoVisualizacion() { }

    tomarConfirmacionGenerarReporte(datosReporte:Reporte, vinosArray:Vino[], provincias:Provincia[], paises:Pais[]) {
        const vinosEncontrados =  this.buscarVinosEnPeriodoConResenas(datosReporte, vinosArray, provincias, paises)

        const topDiez = this.ordenarVinosPorCalificacion(vinosEncontrados)
        return topDiez
    }

    // dos. estas dos funciones son iguales, le podria cambiar el nombre y hacer una sola, pero no seguiria analisis
    calcularPromCalificacionPorSommelier(puntajes: number[]) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0)
        let promedio = parseFloat((sumatoria / puntajes.length).toFixed(2))
        return promedio
    }

    calcularPromCalificacionGeneral(puntajesGral: number[]) {
        let sumatoria = puntajesGral.reduce((sum, current) => sum + current, 0)
        let promedio = parseFloat((sumatoria / puntajesGral.length).toFixed(2))

        return promedio
    }

    ordenarVinosPorCalificacion(vinosEncontrados: any) {
        let vinosOrdenados = vinosEncontrados.sort((a: any, b: any) => b.promedioSomm - a.promedioSomm)
        console.log('Cantidad vinos encontrados:', vinosOrdenados.length)
        let topDiez = vinosOrdenados.splice(0, 10)
        return topDiez
    }

    generarReporte() {
        // deberia haber un metodo de generarReporteTop10 de la pantalla del excel
    }

    // ALTERNATIVA UNO
    tomarCancelacionGenerarReporte() {
        console.error('Se cancelo la busqueda del top 10 de vinos')
        this.registrarCancelacion()
    }
    registrarCancelacion() {
        console.error('Se registro la cancelacion del top 10 vinos')
    }

    // ALTERNATIVA DOS
    informarSituacion(msj: string) {
        console.log(msj)
    }
    tomarConfirmacionDeLectura() {
        this.registrarCancelacion()
    }


    //Iterator
    crearIterador(vinosArray: Vino[]) {
        return new IteradorVino(vinosArray);
    }

   
    buscarVinosEnPeriodoConResenas(datosReporte: Reporte, vinosArray: Vino[], provincias: Provincia[], paises: Pais[]) {
        let vinosEncontrados = []
        
        let iteradorVino = this.crearIterador(vinosArray)

        iteradorVino.primero()
        while (iteradorVino.haTerminado() == false) {

            let vinoActual = iteradorVino.elementoActual()

            // resenas en periodo es un objeto de arrays {puntajesGen, puntajesSOmm}
            let resenasEnPeriodo = vinoActual.conocerResenasEnPeriodo(datosReporte.fechaDesde, datosReporte.fechaHasta)
            if(resenasEnPeriodo.puntajesSomm.length === 0){
                iteradorVino.siguiente()
                continue
            }

            const promedioSomm = this.calcularPromCalificacionPorSommelier(resenasEnPeriodo.puntajesSomm)
            const promedioGral = this.calcularPromCalificacionGeneral(resenasEnPeriodo.puntajesGen)

            const nombreVino = vinoActual.getNombre()
            const precioSugeridoVino = vinoActual.getPrecioSugerido()
            // estructura --->[desc1, desc2, desc3]
            const varietales = vinoActual.buscarVarietal()
            // estructura ---> {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            // DEPENDENCIA  = pasar array con provincias y array con pais
            const datosBodega = vinoActual.buscarDatosBodega(provincias, paises)

            const datosVino = {nombreVino, promedioSomm, promedioGral, precioSugeridoVino, datosBodega, varietales}
            vinosEncontrados.push(datosVino)

            iteradorVino.siguiente()
        }

        if(vinosEncontrados.length === 0){
            this.informarSituacion("no se encontraron vinos con resenas de sommelier")
        }
        console.log(JSON.stringify(vinosEncontrados))
        return vinosEncontrados

    }


}