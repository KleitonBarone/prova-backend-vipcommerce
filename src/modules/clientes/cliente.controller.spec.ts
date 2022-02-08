import { Test, TestingModule } from '@nestjs/testing';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { Repository, Connection } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockClienteDTO, mockClienteUpdateDTO, mockCreatedCliente, mockDeletedResult, mockFindAll, mockFindOne } from './cliente.mock';
import { DatabaseModule } from '../../database/database.module';
import { ClienteController } from './cliente.controller';

describe('ClienteController', () => {
  let controller: ClienteController;
  let service: ClienteService;

  const mockClienteService = {
    findAll: () => mockFindAll,
    read: () => mockFindOne,
    create: () => mockCreatedCliente,
    update: () => mockFindOne,
    destroy: () => mockDeletedResult,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteController],
      providers: [
        {
          provide: ClienteService,
          useValue: mockClienteService,
        },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
    controller = module.get<ClienteController>(ClienteController);
  });

  it('ClienteController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all clients', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(mockFindAll);

    const result = await controller.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one client', async () => {
    jest.spyOn(service, 'read').mockResolvedValueOnce(mockFindOne);

    const result = await controller.readCliente(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one client', async () => {
    jest.spyOn(service, 'create').mockResolvedValueOnce(mockCreatedCliente);

    const result = await controller.createCliente(mockClienteDTO);

    expect(result).toEqual(mockCreatedCliente);
  });

  it('should update one client', async () => {
    jest.spyOn(service, 'update').mockResolvedValueOnce(mockFindOne);

    const result = await controller.updateCliente(1, mockClienteUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one client', async () => {
    jest.spyOn(service, 'destroy').mockResolvedValueOnce(mockDeletedResult);

    const result = await controller.deleteCliente(1);

    expect(result).toEqual(mockDeletedResult);
  });
});
