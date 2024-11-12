import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import type { Product } from '@gstore/core';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly repo: ProductService) {}

  @Post()
  createProduct(@Body() product: Product): Promise<void> {
    return this.repo.create(product);
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.repo.getUnique(+id);
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.repo.getAll();
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
