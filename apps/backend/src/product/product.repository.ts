import type { Product } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import type { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductRepositoryTs {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async get(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as any;
  }
}
