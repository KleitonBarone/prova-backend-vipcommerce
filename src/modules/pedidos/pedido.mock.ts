import { CreatePedidoDTO, UpdatePedidoDTO } from './pedido.dto';
import { Pedido } from './pedido.entity';

export const mockFindAll: Pedido[] = [
  {
    codigo_pedido: 1,
    data: '10/02/2022',
    observacao: 'teste',
    forma_pagamento: 'dinheiro',
    cliente: {
      codigo_cliente: 1,
      nome: 'Teste1',
      cpf: '12345678909',
      sexo: 'masculino',
      email: 'teste1@teste.com',
    },
    produtos: [
      {
        qtd: 3,
        produto: {
          codigo_produto: 1,
          nome: 'teste1',
          cor: 'teste1',
          tamanho: 'teste1',
          valor: 10,
        },
      },
    ],
  },
];

export const mockFindOne: Pedido = {
  codigo_pedido: 1,
  data: '10/02/2022',
  observacao: 'teste',
  forma_pagamento: 'dinheiro',
  cliente: {
    codigo_cliente: 1,
    nome: 'Teste1',
    cpf: '12345678909',
    sexo: 'masculino',
    email: 'teste1@teste.com',
  },
  produtos: [
    {
      qtd: 3,
      produto: {
        codigo_produto: 1,
        nome: 'teste1',
        cor: 'teste1',
        tamanho: 'teste1',
        valor: 10,
      },
    },
  ],
};

export const mockPedidoDTO: CreatePedidoDTO = {
  codigo_pedido: 1,
  data: '10/02/2022',
  observacao: 'teste',
  forma_pagamento: 'dinheiro',
  codigo_cliente: 1,
  produtos: [
    {
      codigo_produto: 1,
      qtd: 3,
    },
  ],
};

export const mockPedidoUpdateDTO: UpdatePedidoDTO = {
  data: '10/02/2022',
  observacao: 'teste',
  forma_pagamento: 'dinheiro',
  codigo_cliente: 2,
};

export const mockCreatedPedido: Pedido = {
  codigo_pedido: 1,
  data: '10/02/2022',
  observacao: 'teste',
  forma_pagamento: 'dinheiro',
  cliente: {
    codigo_cliente: 1,
    nome: 'Teste1',
    cpf: '12345678909',
    sexo: 'masculino',
    email: 'teste1@teste.com',
  },
  produtos: [
    {
      qtd: 3,
      produto: {
        codigo_produto: 1,
        nome: 'teste1',
        cor: 'teste1',
        tamanho: 'teste1',
        valor: 10,
      },
    },
  ],
};

export const mockDeletedResult = {
  deleted: true,
};

export const mockPedidoRepository = {
  find: () => mockFindAll,
  findOne: () => mockFindOne,
  create: () => mockCreatedPedido,
  save: () => mockCreatedPedido,
  update: () => mockFindOne,
  delete: () => mockDeletedResult,
};
