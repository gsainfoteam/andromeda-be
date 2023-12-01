import { Test, TestingModule } from '@nestjs/testing';
import { LecevalController } from './leceval.controller';
import { LecevalService } from './leceval.service';

describe('LecevalController', () => {
  let controller: LecevalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecevalController],
      providers: [LecevalService],
    }).compile();

    controller = module.get<LecevalController>(LecevalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
