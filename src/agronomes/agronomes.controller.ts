import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgronomesService } from './agronomes.service';
import { CreateAgronomeDto } from './dto/create-agronome.dto';
import { UpdateAgronomeDto } from './dto/update-agronome.dto';

@Controller('agronomes')
export class AgronomesController {
  constructor(private readonly agronomesService: AgronomesService) {}

  @Post()
  create(@Body() createAgronomeDto: CreateAgronomeDto) {
    return this.agronomesService.create(createAgronomeDto);
  }

  @Get()
  findAll() {
    return this.agronomesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agronomesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgronomeDto: UpdateAgronomeDto) {
    return this.agronomesService.update(+id, updateAgronomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agronomesService.remove(+id);
  }
}
