import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VinoEntity } from './VinoEntity.js';

@Entity("Resena")
export class ResenaEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "comentario"})
    comentario: string;

    @Column({ name: "premium"})
    premium: boolean;

    @Column({ name: "fechaResena"})
    fechaResena: string;

    @Column({ name: "puntaje"})
    puntaje: number;

    @ManyToOne(() => VinoEntity, vino => vino.resenas, { lazy: true })
    @JoinColumn({ name: "vino_id"})
    vino: Promise<VinoEntity>;
}
