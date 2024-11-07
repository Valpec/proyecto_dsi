import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VinoEntity } from './VinoEntity.js';

@Entity("Maridaje")
export class MaridajeEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "nombre"})
    nombre: string;

    @Column({ name: "descripcion"})
    descripcion: string;

    @ManyToOne(() => VinoEntity, vino => vino.maridajes, { lazy: true })
    @JoinColumn({ name: "vino_id"})
    vino: Promise<VinoEntity>;
}
