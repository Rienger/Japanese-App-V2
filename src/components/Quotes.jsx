import React from 'react'

function Quotes() {

    // find API of quotes generator for language learner
    const date = new Date().getHours()
    if(date > 11){
        console.log('quotes done')
    }


  return (
    <div className='quote-parent' style={{backgroundColor: 'gray', color: 'black', height: '1500px'}}>

    <h1>hello</h1>

    </div>
  )
}

export default Quotes