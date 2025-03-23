import { Module } from '@nestjs/common';
import { PrimaProvider } from './prima.provider';

@Module({
  providers: [PrimaProvider],
  exports: [PrimaProvider],
})
export class DbModule {}
