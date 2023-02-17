import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  //*Vamos a hacer que products service sea exportable y utilizable en otros modulos... cuando queremos utilizar algun servicio en dentro de un modulo distinto al propio, debemos especificar que este se puede importar...
  exports: [ProductsService],
})
export class ProductsModule {}
