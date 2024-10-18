import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TestingModule } from '@nestjs/testing';
import { User } from "src/auth/entities/user.entity";
import { AddImages } from "./addImages.entity";

@Entity()
export class Add {

    @PrimaryGeneratedColumn('uuid')
    addId:string;

    @OneToMany(
        () => AddImages,
        (addImages) => addImages.add,

    )
    addImages:AddImages
    
    @Column()
    title:string

    @Column({type:'text',
            nullable:true})
    description: string;

    @OneToOne(
        () =>User,
        (user)=>user.fullName
    )
    fullName:User
    
    @Column('numeric',{
        array:true,
        default:[]
    })
    latitud:number[];

    @Column('numeric',{
        array:true,
        default:[]
    })
    longitud:number[];

    @Column('int',{default:100})
    range:number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

}
