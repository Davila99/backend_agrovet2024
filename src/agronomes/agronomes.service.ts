import { Injectable } from '@nestjs/common';
import { CreateAgronomeDto } from './dto/create-agronome.dto';
import { UpdateAgronomeDto } from './dto/update-agronome.dto';

@Injectable()
export class AgronomesService {
  create(createAgronomeDto: CreateAgronomeDto) {
    return 'This action adds a new agronome';
  }

  findAll() {
    return `This action returns all agronomes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agronome`;
  }

  update(id: number, updateAgronomeDto: UpdateAgronomeDto) {
    return `This action updates a #${id} agronome`;
  }

  remove(id: number) {
    return `This action removes a #${id} agronome`;
  }
}
