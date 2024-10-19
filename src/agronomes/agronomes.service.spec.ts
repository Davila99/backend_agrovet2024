import { Injectable } from '@nestjs/common';
import { CreateAgronomeDto } from './dto/create-agronome.dto';
import { UpdateAgronomeDto } from './dto/update-agronome.dto';

@Injectable()
export class AgronomesService {
  create(createVeterinarianDto: CreateAgronomeDto) {
    return 'This action adds a new veterinarian';
  }

  findAll() {
    return `This action returns all veterinarians`;
  }

  findOne(id: number) {
    return `This action returns a #${id} veterinarian`;
  }

  update(id: number, updateVeterinarianDto: UpdateAgronomeDto) {
    return `This action updates a #${id} veterinarian`;
  }

  remove(id: number) {
    return `This action removes a #${id} veterinarian`;
  }
}
