import { HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateClienteDTO, UpdateClienteDTO } from './cliente.dto';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@ApiTags('Clientes')
@Controller('/clientes')
export class ClienteController {
  @Inject(ClienteService)
  private clienteService: ClienteService;

  @Get()
  @ApiOkResponse({ description: 'Got All Clientes' })
  async findAll(): Promise<Cliente[]> {
    const result = await this.clienteService.findAll();
    return result;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Got One Cliente' })
  @ApiNotFoundResponse({ description: 'Cliente Not Found' })
  async readCliente(@Param('id') id: number): Promise<Cliente> {
    const result = await this.clienteService.find(id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Cliente' })
  @ApiBody({ type: CreateClienteDTO })
  async createCliente(@Body() data: CreateClienteDTO): Promise<Cliente> {
    const result = await this.clienteService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Cliente' })
  @ApiNotFoundResponse({ description: 'Cliente Not Found' })
  @ApiBody({ type: UpdateClienteDTO })
  async updateCliente(
    @Param('id') id: number,
    @Body() data: Partial<UpdateClienteDTO>,
  ) {
    const result = await this.clienteService.update(id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Cliente' })
  @ApiNotFoundResponse({ description: 'Cliente Not Found' })
  async deleteCliente(@Param('id') id: number) {
    const result = await this.clienteService.delete(id);
    return result;
  }
}
