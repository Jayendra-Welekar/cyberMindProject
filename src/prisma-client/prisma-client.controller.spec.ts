import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClientController } from './prisma-client.controller';

describe('PrismaClientController', () => {
  let controller: PrismaClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismaClientController],
    }).compile();

    controller = module.get<PrismaClientController>(PrismaClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
