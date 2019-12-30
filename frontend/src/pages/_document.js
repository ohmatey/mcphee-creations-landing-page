import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import theme from '../theme'

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: process.env.SENTRY_URL,
    environment: process.env.NODE_ENV
  })
}

class MyDocument extends Document {
  render() {
    console.log('theme.palette.primary.main change!')
    return (
      <html lang='en' style={{ minHeight: '-webkit-fill-available' }}>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />

          <meta property="og:title" content={process.env.SITE_TITLE} />
          <meta property="og:description" content={process.env.SITE_TITLE} />
          <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg" />
          <meta property="og:url" content="http://euro-travel-example.com/index.htm" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content="European Travel, Inc." />
          <meta name="twitter:image:alt" content="Alt text for image" />

          <meta name='theme-color' content={'theme.palette.primary.main'} />

          <link href="https://fonts.googleapis.com/css?family=Kulim+Park&display=swap" rel="stylesheet" />

          {process.env.NODE_ENV !== 'development' && <script src='https://cdn.ravenjs.com/3.26.2/raven.min.js' crossOrigin='anonymous'></script>}
        </Head>

        <body style={{ minHeight: '100%' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
