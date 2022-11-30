export const filmSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    originalTitle: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    releaseDate: {
      type: 'string'
    },
    score: {
      type: 'number'
    },
  }
}