import { FindFilmsUsecase } from "../../../../domain/usecases/find-films"
import { makeFilmsRepository } from "../../../../main/factories/infra/repositories/film-repository"

export const makeFindFilmsUsecase = () => {
  return new FindFilmsUsecase(makeFilmsRepository())
}