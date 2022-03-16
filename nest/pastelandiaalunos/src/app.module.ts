import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteisModule } from './pasteis/pasteis.module';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';
import { Cliente } from './clientes/entities/cliente.entity';
import { Pastel } from './pasteis/entities/pastel.entity';
import { Pedido } from './pedidos/entities/pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'pastelandia-alunos',
      password: 'my-ultra-password',
      database: 'pastelandia-alunos',
      entities: [Pastel, Ingrediente, Pedido, Cliente],
      synchronize: true,
      logging: true,
    }),
    PasteisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
