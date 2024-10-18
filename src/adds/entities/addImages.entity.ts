import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Add } from "./add.entity";

@Entity()
export class AddImages{

    @PrimaryGeneratedColumn('uuid')
    imageId:string;

    @Column('text')
    url:string

    @ManyToOne(
        ()=>Add,
        (add) => add.addImages
    )
    add:Add

}