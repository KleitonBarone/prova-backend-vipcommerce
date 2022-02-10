import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pedido } from '../pedidos/pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  codigo_cliente: number;

  @Column({ length: 500 })
  nome: string;

  @Column('text')
  cpf: string;

  @Column('text')
  sexo: string;

  @Column('text')
  email: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos?: Pedido[];
}
