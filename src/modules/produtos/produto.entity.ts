import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
