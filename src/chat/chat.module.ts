import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/messages.entity';
import { Chat } from './entities/chat.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ChatGateway, ChatService],
  imports :[
    AuthModule,
    TypeOrmModule.forFeature([Message,Chat])]
})
export class ChatModule {}
