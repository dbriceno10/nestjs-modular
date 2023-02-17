import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  //Una vez hicimos algun servicio importable, debemos importar el modulo de dicho servicio dentro del modulo donde lo queramos utilizar...
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
