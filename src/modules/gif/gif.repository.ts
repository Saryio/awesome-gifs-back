import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Gif } from '@prisma/client';

@Injectable()
export class GifRepository {
  constructor(private prisma: PrismaService) {}

  async getSome(
    userWhereUniqueInput: Prisma.GifWhereUniqueInput,
  ): Promise<Gif | null> {
    return this.prisma.gif.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async get(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GifWhereUniqueInput;
    where?: Prisma.GifWhereInput;
    orderBy?: Prisma.GifOrderByWithRelationInput;
  }): Promise<Gif[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.gif.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.GifCreateInput): Promise<Gif> {
    data = {
      ...data,
      internal_url: 'http://teste.com',
    };

    return this.prisma.gif.create({
      data,
    });
  }

  async delete(where: Prisma.GifWhereUniqueInput): Promise<Gif> {
    return this.prisma.gif.delete({
      where,
    });
  }
}
