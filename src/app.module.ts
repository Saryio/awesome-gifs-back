import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './prisma.service';
import { GifModule } from './modules/gif/gif.module';

@Module({
  imports: [UserModule, GifModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
