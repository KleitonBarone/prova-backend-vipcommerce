import { Test, TestingModule } from '@nestjs/testing';
import { PedidoService } from './pedido.service';

import {
  mockPedidoDTO,
  mockPedidoUpdateDTO,
  mockCreatedPedido,
  mockDeletedResult,
  mockFindAll,
  mockFindOne,
} from './pedido.mock';
import { PedidoController } from './pedido.controller';

describe('PedidoController', () => {
  let controller: PedidoController;
  let service: PedidoService;

  const mockPedidoService = {
    findAll: () => mockFindAll,
    read: () => mockFindOne,
    create: () => mockCreatedPedido,
    update: () => mockFindOne,
    destroy: () => mockDeletedResult,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoController],
      providers: [
        {
          provide: PedidoService,
          useValue: mockPedidoService,
        },
      ],
    }).compile();

    service = module.get<PedidoService>(PedidoService);
    controller = module.get<PedidoController>(PedidoController);
  });

  it('PedidoController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all pedidos', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(mockFindAll);

    const result = await controller.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one pedido', async () => {
    jest.spyOn(service, 'read').mockResolvedValueOnce(mockFindOne);

    const result = await controller.readPedido(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one pedido', async () => {
    jest.spyOn(service, 'create').mockResolvedValueOnce(mockCreatedPedido);

    const result = await controller.createPedido(mockPedidoDTO);

    expect(result).toEqual(mockCreatedPedido);
  });

  it('should update one client', async () => {
    jest.spyOn(service, 'update').mockResolvedValueOnce(mockFindOne);

    const result = await controller.updatePedido(1, mockPedidoUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one client', async () => {
    jest.spyOn(service, 'destroy').mockResolvedValueOnce(mockDeletedResult);

    const result = await controller.deletePedido(1);

    expect(result).toEqual(mockDeletedResult);
  });
});

