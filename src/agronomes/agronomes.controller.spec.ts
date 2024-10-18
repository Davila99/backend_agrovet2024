import { Test, TestingModule } from '@nestjs/testing';
import { AgronomesController } from './agronomes.controller';
import { AgronomesService } from './agronomes.service';

describe('AgronomesController', () => {
  let controller: AgronomesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgronomesController],
      providers: [AgronomesService],
    }).compile();

    controller = module.get<AgronomesController>(AgronomesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
