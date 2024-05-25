"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crearVinos_1 = require("./crearVinos");
const gestorReporteRankingVinos_1 = require("./classes/gestorReporteRankingVinos");
const pantallaGenerarRankingVinos_1 = require("./classes/pantallaGenerarRankingVinos");
const tipoUva_1 = require("./classes/tipoUva");
tipoUva_1.TipoUva;
const vinosArray = [];
let gestorReporte = new gestorReporteRankingVinos_1.GestorReporteRankingVinos(vinosArray);
let pantalla = new pantallaGenerarRankingVinos_1.Pantalla(gestorReporte);
// ******* Validar Periodo ***********
gestorReporte.validarPeriodo('2020/12/23', '2021/12/23');
// pantalla.generarRankingVinos(gestorReporte)
// crear los vinos
let vinos = (0, crearVinos_1.crearVinosAutomaticos)(15);
console.log(vinos);
console.log(typeof (vinos));
//agregar una resena a un vino
for (let i = 0; i < vinos.length; i++) {
    let resena = (0, crearVinos_1.crearResenaAleatoria)(vinos[i]);
    vinos[i].mostrarResena(vinos[i]);
}
console.log(vinos);
