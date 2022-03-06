import { Test, TestingModule } from '@nestjs/testing';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import {
  mockPedidoDTO,
  mockPedidoUpdateDTO,
  mockCreatedPedido,
  mockDeletedResult,
  mockFindAll,
  mockFindOne,
  mockPedidoRepository,
} from './pedido.mock';
import { mockClienteRepository } from '../clientes/cliente.mock';
import { mockProdutoRepository } from '../produtos/produto.mock';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoController],
      providers: [
        PedidoService,
        {
          provide: 'PEDIDO_REPOSITORY',
          useValue: mockPedidoRepository,
        },
        {
          provide: 'CLIENTE_REPOSITORY',
          useValue: mockClienteRepository,
        },
        {
          provide: 'PRODUTO_REPOSITORY',
          useValue: mockProdutoRepository,
        },
      ],
    }).compile();

    service = module.get<PedidoService>(PedidoService);
  });

  it('PedidoController - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all pedidos', async () => {
    const result = await service.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one pedido', async () => {
    const result = await service.find(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one pedido', async () => {
    const result = await service.create(mockPedidoDTO);

    expect(result).toEqual(mockCreatedPedido);
  });

  it('should update one client', async () => {
    const result = await service.update(1, mockPedidoUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one client', async () => {
    const result = await service.delete(1);

    expect(result).toEqual(mockDeletedResult);
  });
});
