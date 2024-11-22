import { Injectable } from '@nestjs/common';
import type { Order } from '@gstore/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class OrderService {
  constructor(private readonly prismaOrderService: PrismaProvider) {}

  async getOrder(): Promise<Order[]> {
    const order = await this.prismaOrderService.order.findMany();
    return order as any;
  }

  async getOrderById(id: number): Promise<Order[]> {
    const order = await this.prismaOrderService.order.findUnique({
      where: { id },
      include: {
        items: true,
        delivered: true,
      },
    });
    return order as any;
  }

  async save(order: Order): Promise<void> {
    await this.prismaOrderService.order.create({
      data: {
        date: order.date,
        status: order.status,
        totalValue: order.totalValue,
        paymentMethod: order.paymentMethod,
        delivered: { create: { ...order.delivered } },
        items: {
          create: order.items.map((item) => ({
            idProduct: item.product.id,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = this.prismaOrderService.order.findUnique({ where: { id } });

    if (!order) return;
    await this.prismaOrderService.$transaction([
      this.prismaOrderService.orderItem.deleteMany({ where: { idOrder: id } }),
      this.prismaOrderService.order.delete({ where: { id } }),
      this.prismaOrderService.orderDelivered.delete({
        where: { id: (await order).idDelivered },
      }),
    ]);
  }
}
