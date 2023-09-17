import React from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../Footer'
import NounVertical from './NounVertical'

function Counters() {
  return (
    <div className='inner-background'>
      <Navbar />
      <div className='topic-division'>
        <div className='vertical-topic'>
          <NounVertical />
        </div>

        <div></div>
      </div>

      <Footer />
    </div>
  )
}

export default Counters
