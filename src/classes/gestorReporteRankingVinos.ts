import { Vino } from "./vino";
// interface Periodo {
//     desde: Date;
//     hasta: Date
// }

interface VinoEncontrado {
    nombreVino: string;
    promedioSomm: number;
    precioSugeridoVino: number;
    datosBodega: object;
    varietales: string[];
}
export class GestorReporteRankingVinos<T> {
    // private vinos: T[] = [];
    private vinos: T[];
    // private vinosDeSommelier: string[]

    constructor(vinos:T[],){
        this.vinos = vinos;

    }
    
  
    generarRankingVinos(){

    }
    validarPeriodo(fechaDesde:string, fechaHasta:string){
        const fechaActual = new Date()
        const desde = new Date(fechaDesde)
        const hasta = new Date(fechaHasta)
        // deberia antes validar que el periodo ingresado sea una fecha valida, no? que respete el formato pedido?? o lo hace el front ??
        // const periodo = {
        //     desde: desde,
        //     hasta: hasta
        // }
        // const periodo= 
        if (desde > fechaActual || desde > hasta ){
            // throw new Error('Fechas invalidas')
            console.error('Fechas invalidas')

        }
        console.log('Las fechas son validas')
        
        // return periodo
    }


    tomarTipoResena(){
        // guarda la var que le pasa el user a traves de la pantalla
    }
    buscarFormasVisualizacion(){
        // se suponeq ue ahy un array con los distintos tipos de validacion, pero a este metodo lo sacamos del coso
    }
    tomarTipoVisualizacion(){
        
    }
    tomarConfirmacionGenerarReporte(){

    }
    // periodo deberia ser obj con las dos fechas validadas? array por el mometno
    buscarVinosEnPeriodoConResenas(desde: string, hasta:string, tipoResena:string, vinos:Vino[]){
        let vinosEncontrados:VinoEncontrado[] = []

        for(let i=0; i< vinos.length; i ++){
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta)
            if(puntajes.length === 0){
                console.error('No hay resenas de someelier en el periodo indicado, para el vino seleccionado')
            }
            const promedioSomm = this.calcularPromCalificacionPorSommelier(puntajes)

            const nombreVino = vinos[i].getNombre()
            const precioSugeridoVino = vinos[i].getPrecioSugerido()

           
            const datosBodega = vinos[i].buscarDatosBodega()
            // {nombreBodega: aa, regionProvinciaPais: {region:aa, provincia: aa, pais:aa}}
            const varietales = vinos[i].buscarVarietal()
            // [desc1, desc2, desc3]


            //VER, creo que datia problema el asignar con el indicice si es que hay sin puntaje.
            const datosVino = {nombreVino, promedioSomm, precioSugeridoVino, datosBodega, varietales}
            vinosEncontrados[i] = datosVino
        }
        return vinosEncontrados

    }

    calcularPromCalificacionPorSommelier(puntajes:number[]){
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0)
        let promedio = sumatoria/ puntajes.length
        return promedio
    }

    ordenarVinosPorCalificacion(vinosEncontrados:VinoEncontrado[]){
        let vinosOrdenados = vinosEncontrados.sort((a,b) => a.promedioSomm - b.promedioSomm)
        // COMO NO HAGO EL DE BUSCAR EL PROMEDIO DE CALIFICACION GENERAL, SACO DE ACA EL TOP 10 !!!!!!
        let topDiez = vinosOrdenados.splice(0,10)
        return topDiez
    }


    generarReporte(){}
}