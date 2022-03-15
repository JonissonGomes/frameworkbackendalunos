import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingrediente } from './ingrediente.entity';
import { Pedido } from './pedido.entity';

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
