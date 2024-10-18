import {IsString, Matches, MaxLength, MinLength} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    fullName: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener mayusculas, minisculas y un numero'})
    password: string;
    
    @IsString()
    phoneNumber:string;
}