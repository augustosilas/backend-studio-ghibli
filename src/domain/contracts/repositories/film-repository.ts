export class FindFilmsRepository {
  find: (input: FindFilmsRepository.Input) => Promise<FindFilmsRepository.Result>;
}

export namespace FindFilmsRepository {
  export type Input = {
    limit?: number
    offset?: number
  }

  export type Result = undefined | Array<Film>
}

export interface AddFilmsRepository {
  add: (input: AddFilmsRepository.Input) => Promise<AddFilmsRepository.Result>
}

export namespace AddFilmsRepository {
  export type Input = Array<Film>

  export type Result = void
}

type Film = {
  title: string
  originalTitle: string
  description: string,
  releaseDate: string,
  score: string,
}