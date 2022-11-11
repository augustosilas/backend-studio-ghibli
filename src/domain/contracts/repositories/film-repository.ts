export class FindFilmsRepository {
  find: (input: FindFilmsRepository.Input) => Promise<FindFilmsRepository.Result>;
}

export namespace FindFilmsRepository {
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