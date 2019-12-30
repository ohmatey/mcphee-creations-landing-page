import React from 'react'
import App from 'next/app'
import Head from 'next/head'
// import Router from 'next/router'
// import NProgress from 'nprogress'

import GlobalStyles from '../theme/GlobalStyles'
import ThemeProvider from '../theme/ThemeProvider'
import SentryContainer from '../modules/sentry/components/SentryContainer'

// Router.events.on('routeChangeStart', () => NProgress.start())
// Router.events.on('routeChangeComplete', path => {
//   NProgress.done()
//
//   analytics.logEvent('page_view', {
//     page: path
//   })
// })
// Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <SentryContainer>
        <ThemeProvider>
          <GlobalStyles />
          <Head>
            <title>{process.env.SITE_TITLE}</title>
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>
      </SentryContainer>
    )
  }
}

export default MyApp
