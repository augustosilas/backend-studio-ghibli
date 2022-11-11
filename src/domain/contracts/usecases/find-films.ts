export interface FindFilms {
  find: (input: FindFilms.Input) => Promise<FindFilms.Result>;
}

export namespace FindFilms {
  export type Input = {
    limit?: number
    offset?: number
  }

  export type Result = undefined | Array<{
    title: string
    originalTitle: string
    description: string,
    releaseDate: string,
    score: string,
  }>
}