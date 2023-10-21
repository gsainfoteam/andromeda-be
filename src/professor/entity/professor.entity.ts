import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { LecEval } from 'src/leceval/entity/leceval.entity';
import { Section } from 'src/section/entity/section.entity';

@Entity('Professor')
export class Professor {
  @PrimaryGeneratedColumn()
  professorUuid: number;

  @Column()
  professor: string;

  @OneToMany(() => LecEval, leceval => leceval.professor)
  lecevals: LecEval[];

  @ManyToMany(() => Section, section => section.professors)
  sections: Section[];
}
