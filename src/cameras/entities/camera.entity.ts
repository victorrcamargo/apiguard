import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Camera')
export class Camera {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ip: string;
}