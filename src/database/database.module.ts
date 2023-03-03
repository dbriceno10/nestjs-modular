import { Module, Global } from '@nestjs/common';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  //exportamos todos los providers que deseemos utilizar en otros lugares de la apliacion, ya no vamos a tener que importarlos en cada lucar, simplemente los vamos a inyectar
  exports: ['API_KEY'],
})
export class DatabaseModule {}
