import { Veterinarian } from "src/veterinarians/entities/veterinarian.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    fullName: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    phoneNumber: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['Propietario de animales', 'Veterinario']
    })
    roles: string[];

    @Column('bool', { default: false })
    isOnline: boolean;

    @OneToOne(() => Veterinarian, (veterinarian) => veterinarian.user)
    veterinarian: Veterinarian; // Relación inversa con Veterinario
}
