import { Test, TestingModule } from '@nestjs/testing';
import { LecevalService } from './leceval.service';

describe('LecevalService', () => {
  let service: LecevalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecevalService],
    }).compile();

    service = module.get<LecevalService>(LecevalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
