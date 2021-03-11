import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tests')

export class Test {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 50, default: '',})
    surname?: string; 
    
    @Column({ type : 'varchar', length: 100, default: '',})
    firstname!: string; 

}