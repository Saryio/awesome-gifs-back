import { Test, TestingModule } from '@nestjs/testing';
import { GifService } from './gif.service';

describe('GifService', () => {
  let service: GifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GifService],
    }).compile();

    service = module.get<GifService>(GifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
