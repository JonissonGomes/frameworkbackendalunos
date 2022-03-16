import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  Column,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Pastel } from '../../pasteis/entities/pastel.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valorPedido: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @ManyToMany(() => Pastel, (pasteis) => pasteis.pastel)
  pasteis: Pastel[];
}
