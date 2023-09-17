import React from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import NounVertical from './NounVertical'

function Numbers() {
  const navigate = useNavigate()

  return (
    <div className='inner-background'>
      <Navbar />

      <div className='topic-division'>
        <div className='vertical-topic'>
          <NounVertical />
        </div>

        <div>
          <div>
            <div className='japanese-column'>
              <p>いち</p>
              <p>じゅう</p>
              <p>ひゃく</p>
              <p>せん</p>
              <p>いちまん</p>
            </div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Numbers
