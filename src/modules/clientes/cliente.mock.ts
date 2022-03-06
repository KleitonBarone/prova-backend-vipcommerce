import { ClienteDTO } from './cliente.dto';
import { Cliente } from './cliente.entity';

export const mockFindAll: Cliente[] = [
  {
    codigo_cliente: 1,
    nome: 'Teste1',
    cpf: '12345678909',
    sexo: 'masculino',
    email: 'teste1@teste.com',
  },
  {
    codigo_cliente: 2,
    nome: 'Teste2',
    cpf: '40498693066',
    sexo: 'feminino',
    email: 'teste2@teste.com',
  },
];

export const mockFindOne: Cliente = {
  codigo_cliente: 1,
  nome: 'Teste1',
  cpf: '12345678909',
  sexo: 'masculino',
  email: 'teste1@teste.com',
};

export const mockClienteDTO: ClienteDTO = {
  codigo_cliente: 1,
  nome: 'Teste1',
  cpf: '12345678909',
  sexo: 'masculino',
  email: 'teste1@teste.com',
};

export const mockClienteUpdateDTO: Partial<ClienteDTO> = {
  nome: 'Teste1',
  cpf: '12345678909',
  sexo: 'masculino',
  email: 'teste1@teste.com',
};

export const mockCreatedCliente: Cliente = {
  codigo_cliente: 1,
  nome: 'Teste1',
  cpf: '12345678909',
  sexo: 'masculino',
  email: 'teste1@teste.com',
};

export const mockDeletedResult = {
  deleted: true,
};

export const mockClienteRepository = {
  find: () => mockFindAll,
  findOne: () => mockFindOne,
  create: () => mockCreatedCliente,
  save: () => mockCreatedCliente,
  update: () => mockFindOne,
  delete: () => mockDeletedResult,
};
