import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import {
  mockClienteDTO,
  mockClienteUpdateDTO,
  mockCreatedCliente,
  mockDeletedResult,
  mockFindAll,
  mockFindOne,
  mockClienteRepository,
} from './cliente.mock';
import { ClienteController } from './cliente.controller';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteController],
      providers: [
        ClienteService,
        {
          provide: 'CLIENTE_REPOSITORY',
          useValue: mockClienteRepository,
        },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
  });

  it('ClienteService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all clients', async () => {
    const result = await service.findAll();

    expect(result).toEqual(mockFindAll);
  });

  it('should return one client', async () => {
    const result = await service.find(1);

    expect(result).toEqual(mockFindOne);
  });

  it('should create one client', async () => {
    const result = await service.create(mockClienteDTO);

    expect(result).toEqual(mockCreatedCliente);
  });

  it('should update one client', async () => {
    const result = await service.update(1, mockClienteUpdateDTO);

    expect(result).toEqual(mockFindOne);
  });

  it('should remove one client', async () => {
    const result = await service.delete(1);

    expect(result).toEqual(mockDeletedResult);
  });
});
