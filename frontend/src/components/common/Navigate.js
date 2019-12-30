import React from 'react'
import Link from 'next/link'
import { Link as RebassLink } from 'rebass'

const Navigate = ({
  href,
  ...props
}) => (
  <Link href={href}>
    <RebassLink {...props} />
  </Link>
)

export default Navigate
