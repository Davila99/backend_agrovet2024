import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {AgronomesService} from './agronomes.service';
import { CreateAgronomeDto } from './dto/create-agronome.dto';
import {UpdateAgronomeDto } from './dto/update-agronome.dto';

@Controller('agronomes')
export class AgronomesController {
  constructor(private readonly veterinariansService:AgronomesService) {}

  @Post()
  create(@Body() createVeterinarianDto:  CreateAgronomeDto) {
    return this.veterinariansService.create(createVeterinarianDto);
  }

  @Get()
  findAll() {
    return this.veterinariansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veterinariansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVeterinarianDto: UpdateAgronomeDto) {
    return this.veterinariansService.update(+id, updateVeterinarianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veterinariansService.remove(+id);
  }
}
