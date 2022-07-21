import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateGifDto } from './dto/create-gif.dto';
import { GifRepository } from './gif.repository';

@Injectable()
export class GifService {
  constructor(
    @Inject(GifRepository)
    private readonly gifRepository: GifRepository,
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  async create(createGifDto: CreateGifDto) {
    const user = await this.userService.findOne(
      createGifDto.authorWalletAddress,
    );

    return this.gifRepository.create({
      author: {
        connect: {
          wallet_address: user.wallet_address,
        },
      },
      external_url: createGifDto.externalUrl,
      title: createGifDto.title,
    });
  }

  async findAll() {
    return await this.gifRepository.get({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.gifRepository.getSome({
      id,
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} gif`;
  // }
}
