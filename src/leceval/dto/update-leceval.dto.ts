import { PartialType } from '@nestjs/mapped-types';
import { CreateLecevalDto } from './create-leceval.dto';

export class UpdateLecevalDto extends PartialType(CreateLecevalDto) {}
