import React from 'react'
import styled from '@emotion/styled'

import Footer from './Footer'
import Header from './Header'

const AppContainer = styled.div`
  maxWidth: '100vw';
  overflow: 'hidden';
`

const Layout = ({
  showEmailSignUp,
  children
}) => (
  <AppContainer>
    <Header />

    {children}

    <Footer showEmailSignUp={showEmailSignUp} />
  </AppContainer>
)

export default Layout
