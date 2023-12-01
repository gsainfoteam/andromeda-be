import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecture } from './entity/lecture.entity';
import { Section } from 'src/section/entity/section.entity';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private lectureRepository: Repository<Lecture>,
  ) {}

  async findAllLectures() {
    const lectures = await this.lectureRepository.find({relations: ['sections']});
    return lectures.map(lectures => {
      const professors = new Set();
      lectures.sections.forEach(section => {
        section.professors.forEach(professor => {
          professors.add(professor.professor);
      })});

      return {
        lecture_uuid: lectures.lectureUuid,
        title: lectures.title,
        department: [lectures.department],
        professors: Array.from(professors),
        lecture_code: ['${lectures.department}${lectures.code}'],
        course_credit: lectures.courseCredit,
      };
      })
  }
  /*
  create(createLectureDto: CreateLectureDto) {
    return 'This action adds a new lecture';
  }

  findOne(id: number) {
    return `This action returns a #${id} lecture`;
  }

  update(id: number, updateLectureDto: UpdateLectureDto) {
    return `This action updates a #${id} lecture`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecture`;
  }

  */
}
