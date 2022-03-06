import { ProdutoDTO } from './produto.dto';
import { Produto } from './produto.entity';

export const mockFindAll: Produto[] = [
  {
    codigo_produto: 1,
    nome: 'Teste1',
    cor: 'preto',
    tamanho: 'M',
    valor: 30,
  },
  {
    codigo_produto: 2,
    nome: 'Teste2',
    cor: 'vermelho',
    tamanho: 'G',
    valor: 60,
  },
];

export const mockFindOne: Produto = {
  codigo_produto: 1,
  nome: 'Teste1',
  cor: 'preto',
  tamanho: 'M',
  valor: 30,
};

export const mockProdutoDTO: ProdutoDTO = {
  codigo_produto: 1,
  nome: 'Teste1',
  cor: 'preto',
  tamanho: 'M',
  valor: 30,
};

export const mockProdutoUpdateDTO: Partial<ProdutoDTO> = {
  nome: 'Teste1',
  cor: 'preto',
  tamanho: 'M',
  valor: 30,
};

export const mockCreatedProduto: Produto = {
  codigo_produto: 1,
  nome: 'Teste1',
  cor: 'preto',
  tamanho: 'M',
  valor: 30,
};

export const mockDeletedResult = {
  deleted: true,
};

export const mockProdutoRepository = {
  find: () => mockFindAll,
  findOne: () => mockFindOne,
  create: () => mockCreatedProduto,
  save: () => mockCreatedProduto,
  update: () => mockFindOne,
  delete: () => mockDeletedResult,
};
