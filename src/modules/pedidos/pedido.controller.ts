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
  async findAll(): Promise<Pedido[]> {
    const result = await this.pedidoService.findAll();
    return result;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Got One Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  async readPedido(@Param('id') id: number): Promise<Pedido> {
    const result = await this.pedidoService.find(id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Pedido' })
  @ApiBody({ type: CreatePedidoDTO })
  async createPedido(@Body() data: CreatePedidoDTO): Promise<Pedido> {
    const result = await this.pedidoService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  @ApiBody({ type: UpdatePedidoDTO })
  async updatePedido(@Param('id') id: number, @Body() data: UpdatePedidoDTO) {
    const result = await this.pedidoService.update(id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Pedido' })
  @ApiNotFoundResponse({ description: 'Pedido Not Found' })
  async deletePedido(@Param('id') id: number) {
    const result = await this.pedidoService.delete(id);
    return result;
  }
}
