const { app } = require('../src/app')
const request = require('supertest')

describe('User', () => {
  describe('Success', () => {
    test('should return customers', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `#graphql
            query { getUsers {
              id,
              name,
              email,
              age,
              dev
            }
          }
          `,
        })
        .set('Accept', 'application/json')

      expect(response.body.errors).toBeFalsy()
      expect(response.body.data).toEqual({
        getUsers: [
          {
            id: '2f520e47-6936-4a86-8ba1-5aebd8a39831',
            age: 20,
            dev: true,
            name: 'Giovani',
            email: 'giovani@teste.com.br'
          }
        ]
      })
    })

    test('should create a new user successfully', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `#graphql
            mutation($input: UserInput) {
              createUser(input: $input) {
                id,
                name,
                age,
                dev,
                email
              }
            },
          `,
          variables : {
            input: {
              name: 'Teste',
              email: 'teste@teste.com.br',
              age: 26,
              dev: false
            }
          }
        })
        .set('Accept', 'application/json')

      expect(response.body.errors).toBeFalsy()
      expect(response.body.data).toEqual({
        createUser: {
          id: expect.any(String),
          name: 'Teste',
          email: 'teste@teste.com.br',
          age: 26,
          dev: false
        }
      })
    })

    test('should update a user successfully', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `#graphql
            mutation($input: UpdateUserInput) {
              updateUser(input: $input) {
                id,
                name,
                age,
                dev,
                email
              }
            },
          `,
          variables : {
            input: {
              id: '4f894eba-db64-4a1d-a80d-66ec56e7bf78',
              name: 'Giovanna renomeada',
              email: 'giovanna@teste.com.br',
              age: 29,
              dev: true
            }
          }
        })
        .set('Accept', 'application/json')

      expect(response.body.errors).toBeFalsy()
      expect(response.body.data).toEqual({
        updateUser: {
          id: expect.any(String),
          name: 'Giovanna renomeada',
          email: 'giovanna@teste.com.br',
          age: 29,
          dev: true
        }
      })
    })

    test('should delete a user and return user with archived = true', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `#graphql
            mutation($id: ID!) {
              deleteUser(id: $id) {
                id,
                name,
                archived
              }
            },
          `,
          variables : {
            id: '2f520e47-6936-4a86-8ba1-5aebd8a39831',
          }
        })
        .set('Accept', 'application/json')

      expect(response.body.errors).toBeFalsy()
      expect(response.body.data).toEqual({
        deleteUser: {
          id: '2f520e47-6936-4a86-8ba1-5aebd8a39831',
          name: 'Giovani',
          archived: true
        }
      })
    })
  })
})