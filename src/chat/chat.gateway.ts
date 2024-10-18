import { MessageBody, OnGatewayConnection,OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import {Message} from './entities/messages.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import {User} from '../auth/entities/user.entity'


@WebSocketGateway({cors:true})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

@WebSocketServer() wss:Server;

  constructor(
    private readonly chatService: ChatService,
    private readonly jwtService: JwtService,

    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,

    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    
    ) {}

  async handleConnection(client:Socket, userId: string) {
    this.chatService.registerClient(client,userId)
    console.log({conectados:this.chatService.getConnectedClients()})

    const token= client.handshake.headers.autenthication as string;
    let payload: JwtPayload

    try{
      payload = this.jwtService.verify(token);
      await this.chatService.registerClient(client, payload.id)

    }catch(error){
      client.disconnect();
      return;
    }


    console.log({token})
    //console.log('Cliente conectado', client.id);

    
    this.wss.emit('clients-updated',this.chatService.getConnectedClients())
  }

  handleDisconnect(client: Socket) {
   this.chatService.removeClient(client.id),
   this.wss.emit('clients-updated', this.chatService.getConnectedClients())
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client:Socket, payload:any){

    // client.broadcast.emit('message-from-server',{
    //   fullName:'Soy yo',
    //   message: payload.message || 'no-message'
    // })
   
    this.wss.emit('message-from-server',{
         fullName: this.chatService.getUserFullName(client.id),
         message: payload.message || 'no-message'

    })
  }

 
    
  }

  
