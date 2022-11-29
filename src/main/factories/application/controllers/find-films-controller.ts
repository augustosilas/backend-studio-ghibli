import { makeFindFilmsUsecase } from "../../../../main/factories/domain/use-cases/find-films";
import { FindFilmsController } from "../../../../application/controllers/find-films";

export const makeFindFilmsController = (): FindFilmsController => {
  return new FindFilmsController(makeFindFilmsUsecase())
}