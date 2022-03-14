import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { Produto } from '../produtos/produto.entity';
import {
  CreatePedidoDTO,
  ProdutoPedidoDTO,
  UpdatePedidoDTO,
} from './pedido.dto';
import { Pedido } from './pedido.entity';
import { ProdutoToPedido } from './produtoToPedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @Inject('PEDIDO_REPOSITORY')
    private pedidoRepository: Repository<Pedido>,
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['cliente', 'produtos', 'produtos.produto'],
    });
  }

  async create(data: CreatePedidoDTO) {
    const cliente = await this.clienteRepository.findOne({
      where: { codigo_cliente: data.codigo_cliente },
    });
    const produtos = data.produtos;
    delete data.produtos;
    delete data.codigo_cliente;
    const pedidoData = { ...data, cliente };
    const pedido = this.pedidoRepository.create(pedidoData);
    pedido.produtos = await this.parseProducts(produtos);
    await this.pedidoRepository.save(pedido);
    return pedido;
  }

  async parseProducts(produtosDTO: ProdutoPedidoDTO[]) {
    const produtos: ProdutoToPedido[] = [];
    for (const produtoDTO of produtosDTO) {
      const produto = new ProdutoToPedido();
      const produtoData = await this.produtoRepository.findOne({
        where: { codigo_produto: produtoDTO.codigo_produto },
      });
      produto.produto = produtoData;
      produto.qtd = produtoDTO.qtd;
      produtos.push(produto);
    }
    return produtos;
  }

  async find(codigo_pedido: number) {
    return await this.pedidoRepository.findOne({
      where: { codigo_pedido: codigo_pedido },
      relations: ['cliente', 'produtoToPedido'],
    });
  }

  async update(codigo_pedido: number, data: UpdatePedidoDTO) {
    const cliente = await this.clienteRepository.findOne({
      where: { codigo_cliente: data.codigo_cliente },
    });
    delete data.produtos;
    const pedidoData = { ...data, cliente };
    await this.pedidoRepository.update({ codigo_pedido }, pedidoData);
    return await this.pedidoRepository.findOne({
      where: { codigo_pedido: codigo_pedido },
      relations: ['cliente', 'produtoToPedido'],
    });
  }

  async delete(codigo_pedido: number) {
    await this.pedidoRepository.delete({ codigo_pedido });
    return { deleted: true };
  }
}
