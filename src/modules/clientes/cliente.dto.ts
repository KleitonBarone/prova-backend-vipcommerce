import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateClienteDTO {
  @ApiProperty({ type: Number, description: 'Cliente Id' })
  codigo_cliente: number;

  @ApiProperty({ type: String, description: 'Cliente Name' })
  nome: string;

  @ApiProperty({ type: String, description: 'Cliente Cpf' })
  cpf: string;

  @ApiProperty({ type: String, description: 'Cliente Gender' })
  sexo: string;

  @ApiProperty({ type: String, description: 'Cliente Email' })
  email: string;
}

export class UpdateClienteDTO {
  @ApiPropertyOptional({ type: String, description: 'Cliente Name' })
  nome?: string;

  @ApiPropertyOptional({ type: String, description: 'Cliente Cpf' })
  cpf?: string;

  @ApiPropertyOptional({ type: String, description: 'Cliente Gender' })
  sexo?: string;

  @ApiPropertyOptional({ type: String, description: 'Cliente Email' })
  email?: string;
}
