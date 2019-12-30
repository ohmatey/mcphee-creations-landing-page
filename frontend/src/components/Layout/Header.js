import React, { useState } from 'react'

import AppBar from './AppBar'
import Navigate from '../common/Navigate'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const header = (
    <div>
      <Navigate to='/'>
        <img
          src='/McPhee_Creations_Logo_Purple_graphic.png'
          alt='McPhee Creations Logo'
          width='50'
        />
        asd
      </Navigate>
asd
      <button
        className={'has-no-style navbar-burger burger' + (navOpen ? ' is-active' : '')}
        aria-label='menu'
        aria-expanded={navOpen}
        data-target='navbar'
        onClick={_ => {
          setNavOpen(!navOpen)

          if (navOpen) {
            sendOpenedNavModal()
          } else {
            sendClosedNavModal()
          }
        }}>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </button>
    </div>
  )

  return (
    <>
      <AppBar
        header={header}
        navOpen={navOpen}
      />
    </>
  )
}

export default Header
