import React from 'react'
import styled from '@emotion/styled'

import EmailSignUp from '../EmailSignUp'
import SocialIconsList from '../SocialIconsList'
import Navigate from '../common/Navigate'
import Grid from '../common/Grid'
import GridItem from '../common/GridItem'
import Container from '../common/Container'
import { H4, P } from '../common/Typography'

const FooterContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.space[1] * 10}px;
  padding-bottom: ${({ theme }) => theme.space[1] * 10}px;
`

const Footer = ({
  showEmailSignUp = true
}) => (
  <>
    {showEmailSignUp && <EmailSignUp />}

    <footer className='footer'>
      <FooterContainer>
        <Grid>
          <GridItem>
            <div className='menu'>
              <H4>McPhee Creations</H4>

              <ul>
                <li>
                  <Navigate href='/about/'>About</Navigate>
                </li>
                <li>
                  <Navigate href='/web-development/'>Web Development</Navigate>
                </li>
                <li>
                  <Navigate href='/contact/'>Contact</Navigate>
                </li>
              </ul>
            </div>
          </GridItem>

          <GridItem>
            <div className='menu'>
              <H4>Resources</H4>

              <ul>
                <li>
                  <Navigate href='/blog/'>Blog</Navigate>
                </li>
                <li>
                  <Navigate href='/business-tools/'>Business Tools</Navigate>
                </li>
              </ul>
            </div>
          </GridItem>

          <GridItem>
            <div className='menu'>
              <H4>Legal</H4>

              <ul>
                <li>
                  <Navigate
                    href='/legal/privacy-policy/'
                  >Privacy Policy</Navigate>
                </li>
              </ul>
            </div>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem>
            <SocialIconsList />
          </GridItem>

          <GridItem style={{ textAlign: 'right' }}>
            <P>© 2019, Made by McPhee Creations</P>
          </GridItem>
        </Grid>
      </FooterContainer>
    </footer>
  </>
)

export default Footer
