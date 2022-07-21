import { Module } from '@nestjs/common';
import { GifService } from './gif.service';
import { GifController } from './gif.controller';

@Module({
  controllers: [GifController],
  providers: [GifService]
})
export class GifModule {}
