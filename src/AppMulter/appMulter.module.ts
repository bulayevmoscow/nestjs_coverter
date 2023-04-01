import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import type { Options } from 'multer';
import * as fs from 'fs';
import * as path from 'path';

const MulterConfig: Options = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const imageDir = path.join(global.appRoot, 'images');

      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
      }
      cb(null, imageDir);
    },
  }),
};

@Module({
  imports: [MulterModule.register(MulterConfig)],
  exports: [MulterModule],
})
export class AppMulterModule {}
