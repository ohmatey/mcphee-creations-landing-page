import React from 'react'

import CtaButton from './CtaButton'

const HowIWork = _ => (
  <section className='section is-medium'>
    <div className='container'>
      <div className='columns' style={{ height: 500 }}>
        <div className='column'>
          <h2>How I work</h2>
          <p>Trusting someone with your precious time and money is no joke. Learn more about the processes and workflow I use to work with clients remotely.</p>

          <CtaButton to='/how-i-work/'>
            Learn More
          </CtaButton>
        </div>

        <div className='column is-two-thirds'>
          <div style={{ background: '#454746', height: '100%' }}>

          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HowIWork
