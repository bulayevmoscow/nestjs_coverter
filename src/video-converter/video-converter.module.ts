import { Module } from '@nestjs/common';
import { VideoConverterController } from './video-converter.controller';
import { VideoConverterService } from './video-converter.service';
import { AppMulterModule } from '../AppMulter/appMulter.module';

@Module({
  imports: [AppMulterModule],
  controllers: [VideoConverterController],
  providers: [VideoConverterService],
})
export class VideoConverterModule {}
