import { HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import { ProdutoDTO } from './produto.dto';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@Controller('/produtos')
export class ProdutoController {
  @Inject(ProdutoService)
  private produtoService: ProdutoService;

  @Get()
  async findAll(): Promise<Produto[]> {
    const result = await this.produtoService.findAll();
    return result;
  }

  @Get(':id')
  async readProduto(@Param('id') id: number): Promise<Produto> {
    const result = await this.produtoService.read(id);
    return result;
  }

  @Post()
  async createProduto(@Body() data: ProdutoDTO): Promise<Produto> {
    const result = await this.produtoService.create(data);
    return result;
  }

  @Put(':id')
  async updateProduto(
    @Param('id') id: number,
    @Body() data: Partial<ProdutoDTO>,
  ) {
    const result = await this.produtoService.update(id, data);
    return result;
  }

  @Delete(':id')
  async deleteProduto(@Param('id') id: number) {
    const result = await this.produtoService.destroy(id);
    return result;
  }
}
