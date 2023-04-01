import { Module } from '@nestjs/common';
import { VideoConverterController } from './video-converter.controller';
import { VideoConverterService } from './video-converter.service';
import { AppMulterModule } from '../AppMulter/appMulter.module';
import { FsModuleModule } from '../fs-module/fs-module.module';

@Module({
  imports: [AppMulterModule, FsModuleModule],
  controllers: [VideoConverterController],
  providers: [VideoConverterService],
})
export class VideoConverterModule {}
