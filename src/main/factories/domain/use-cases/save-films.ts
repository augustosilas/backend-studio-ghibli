import { makeFilmsRepository } from "../../../../main/factories/infra/repositories/film-repository";
import { makeStudioGhibli } from "../../../../main/factories/infra/gateways/studio-ghibli";
import { SaveFilmsUsecase } from "../../../../domain/usecases/save-films";

export const makeSaveFilmsFactory = () => {
  return new SaveFilmsUsecase(makeStudioGhibli(), makeFilmsRepository());
}