import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()

export class Token {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 50, default: '',})
    userId?: User; 
    
    @Column({ type : 'varchar', length: 100, default: '',})
    key!: string; 

}