import { IsArray, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateVeterinarianDto {

    @IsString()
    @MinLength(1)
    veterinaryPerfil:string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    especiality:string[]

    @IsNumber()
    @IsOptional()
    @IsPositive()
    experience:number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    consults:number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    stars:number;
}
