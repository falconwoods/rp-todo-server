import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    constructor(username:string, pwd:string){
        this.username = username;
        this.pwd = pwd;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    username: string;

    @Column()
    pwd: string;
}