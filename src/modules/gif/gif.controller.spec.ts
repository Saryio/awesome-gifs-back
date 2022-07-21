import { Test, TestingModule } from '@nestjs/testing';
import { GifController } from './gif.controller';
import { GifService } from './gif.service';

describe('GifController', () => {
  let controller: GifController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GifController],
      providers: [GifService],
    }).compile();

    controller = module.get<GifController>(GifController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
