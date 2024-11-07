import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { TipoUvaEntity } from './TipoUvaEntity.js';
import { VinoEntity } from './VinoEntity.js';


@Entity("Varietal")
export class VarietalEntity {
    @PrimaryGeneratedColumn({ name: "id"})
    id: number;

    @Column({ name: "descripcion"})
    descripcion: string;

    @Column({ name: "porcentajeComposicion"})
    porcentajeComposicion: number;

    @ManyToOne(() => TipoUvaEntity, tipoUva => tipoUva.varietales)
    @JoinColumn({ name: "tipo_uva_id"})
    tipoUva: TipoUvaEntity;

    @ManyToOne(() => VinoEntity, vino=> vino.varietales, { lazy: true })
    @JoinColumn({ name: "vino_id"}) 
    vino: Promise<VinoEntity>;
}
