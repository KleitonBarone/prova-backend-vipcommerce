import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClienteDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Cliente Id' })
  codigo_cliente: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Cliente Name' })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Cliente Cpf' })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Cliente Gender' })
  sexo: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Cliente Email' })
  email: string;
}

export class UpdateClienteDTO {
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Cliente Name' })
  nome?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Cliente Cpf' })
  cpf?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Cliente Gender' })
  sexo?: string;

  @IsEmail()
  @ApiPropertyOptional({ type: String, description: 'Cliente Email' })
  email?: string;
}
