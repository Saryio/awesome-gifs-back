import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../user/user.repository';
import { CreateGifDto } from './dto/create-gif.dto';
import { GifRepository } from './gif.repository';

@Injectable()
export class GifService {
  constructor(
    @Inject(GifRepository)
    private readonly gifRepository: GifRepository,
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createGifDto: CreateGifDto, actualId: string) {
    const user: User = await this.userRepository.user({
      wallet_address: actualId,
    });

    return this.gifRepository.createGif({
     
    });
  }

  findAll() {
    return `This action returns all gif`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gif`;
  }

  remove(id: number) {
    return `This action removes a #${id} gif`;
  }
}
