import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoConverterModule } from './video-converter/video-converter.module';

@Module({
  imports: [VideoConverterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
