import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('tokens')

export class Token {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => User)
    @JoinColumn()
    user!: User; 
    
    @Column({ type : 'varchar', length: 100, default: '',})
    key!: string; 

}