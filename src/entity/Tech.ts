import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tech {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;
}
