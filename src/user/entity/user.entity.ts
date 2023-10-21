import {
  BaseEntity,
  Entity,
  OneToMany,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { LecEval } from 'src/leceval/entity/leceval.entity';
import { Like } from 'src/like/entity/like.entity';
import { Report } from 'src/report/entity/report.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  userUuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => LecEval, leceval => leceval.user)
  lecevals: LecEval[];

  @OneToMany(() => Report, report => report.user)
  reports: Report[];

  @OneToMany(() => Like, like => like.user)
  likes: Like[];
}
