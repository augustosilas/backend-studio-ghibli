import { DataSource, DataSourceOptions, EntityTarget, Repository } from 'typeorm'
import dbconfig from './dbconfig'

export class PgConnection {
  private static instance?: PgConnection
  private connection?: DataSource

  private constructor() { }

  static getInstance(): PgConnection {
    if (!PgConnection.instance) PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  async connect(): Promise<void> {
    this.connection = this.connection?.isInitialized
      ? this.connection
      : await new DataSource(dbconfig as DataSourceOptions).initialize()
  }

  getRepository<Entity>(entity: EntityTarget<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}