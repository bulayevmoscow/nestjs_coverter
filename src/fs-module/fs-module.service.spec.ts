import { Test, TestingModule } from '@nestjs/testing';
import { FsModuleService } from './fs-module.service';

describe('FsModuleService', () => {
  let service: FsModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsModuleService],
    }).compile();

    service = module.get<FsModuleService>(FsModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
