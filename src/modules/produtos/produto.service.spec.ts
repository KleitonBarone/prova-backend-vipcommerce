import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoService } from './produto.service';
import {
  mockProdutoDTO,
  mockProdutoUpdateDTO,
  mockCreatedProduto,
  mockDeletedResult,
  mockFindAll,
  mockFindOne,
  mockProdutoRepository,
} from './produto.mock';
import { ProdutoController } from './produto.controller';

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [
        ProdutoService,
        {
          provide: 'PRODUTO_REPOSITORY',
          useValue: mockProdutoRepository,
        },
      ],
    }).compile();

    service = module.get<ProdutoService>(ProdutoService);
  });

  it('ProdutoService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', async () => {
    const result = await service.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one product', async () => {
    const result = await service.find(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one product', async () => {
    const result = await service.create(mockProdutoDTO);

    expect(result).toEqual(mockCreatedProduto);
  });

  it('should update one product', async () => {
    const result = await service.update(1, mockProdutoUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one product', async () => {
    const result = await service.delete(1);

    expect(result).toEqual(mockDeletedResult);
  });
});
