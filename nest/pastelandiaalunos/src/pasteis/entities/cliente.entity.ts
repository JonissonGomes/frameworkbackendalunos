import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 11 })
  telefone: number;
}
