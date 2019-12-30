import React from 'react'
import { SocialIcon } from 'react-social-icons'

const socialStyle = { margin: 8, width: 25, height: 25 }

const SocialIconsList = _ => (
  <React.Fragment>
    <SocialIcon url='https://www.pinterest.com.au/mcpheecreations' target='_blank' style={socialStyle} />
    <SocialIcon url='https://www.instagram.com/aaron_mcpherson_/' target='_blank' style={socialStyle} />
    <SocialIcon url='https://web.facebook.com/mcpheecreations/' target='_blank' style={socialStyle} />
  </React.Fragment>
)

export default SocialIconsList
