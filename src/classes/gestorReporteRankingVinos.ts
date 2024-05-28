import { Reporte } from "../main.js";
import { Vino } from "./vino.js";

// contrato de la estructura que se devuelve de los vinos con los datos necesarios para mostrarlo en pantalla/excel
interface RegionProvinciaPais {
    region: string;
    provincia?: string;  // Asumiendo que tal vez también quieras tener una propiedad opcional de provincia
    pais?: string;       // Asumiendo que tal vez también quieras tener una propiedad opcional de país
}

interface DatosBodega {
    nombreBodega: string;
    regionProvinciaPais: RegionProvinciaPais;
}

interface RegionProvinciaPais {
    region: string;
}
export interface VinoEncontrado {
    nombreVino: string;
    promedioSomm: number;
    promedioGral: number;
    precioSugeridoVino: number;
    datosBodega: DatosBodega;
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

    validarPeriodo(desde:string, hasta:string) {
        const fechaActual = new Date();
        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        if (fechaDesde > fechaHasta || fechaActual < fechaDesde || fechaActual < fechaHasta){
          console.log('Fechas invalidas');
        }else{
          console.log('Las fechas son validas');
        }
      }

    tomarTipoResena() {
    }

    tomarTipoVisualizacion() {
    }
    tomarConfirmacionGenerarReporte(datosReporte:Reporte, vinosArray:Vino[]) {
        const vinosEncontrados =  this.buscarVinosEnPeriodoConResenas(datosReporte.fechaDesde, datosReporte.fechaHasta, datosReporte.tipoResena, vinosArray)
        const topDiez = this.ordenarVinosPorCalificacion(vinosEncontrados)
        return topDiez
    }

    buscarVinosEnPeriodoConResenas(desde: string, hasta: string, tipoResena: string, vinos: Vino[]) {
        let vinosEncontrados: VinoEncontrado[] = []
        console.log(JSON.stringify(vinosEncontrados))

        for (let i = 0; i < vinos.length; i++) {
            // la variable puntajes es de los sommelier. El puntaje gral, de los somm, amigos, normal
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta)
            let puntajesGrales = vinos[i].conocerResenasEnPeriodoGral(desde, hasta)
            if (puntajes.length === 0) {
                continue
            }
            // me fijo si el tipo de resena es uno, porque ese es el valor que se definio para el sommelier en los values. del form del html VER
            // if(tipoResena === '1'){
                const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes)
            // }
            const promedioGral = this.calcularPromCalificacionGeneral(puntajesGrales)

            const nombreVino = vinos[i].getNombre()
            const precioSugeridoVino = vinos[i].getPrecioSugerido()

            const datosBodega = vinos[i].buscarDatosBodega()
            // estructura ---> {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            const varietales = vinos[i].buscarVarietal()
            // estructura --->[desc1, desc2, desc3]

            const datosVino = { nombreVino, promedioSomm,promedioGral, precioSugeridoVino, datosBodega, varietales }
            vinosEncontrados.push(datosVino)

        }
        console.log(JSON.stringify(vinosEncontrados))
        if(vinosEncontrados.length === 0){
            this.informarSituacion("No se encontraron vinos con resena de sommelier")
        }
        return vinosEncontrados
    }

    calcularPromCalificacionPorSommelier(puntajes: number[]) {
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0)
        let promedio = (sumatoria / puntajes.length)
        return promedio
    }

    calcularPromCalificacionGeneral(puntajesGral:number[]){
        let sumatoria = puntajesGral.reduce((sum, current) => sum + current, 0)
        let promedio = (sumatoria / puntajesGral.length)

        return promedio
    }

    ordenarVinosPorCalificacion(vinosEncontrados: VinoEncontrado[]) {
        let vinosOrdenados = vinosEncontrados.sort((a, b) => b.promedioSomm - a.promedioSomm)
        console.log('Cantidad vinos encontrados:', vinosOrdenados.length)
        let topDiez = vinosOrdenados.splice(0, 10)
        return topDiez
    }

    generarReporte() {
        // deberia haber un metodo de generarReporteTop10 de la pantalla del excel
    }

    // ALTERNATIVA UNO
    tomarCancelacionGenerarReporte(){
        console.error('Se cancelo la busqueda del top 10 de vinos')
        this.registrarCancelacion()
    }
    registrarCancelacion(){
        console.error('Se registro la cancelacion del top 10 vinos')
    }

      // ALTERNATIVA DOS
    informarSituacion(msj:string){
        console.log(msj)
    }
    tomarConfirmacionDeLectura(){
        this.registrarCancelacion()
    }
}