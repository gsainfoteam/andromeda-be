import { Injectable } from '@nestjs/common';
import { CreateLecevalDto } from './dto/create-leceval.dto';
import { UpdateLecevalDto } from './dto/update-leceval.dto';

@Injectable()
export class LecevalService {
  create(createLecevalDto: CreateLecevalDto) {
    return 'This action adds a new leceval';
  }

  findAll() {
    return `This action returns all leceval`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leceval`;
  }

  update(id: number, updateLecevalDto: UpdateLecevalDto) {
    return `This action updates a #${id} leceval`;
  }

  remove(id: number) {
    return `This action removes a #${id} leceval`;
  }
}
