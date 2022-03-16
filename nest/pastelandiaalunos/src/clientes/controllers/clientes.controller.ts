import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import CreateClienteDTO from '../dto/createClienteDto';
import GetClienteDTO from '../dto/getClienteDto';
import { ClientesService } from '../services/clientes.service';

@Controller('cliente')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarCliente(@Body() createClienteDto: CreateClienteDTO) {
    return this.clientesService.createCliente(createClienteDto);
  }

  @Get()
  async buscarCliente(@Body() getClienteDTO: GetClienteDTO) {
    return this.clientesService.getCliente(getClienteDTO);
  }
}
