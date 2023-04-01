import { Injectable } from '@nestjs/common';
import { execFile } from 'child_process';

@Injectable()
export class VideoConverterService {
  async convert(inPath: string, outPath?: string) {
    const child = execFile(
      '/Users/kupsyloc/Desktop/ffmpeg',
      ['-i', inPath, outPath ?? '/Users/kupsyloc/Desktop/vide44o.gif', '-y'],
      { maxBuffer: 9999999999 },
    );

    child.stderr.pipe(process.stdout);
    child.stdout.pipe(process.stdout);

    return new Promise<void>((resolve, reject) => {
      child.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(code);
        }
      });
    });
  }
}
