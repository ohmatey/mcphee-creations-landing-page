import React from 'react'
import Link from 'next/link'

const LegalNav = ({
  children
}) => (
  <div>
    <div className='columns'>
      <div className='column is-one-quarter' style={{ marginTop: 50 }}>
        <h5>Legal</h5>

        <ul>
          <li><Link href='/legal/privay-policy'>Privacy Policy</Link></li>
          {/* <li><Link href='/legal/terms-of-use'>Terms of Use</Link></li> */}
        </ul>
      </div>

      <div className='column'>
        {children}
      </div>
    </div>
  </div>
)

export default LegalNav
