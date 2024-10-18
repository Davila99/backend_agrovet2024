import { Module } from '@nestjs/common';
import { AgronomesService } from './agronomes.service';
import { AgronomesController } from './agronomes.controller';

@Module({
  controllers: [AgronomesController],
  providers: [AgronomesService]
})
export class AgronomesModule {}
