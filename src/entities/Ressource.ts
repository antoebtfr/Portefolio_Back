import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Relation } from "./Relation";
import { Type } from "./Type";

@Entity()

export class Ressource {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50, default: '' })
    title!: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    rel?: Relation;

    @Column({ type: 'varchar', length: 50, default: '' })
    type?: Type;

    @Column({ type: 'varchar', length: 50, default: '' })
    cont?: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    img?: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    cat?: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    createAt?: Date;

    @Column({ type: 'varchar', length: 50, default: '' })
    updateAt?: Date;

    @Column({ type: 'varchar', length: 50, default: '' })
    deleteAt?: Date;
}