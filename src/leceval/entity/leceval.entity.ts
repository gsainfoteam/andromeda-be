import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from 'src/user/entity/user.entity';
import { Professor } from 'src/professor/entity/professor.entity';
import { Section } from 'src/section/entity/section.entity';
import { Like } from 'src/like/entity/like.entity';
import { Report } from 'src/report/entity/report.entity';

@Entity('LecEval')
export class LecEval {
  @PrimaryGeneratedColumn()
  lecevalUuid: number;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  review: string;

  @ManyToOne(() => User, user => user.lecevals)
  user: User;

  @ManyToOne(() => Professor, professor => professor.lecevals)
  professor: Professor;

  @ManyToOne(() => Section, section => section.lecevals)
  section: Section;

  @OneToMany(() => Like, like => like.leceval)
  likes: Like[];

  @OneToMany(() => Report, report => report.leceval)
  reports: Report[];
}
