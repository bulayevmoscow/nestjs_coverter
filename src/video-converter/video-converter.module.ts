import { Module } from '@nestjs/common';
import { VideoConverterController } from './video-converter.controller';
import { VideoConverterService } from './video-converter.service';

@Module({
  controllers: [VideoConverterController],
  providers: [VideoConverterService],
})
export class VideoConverterModule {}
