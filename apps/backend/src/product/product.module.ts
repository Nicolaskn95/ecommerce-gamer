import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { ProductService } from './product.service';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
