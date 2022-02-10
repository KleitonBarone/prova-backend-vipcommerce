import { Connection } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { Produto } from '../produtos/produto.entity';
import { Pedido } from './pedido.entity';

export const pedidoProviders = [
  {
    provide: 'PEDIDO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Pedido),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'CLIENTE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cliente),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'PRODUTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Produto),
    inject: ['DATABASE_CONNECTION'],
  },
];
