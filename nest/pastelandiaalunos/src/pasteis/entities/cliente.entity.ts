import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column({ length: 11, nullable: false })
  cpf: number;

  @Column({ length: 11 })
  telefone: number;

  @OneToMany(() => Pedido, (pedido) => pedido.listPedidos)
  pedidos: Pedido[];
}
