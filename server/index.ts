import next from 'next'
import express, {Request, Response} from 'express'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '../src/i18n'

require('dotenv').config()

const port   = parseInt(process.env.PORT || '3000', 10)
const dev    = process.env.NODE_ENV !== 'production'
const app    = next({dev})
const handle = app.getRequestHandler()

const main = async () => {
  try {
    await app.prepare()

    const server = express()
    server.use(nextI18NextMiddleware(nextI18next))

    server.get('/:category/:slug-:id(\\d+)', (req: Request, res: Response) => {
      const actualPage  = '/post'
      const queryParams = {
        slug: req.params.slug,
        category: req.params.category,
        id: req.params.id,
      }
      app.render(req, res, actualPage, queryParams)
    })

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
