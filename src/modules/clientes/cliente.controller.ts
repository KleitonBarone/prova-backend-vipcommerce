import { HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('/clientes')
export class ClienteController {
  @Inject(ClienteService)
  private clienteService: ClienteService;

  @Get()
  async findAll(): Promise<Cliente[]> {
    const result = await this.clienteService.findAll();
    return result;
  }

  @Get(':id')
  async readCliente(@Param('id') id: number): Promise<Cliente> {
    const result = await this.clienteService.find(id);
    return result;
  }

  @Post()
  async createCliente(@Body() data: ClienteDTO): Promise<Cliente> {
    const result = await this.clienteService.create(data);
    return result;
  }

  @Put(':id')
  async updateCliente(
    @Param('id') id: number,
    @Body() data: Partial<ClienteDTO>,
  ) {
    const result = await this.clienteService.update(id, data);
    return result;
  }

  @Delete(':id')
  async deleteCliente(@Param('id') id: number) {
    const result = await this.clienteService.delete(id);
    return result;
  }
}
