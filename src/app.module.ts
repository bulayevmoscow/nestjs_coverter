import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoConverterModule } from './video-converter/video-converter.module';
import { FsModuleModule } from './fs-module/fs-module.module';

@Module({
  imports: [VideoConverterModule, FsModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
