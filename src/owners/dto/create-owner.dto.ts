import { IsOptional, IsString } from "class-validator";
import { Column, OneToOne } from "typeorm";

export class CreateOwnerDto {

    @IsString()
    @IsOptional()
    OwnerPerfil:string;

    @IsString()
    @IsOptional()
    description: string;
}
