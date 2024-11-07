import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PaisEntity } from './PaisEntity.js';
import { RegionVitivinicolaEntity } from './RegionVitivinicolaEntity.js';

@Entity("Provincia")
export class ProvinciaEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @ManyToOne(() => PaisEntity, pais => pais.provincias)
    @JoinColumn({ name: "pais_id" })
    pais: PaisEntity;

    @OneToMany(() => RegionVitivinicolaEntity, region => region.provincia)
    regionesVitivinicolas: RegionVitivinicolaEntity[];
}
