import { Test, TestingModule } from '@nestjs/testing';
import { JobProfileController } from './job-profile.controller';

describe('JobProfileController', () => {
  let controller: JobProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobProfileController],
    }).compile();

    controller = module.get<JobProfileController>(JobProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
