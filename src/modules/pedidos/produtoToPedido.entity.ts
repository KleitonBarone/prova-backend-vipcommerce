import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from '../produtos/produto.entity';

@Entity()
export class ProdutoToPedido {
  @Column()
  qtd!: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.produtos, {
    onDelete: 'CASCADE',
    primary: true,
  })
  pedido?: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedidos, {
    cascade: true,
    primary: true,
  })
  produto?: Produto;
}
