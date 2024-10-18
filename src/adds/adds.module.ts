import { Module } from '@nestjs/common';
import { AddsService } from './adds.service';
import { AddsController } from './adds.controller';

@Module({
  controllers: [AddsController],
  providers: [AddsService]
})
export class AddsModule {}
