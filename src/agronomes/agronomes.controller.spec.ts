import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgronomesService} from './agronomes.service';
import { CreateAgronomeDto } from './dto/create-agronome.dto';
import { UpdateAgronomeDto } from './dto/update-agronome.dto';

@Controller('agronomes')
export class VeterinariansController {
  constructor(private readonly AgronomesService: AgronomesService) {}

  @Post()
  create(@Body() createVeterinarianDto: CreateAgronomeDto) {
    return this.AgronomesService.create(createVeterinarianDto);
  }

  @Get()
  findAll() {
    return this.AgronomesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AgronomesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVeterinarianDto: UpdateAgronomeDto) {
    return this.AgronomesService.update(+id, updateVeterinarianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AgronomesService.remove(+id);
  }
}
