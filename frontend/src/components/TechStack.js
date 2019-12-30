import React from 'react'

import reactLogo from '../images/techStackLogos/React.js-logo.png'
import nodeJsLogo from '../images/techStackLogos/nodejs-logo.png'
import firebaseLogo from '../images/techStackLogos/firebase-logo.png'
import gcpLogo from '../images/techStackLogos/Google-Cloud-Platform-logo.png'

const stackItems = [
  {
    title: 'ReactJs',
    image: reactLogo
  },
  {
    title: 'Nodejs',
    image: nodeJsLogo
  },
  {
    title: 'Firebase',
    image: firebaseLogo
  },
  {
    title: 'Google Cloud Platform',
    image: gcpLogo
  },
]

const TechStack = _ => (
  <div className='columns'>
    {stackItems.map(({
      title,
      image
    }, i) => (
      <div key={i} className={`column is-${stackItems.length - 1}`}>
        <img src={image} style={{ maxWidth: '100%', height: 100 }} alt={title + ' logo'} />
      </div>
    ))}
  </div>
)

export default TechStack
