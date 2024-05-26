import { Vino } from "./vino";
// interface Periodo {
//     desde: Date;
//     hasta: Date
// }
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
        for(let i=0; i< vinos.length; i ++){
            let puntajes = vinos[i].conocerResenasEnPeriodo(desde, hasta)
            if(puntajes.length === 0){
                console.error('No hay resenas de someelier en el periodo indicado, para el vino seleccionado')
            }
            let promedio = this.calcularPromCalificacionPorSommelier(puntajes)

            const nombreVino = vinos[i].getNombre()
            const precioSugeridoVino = vinos[i].getPrecioSugerido()

            //terminar de implementar las relaciones esas feas de pis provincia region
            vinos[i].buscarDatosBodega()
            const varietales = vinos[i].buscarVarietal()
        }

    }

    calcularPromCalificacionPorSommelier(puntajes:number[]){
        let sumatoria = puntajes.reduce((sum, current) => sum + current, 0)
        let promedio = sumatoria/ puntajes.length
        return promedio
    }

    ordenarVinosPorCalificacion(){

    }


    generarReporte(){}
}