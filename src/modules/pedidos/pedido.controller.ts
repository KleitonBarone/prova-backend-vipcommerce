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
import { ApiError } from 'src/util/api-error.model';
import { DeletedModel } from 'src/util/delete.model';
import { IdParams } from '../../util/util.dto';
import { CreatePedidoDTO, UpdatePedidoDTO } from './pedido.dto';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';

@ApiTags('Pedidos')
@Controller('/pedidos')
export class PedidoController {
  @Inject(PedidoService)
  private pedidoService: PedidoService;

  @Get()
  @ApiOkResponse({ description: 'Got All Pedidos' })
  async findAll(): Promise<Pedido[] | ApiError> {
    const result = await this.pedidoService.findAll();
    return result;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Got One Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async readPedido(@Param() params: IdParams): Promise<Pedido | ApiError> {
    const result = await this.pedidoService.find(params.id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Pedido' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: CreatePedidoDTO })
  async createPedido(
    @Body() data: CreatePedidoDTO,
  ): Promise<Pedido | ApiError> {
    const result = await this.pedidoService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdatePedidoDTO })
  async updatePedido(
    @Param() params: IdParams,
    @Body() data: UpdatePedidoDTO,
  ): Promise<Pedido | ApiError> {
    const result = await this.pedidoService.update(params.id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async deletePedido(
    @Param() params: IdParams,
  ): Promise<DeletedModel | ApiError> {
    const result = await this.pedidoService.delete(params.id);
    return result;
  }
}
