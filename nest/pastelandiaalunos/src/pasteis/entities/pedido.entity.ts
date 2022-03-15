import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Pastel } from './pastel.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: Cliente;

  @OneToMany(() => Pastel, (pasteis) => pasteis.pastel)
  pasteis: Pastel[];
}
