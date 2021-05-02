import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('Connections')

export class Connection {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar'})
    ipAdress!: string;

    @Column({ type : 'varchar'})
    dateConnection!: string;

}
