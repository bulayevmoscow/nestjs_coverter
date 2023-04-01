import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import type { Options } from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';

const MulterConfig: Options = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const imageDir = path.join(global.appRoot, 'images');

      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
      }
      cb(null, imageDir);
    },
    filename: function (req, file, cb) {
      const extArray = file.mimetype.split('/');
      const extension = extArray.at(-1);
      cb(null, uuid() + '-' + Date.now() + '.' + extension);
    },
  }),
};

@Module({
  imports: [MulterModule.register(MulterConfig)],
  exports: [MulterModule],
})
export class AppMulterModule {}
