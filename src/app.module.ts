import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { PedidoModule } from './modules/pedidos/pedido.module';
import { ProdutoModule } from './modules/produtos/produto.module';

@Module({
  imports: [ClienteModule, ProdutoModule, PedidoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
