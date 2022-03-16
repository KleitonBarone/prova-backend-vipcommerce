import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProdutoPedidoDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Product Id' })
  codigo_produto: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Product Quantity' })
  qtd: number;
}

export class CreatePedidoDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Pedido Id' })
  codigo_pedido: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Pedido Data' })
  data: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Pedido Observation' })
  observacao: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Pedido Payment Option' })
  forma_pagamento: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Client Id' })
  codigo_cliente: number;

  @IsNotEmpty()
  @ApiProperty({ type: [ProdutoPedidoDTO], description: 'Products' })
  produtos: ProdutoPedidoDTO[];
}

export class UpdatePedidoDTO {
  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Pedido Data' })
  data?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Pedido Observation' })
  observacao?: string;

  @IsString()
  @ApiPropertyOptional({ type: String, description: 'Pedido Payment Option' })
  forma_pagamento?: string;

  @IsNumber()
  @ApiPropertyOptional({ type: Number, description: 'Client Id' })
  codigo_cliente?: number;

  @ApiPropertyOptional({ type: [ProdutoPedidoDTO], description: 'Products' })
  produtos?: ProdutoPedidoDTO[];
}
