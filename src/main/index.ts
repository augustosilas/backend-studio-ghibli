import "reflect-metadata"
import "dotenv/config"
import { PgConnection } from "../infra/repository/postgres/helpers/connection"

const PORT = process.env.PORT || 3000

PgConnection
  .getInstance()
  .connect()
  .then(async () => {
    const { app } = await import('./config/app')
    app.listen(PORT, () => console.log(`server running at port ${PORT}`))
  })
  .catch(error => console.log(error))
