export const serverError = {
  description: 'Server failed. Try again soon',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}