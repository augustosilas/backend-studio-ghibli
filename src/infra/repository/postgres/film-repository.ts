import { AddFilmsRepository, FindFilmsRepository } from "../../../domain/contracts/repositories/film-repository";
import { Repository } from "typeorm";
import { PgFilm } from "./entities/film.entity";
import { PgConnection } from "./helpers/connection";

export class FilmRepository implements FindFilmsRepository, AddFilmsRepository {
  private filmRepository: Repository<PgFilm>;

  constructor() {
    this.filmRepository = PgConnection.getInstance().getRepository(PgFilm)
  }

  async add(input: AddFilmsRepository.Input): Promise<void> {
    await this.filmRepository.save(input)
  }

  async find({ limit, offset }: FindFilmsRepository.Input): Promise<FindFilmsRepository.Result> {
    return await this.filmRepository.find({
      take: limit,
      skip: this.getPage(limit, offset),
      order: { releaseDate: { direction: 'DESC' } }
    })
  }

  private getPage(limit: number, offset: number) {
    return offset * limit
  }
}