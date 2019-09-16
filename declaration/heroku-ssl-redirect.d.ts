declare module 'heroku-ssl-redirect' {
  import {PathParams} from 'express-serve-static-core'

  function sslRedirect(environments?: string[], port?: number): PathParams

  export default sslRedirect
}

