import { crearVinosAutomaticos, crearResenaAleatoria} from "./crearVinos";


import { GestorReporteRankingVinos } from "./classes/gestorReporteRankingVinos"
import { Pantalla } from "./classes/pantallaGenerarRankingVinos"
import { Vino } from "./classes/vino";
import { TipoUva } from "./classes/tipoUva";
TipoUva

const vinosArray: Vino[] = [
    
]


let gestorReporte = new GestorReporteRankingVinos(vinosArray)
let pantalla = new Pantalla(gestorReporte)


// ******* Validar Periodo ***********
gestorReporte.validarPeriodo('2020/12/23', '2021/12/23')
// pantalla.generarRankingVinos(gestorReporte)


// crear los vinos
let vinos = crearVinosAutomaticos(15)
console.log(vinos)
console.log(typeof(vinos))
//agregar una resena a un vino

for(let i=0; i< vinos.length; i ++){
    let resena = crearResenaAleatoria(vinos[i])
    // vinos[i].mostrarResena(vinos[i])
}
console.log(vinos)

// const periodo = gestorReporte.validarPeriodo('2013/01/01', '2024/12/30')

gestorReporte.buscarVinosEnPeriodoConResenas('2013/01/01', '2024/12/30', 'Sommelier', vinos)
