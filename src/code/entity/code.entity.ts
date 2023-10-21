import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne
} from 'typeorm';
import { Lecture } from 'src/lecture/entity/lecture.entity';

@Entity('Code')
export class Code {
  @PrimaryGeneratedColumn()
  codeUuid: number;

  @Column()
  department: string;

  @Column()
  lecture_code: string;

  @OneToOne(() => Lecture, lecture => lecture.code)
  lecture: Lecture;
}
