import { PartialType } from '@nestjs/swagger';
import { CreateAgronomeDto } from './create-agronome.dto';

export class UpdateAgronomeDto extends PartialType(CreateAgronomeDto) {}
