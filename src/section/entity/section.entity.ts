import {
  Entity,
  PrimaryGeneratedColumn,
  Column, ManyToOne,
  OneToMany, ManyToMany
} from "typeorm";
import { Lecture } from 'src/lecture/entity/lecture.entity';
import { Professor } from 'src/professor/entity/professor.entity';
import { Period } from 'src/period/entity/period.entity';
import { LecEval } from 'src/leceval/entity/leceval.entity';

@Entity('Section')
export class Section {
  @PrimaryGeneratedColumn()
  sectionUuid: number;

  @Column()
  sectionNum: number;

  @Column()
  timetable: string;

  @Column()
  regDiff: number;

  @ManyToOne(() => Lecture, lecture => lecture.sections)
  lecture: Lecture;

  @ManyToMany(() => Professor, professor => professor.sections)
  professors: Professor[];

  @ManyToOne(() => Period, period => period.sections)
  period: Period;

  @OneToMany(() => LecEval, leceval => leceval.section)
  lecevals: LecEval[];
}
