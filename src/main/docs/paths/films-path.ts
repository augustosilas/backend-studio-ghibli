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
    parameters: [
      {
        in: "query",
        name: "limit",
        description: "Limite de filmes que poderão ser retornados por página",
        required: false,
        schema: {
          type: "integer",
        }
      },
      {
        in: "query",
        name: "offset",
        description: "Número dá página",
        required: false,
        schema: {
          type: "integer",
        }
      },
    ],
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