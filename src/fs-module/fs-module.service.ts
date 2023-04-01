import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';

const saveDir = path.join(__dirname, '/upload_folder');

@Injectable()
export class FsModuleService {
  saveFile(data: any) {
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir);
    }
    const fileName = uuid();
    fs.writeFileSync(path.join(saveDir, fileName), String(data));
    return fileName;
  }

  readFile(id: any) {
    const buf = fs.readFileSync(path.join(saveDir, id));
    return buf.toString('utf-8');
  }

  removeFile(id: any) {
    const filePath = path.join(saveDir, id);
    if (!fs.existsSync(filePath)) {
      throw new Error();
    }
    return fs.rmSync(filePath);
  }
}
