import { User } from "src/auth/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Veterinarians')
export class Veterinarian {

    @PrimaryGeneratedColumn('uuid')
    veterinaryId: string;

    @Column('text')
    veterinaryPerfil:string;

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

    @Column('text',{
        array:true,
        default:[]
    })
    especiality:string[]

    @Column('int',{default:0})
    experience:number;

    @Column('int',{default:0})
    consults:number;

    @Column('numeric', {default:0})
    stars:number;
    
    @OneToOne(
        () =>User,
        (user)=>user.isOnline
    )
    isOnline:User;
}
