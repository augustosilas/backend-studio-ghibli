import { HttpResponse, noContent } from "../../application/helper/http";
import { SaveFilmsUsecase } from "../../domain/usecases/save-films";
import { Controller } from "./controller";

export class SaveFilmsController extends Controller {
  constructor(
    private readonly saveFilmsUsecase: SaveFilmsUsecase
  ) {
    super()
  }

  async perform(httpRequest: any): Promise<HttpResponse<any>> {
    try {
      await this.saveFilmsUsecase.save()
      return noContent();
    } catch (error) {
      throw error
    }
  }
}