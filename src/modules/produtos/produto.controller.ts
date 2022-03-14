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
import { CreateProdutoDTO, UpdateProdutoDTO } from './produto.dto';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@ApiTags('Produtos')
@Controller('/produtos')
export class ProdutoController {
  @Inject(ProdutoService)
  private produtoService: ProdutoService;

  @Get()
  @ApiOkResponse({ description: 'Got All Produtos' })
  async findAll(): Promise<Produto[]> {
    const result = await this.produtoService.findAll();
    return result;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Got One Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async readProduto(@Param() params: IdParams): Promise<Produto> {
    const result = await this.produtoService.find(params.id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Produto' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({ type: CreateProdutoDTO })
  async createProduto(@Body() data: CreateProdutoDTO): Promise<Produto> {
    const result = await this.produtoService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateProdutoDTO })
  async updateProduto(
    @Param() params: IdParams,
    @Body() data: UpdateProdutoDTO,
  ) {
    const result = await this.produtoService.update(params.id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: Number })
  async deleteProduto(@Param() params: IdParams) {
    const result = await this.produtoService.delete(params.id);
    return result;
  }
}
