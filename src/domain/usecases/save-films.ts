import { FindFilmsGateway } from "../../domain/contracts/gateways/studio-ghibli-gateway";
import { SaveFilms } from "../../domain/contracts/usecases/save-films";

export class SaveFilmsUsecase implements SaveFilms {
  constructor(
    private readonly findFilmsGateway: FindFilmsGateway
  ) { }

  async save(): Promise<void> {
    await this.findFilmsGateway.find({ limit: 30 })
  }
}