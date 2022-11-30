import { FindFilmsRepository } from "../../domain/contracts/repositories/film-repository";
import { FindFilms } from "../contracts/usecases/find-films";

export class FindFilmsUsecase implements FindFilms {

  constructor(
    private readonly findFilmsRepository: FindFilmsRepository
  ) { }

  async find(input: FindFilms.Input): Promise<FindFilms.Result> {
    return await this.findFilmsRepository.find(input)
  }
}