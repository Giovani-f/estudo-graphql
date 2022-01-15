const { app } = require('./app')
app.listen({ port: 4000 }, () => {
  console.log('Server is running in http://localhost:4000/graphql')
})
