import { HttpResponse, ok } from "../helper/http";
import { FindFilmsUsecase } from "../../domain/usecases/find-films";
import { Controller } from "./controller";

type HttpRequest = { limit?: number, offset?: number }

export class FindFilmsController extends Controller {
  constructor(
    private readonly findFilmsUsecase: FindFilmsUsecase
  ) {
    super()
  }
  
  async perform({ limit = 50, offset = 0 }: HttpRequest): Promise<HttpResponse<any>> {
    try {
      const films = await this.findFilmsUsecase.find({ limit: Number(limit), offset })
      return ok(films)
    } catch (error) {
      throw error
    }
  }
}