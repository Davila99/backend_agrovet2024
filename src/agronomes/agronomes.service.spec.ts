import { Test, TestingModule } from '@nestjs/testing';
import { AgronomesService } from './agronomes.service';

describe('AgronomesService', () => {
  let service: AgronomesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgronomesService],
    }).compile();

    service = module.get<AgronomesService>(AgronomesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
