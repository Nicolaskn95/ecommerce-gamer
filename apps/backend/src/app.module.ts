import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderModule } from './order/order.module';
import { DbModule } from './db/db.module';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { OrderService } from './order/order.service';

@Module({
  imports: [ProductModule, OrderModule, DbModule],
  controllers: [AppController],
  providers: [ProductService, OrderService],
})
export class AppModule {}
