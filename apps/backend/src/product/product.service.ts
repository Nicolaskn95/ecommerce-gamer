import type { Product } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import type { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductService {
  private readonly prisma: PrismaProvider;
  async create(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }
  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as any;
  }
  async getUnique(id: number): Promise<Product | null> {
    const products = await this.prisma.product.findUnique({ where: { id } });
    return (products as any) ?? null;
  }
  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
