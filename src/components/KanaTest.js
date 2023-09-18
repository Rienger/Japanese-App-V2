import React from 'react'
import kanaTest from '../kanatest-content'

function KanaTest() {
  return (
    <div className='inner-background'>
      
      <div className='kanatest-component'>
        {kanaTest.map((value) =>
          <div style={{ display: 'flex' }}>
            <p style={{ color: 'black' }}>{value}</p>
            <input></input>
          </div>

        )}
      </div>



   
    </div>
  )
}

export default KanaTest