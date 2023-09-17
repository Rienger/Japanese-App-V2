import React, {useState} from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

function ChallengeModal(props) {

  const [iconCancel, setIconCancel] = useState()
  const [iconConfirm, setIconConfirm] = useState()

  const displayIconCancel = () => {
    setIconCancel(true)
  }

  const removeIconCancel = () => {
    setIconCancel(false)
  }

  const displayIconConfirm = () => {
    setIconConfirm(true)
  }

  const removeIconConfirm = () => {
    setIconConfirm(false)
  }


  return (
    <div>
      <div className='modal-overlay'></div>
      <div className='modal-container' style={{backgroundImage: `url(${props.background})`, 
      backgroundPosition: props.restartPosition ? 'center -10px' : 'center'}}>
        <h1>{props.japaneseText}</h1>
        <h1>{props.englishText}</h1>
        <h1>{props.questionText}</h1>
        {/* <h1>Are you sure you've memorized those shits?</h1> */}
        
        <div className='modalButton-container'>
          <button className='cancel-button' onClick={()=> props.close(false)} onMouseOver={displayIconCancel} onMouseLeave={removeIconCancel}>
          {iconCancel ? <AiOutlineClose /> : 'cancel'}
          </button>

          <button className='confirm-button' onClick={props.confirm} onMouseOver={displayIconConfirm} onMouseLeave={removeIconConfirm}>
          {iconConfirm ? <BsCheck2Circle /> : 'confirm'}
          </button>
        </div>

      </div>

    </div>
  )
}

export default ChallengeModal