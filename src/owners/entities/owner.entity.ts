import { User } from "src/auth/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn('uuid')
    ownerId: string;

    @Column('text')
    OwnerPerfil:string;

    @OneToOne(
        () =>User,
        (user)=>user.fullName
    )
    fullName:User

    @OneToOne(
        () =>User,
        (user)=>user.phoneNumber
    )
    phoneNumber:User

    @Column({type:'text',
    nullable:true})
    description: string;

    @OneToOne(
        () =>User,
        (user)=>user.isOnline
    )
    isOnline:User;
}
