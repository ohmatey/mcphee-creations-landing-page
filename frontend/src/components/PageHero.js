import React from 'react'

import Container from './common/Container'

const PageHero = ({
  title,
  subtitle
}) => (
  <section className='section' style={{ marginTop: 80 }}>
    <Container>
      <h1 className='is-size-2-mobile is-size-1-tablet'>
        {title}
      </h1>
      <h2>
        {subtitle}
      </h2>
    </Container>
  </section>
)

export default PageHero
