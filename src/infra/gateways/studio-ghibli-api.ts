import axios from 'axios'
import { FindFilmsGateway } from "../../domain/contracts/gateways/studio-ghibli-gateway";
import { mapArray } from './utils';

export type ResultApi = {
  id: string
  title: string
  original_title: string
  description: string
  release_date: string
  rt_score: string
}

type Field = keyof ResultApi

export class StudioGhibliApi implements FindFilmsGateway {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'https://ghibliapi.herokuapp.com/films'
  }

  async find({ limit = 50 }: FindFilmsGateway.Input): Promise<FindFilmsGateway.Result> {
    const fields = this.getFields()
    const query = this.buildQuery({ fields, limit })

    const url = `${this.baseUrl}${query}`

    const result = await axios.get(url)

    return mapArray(result.data)
  }

  private getFields(): Field[] {
    return ['id', 'description', 'original_title', 'release_date', 'rt_score', 'title']
  }

  private buildQuery({ fields, limit }) {
    return `?fields=${fields.join(',')}&limit=${limit}`
  }
}
