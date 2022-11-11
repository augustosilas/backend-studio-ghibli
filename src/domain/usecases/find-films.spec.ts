import { FindFilms } from '../contracts/usecases/find-films'
import { FindFilmsUsecase } from './find-films'
import { FindFilmsRepository } from '../contracts/repositories/film-repository'

describe('FindFilms Usecase', () => {
  const mockFilms = () => ([
    {
      title: 'any_title',
      originalTitle: 'any_title',
      description: 'any_description',
      releaseDate: 'any_description',
      score: 'any_score'
    }
  ])

  class FindFilmsRepositoryStub implements FindFilmsRepository {
    async find(input: FindFilmsRepository.Input): Promise<{ title: string; originalTitle: string; description: string; releaseDate: string; score: string }[]> {
      return mockFilms()
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

  test('should return all films on success', async () => {
    const findFilmsRepositoryStub = new FindFilmsRepositoryStub()
    const sut = new FindFilmsUsecase(findFilmsRepositoryStub)
    const params: FindFilms.Input = {
      limit: 10,
      offset: 1
    }

    const expected = await sut.find(params)
    const result = mockFilms()
    expect(result).toEqual(expected)
  })
})