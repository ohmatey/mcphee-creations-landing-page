import React from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'

import Navigate from '../common/Navigate'
import Container from '../common/Container'
import BurgerButton from './BurgerButton'

const NavMenuItem = styled(Navigate)`
  padding: ${({ theme }) => theme.space[3]}px;
  marginRight: ${({ theme }) => theme.space[2]}px;
`

const AppBar = ({
  header,
  navOpen
}) => (
  <nav
    role='navigation'
    aria-label='main navigation'
  >
    <Container>
      <Flex
        py={3}
        px={2}
        alignItems='center'
      >
        <Navigate to='/'>
          <img
            src='/McPhee_Creations_Logo_Purple_graphic.png'
            alt='McPhee Creations Logo'
            width='100'
          />
        </Navigate>

        <Box mx='auto' />

        {true ? (
          <div>
            <BurgerButton>
              <div />
              <div />
              <div />
            </BurgerButton>
          </div>
        ) : (
          <div>
            <NavMenuItem href='/about/'>
              About
            </NavMenuItem>

            <NavMenuItem href='/web-development/'>
              Web Development
            </NavMenuItem>

            <NavMenuItem href='/start-a-project'>
              Start a Project
            </NavMenuItem>
          </div>
        )}
      </Flex>
    </Container>
  </nav>
)

export default AppBar
