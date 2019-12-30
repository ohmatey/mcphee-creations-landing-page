import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from './'

const MyThemeProvider = ({
  children
}) =>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>

export default MyThemeProvider
