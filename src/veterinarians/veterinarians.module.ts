import { Module } from '@nestjs/common';
import { VeterinariansService } from './veterinarians.service';
import { VeterinariansController } from './veterinarians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinarian } from './entities';

@Module({
  controllers: [VeterinariansController],
  providers: [VeterinariansService],
  imports :[
    TypeOrmModule.forFeature([Veterinarian])]
})
export class VeterinariansModule {}
