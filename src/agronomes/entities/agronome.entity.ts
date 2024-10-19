import { User } from "src/auth/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('agronomes')
export class agronomes {

    @PrimaryGeneratedColumn('uuid')
    agronomeId: string;

    @OneToOne(() => User, user => user.id)
    @JoinColumn()
    user: User;

    @Column('text')
    agronomePerfil: string;

    @Column('text', { nullable: true })
    description: string;

    @Column('text', { array: true, default: [] })
    especiality: string[];

    @Column('int', { default: 0 })
    experience: number;

    @Column('int', { default: 0 })
    consults: number;

    @Column('numeric', { default: 0 })
    stars: number;
}
