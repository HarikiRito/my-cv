import next from 'next'
import express, {Request, Response} from 'express'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '../src/i18n'
import {WebClient} from '@slack/web-api'
import slackRoute from '@server/slack'



const port   = parseInt(process.env.PORT || '3000', 10)
const dev    = process.env.NODE_ENV !== 'production'
const app    = next({dev})
const handle = app.getRequestHandler()

const main = async () => {
  require('dotenv').config()
  try {
    await app.prepare()

    const server = express()
    server.use(nextI18NextMiddleware(nextI18next))

    server.use('/slack', slackRoute)
    server.get('*', (req: Request, res: Response) => {
      return handle(req, res)
    })

    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`)
  } catch (e) {
    console.error(e.stack)
    process.exit(1)
  }
}

main()
