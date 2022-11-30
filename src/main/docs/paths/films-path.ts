export const getFilmsPath = {
  post: {
    tags: ['Films'],
    summary: 'API para salvar todos os filmes obtidos da API do studio no banco de dados local',
    responses: {
      204: {
        description: 'No content'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  get: {
    tags: ['Films'],
    summary: 'API para buscas os filmes no banco de dados local',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/filmsResult'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}