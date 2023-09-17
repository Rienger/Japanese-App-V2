import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Verify() {
  let navigate = useNavigate()

  const [firstName, setFirstName] = useState()

  function firstInput(event) {
    function capitalize(str) {
      var splitStr = str.toLowerCase().split(' ')
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
      }
      // Directly return the joined string
      return splitStr.join(' ')
    }

    setFirstName(capitalize(event.target.value))
  }

  const [content, setContent] = useState()

  function verified(event) {
    setContent(true)

    event.preventDefault()
  }

  const [denyAccess, setDenyAccess] = useState()

  function notVerified(event) {
    setDenyAccess(true)
    event.preventDefault()
  }

  return (
    <div className='verify'>
      <div className='container'>
        <form>
          <h1>Hello {firstName}</h1>
          <input onChange={firstInput} placeholder='First Name' />
          <br></br>
          <button
            onClick={
              firstName === 'Liana' || firstName === 'Liana Rose'
                ? verified
                : notVerified
            }
          >
            Submit
          </button>
          {content ? navigate('/home') : notVerified}
          {denyAccess && <h1>Sino ka po?</h1>}
        </form>
      </div>
    </div>
  )
}

export default Verify
