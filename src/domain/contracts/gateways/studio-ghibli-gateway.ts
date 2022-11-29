export interface FindFilmsGateway {
  find: (input?: FindFilmsGateway.Input) => Promise<FindFilmsGateway.Result>
}

export namespace FindFilmsGateway {
  export type Input = {
    limit?: number
  }

  export type Result = undefined | Array<Film>
  export type Film = {
    title: string,
    originalTitle: string,
    description: string,
    releaseDate: string,
    score: string,
  }
}