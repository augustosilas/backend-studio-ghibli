import { FindFilmsGateway } from '../contracts/gateways/studio-ghibli-gateway'
import { SaveFilmsUsecase } from './save-films'

describe('SaveFilms Usecase', () => {
  class FindFilmsGatewayStub implements FindFilmsGateway {
    async find(input?: FindFilmsGateway.Input): Promise<FindFilmsGateway.Film[]> {
      return Promise.resolve([])
    }
  }

  test('should call FindFilmsGateway with correct input', async () => {
    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub)

    const findSpy = jest.spyOn(findFilmsGatewayStub, 'find')

    const result = { limit: 30 }
    await sut.save()

    expect(findSpy).toHaveBeenCalledWith(result)
  })

  test('should throw if FindFilmsGateway throws', async () => {
    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub)

    jest.spyOn(findFilmsGatewayStub, 'find').mockImplementationOnce(() => { throw new Error() })

    const result = sut.save()

    expect(result).rejects.toThrow(new Error())
  })
})