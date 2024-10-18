import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddsService } from './adds.service';
import { CreateAddDto } from './dto/create-add.dto';
import { UpdateAddDto } from './dto/update-add.dto';

@Controller('adds')
export class AddsController {
  constructor(private readonly addsService: AddsService) {}

  @Post()
  create(@Body() createAddDto: CreateAddDto) {
    return this.addsService.create(createAddDto);
  }

  @Get()
  findAll() {
    return this.addsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddDto: UpdateAddDto) {
    return this.addsService.update(+id, updateAddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addsService.remove(+id);
  }
}
