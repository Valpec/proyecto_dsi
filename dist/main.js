"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tomarConfirmacionGenerarReporte = void 0;
const crearVinos_1 = require("./crearVinos");
const gestorReporteRankingVinos_1 = require("./classes/gestorReporteRankingVinos");
const pantallaGenerarRankingVinos_1 = require("./classes/pantallaGenerarRankingVinos");
const tipoUva_1 = require("./classes/tipoUva");
tipoUva_1.TipoUva;
const vinosArray = [];
let gestorReporte = new gestorReporteRankingVinos_1.GestorReporteRankingVinos(vinosArray);
let pantalla = new pantallaGenerarRankingVinos_1.Pantalla(gestorReporte);
// ******* Validar Periodo ***********
// gestorReporte.validarPeriodo('2020/12/23', '2021/12/23')
gestorReporte.validarPeriodo('13/12/2013', '13/12/2023');
gestorReporte.validarPeriodo('13/12/2023', '13/12/2020');
gestorReporte.validarPeriodo('13/12/2020', '13/12/2026');
// pantalla.generarRankingVinos(gestorReporte)
// crear los vinos
let vinos = (0, crearVinos_1.crearVinosAutomaticos)(15);
// console.log(vinos)
console.log(typeof (vinos));
//agregar una resena a un vino
for (let i = 0; i < vinos.length; i++) {
    let resena = (0, crearVinos_1.crearResenaAleatoria)(vinos[i]);
    // vinos[i].mostrarResena(vinos[i])
}
// console.log(vinos)
// const periodo = gestorReporte.validarPeriodo('2013/01/01', '2024/12/30')
// gestorReporte.buscarVinosEnPeriodoConResenas('2013/01/01', '2024/12/30', 'Sommelier', vinos)
function tomarConfirmacionGenerarReporte(reporte) {
}
exports.tomarConfirmacionGenerarReporte = tomarConfirmacionGenerarReporte;
