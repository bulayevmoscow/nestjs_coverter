import { Module } from '@nestjs/common';
import { FsModuleService } from './fs-module.service';

@Module({
  providers: [FsModuleService],
  exports: [FsModuleService],
})
export class FsModuleModule {}
