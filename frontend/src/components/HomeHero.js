import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'

import CtaButton from './CtaButton'
import ButtonGroup from './common/ButtonGroup'
import { H1, H3 } from './common/Typography'
import Container from './common/Container'

const HeroBody = styled.div`
  padding-top: 10%;
`

const HomeHero = ({}) => (

  <Container>
    <HeroBody>
      <H1 gutterBottom>
        Idea to prototype to App, <br />Fast.
      </H1>

      <H3>
        Assisting thinkers & SME’s
        <br />
        to carve out their space in the web world.
      </H3>

      <ButtonGroup>
        <CtaButton variant='ctaPrimary'>
          Learn More
        </CtaButton>

        <CtaButton href='/asd' variant='ctaSecondary'>
          Learn More
        </CtaButton>
      </ButtonGroup>
    </HeroBody>
  </Container>
)

export default HomeHero
