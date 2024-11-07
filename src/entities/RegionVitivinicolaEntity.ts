import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { ProvinciaEntity } from './ProvinciaEntity.js';
import { BodegaEntity } from './BodegaEntity.js';

@Entity("RegionVitivinicola")
export class RegionVitivinicolaEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @Column({ name: "descripcion"})
    descripcion: string;

    @ManyToOne(() => ProvinciaEntity, provincia => provincia.regionesVitivinicolas)
    @JoinColumn({ name: "provincia_id"})
    provincia: ProvinciaEntity;

    @OneToMany(() => BodegaEntity, (bodega) => bodega.regionVitivinicola)
    bodega: BodegaEntity[];

}
