import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }

  async findAll() {
    return await this.userRepository.users({});
  }

  findOne(wallet_address: string) {
    return this.userRepository.user({
      wallet_address,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
