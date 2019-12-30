import React from 'react'

import { H2, P } from './common/Typography'
import Container from './common/Container'
import Grid from './common/Grid'
import GridItem from './common/GridItem'
import CtaButton from './CtaButton'
import ButtonGroup from './common/ButtonGroup'

const IdeationPlanning = _ => (
  <Container style={{ marginTop: 80, minHeight: '100vh' }}>
    <Grid>
      <GridItem style={{ paddingTop: 40 }}>
        <H2 gutterBottom>Ideation, planning, design, development - it’s a lot of work to create a great web experience.</H2>

        <P>Take the guesswork out by parterning with someone that understands you and what you are trying to achieve. One you can have a friendly conversation with, recieve guidance and planning through out the process. Someone that is as excited as you are about building your vision.</P>

        <ButtonGroup>
          <CtaButton variant='ctaPrimary' to='/about/'>
            Learn more about me
          </CtaButton>
        </ButtonGroup>
      </GridItem>

      <GridItem>
        <img src='/flat/team-work.svg' alt='Reach Goals Together' />
      </GridItem>
    </Grid>
  </Container>
)

export default IdeationPlanning
