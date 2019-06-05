import { Controller, Get } from '@nestjs/common';
import { Photo } from '../models/Photo.model';

const PHOTOS_MOCK: Photo[] = [
  {
    title: 'test photo 1',
    previewData: '',
  },
  {
    title: 'test photo 2',
    previewData: '',
  },
];

@Controller('photos')
export class PhotosController {

  @Get()
  findAll(): Photo[] {
    return PHOTOS_MOCK;
  }
}
