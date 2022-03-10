import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class ProdutoPedidoDTO {
  @ApiProperty({ type: Number, description: 'Product Id' })
  codigo_produto: number;

  @ApiProperty({ type: Number, description: 'Product Quantity' })
  qtd: number;
}

export class CreatePedidoDTO {
  @ApiProperty({ type: Number, description: 'Pedido Id' })
  codigo_pedido: number;

  @ApiProperty({ type: String, description: 'Pedido Data' })
  data: string;

  @ApiProperty({ type: String, description: 'Pedido Observation' })
  observacao: string;

  @ApiProperty({ type: String, description: 'Pedido Payment Option' })
  forma_pagamento: string;

  @ApiProperty({ type: Number, description: 'Client Id' })
  codigo_cliente: number;

  @ApiProperty({ type: [ProdutoPedidoDTO], description: 'Products' })
  produtos: ProdutoPedidoDTO[];
}

export class UpdatePedidoDTO {
  @ApiPropertyOptional({ type: String, description: 'Pedido Data' })
  data?: string;

  @ApiPropertyOptional({ type: String, description: 'Pedido Observation' })
  observacao?: string;

  @ApiPropertyOptional({ type: String, description: 'Pedido Payment Option' })
  forma_pagamento?: string;

  @ApiPropertyOptional({ type: Number, description: 'Client Id' })
  codigo_cliente?: number;

  @ApiPropertyOptional({ type: [ProdutoPedidoDTO], description: 'Products' })
  produtos?: ProdutoPedidoDTO[];
}
