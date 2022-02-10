import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoDTO } from './produto.dto';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async create(data: ProdutoDTO) {
    const user = this.produtoRepository.create(data);
    await this.produtoRepository.save(data);
    return user;
  }

  async read(codigo_produto: number) {
    return await this.produtoRepository.findOne({
      where: { codigo_produto: codigo_produto },
    });
  }

  async update(codigo_produto: number, data: Partial<ProdutoDTO>) {
    await this.produtoRepository.update({ codigo_produto }, data);
    return await this.produtoRepository.findOne({ codigo_produto });
  }

  async destroy(codigo_produto: number) {
    await this.produtoRepository.delete({ codigo_produto });
    return { deleted: true };
  }
}
