import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateProdutoDTO {
  @ApiProperty({ type: Number, description: 'Produto Id' })
  codigo_produto: number;

  @ApiProperty({ type: String, description: 'Produto Name' })
  nome: string;

  @ApiProperty({ type: String, description: 'Produto Color' })
  cor: string;

  @ApiProperty({ type: String, description: 'Produto Size' })
  tamanho: string;

  @ApiProperty({ type: Number, description: 'Produto Value' })
  valor: number;
}

export class UpdateProdutoDTO {
  @ApiPropertyOptional({ type: String, description: 'Produto Name' })
  nome?: string;

  @ApiPropertyOptional({ type: String, description: 'Produto Color' })
  cor?: string;

  @ApiPropertyOptional({ type: String, description: 'Produto Size' })
  tamanho?: string;

  @ApiPropertyOptional({ type: Number, description: 'Produto Value' })
  valor?: number;
}
