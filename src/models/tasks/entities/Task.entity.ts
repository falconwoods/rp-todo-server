import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    listId: number;

    @Column()
    userId: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    note: string;

    @Column({ nullable: true, default: '' })
    due: string;

    @Column({ nullable: true, default: false })
    important: boolean;

    @Column({ nullable: true, default: false })
    completed: boolean;
}