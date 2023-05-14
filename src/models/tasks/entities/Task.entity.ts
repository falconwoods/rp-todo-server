import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    listId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    note: string;

    @Column({ nullable: true })
    due: string;
}