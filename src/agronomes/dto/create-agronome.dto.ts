import { IsArray, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateAgronomeDto {
    
    @IsString()
    agronomePerfil: string;

    @IsArray()
    @IsString({ each: true })
    especiality: string[];

    @IsInt()
    experience: number;

    @IsInt()
    consults: number;

    @IsInt()
    stars: number;
}
