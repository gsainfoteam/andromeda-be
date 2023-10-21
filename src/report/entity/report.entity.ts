import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/user/entity/user.entity';
import { LecEval } from 'src/leceval/entity/leceval.entity';

@Entity('Report')
export class Report {
  @PrimaryGeneratedColumn()
  reportUuid: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.reports)
  user: User;

  @ManyToOne(() => LecEval, leceval => leceval.reports)
  leceval: LecEval;
}
