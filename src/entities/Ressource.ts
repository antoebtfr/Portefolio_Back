import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Relation } from "./Relation";
import { Type } from "./Type";

@Entity()

export class Ressource {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50, default: '' })
    title!: string;

    @Column({ type: 'int' })
    rel?: Relation;

    @Column({ type: 'int' })
    type?: Type;

    @Column({ type: 'varchar', length: 50, default: '' })
    cont?: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    img?: string;

    @Column({ type: 'varchar', length: 50, default: '' })
    cat?: string;

    @Column({ type: 'timestamp' })
    createAt?: Date;

    @Column({ type: 'timestamp' })
    updateAt?: Date;

    @Column({ type: 'timestamp' })
    deleteAt?: Date;
}