import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { RegionVitivinicolaEntity } from './RegionVitivinicolaEntity.js';
import { VinoEntity } from './VinoEntity.js';

@Entity("Bodega")
export class BodegaEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @Column({ name: "descripcion"})
    descripcion: string;

    @Column({ name: "historia"})
    historia: string;

    @Column({ name: "coordenadasUbicacion"})
    coordenadasUbicacion: string;

    @Column({ name: "periodoActualizacion"})
    periodoActualizacion: string;

 
    @ManyToOne(() => RegionVitivinicolaEntity, (region) => region.bodega)
    @JoinColumn({ name: "region_id"})
    regionVitivinicola:RegionVitivinicolaEntity


    @OneToMany(() => VinoEntity, vino => vino.bodega)
    vinos: VinoEntity[];
}
