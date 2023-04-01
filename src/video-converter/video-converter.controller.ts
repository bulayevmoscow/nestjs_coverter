import { Body, Controller, Get, Post } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';

const saveDir = path.join(__dirname, '/../upload_folder');
const saveFile = (data: any): string => {
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir);
  }
  const fileName = uuid();
  fs.writeFileSync(path.join(saveDir, fileName), String(data));
  return fileName;
};

@Controller('video-converter')
export class VideoConverterController {
  @Get()
  getRoot() {
    const a = fs
      .readdirSync('./', { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name);
    return JSON.stringify(a);
  }
  @Post()
  async downloadFile(@Body() body: { id: string }) {
    const fileName = saveFile(body.id);
    return {
      id: body.id,
      // fileName,
    };
  }
}
