import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';


interface ConnetectedClients{
    [id:string]:{
        socket: Socket,
        user: User
}
}

@Injectable()
export class ChatService {


    private connectedClients:ConnetectedClients = {}

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async registerClient(client:Socket, userId: string){
            const user = await this.userRepository.findOneBy({id:userId});
            if(!user) throw new Error('User not  found')
            if(!user.isActive) throw new Error ('User not active')

            this.connectedClients[client.id] = {
                socket: client,
            user: user};
    }

    removeClient(clientId:string){
        delete this.connectedClients[clientId]

    }
    
    getConnectedClients(): number{
        
        return  Object.keys(this.connectedClients).length;
    
      }

      getUserFullName (socketId: string){
        return this.connectedClients[socketId].user.fullName;
      }
}