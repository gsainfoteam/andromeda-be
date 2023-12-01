import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Section } from 'src/section/entity/section.entity';

@Entity('Lecture')
export class Lecture {
  @PrimaryGeneratedColumn()
  lectureUuid: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  courseCredit: number;

  @Column()
  department: string;

  @Column()
  code: number;

  @OneToMany(() => Section, section => section.lecture)
  sections: Section[];
}