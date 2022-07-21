import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { GifService } from './gif.service';
import { CreateGifDto } from './dto/create-gif.dto';

@Controller('gif')
export class GifController {
  constructor(private readonly gifService: GifService) {}

  @Post()
  create(@Body() createGifDto: CreateGifDto) {
    return this.gifService.create(createGifDto);
  }

  @Get()
  findAll() {
    return this.gifService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gifService.findOne(+id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.gifService.remove(+id);
  // }
}
