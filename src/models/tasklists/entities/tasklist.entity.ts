import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tasklist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}