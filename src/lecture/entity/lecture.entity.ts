import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Code } from 'src/code/entity/code.entity';
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
  mainCode: number;

  @OneToOne(() => Code)
  @JoinColumn({ name: 'mainCode' })
  code: Code;

  @OneToMany(() => Section, section => section.lecture)
  sections: Section[];
}