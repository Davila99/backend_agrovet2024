import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { VeterinariansModule } from './veterinarians/veterinarians.module';
import { OwnersModule } from './owners/owners.module';
import { AddsModule } from './adds/adds.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
  
    TypeOrmModule.forRoot({
      type : 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database : process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      //logging: true,

    }),
  
    AuthModule,
  
    VeterinariansModule,
  
    OwnersModule,
  
    AddsModule,
  
    ChatModule
  
  ],

})
export class AppModule {}
