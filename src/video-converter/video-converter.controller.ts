import {
  Body,
  Controller,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';

const saveDir = path.join(__dirname, '/upload_folder');
const saveFile = (data: any): string => {
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir);
  }
  const fileName = uuid();
  fs.writeFileSync(path.join(saveDir, fileName), String(data));
  return fileName;
};

const readFile = (id: any) => {
  const buf = fs.readFileSync(path.join(saveDir, id));
  return buf.toString('utf-8');
};

@Controller('video-converter')
export class VideoConverterController {
  @Get(':id')
  getFileContent(@Param() params: { id: string }) {
    console.log(params.id);
    return readFile(params.id);
  }
  @Get()
  // TODO REMOVE
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
      fileName: fileName,
    };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 400000 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
  }

  @Post('upload-video')
  @UseInterceptors(FileInterceptor('file'))
  uploadVideo(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'mp4',
        })
        // .addFileTypeValidator({ fileType: 'video' })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
  }
}
