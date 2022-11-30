import { adaptExpressRoute as adapt } from "../../main/adapters/express-router"

import { Router } from 'express'
import { makeFindFilmsController } from "../../main/factories/application/controllers/find-films-controller"
import { makeSaveFilmsController } from "../../main/factories/application/controllers/save-films-controller"

export default (router: Router): void => {
  router.get(`/api/${process.env.API_VERSION}/films`, adapt(makeFindFilmsController()))
  router.post(`/api/${process.env.API_VERSION}/films`, adapt(makeSaveFilmsController()))
}