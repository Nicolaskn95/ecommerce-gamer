import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { ProductRepositoryTs } from './product.repository.ts';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductRepositoryTs],
})
export class ProductModule {}
