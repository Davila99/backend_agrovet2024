import { User } from "src/auth/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Veterinarians')
export class Veterinarian {
    @PrimaryGeneratedColumn('uuid')
    veterinaryId: string;

    @Column('text')
    veterinaryPerfil: string;

    @OneToOne(() => User, (user) => user.veterinarian)
    user: User; // Relación con User

    @Column('text')
    description: string;

    @Column('text', {
        array: true,
        default: []
    })
    especiality: string[];

    @Column('int', { default: 0 })
    experience: number;

    @Column('int', { default: 0 })
    consults: number;

    @Column('numeric', { default: 0 })
    stars: number;

    // Este campo se eliminó ya que no tiene sentido tener un User completo como campo de isOnline.
    // Si deseas mantener el estado en línea, puedes hacerlo en la entidad User.
}
