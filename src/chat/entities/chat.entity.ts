import { User } from 'src/auth/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './messages.entity';

@Entity('Chats')
export class Chat {

    @PrimaryGeneratedColumn('uuid')
    chatId: string;

    @ManyToOne(
        () =>User,
        (user)=>user.fullName
    )
    sender :User;

    @ManyToOne(
        () =>User,
        (user)=>user.fullName
    )
    receiver:User;

    @OneToMany(
        () =>Message,
        (message)=>message.content
    )
    content:Message[]
 
}