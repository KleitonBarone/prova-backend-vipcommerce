import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { IdParams } from '../../util/util.dto';
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
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async readCliente(@Param() params: IdParams): Promise<Cliente> {
    const result = await this.clienteService.find(params.id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Cliente' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: CreateClienteDTO })
  async createCliente(@Body() data: CreateClienteDTO): Promise<Cliente> {
    const result = await this.clienteService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Cliente' })
  @ApiNotFoundResponse({ description: 'Cliente Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateClienteDTO })
  async updateCliente(
    @Param() params: IdParams,
    @Body() data: UpdateClienteDTO,
  ) {
    const result = await this.clienteService.update(params.id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Cliente' })
  @ApiNotFoundResponse({ description: 'Cliente Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async deleteCliente(@Param() params: IdParams) {
    const result = await this.clienteService.delete(params.id);
    return result;
  }
}
