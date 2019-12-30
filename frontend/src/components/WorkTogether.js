import React from 'react'

import CtaButton from './CtaButton'
import Container from './common/Container'
import { H2, P } from './common/Typography'
import ButtonGroup from './common/ButtonGroup'

const WorkTogether = _ => (
  <Container style={{ textAlign: 'center', minHeight: '100vh' }}>
    <img
      src='/flat/reach-goal.svg'
      alt='Reach goals together'
      style={{ width: '60%' }}
    />

    <H2 gutterBottom>Let’s work together!</H2>

    <P>Whether you have a vision for something brand new, improve a product, add automation to your processes or completely transform your web presence, I would love to hear from you.</P>

    <ButtonGroup>
      <CtaButton variant='ctaPrimary' href='/start-a-project'>
        {'Let\'s Talk'}
      </CtaButton>
    </ButtonGroup>
  </Container>
)

export default WorkTogether
