import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { ProdutoModule } from './modules/produtos/produto.module';

@Module({
  imports: [ClienteModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
