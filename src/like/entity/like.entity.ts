import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/user/entity/user.entity';
import { LecEval } from 'src/leceval/entity/leceval.entity';

@Entity('Like')
export class Like {
  @PrimaryGeneratedColumn()
  likeUuid: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => LecEval, leceval => leceval.likes)
  leceval: LecEval;
}
