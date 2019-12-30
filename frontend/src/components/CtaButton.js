import React from 'react'
import Link from 'next/link'
import { Button } from 'rebass'

const CtaButton = ({
  variant,
  children,
  ...props
}) => (
  <Link {...props} className='button'>
    <a>
      <Button variant={variant}>
        {children}
      </Button>
    </a>
  </Link>
)

export default CtaButton
