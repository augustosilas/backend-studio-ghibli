import { AddFilmsRepository } from "../../domain/contracts/repositories/film-repository";
import { FindFilmsGateway } from "../../domain/contracts/gateways/studio-ghibli-gateway";
import { SaveFilms } from "../../domain/contracts/usecases/save-films";

export class SaveFilmsUsecase implements SaveFilms {
  constructor(
    private readonly findFilmsGateway: FindFilmsGateway,
    private readonly addFilmsRepository: AddFilmsRepository
  ) { }

  async save(): Promise<void> {
    const films = await this.findFilmsGateway.find({ limit: 30 })
    await this.addFilmsRepository.add(films)
  }
}