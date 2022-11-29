const { resolve } = require('path')

module.exports = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  password: String(process.env.POSTGRES_PASSWORD),
  username: process.env.POSTGRES_USERNAME,
  database: process.env.POSTGRES_DATABASE,
  // migrations: [resolve(__dirname, "migrations/*{.js,.ts}")],
  entities: [resolve(__dirname, "../entities/*.entity{.js,.ts}")],
  logging: true,
  synchronize: true,
  migrationsRun: true
}