import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Chat } from "./chat.entity";

@Entity('Messages')
export class Message{
    @PrimaryGeneratedColumn('uuid')
    messageId:string;

    @ManyToOne(
        ()=>Chat,
        (chat)=>chat.chatId
    )
    idChat:Chat;

    @ManyToOne(
      () => Chat,
      (chat)=>chat.content
    )
    content:string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    sentAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    read : Date;

}