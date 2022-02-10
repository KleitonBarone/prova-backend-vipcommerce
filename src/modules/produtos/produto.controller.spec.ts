import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoService } from './produto.service';
import {
  mockProdutoDTO,
  mockProdutoUpdateDTO,
  mockCreatedProduto,
  mockDeletedResult,
  mockFindAll,
  mockFindOne,
} from './produto.mock';
import { ProdutoController } from './produto.controller';

describe('ProdutoController', () => {
  let controller: ProdutoController;
  let service: ProdutoService;

  const mockProdutoService = {
    findAll: () => mockFindAll,
    read: () => mockFindOne,
    create: () => mockCreatedProduto,
    update: () => mockFindOne,
    destroy: () => mockDeletedResult,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [
        {
          provide: ProdutoService,
          useValue: mockProdutoService,
        },
      ],
    }).compile();

    service = module.get<ProdutoService>(ProdutoService);
    controller = module.get<ProdutoController>(ProdutoController);
  });

  it('ProdutoController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all products', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(mockFindAll);

    const result = await controller.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one product', async () => {
    jest.spyOn(service, 'read').mockResolvedValueOnce(mockFindOne);

    const result = await controller.readProduto(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one product', async () => {
    jest.spyOn(service, 'create').mockResolvedValueOnce(mockCreatedProduto);

    const result = await controller.createProduto(mockProdutoDTO);

    expect(result).toEqual(mockCreatedProduto);
  });

  it('should update one product', async () => {
    jest.spyOn(service, 'update').mockResolvedValueOnce(mockFindOne);

    const result = await controller.updateProduto(1, mockProdutoUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one product', async () => {
    jest.spyOn(service, 'destroy').mockResolvedValueOnce(mockDeletedResult);

    const result = await controller.deleteProduto(1);

    expect(result).toEqual(mockDeletedResult);
  });
});
