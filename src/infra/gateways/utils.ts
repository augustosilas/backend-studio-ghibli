import { FindFilmsGateway } from "../../domain/contracts/gateways/studio-ghibli-gateway";
import { ResultApi } from "./studio-ghibli-api";

export const mapArray = (films: ResultApi[]): FindFilmsGateway.Film[] => {
  if (!films.length) return undefined

  return films?.map(film => ({
    title: film.title,
    originalTitle: film.original_title,
    description: film.description,
    releaseDate: film.release_date,
    score: film.rt_score
  }))
}