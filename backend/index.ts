import express from 'express'
import { type Handler } from 'vite-plugin-mix'
import { GreetingResponse } from '../lib'
import { env } from './env'

// Notice how SECRET, from `.env` is loaded like this.
console.log(env.SECRET)

const app = express()

// Setup API routes. `/api/` in pathnames is not required, but makes it clear that we're
// getting data from the api
app.get('/api/hello', (req, res) => {
  const { name } = req.query

  // By specifying the type of `Response`, we make sure all required fields
  // are filled.
  const response: GreetingResponse = {
    greetings: name?.toString() || 'Unknown name'
  }

  res.json(response)
})

// Only serve index.html in production.
// In development, a dev server is provided by vite and only the backend API
// from this script is used.
if (env.NODE_ENV?.match(/prod/i)) {
  app.listen(env.PORT)
  console.log(`listening at *:${env.PORT}`)
}

export const handler: Handler = app
