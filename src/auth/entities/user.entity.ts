import { Veterinarian } from "src/veterinarians/entities/veterinarian.entity";
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity({name: 'users', database: 'VetConsulta'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @OneToOne(
        () =>Veterinarian,
        (veterinarian)=>veterinarian.fullName
    )
    fullName: string;

    @Column('text', {select: false})
    password: string;

    @OneToOne(
        () =>Veterinarian,
        (veterinarian)=>veterinarian.phoneNumber
    )
    phoneNumber:string;


    @Column('bool', {default: true})
    isActive:boolean;


    @Column('text',{
        array:true,
        default:['Propietario de animales', 'Veterinario']

    })
    roles: string[]

    @Column('bool',{default:false})
    isOnline:boolean;
}
