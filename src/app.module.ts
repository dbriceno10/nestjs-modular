import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '123456789';
const API_KEY_PROD = 'PRODUC15156';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    //Usa implicitamente useClass...
    AppService,
    //usamos use value para inyectar un valor, para uso comun que se pueda usar en varios luhares de nuestra app
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
})
export class AppModule {}
