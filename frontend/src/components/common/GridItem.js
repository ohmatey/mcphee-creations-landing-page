import React from 'react'
import { Box } from 'rebass'

const GridItem = ({
  children,
  ...props
}) => (
  <Box width={1/2} px={2} {...props}>
    {children}
  </Box>
)

export default GridItem
