# Estudo Graphql com Apollo Server Express

Esse repositório é direcionado para estudo de Graphql, sendo uma api simples com CRUD para aprender os básicos sobre graphql e apollo server.

## Sobre o projeto

- Basicamente uma api onde é possível cadastrar, editar, atualizar e deletar (*soft delete*) um usuário.
- Api desenvolvida com Graphql, Apollo Server Express e Knex.
- Para os testes foram utilizados Jest e Supertest.
## Qual o propósito do projeto?

- Colocar em prática os conhecimentos sobre Graphql
- Colocar em prática os conhecimentos sobre testes integrados

## Como rodar o projeto

Esse projeto possui arquivo .nvmrc para definir a versão do node a ser usada.

```sh
nvm install 14.18.1

nvm use
```

- Insatalando as dependências

```sh
npm install
```

- Populando o banco de dados

```sh
npm run recreate-db
```

- Rodando o projeto

```sh
npm run start
```

- Rodando os testes

```sh
npm run test
```