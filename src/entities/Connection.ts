import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('connections')

export class Connection {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar'})
    ipAdress!: string;

    @Column({ type : 'timestamp'})
    dateConnection!: Date;

}
