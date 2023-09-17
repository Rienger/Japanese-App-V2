import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavbarLinks from './NavbarLinks'

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden w-full flex justify-end'>
      <button onClick={toggleMenu} className='me-0 w-auto group'>
        <FontAwesomeIcon
          className='text-2xl group-hover:text-green-200 animation duration-200 group-hover:scale-105'
          icon={faBars}
        />
      </button>
      {/* Menu */}
      <div
        className={`bg-green-800 absolute top-0 left-0 w-screen z-50 h-screen py-5 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div>
          <div className='w-full flex justify-end container mx-auto mb-4'>
            <button className='' onClick={toggleMenu}>
              <FontAwesomeIcon className='text-4xl' icon={faXmark} />
            </button>
          </div>
          <ul className='flex flex-col gap-6 text-2xl ps-8 '>
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='Kana'
                route='/kana'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='PartsOfSpeech'
                route='/pos'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='Cards'
                route='/flashcard'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='PracticeVerb'
                route='/random'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='Reading'
                route='/reading'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='Challenge'
                route='/challenge'
              />
            </div>
            <hr />
            <div onClick={toggleMenu}>
              <NavbarLinks
                className='hover:bg-green-700 py-4 animation duration-300 cursor-pointer'
                linkName='Kanji'
                route='/kanji'
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu
