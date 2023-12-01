import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecEval } from 'src/leceval/entity/leceval.entity';
import { Lecture } from 'src/lecture/entity/lecture.entity';
import { Like } from 'src/like/entity/like.entity';
import { Period } from 'src/period/entity/period.entity';
import { Professor } from 'src/professor/entity/professor.entity';
import { Report } from 'src/report/entity/report.entity';
import { Section } from 'src/section/entity/section.entity';
import { SectionModule } from './section/section.module';
import { ReportModule } from './report/report.module';
import { ProfessorModule } from './professor/professor.module';
import { PeriodModule } from './period/period.module';
import { LikeModule } from './like/like.module';
import { LectureModule } from './lecture/lecture.module';
import { LecevalModule } from './leceval/leceval.module';
import { LecevalService } from './leceval/leceval.service';
import { LectureService } from './lecture/lecture.service';
import { LikeService } from './like/like.service';
import { PeriodService } from './period/period.service';
import { ProfessorService } from './professor/professor.service';
import { ReportService } from './report/report.service';
import { SectionService } from './section/section.service';
import { LecevalController } from './leceval/leceval.controller';
import { LectureController } from './lecture/lecture.controller';
import { LikeController } from './like/like.controller';
import { PeriodController } from './period/period.controller';
import { ProfessorController } from './professor/professor.controller';
import { ReportController } from './report/report.controller';
import { SectionController } from './section/section.controller';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test01',
      password: '1234',
      database: 'andromeda_test',
      entities: [
        LecEval,
        Lecture,
        Like,
        Period,
        Professor,
        Report,
        Section,
        User,
      ],
      synchronize: true,
    }),
    LecevalModule,
    LectureModule,
    LikeModule,
    PeriodModule,
    ProfessorModule,
    ReportModule,
    SectionModule,
    UserModule,
  ],
  controllers: [LecevalController, LectureController, LikeController, PeriodController, ProfessorController, ReportController, SectionController, UserController],
  providers: [LecevalService, LectureService, LikeService, PeriodService, ProfessorService, ReportService, SectionService, UserService],
})
export class AppModule {}
