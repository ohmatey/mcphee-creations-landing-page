import React from 'react'
import { Flex } from 'rebass'

const Grid = ({
  children,
  ...props
}) => (
  <Flex mx={-2} {...props}>
    {children}
  </Flex>
)

export default Grid
