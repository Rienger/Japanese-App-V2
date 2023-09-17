import React from 'react'
import Footer from './Footer'
import Navbar from './NAVBAR/Navbar'
import kanaTest from '../kanatest-content'

function KanaTest() {
  return (
    <div className='inner-background'>
      <Navbar />
      <div className='kanatest-component'>
        {kanaTest.map((value) =>
          <div style={{ display: 'flex' }}>
            <p style={{ color: 'black' }}>{value}</p>
            <input></input>
          </div>

        )}
      </div>



      <Footer />
    </div>
  )
}

export default KanaTest