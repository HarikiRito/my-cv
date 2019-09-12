import React from 'react'
import App, {Container, AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {theme} from '@/components/Theme/Theme'
import {compose} from 'recompose'
import {appWithTranslation} from '@/i18n'
import {removeCookie} from '@/utils'

class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot?: any): void {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme = {theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default compose(
  appWithTranslation,
)(MyApp)
