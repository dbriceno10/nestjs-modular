import { Module, HttpModule, HttpService } from '@nestjs/common';
// import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '123456789';
const API_KEY_PROD = 'PRODUC15156';

@Module({
  imports: [UsersModule, ProductsModule, HttpModule],
  controllers: [AppController],
  providers: [
    //Usa implicitamente useClass...
    AppService,
    //usamos use value para inyectar un valor, para uso comun que se pueda usar en varios luhares de nuestra app
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        try {
          const tasks = await http
            .get('https://jsonplaceholder.typicode.com/todos')
            .toPromise();
          console.log(
            'NO SE ACONCEJA USAR EL USE FACTORI ACA PARA HACER REQUEERT A UN AMI PORQUE VA A TARDAR EN LEVANTAR EL SERVIDOR HASTA QUE LA PROMESA SEA RESUELTA...',
          );
          return tasks.data;
        } catch (error) {
          console.log(error);
        }
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
