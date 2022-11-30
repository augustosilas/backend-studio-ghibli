# Backend Studio Ghibli

Esta é uma API para buscar filmes no banco de dados local mas obtidos através da API do Studio Ghibli

## Uso

Instale as bibliotecas

```bash
npm i
```

Em seguida é necessário buildar a aplicação e subir os containers, faça ambos rodando o script a seguir

```bash
npm run up
```

Para parar a aplicação, execute

```bash
npm run down
```

### Caso queira rodar em desenvolvimento, é necessário criar um banco de dados separadamente, para isso, execute

```bash
npm run up:db
``` 
para subir, e
```bash
npm run up:down
```
para parar


Em seguida, execute

```bash
npm run start:dev
```

### Para rodar os tests unitários, execute
(só é possível rodar os tests em desevolvimento)
```bash
npm run test:unit
```
