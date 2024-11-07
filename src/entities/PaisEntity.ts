import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ProvinciaEntity } from './ProvinciaEntity.js';

@Entity("Pais")
export class PaisEntity {
    @PrimaryColumn({ name: "id"})
    id: number;

    @Column({name: "nombre"})
    nombre: string;

    @OneToMany(() => ProvinciaEntity, provincia => provincia.pais)
    provincias: ProvinciaEntity[];
}
