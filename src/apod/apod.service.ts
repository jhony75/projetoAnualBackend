import { Injectable } from '@nestjs/common';
import { CreateApodDto } from './dto/create-apod.dto';
import { UpdateApodDto } from './dto/update-apod.dto';

@Injectable()
export class ApodService {
  create(createApodDto: CreateApodDto) {
    return 'This action adds a new apod';
  }

  findAll() {
    return `This action returns all apod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apod`;
  }

  update(id: number, updateApodDto: UpdateApodDto) {
    return `This action updates a #${id} apod`;
  }

  remove(id: number) {
    return `This action removes a #${id} apod`;
  }
}
