const { app } = require('../src/app')
const request = require('supertest')

describe('User', () => {
  describe('success', () => {
    test('should return customers', async () => {
      const response = await request(app)
        .post('/graphql')
        .send({
          query: `#graphql
            query { getUsers {
              name,
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
            age: 20,
            dev: true,
            name: "Giovani",
          },
          {
            age: 20,
            dev: false,
            name: "Giovanna",
          }
        ]
      })
    })

  })
})