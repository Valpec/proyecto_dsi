import { Reporte } from "../main.js";
import { Vino } from "./vino.js";

// contrato de la estructura que se devuelve de los vinos con los datos necesarios para mostrarlo en pantalla/excel
export interface VinoEncontrado {
    nombreVino: string;
    promedioSomm: number;
    precioSugeridoVino: number;
    datosBodega: object;
    varietales: string[];
}
export class GestorReporteRankingVinos<T> {
    // a esta funcion no la use, creo que deberia borrarlo pero zzzz
    private vinos: T[];
    constructor(vinos: T[],) {
        this.vinos = vinos;
    }

    generarRankingVinos() {
        // se supone que este metodo es el triggereado por el usuario en el momento que se ejecuta el boton de generar ranking de vinos
        // quisiera impleemntar aca un window.replace, como para decir que hace algo, pero sinceramente descnozco que tanto romperia la cabeza hacer eso
    }

    // las funciones parseDate y validar periodo son porque la fecha ingresada es en formato 'dd/mm/yyyy', y para usar el Date y poder comparar, se necesita 'yyyy/mm/dd'
    parseDate(dateString: string) {
        // Divide la cadena de fecha en día, mes y año
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Los meses en JavaScript van de 0 a 11
        const year = parseInt(parts[2], 10);

        // Crea un nuevo objeto Date con los componentes descompuestos
        return new Date(year, month, day);
    }

    validarPeriodo(desde: string, hasta: string) {
        const fechaActual = new Date()
        const fechaDesde = this.parseDate(desde)
        const fechaHasta = this.parseDate(hasta)

        const diferencia1 = fechaDesde.getTime() - fechaHasta.getTime()
        const diferencia2 = fechaActual.getTime() - fechaDesde.getTime()


        if (diferencia1 > 1 || diferencia2 < 1) {
            console.log('Fechas invalidas')

        } else {
            console.log('Las fechas son validas')
        }

    }

    tomarTipoResena() {
        // guarda la var que le pasa el user a traves de la pantalla
    }

    tomarTipoVisualizacion() {
        // se supone que toma el tipo de visualizacion
    }
    tomarConfirmacionGenerarReporte(datosReporte:Reporte, vinosArray:Vino[]) {
        this.buscarVinosEnPeriodoConResenas(datosReporte.fechaDesde, datosReporte.fechaHasta, datosReporte.tipoResena, vinosArray)
    }

    buscarVinosEnPeriodoConResenas(desde: string, hasta: string, tipoResena: string, vinos: Vino[]) {
        let vinosEncontrados: VinoEncontrado[] = []
        console.log(JSON.stringify(vinosEncontrados))
        for (let i = 0; i < vinos.length; i++) {
            console.log('fechas', desde, hasta)
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta)
            if (puntajes.length === 0) {
                console.error('No hay resenas de someelier en el periodo indicado, para el vino seleccionado')
            }
            console.log('lso putnajes', puntajes)
            // me fijo si el tipo de resena es uno, porque ese es el valor que se definio para el sommelier en los values. del form del html
            // DEBERIA !!!! PERO ZZZZZZ
            // if(tipoResena === '1'){
                const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes)
            // }

            const nombreVino = vinos[i].getNombre()
            const precioSugeridoVino = vinos[i].getPrecioSugerido()

            const datosBodega = vinos[i].buscarDatosBodega()
            // estructura ---> {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            const varietales = vinos[i].buscarVarietal()
            // estructura --->[desc1, desc2, desc3]

            //VER, creo que daria problema el asignar con el indicice si es que hay sin puntaje.
            const datosVino = { nombreVino, promedioSomm, precioSugeridoVino, datosBodega, varietales }
            vinosEncontrados[i] = datosVino

        }
        console.log(JSON.stringify(vinosEncontrados))

        return vinosEncontrados
    }

    calcularPromCalificacionPorSommelier(puntajes: number[]) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0)
        let promedio = sumatoria / puntajes.length
        return promedio
    }

    ordenarVinosPorCalificacion(vinosEncontrados: VinoEncontrado[]) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => a.promedioSomm - b.promedioSomm)
        // COMO NO HAGO EL DE BUSCAR EL PROMEDIO DE CALIFICACION GENERAL, SACO DE ACA EL TOP 10 !!!!!!
        let topDiez = vinosOrdenados.splice(0, 10)
        return topDiez
    }

    // DEBERIA HACER LA BUSQUEDA DE LA CALIFICACION POR GENERAL< NO SOMMELIER???????? VER
    generarReporte() {
        // deberia haber un metodo de generarReporteTop10 de la pantalla del excel
                    
    }

}