import supabase from './supaBaseClient.js';
import { Vino } from '../classes/vino.js';
import { Bodega } from '../classes/bodega.js';
import { Maridaje } from '../classes/maridaje.js';
import { Resena } from '../classes/resena.js';
import { Varietal } from '../classes/varietal.js';
import { RegionVitivinicola } from '../classes/regionVitivinicola.js';
import { Pais } from '../classes/pais.js';
import { Provincia } from '../classes/provincia.js';
import { TipoUva } from '../classes/tipoUva.js';
export class VinoSuperbase {
    paisInstance = null;
    provinciaInstances = new Map();
    bodegaInstances = new Map();
    regionVitivinicolaInstances = new Map();
    tipoUvaInstances = new Map();
    async getAllVinos() {
        const { data: vinosEntities, error } = await supabase
            .from('vino')
            .select(`
                *,
                bodega: bodega (
                    *,
                    regionVitivinicola: regionvitivinicola (
                        *,
                        provincia: provincia (
                            *,
                            pais: pais (*)
                        )
                    )
                ),
                maridaje (*),
                resena (*),
                varietal (*, tipouva: tipouva (*))
            `);
        if (error) {
            console.error("Error al obtener los vinos:", error);
            return [];
        }
        // console.log('lo que trae la bd', vinosEntities);
        // const vinos: Vino[] = await Promise.all(vinosEntities.map(vinoEntity => this.mapToVino(vinoEntity)));
        const vinos = vinosEntities;
        console.log('el vino arreglado', vinos);
        return vinos;
    }
    async mapToVino(vinoEntity) {
        // Verifica si el objeto bodega está presente y tiene los datos
        const bodega = this.getBodegaInstance(vinoEntity.bodega);
        // Mapeo de varietales
        const varietales = vinoEntity.varietal.map((varietalEntity) => {
            const tipoUva = this.getTipoUvaInstance(varietalEntity.tipouva);
            return new Varietal(varietalEntity.descripcion, varietalEntity.porcentajeComposicion, tipoUva);
        });
        // Mapeo de maridajes
        // const maridajes = vinoEntity.maridaje.map((maridajeEntity: any) => 
        //     new Maridaje(maridajeEntity.descripcion, maridajeEntity.nombre)
        // );
        const maridajes = Array.isArray(vinoEntity.maridaje)
            ? vinoEntity.maridaje.map((maridajeEntity) => new Maridaje(maridajeEntity.descripcion, maridajeEntity.nombre))
            : [];
        // Mapeo de reseñas
        const resenas = vinoEntity.resena.map((resenaEntity) => new Resena(resenaEntity.comentario, resenaEntity.premium, resenaEntity.fechaResena, resenaEntity.puntaje));
        // Creación del vino
        const vino = new Vino(vinoEntity.anada, vinoEntity.imagenetiqueta, vinoEntity.nombre, vinoEntity.notadecatabodega, vinoEntity.precioars, maridajes, varietales, bodega);
        // Asignación de reseñas al vino
        resenas.forEach((resena) => vino.agregarResena(resena));
        return vino;
    }
    getPaisInstance(paisEntity) {
        if (!this.paisInstance) {
            this.paisInstance = new Pais(paisEntity.nombre);
        }
        return this.paisInstance;
    }
    getProvinciaInstance(provinciaEntity) {
        if (!this.provinciaInstances.has(provinciaEntity.id)) {
            const pais = this.getPaisInstance(provinciaEntity.pais);
            const provincia = new Provincia(provinciaEntity.nombre);
            pais.establecerProvincia(provincia);
            this.provinciaInstances.set(provinciaEntity.id, provincia);
        }
        return this.provinciaInstances.get(provinciaEntity.id);
    }
    getRegionVitivinicolaInstance(regionEntity) {
        if (!this.regionVitivinicolaInstances.has(regionEntity.id)) {
            const provincia = this.getProvinciaInstance(regionEntity.provincia);
            const region = new RegionVitivinicola(regionEntity.descripcion, regionEntity.nombre);
            provincia.establecerRegion(region);
            this.regionVitivinicolaInstances.set(regionEntity.id, region);
        }
        return this.regionVitivinicolaInstances.get(regionEntity.id);
    }
    getBodegaInstance(bodegaEntity) {
        if (!this.bodegaInstances.has(bodegaEntity.id)) {
            const region = this.getRegionVitivinicolaInstance(bodegaEntity.regionVitivinicola);
            const bodega = new Bodega(bodegaEntity.coordenadasubicacion, bodegaEntity.descripcion, bodegaEntity.historia, bodegaEntity.nombre, bodegaEntity.periodoactualizacion, region);
            this.bodegaInstances.set(bodegaEntity.id, bodega);
        }
        return this.bodegaInstances.get(bodegaEntity.id);
    }
    getTipoUvaInstance(tipoUvaEntity) {
        if (!this.tipoUvaInstances.has(tipoUvaEntity.id)) {
            const tipoUva = new TipoUva(tipoUvaEntity.descripcion, tipoUvaEntity.nombre);
            this.tipoUvaInstances.set(tipoUvaEntity.id, tipoUva);
        }
        return this.tipoUvaInstances.get(tipoUvaEntity.id);
    }
}
