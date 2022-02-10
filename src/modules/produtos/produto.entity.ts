import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProdutoToPedido } from '../pedidos/produtoToPedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  codigo_produto: number;

  @Column({ length: 500 })
  nome: string;

  @Column('text')
  cor: string;

  @Column('text')
  tamanho: string;

  @Column('int')
  valor: number;

  @OneToMany(
    () => ProdutoToPedido,
    (produtoToPedido) => produtoToPedido.produto,
  )
  public produtoToPedido?: ProdutoToPedido[];
}
