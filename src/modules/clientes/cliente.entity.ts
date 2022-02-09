import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
