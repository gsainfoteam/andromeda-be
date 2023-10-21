import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code } from 'src/code/entity/code.entity';
import { LecEval } from 'src/leceval/entity/leceval.entity';
import { Lecture } from 'src/lecture/entity/lecture.entity';
import { Like } from 'src/like/entity/like.entity';
import { Period } from 'src/period/entity/period.entity';
import { Professor } from 'src/professor/entity/professor.entity';
import { Report } from 'src/report/entity/report.entity';
import { Section } from 'src/section/entity/section.entity';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'paasword',
      database: 'test',
      entities: [
        Code,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
