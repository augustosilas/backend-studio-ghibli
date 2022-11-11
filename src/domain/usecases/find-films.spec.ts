import { FindFilms } from '../contracts/usecases/find-films'
import { FindFilmsUsecase } from './find-films'
import { FindFilmsRepository } from '../contracts/repositories/film-repository'

describe('FindFilms Usecase', () => {
  class FindFilmsRepositoryStub implements FindFilmsRepository {
    async find(input: FindFilmsRepository.Input): Promise<{ title: string; orginalTitle: string; description: string; releaseDate: string; score: string }[]> {
      return []
    }
  }
  test('should call FindFilmsRepository with correct params', async () => {
    const findFilmsRepositoryStub = new FindFilmsRepositoryStub()
    const sut = new FindFilmsUsecase(findFilmsRepositoryStub)
    const params: FindFilms.Input = {
      limit: 10,
      offset: 1
    }

    const findSpy = jest.spyOn(findFilmsRepositoryStub, 'find')

    await sut.find(params)

    expect(findSpy).toHaveBeenCalledWith(params)
  })
})