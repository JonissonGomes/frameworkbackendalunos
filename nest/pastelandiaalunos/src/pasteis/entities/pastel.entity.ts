import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingrediente } from '../../ingredientes/entities/ingrediente.entity';
import { Pedido } from '../../pedidos/entities/pedido.entity';

@Entity()
export class Pastel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.pastel)
  ingredientes: Ingrediente[];

  @ManyToOne(() => Pedido, (pedido) => pedido.pasteis)
  pastel: Pastel;
}
