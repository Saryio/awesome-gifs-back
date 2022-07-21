import { Prisma } from '@prisma/client';

export class CreateGifDto {
  owner_wallet: string;
  external_url: string;
  internal_url?: string;
  title: string;
}
