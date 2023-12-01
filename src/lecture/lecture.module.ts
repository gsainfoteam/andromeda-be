import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureController } from './lecture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from 'src/section/entity/section.entity';
import { Lecture } from './entity/lecture.entity';
import { Professor } from 'src/professor/entity/professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture])],
  controllers: [LectureController],
  providers: [LectureService]
})
export class LectureModule {}
