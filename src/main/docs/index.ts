import schemas from './schemas'
import paths from './paths'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Buscador de filmes',
    description: 'Documentação do buscador de filmes usando a API do Studio Ghibli'
  },
  externalDocs: {
    description: 'Link para documentação da api',
    url: 'https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API'
  },
  paths,
  schemas,
  components
}