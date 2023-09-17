import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../src/images/japan-logo.jpg'
import NavbarRight from './NavbarRight'
import BurgerMenu from './BurgerMenu'

function Navbar() {
  // const [hidden, setHidden] = useState(false)

  return (
    <>
      <div className='bg-green-900 relative py-4'>
        <div className='flex justify-between items-center container mx-auto'>
          <NavLink className='link' exact to='/' activeClassName='active'>
            <img src={logo} alt='logo' className='rounded-full w-14'></img>
          </NavLink>
          <BurgerMenu />
          <NavbarRight />
        </div>
      </div>
    </>
  )
}

export default Navbar
