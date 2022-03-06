import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClienteDTO } from './cliente.dto';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async create(data: ClienteDTO) {
    const user = this.clienteRepository.create(data);
    await this.clienteRepository.save(data);
    return user;
  }

  async find(codigo_cliente: number) {
    return await this.clienteRepository.findOne({
      where: { codigo_cliente: codigo_cliente },
    });
  }

  async update(codigo_cliente: number, data: Partial<ClienteDTO>) {
    await this.clienteRepository.update({ codigo_cliente }, data);
    return await this.clienteRepository.findOne({ codigo_cliente });
  }

  async delete(codigo_cliente: number) {
    await this.clienteRepository.delete({ codigo_cliente });
    return { deleted: true };
  }
}
