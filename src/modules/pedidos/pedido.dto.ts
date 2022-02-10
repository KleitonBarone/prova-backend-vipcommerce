export class PedidoDTO {
  codigo_pedido: number;
  data: string;
  observacao: string;
  forma_pagamento: string;
  codigo_cliente: number;
  produtos: ProdutoPedidoDTO[];
}

export class ProdutoPedidoDTO {
  codigo_produto: number;
  qtd: number;
}
