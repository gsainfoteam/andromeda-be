import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';
import { Section } from 'src/section/entity/section.entity';

@Entity('Period')
export class Period {
  @PrimaryGeneratedColumn()
  periodUuid: number;

  @Column()
  year: number;

  @Column()
  semester: number;

  @OneToMany(() => Section, section => section.period)
  sections: Section[];
}
