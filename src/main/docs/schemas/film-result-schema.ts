export const filmsResultSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/film'
  }
}