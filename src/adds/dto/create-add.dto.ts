import { IsArray, IsOptional, IsString, MinLength } from "class-validator";
export class CreateAddDto {
        @IsOptional()
        @IsString()
        addImages:string[]
        
        @IsString()
        @MinLength(5)
        title:string
    
        @IsString()
        @IsOptional()
        @MinLength(5)
        description: string;
       
        @IsOptional()
        @IsArray()
       latitud :number[];


        @IsOptional()
        @IsArray()
        longitud :number[];

        @IsOptional()
        range:number;
}
