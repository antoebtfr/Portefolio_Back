import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()

export class Commentary {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 100, default: ''})
    author!: User; 
    
    @Column({ type : 'varchar', length: 100, default: ''})
    text?: string; 

    @Column({ type : 'varchar', length: 100, default: ''})
    createdAt?: Date;

    @Column({ type : 'varchar', length: 100, default: ''})
    updatedAt?: Date;

    @Column({ type : 'varchar', length: 100, default: ''})
    deleteAt?: Date;
}