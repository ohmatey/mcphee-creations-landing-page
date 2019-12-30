import React from 'react'
import { Box } from 'rebass'

import { H2, P } from './common/Typography'
import Container from './common/Container'
import Grid from './common/Grid'
import GridItem from './common/GridItem'
import CtaButton from './CtaButton'

const Section = ({
  label,
  title,
  isOpen,
  handleSectionClick,
  children
}) => (
  <div>
    <H2>{title}</H2>

    <div className='section-content'>
      {children}
    </div>
  </div>
)

const HomeServices = ({
  openSection,
  sectionOpen
}) => (
  <section>
    <Container>
      <Box style={{ textAlign: 'center' }}>
        <H2 gutterBottom>Let’s make your idea a reality.</H2>
        <P>We’ve all been there. You’re are up at night thinking about a great new technological idea or enhancement to your business but don’t know what to do next.</P>
      </Box>

      <Grid style={{ marginTop: 80 }}>
        <GridItem>
          <img
            src='/flat/web-development.svg'
            alt='Full stack web development'
            height='90%'
          />
        </GridItem>

        <GridItem style={{ marginTop: 40 }}>
          <P>You may be set in stone on what you want or we just finished are taking our findings from the design sprint. It’s time to start building the application.</P>

          <P>Partner with me to take your business to the next level by building process automations and customer friendly web app experiences.</P>

          <CtaButton to='/web-development/'>How I build web apps</CtaButton>
        </GridItem>
      </Grid>
    </Container>
  </section>
)

export default HomeServices
