// import { VinoService } from "./VinoService.js";
// import { Vino } from "../classes/vino.js";
// import { Vino as VinoModel } from "../models/Vino.js";


// async function main(){
//     const vinoService = new VinoService();
//     const vinos = await vinoService.getAllVinosWithRelations();
//     console.log('vinos', vinos);
//     return vinos
// }
// main().catch((error) => console.log(error));


// async function fromEntity(entity: VinoModel): Promise<Vino>{  
//     const pais = (await entity.bodega).regionVitivinicola.provincia.pais
//     const provincia = 
//     const maridajes = await entity.maridajes;  // Línea agregada
//     const varietales = await entity.varietales;  // Línea agregada
//     const bodega = await entity.bodega;  // Línea agregada
//     return new Vino(
//         entity.anada,
//         entity.imagenEtiqueta,
//         entity.nombre,
//         entity.notaDeCataBodega,
//         entity.precioArs,
//         maridajes.map(m => Maridaje.fromEntity(m)),  // Línea modificada
//         entity.varietales.map(v => Varietal.fromEntity(v)),  // Línea modificada
//         Bodega.fromEntity(entity.bodega)  // Línea modificada
//     );
// }