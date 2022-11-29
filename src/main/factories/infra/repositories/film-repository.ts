import { FilmRepository } from "../../../../infra/repository/postgres/film-repository"

export const makeFilmsRepository = (): FilmRepository => {
  return new FilmRepository()
}