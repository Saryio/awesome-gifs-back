import { Module } from '@nestjs/common';
import { GifService } from './gif.service';
import { GifController } from './gif.controller';
import { GifRepository } from './gif.repository';
import { UserModule } from '../user/user.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GifController],
  providers: [GifService, GifRepository, PrismaService],
  imports: [UserModule],
})
export class GifModule {}
