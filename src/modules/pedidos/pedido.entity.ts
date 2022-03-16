import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { ProdutoToPedido } from './produtoToPedido.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  codigo_pedido: number;

  @Column({ length: 500 })
  data: string;

  @Column('text')
  observacao: string;

  @Column('text')
  forma_pagamento: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, {
    cascade: true,
  })
  cliente: Cliente;

  @OneToMany(
    () => ProdutoToPedido,
    (produtoToPedido) => produtoToPedido.pedido,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  produtos: ProdutoToPedido[];
}
