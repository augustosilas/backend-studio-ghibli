import { FindFilmsGateway } from '../contracts/gateways/studio-ghibli-gateway'
import { SaveFilmsUsecase } from './save-films'

describe('SaveFilms Usecase', () => {
  test('should call FindFilmsGateway with correct input', async () => {
    class FindFilmsGatewayStub implements FindFilmsGateway {
      async find(input?: FindFilmsGateway.Input): Promise<FindFilmsGateway.Film[]> {
        return Promise.resolve([])
      }
    }

    const findFilmsGatewayStub = new FindFilmsGatewayStub()
    const sut = new SaveFilmsUsecase(findFilmsGatewayStub)

    const findSpy = jest.spyOn(findFilmsGatewayStub, 'find')

    const result = { limit: 30 }
    await sut.save()

    expect(findSpy).toHaveBeenCalledWith(result)
  })
})