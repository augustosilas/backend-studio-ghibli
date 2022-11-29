import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'films' })
export class PgFilm {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  originalTitle: string

  @Column()
  description: string

  @Column()
  releaseDate: string

  @Column()
  score: string

  @CreateDateColumn()
  createdAt: Date
}