import { Module } from '@nestjs/common';
import { PasteisService } from './services/pasteis.service';
import { PasteisController } from './controllers/pasteis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pastel } from './entities/pastel.entity';
import { Ingrediente } from '../ingredientes/entities/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pastel, Ingrediente])],
  providers: [PasteisService],
  controllers: [PasteisController],
})
export class PasteisModule {}
