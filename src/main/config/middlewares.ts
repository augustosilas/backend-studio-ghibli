import { Express, json } from 'express';
import cors from 'cors';

export const setupMiddlewares = (app: Express) => {
  app.use(json())
  app.use(cors())
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
}