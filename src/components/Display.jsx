import React, { useState } from 'react'
import Header from './Header'
// import TableContent from './TableContent';
import Footer from './Footer'
import Navbar from './NAVBAR/Navbar'

function Display() {
  const [change, setChange] = useState()

  function blood() {
    setChange((toggle) => {
      return !toggle
    })
  }

  return (
    <div
      className='entire'
      style={{
        backgroundImage:
          change &&
          'linear-gradient(to left, #ae4569, #ba5e68, #c2776d, #c78f79, #cba78c, #cba78c, #cba78c, #cba78c, #c78f79, #c2776d, #ba5e68, #ae4569)',
      }}
    >
      <Navbar />

      <Header backgroundToggle={blood} />
      {/* <TableContent /> */}
      <Footer />
    </div>
  )
}

export default Display
