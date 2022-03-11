import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Produto Id' })
  codigo_produto: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Produto Name' })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Produto Color' })
  cor: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Produto Size' })
  tamanho: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Produto Value' })
  valor: number;
}

export class UpdateProdutoDTO {
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Produto Name' })
  nome?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Produto Color' })
  cor?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Produto Size' })
  tamanho?: string;

  @IsNumber()
  @ApiPropertyOptional({ type: Number, description: 'Produto Value' })
  valor?: number;
}
