import { Module } from '@nestjs/common';
import { LecevalService } from './leceval.service';
import { LecevalController } from './leceval.controller';

@Module({
  controllers: [LecevalController],
  providers: [LecevalService]
})
export class LecevalModule {}
