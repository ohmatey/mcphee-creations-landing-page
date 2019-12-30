import React from 'react'
import { Text, Heading } from 'rebass'
import styled from '@emotion/styled'

const GutterBottom = styled.div`
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`

const withGutterBottom = Component => ({
  gutterBottom = false,
  ...props
}) => {
  if (gutterBottom) {
    return (
      <GutterBottom>
        <Component {...props} />
      </GutterBottom>
    )
  }

  return <Component {...props} />
}

export const H1 = withGutterBottom(props => <Heading fontSize={7} text='headline' fontWeight='bold' {...props} />)

export const H2 = withGutterBottom(props => <Heading fontSize={6} text='headline' fontWeight='bold' {...props} />)

export const H3 = withGutterBottom(props => <Heading fontSize={5} {...props} />)

export const H4 = withGutterBottom(props => <Heading fontSize={4} {...props} />)

export const P = withGutterBottom(props => <Text fontSize={4} {...props} />)
