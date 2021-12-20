# Objetivo

O projeto consiste em uma simulação de um sistema de blog, onde pode criar posts, atribuir categorias aos posts e criar usuarios. 

O projeto faz uso de Typescript, NodeJS, Express.
Utilizando Jest para testes unitarios

# Instalação

Tendo o NodeJS instalado em sua maquina, basta seguir os passos de execução utilizando seu gerenciador de pacotes preferido como NPM ou Yarn:

```bash

  # Instalar todas as dependências necessárias
  yarn install

  # Gerar tabelas no banco de dados
  yarn typeorm migration:run
  
  # Executar projeto 
  yarn dev:server
 
```

# Endpoints
```bash

  POST /api/v1/users
  
  POST /api/v1/posts

  GET /api/v1/posts

  GET /api/v1/posts/:id

  PUT /api/v1/posts/:id

  DELETE /api/v1/posts/:id

  POST /api/v1/posts/categories

  POST /api/v1/categories
```

## Criar Usuario -> POST /api/v1/users
```yaml

    name: string
    email: string

```
### Retorno
```json

{
  "id": "f6887bb3-b476-404b-9faf-4d3d4d858b59",
  "name": "JohnDoe",
  "email": "johndoe@example.com",
  "createdAt": "2021-12-20T17:26:05.562Z",
  "updatedAt": "2021-12-20T17:26:05.562Z"
}

```

## Criar Post -> POST /api/v1/posts

```yaml
    title: string
    
    description: string
    
    authorId: string
```
### Retorno
```json

{
   "id": "4863dcbb-e08d-488a-89af-e67e2ea8b07c",
  "title": "New post",
  "description": "Muito bom",
  "authorId": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
  "createdAt": "2021-12-20T06:09:07.210Z",
  "updatedAt": "2021-12-20T06:09:07.210Z"
}

```

## Buscar posts -> GET /api/v1/posts

### Retorno
```json
{
  [
    {
      "id": "f3695d24-ceec-45ce-9c27-2b0462c0fcce",
      "title": "New post",
      "description": "Muito bom",
      "authorId": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
      "createdAt": "2021-12-20T06:08:47.067Z",
      "updatedAt": "2021-12-20T06:08:47.067Z"
    },
    {
      "id": "3ca22d39-ca3a-4d29-ba62-1a0d6a896093",
      "title": "New post 2",
      "description": "Muito bom",
      "authorId": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
      "createdAt": "2021-12-20T06:08:48.299Z",
      "updatedAt": "2021-12-20T06:08:48.299Z"
    },
  ]
}
```

## Buscar post pelo id-> GET /api/v1/posts/:id

### Retorno
```json
{
  "id": "3ca22d39-ca3a-4d29-ba62-1a0d6a896093",
  "title": "New post",
  "description": "Muito bom",
  "createdAt": "2021-12-20T06:08:48.299Z",
  "updatedAt": "2021-12-20T06:08:48.299Z",
  "author": {
    "id": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
    "name": "Mathues",
    "email": "matheussm@gmail.com",
    "createdAt": "2021-12-20T06:08:44.372Z",
    "updatedAt": "2021-12-20T06:08:44.372Z"
  },
  "categories": []
}
```

## Editar post -> PUT /api/v1/posts/:id

```yaml
    title: string
    
    description: string
```

### Retorno
```json
{
  "id": "3ca22d39-ca3a-4d29-ba62-1a0d6a896093",
  "title": "New post",
  "description": "Muito bom",
  "createdAt": "2021-12-20T06:08:48.299Z",
  "updatedAt": "2021-12-20T06:08:48.299Z",
  "author": {
    "id": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2021-12-20T06:08:44.372Z",
    "updatedAt": "2021-12-20T06:08:44.372Z"
  },
  "categories": []
}
```

## Deletar post -> DELETE /api/v1/posts/:id

### Retorno
Recebe https status 204

## Atribuir categorias ao post  -> POST /api/v1/posts/categories

```yaml
    postId: string
    categoryIds: [string]
```

### Retorno
```json

{
  "id": "3ca22d39-ca3a-4d29-ba62-1a0d6a896093",
  "title": "New post",
  "description": "Muito bom",
  "createdAt": "2021-12-20T06:08:48.299Z",
  "updatedAt": "2021-12-20T06:08:48.299Z",
  "authorId": "acfd0b74-8779-4174-9e58-4be3f346ea4b",
   "categories": [
    {
      "id": "7bca25f2-0213-44cc-b4f9-d0496e5801c2",
      "name": "Educação",
      "created_at": "2021-12-20T06:19:56.802Z"
    },
    {
      "id": "688627b4-19fb-4236-ab89-2248b88e0cd3",
      "name": "Cultura",
      "created_at": "2021-12-20T12:51:34.186Z"
    }
  ]
}
```

## Criar categoria  -> POST /api/v1/categories

```yaml
    name: string
```

### Retorno
```json
{
  "id": "688627b4-19fb-4236-ab89-2248b88e0cd3",
  "name": "Cultura",
  "created_at": "2021-12-20T12:51:34.186Z"
}
```