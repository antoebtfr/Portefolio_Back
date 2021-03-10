import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()

export class Commentary {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'int' })
    author!: User; 
    
    @Column({ type : 'varchar', length: 100, default: ''})
    text?: string; 

    @Column({ type : 'timestamp' })
    createdAt?: Date;

    @Column({ type : 'timestamp' })
    updatedAt?: Date;

    @Column({ type : 'timestamp' })
    deleteAt?: Date;
}