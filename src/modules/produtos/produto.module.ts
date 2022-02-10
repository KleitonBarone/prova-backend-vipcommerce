import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ProdutoController } from './produto.controller';
import { produtoProviders } from './produto.providers';
import { ProdutoService } from './produto.service';

@Module({
  imports: [DatabaseModule],
  providers: [...produtoProviders, ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
