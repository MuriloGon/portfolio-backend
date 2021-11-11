import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './Category';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  repo: string;

  @Column()
  thumbnail: string;

  @Column('date')
  createdAt: string;

  @Column()
  difficulty: string;

  @ManyToMany((type) => Category, (photo) => photo)
  @JoinTable()
  categories: Category[];
}
