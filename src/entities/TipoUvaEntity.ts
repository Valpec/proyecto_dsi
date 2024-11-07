import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VarietalEntity } from './VarietalEntity.js';

@Entity("TipoUva")
export class TipoUvaEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @Column({ name: "descripcion"})
    descripcion: string;

    @OneToMany(() => VarietalEntity, varietal => varietal.tipoUva)
    varietales: VarietalEntity[];
}
