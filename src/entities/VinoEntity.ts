import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { BodegaEntity } from './BodegaEntity.js';
import { MaridajeEntity } from './MaridajeEntity.js';
import { ResenaEntity } from './ResenaEntity.js';
import { VarietalEntity } from './VarietalEntity.js';

@Entity("Vino")
export class VinoEntity {
    @PrimaryColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @Column({ name: "anada"})
    anada: number;

    @Column({ name: "imagenEtiqueta"})
    imagenEtiqueta: string;

    @Column({ name: "notaDeCataBodega"})
    notaDeCataBodega: string;

    @Column({ name: "precioArs"})
    precioArs: number;

    @ManyToOne(() => BodegaEntity, bodega => bodega.vinos, { lazy: true })
    @JoinColumn({ name: "bodega_id"})
    bodega: Promise<BodegaEntity>;

    @OneToMany(() => MaridajeEntity, maridaje => maridaje.vino, { lazy: true })
    maridajes: Promise<MaridajeEntity[]>;

    @OneToMany(() => ResenaEntity, resena => resena.vino, { lazy: true })
    resenas: Promise<ResenaEntity[]>;

    @OneToMany(() => VarietalEntity, varietal => varietal.vino, { lazy: true }) 
    varietales: Promise<VarietalEntity[]>;

}
