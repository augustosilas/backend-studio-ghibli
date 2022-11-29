import { FindFilmsGateway } from '../contracts/gateways/studio-ghibli-gateway'
import { AddFilmsRepository } from '../contracts/repositories/film-repository'
import { SaveFilmsUsecase } from './save-films'

describe('SaveFilms Usecase', () => {
  const mockFilms = (): FindFilmsGateway.Film[] => ([
    {
      title: 'any_title',
      originalTitle: 'any_original_title',
      description: 'any_description',
      releaseDate: 'any_release_date',
      score: 'any_score'
    },
    {
      title: 'any_title',
      originalTitle: 'any_original_title',
      description: 'any_description',
      releaseDate: 'any_release_date',
      score: 'any_score'
    }
  ])

  class FindFilmsGatewayStub implements FindFilmsGateway {
    async find(input?: FindFilmsGateway.Input): Promise<FindFilmsGateway.Film[]> {
      return Promise.resolve(mockFilms())
    }
  }

  class AddFilmsRepositoryStub implements AddFilmsRepository {
    async add(input: AddFilmsRepository.Input): Promise<void> {
      return Promise.resolve()
    }
  }

  test('should call FindFilmsGateway with correct input', async () => {
    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const saveFilmsRepositoryStub = new AddFilmsRepositoryStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub, saveFilmsRepositoryStub)

    const findSpy = jest.spyOn(findFilmsGatewayStub, 'find')

    const result = { limit: 30 }
    await sut.save()

    expect(findSpy).toHaveBeenCalledWith(result)
  })

  test('should throw if FindFilmsGateway throws', async () => {
    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const saveFilmsRepositoryStub = new AddFilmsRepositoryStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub, saveFilmsRepositoryStub)

    jest.spyOn(findFilmsGatewayStub, 'find').mockImplementationOnce(() => { throw new Error() })

    const result = sut.save()

    expect(result).rejects.toThrow(new Error())
  })

  test('should call AddFilmsRepository with correct values', async () => {
    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const addilmsRepositoryStub = new AddFilmsRepositoryStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub, addilmsRepositoryStub)

    const addSpy = jest.spyOn(addilmsRepositoryStub, 'add')

    await sut.save()
    const expected = mockFilms()
    
    expect(addSpy).toHaveBeenCalledWith(expected)
  })
})