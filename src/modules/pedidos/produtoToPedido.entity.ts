import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from '../produtos/produto.entity';

@Entity()
export class ProdutoToPedido {
  @PrimaryGeneratedColumn()
  public produtoToPedidoId!: number;

  @Column()
  public produtoId!: number;

  @Column()
  public pedidoId!: number;

  @Column()
  qtd!: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.produtoToPedido, {
    onDelete: 'CASCADE',
  })
  pedido?: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.produtoToPedido, {
    cascade: true,
  })
  produto?: Produto;
}
