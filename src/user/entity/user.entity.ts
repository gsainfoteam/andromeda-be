import { CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { LecEval } from 'src/leceval/entity/leceval.entity';
import { Report } from 'src/report/entity/report.entity';
import { Like } from 'src/like/entity/like.entity';

@Entity('User')
export class User {
    @PrimaryColumn('uuid')
    userUuid: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => LecEval, leceval => leceval.user)
    lecevals: LecEval[];

    @OneToMany(() => Like, like => like.user)
    likes: Like[];

    @OneToMany(() =>Report, report => report.user)
    reports: Report[];
}
