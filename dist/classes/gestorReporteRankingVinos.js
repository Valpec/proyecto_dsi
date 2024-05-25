"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorReporteRankingVinos = void 0;
class GestorReporteRankingVinos {
    constructor(vinos) {
        this.vinos = vinos;
    }
    generarRankingVinos() {
    }
    validarPeriodo(fechaDesde, fechaHasta) {
        const fechaActual = new Date();
        const desde = new Date(fechaDesde);
        const hasta = new Date(fechaHasta);
        // deberia antes validar que el periodo ingresado sea una fecha valida, no? que respete el formato pedido?? o lo hace el front ??
        if (desde > fechaActual || desde > hasta) {
            // throw new Error('Fechas invalidas')
            console.error('Fechas invalidas');
        }
        console.log('Las fechas son validas');
    }
    tomarTipoResena() {
        // guarda la var que le pasa el user a traves de la pantalla
    }
    buscarFormasVisualizacion() {
        // se suponeq ue ahy un array con los distintos tipos de validacion, pero a este metodo lo sacamos del coso
    }
    tomarTipoVisualizacion() {
    }
    tomarConfirmacionGenerarReporte() {
    }
    // periodo deberia ser obj con las dos fechas validadas? array por el mometno
    buscarVinosEnPeriodoConResenas(periodo, tipoResena, vinos) {
        for (let i = 0; i < vinos.length; i++) {
        }
    }
}
exports.GestorReporteRankingVinos = GestorReporteRankingVinos;
