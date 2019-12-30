import React from 'react'
import { Box } from 'rebass'

const Container = ({
  style,
  ...props
}) => (
  <Box
    {...props}
    mx={3}
    style={{
      maxWidth: 1080,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 16,
      ...style
    }}
  />
)

export default Container
