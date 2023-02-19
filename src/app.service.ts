import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  //Como lo que vamos a inyectar es un valor y no una clase, la pasamos en el constructor como un atributo privado, utilizamos el decorador @Inject(), eso lo podemos usar para inyectar un valor en cualquier parte donde lo necesitemos en la aplicacion...
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): any {
    return { message: `Hello World! ${this.apiKey}`, tasks: this.tasks };
  }
}
