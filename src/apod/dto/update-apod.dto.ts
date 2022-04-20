import { PartialType } from '@nestjs/mapped-types';
import { CreateApodDto } from './create-apod.dto';

export class UpdateApodDto extends PartialType(CreateApodDto) {}
