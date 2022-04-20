import { Test, TestingModule } from '@nestjs/testing';
import { ApodController } from './apod.controller';
import { ApodService } from './apod.service';

describe('ApodController', () => {
  let controller: ApodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApodController],
      providers: [ApodService],
    }).compile();

    controller = module.get<ApodController>(ApodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
