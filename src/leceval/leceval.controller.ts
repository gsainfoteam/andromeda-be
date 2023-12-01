import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecevalService } from './leceval.service';
import { CreateLecevalDto } from './dto/create-leceval.dto';
import { UpdateLecevalDto } from './dto/update-leceval.dto';

@Controller('leceval')
export class LecevalController {
  constructor(private readonly lecevalService: LecevalService) {}

  @Post()
  create(@Body() createLecevalDto: CreateLecevalDto) {
    return this.lecevalService.create(createLecevalDto);
  }

  @Get()
  findAll() {
    return this.lecevalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecevalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecevalDto: UpdateLecevalDto) {
    return this.lecevalService.update(+id, updateLecevalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecevalService.remove(+id);
  }
}
