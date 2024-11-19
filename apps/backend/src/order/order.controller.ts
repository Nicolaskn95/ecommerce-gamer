import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import type { Order } from '@gstore/core';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  async save(@Body() order: Order) {
    return this.service.save(order);
  }

  @Get()
  async getOrder() {
    return this.service.getOrder();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.service.getOrderById(+id);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
