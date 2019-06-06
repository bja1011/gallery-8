import { Module } from '@nestjs/common';
import { PhotosController } from './photos/photos.controller';

@Module({
  controllers: [PhotosController]
})
export class GalleryModule {
}
