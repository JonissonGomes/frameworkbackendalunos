import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateClienteDTO from '../dto/createClienteDto';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async createCliente(createClienteDto: CreateClienteDTO) {
    const cliente = this.clienteRepository.create(createClienteDto);

    await this.clienteRepository.save(cliente);
  }
}
