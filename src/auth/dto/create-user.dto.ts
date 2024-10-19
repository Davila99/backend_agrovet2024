import { IsBoolean, IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsBoolean()
    @IsOptional() // Es opcional, ya que puede tomar el valor por defecto
    isActive?: boolean;

    @IsArray()
    @IsOptional() // Es opcional, ya que puede tomar el valor por defecto
    roles?: string[];

    @IsBoolean()
    @IsOptional() // Es opcional, ya que puede tomar el valor por defecto
    isOnline?: boolean;

    // Si quieres establecer la relación con Veterinarian, puedes añadirlo aquí
    // @IsNotEmpty() // Si es requerido
    // veterinarianId: string; // Asegúrate de que se corresponda con el ID del veterinario
}
