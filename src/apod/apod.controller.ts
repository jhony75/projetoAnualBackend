import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApodService } from './apod.service';
import { CreateApodDto } from './dto/create-apod.dto';
import { UpdateApodDto } from './dto/update-apod.dto';

@Controller('apod')
export class ApodController {
  constructor(private readonly apodService: ApodService) {}

  @Post()
  create(@Body() createApodDto: CreateApodDto) {
    return this.apodService.create(createApodDto);
  }

  @Get()
  findAll() {
    return this.apodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApodDto: UpdateApodDto) {
    return this.apodService.update(+id, updateApodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apodService.remove(+id);
  }
}
