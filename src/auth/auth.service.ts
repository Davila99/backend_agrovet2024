import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from "bcrypt"
import {CreateUserDto,LoginUserDto} from './dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,

    private readonly jwtService : JwtService,

  ){}

  async create( createUserDto: CreateUserDto) {
  
    try{

      const {password, ...userData} =createUserDto;
      const user= this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password,10)
      });
      await this.userRepository.save(user);
      delete user.password

      return {
        ...user, 
        token: this.getJwtToken({id:user.id})};
    }

    catch(error){
    
    this.handlDBErrors(error)
  }
  }


  async login(loginUserDto:LoginUserDto){
    const {password, phoneNumber} = loginUserDto;
    const user = await this.userRepository.findOne({
      where: {phoneNumber}, 
      select: {phoneNumber:true, password:true, id:true}
    });

    if(!user)
    throw new UnauthorizedException('No existe un usuario con ese numero de telefono')

    if(!bcrypt.compareSync(password, user.password))
    throw new UnauthorizedException('Contraseña incorrecta')
  
    console.log({user})
    

    return {
      ...user, 
    token: this.getJwtToken({id:user.id})};
  }

  private getJwtToken(payload: JwtPayload){
    const token  =this.jwtService.sign(payload);
    return token; 

  }

  private handlDBErrors(error:any):never{
    if(error.code === '23505')
    throw new BadRequestException(error.detail);
  console.log(error)

  throw new InternalServerErrorException('Please check the logs')
  }


}
 