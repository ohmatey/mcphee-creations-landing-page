import React from 'react'

import InputField from './common/InputField'
import { H2, P } from './common/Typography'
import Container from './common/Container'

const EmailSignUp = _ => (
  <Container>
    <div>
      <H2 gutterBottom>Weekly Round Up Newsletter</H2>

      <P gutterBottom>Sign up to recieve a weekly newsletter with a round up of the latest in small business technology news.</P>

      <div id='mc_embed_signup'>
        <form
          action='https://mcpheecreations.us20.list-manage.com/subscribe/post?u=2a7123d788c2fdccf31974f63&amp;id=282419ce3b'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          target='_blank'
          noValidate
        >
          <div>
            <InputField
              type='text'
              className='input'
              name='FNAME'
              label='Name'
              id='mce-FNAME' />

            <InputField
              type='email'
              name='EMAIL'
              label='Email'
              id='mce-EMAIL'
              required
            />

            <InputField
              type='hidden'
              name='b_2a7123d788c2fdccf31974f63_282419ce3b'
              tabIndex='-1'
            />

            <InputField
              type='submit'
              name='subscribe'
              id='mc-embedded-subscribe'
            />
          </div>
        </form>
      </div>
    </div>
  </Container>
)

export default EmailSignUp
