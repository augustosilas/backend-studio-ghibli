import { makeSaveFilmsFactory } from "../../../../main/factories/domain/use-cases/save-films"
import { SaveFilmsController } from "../../../../application/controllers/save-films"

export const makeSaveFilmsController = () => {
  return new SaveFilmsController(makeSaveFilmsFactory())
}