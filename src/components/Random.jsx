import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import {
  dictionaryJapanese,
  dictionaryEnglish,
  tense,
  simplePast,
  politeForm,
  teForm,
  simpleNegative,
} from '../verb-contents'
import Navbar from './NAVBAR/Navbar'
import { FiHelpCircle } from 'react-icons/fi'
// import {toHiragana} from 'wanakana'

function Random() {
  let initialRandomTense = Math.floor(Math.random() * tense.length)
  let initialRandom = Math.floor(Math.random() * dictionaryJapanese.length)

  const [japaneseWord, setJapaneseWord] = useState(
    dictionaryJapanese[initialRandom]
  )
  const [englishWord, setEnglishWord] = useState(
    dictionaryEnglish[initialRandom]
  )

  const [input, setInput] = useState('')
  const [wrong, setWrong] = useState()
  const [correct, setCorrect] = useState()
  //   const [correct, setCorrect] = useState()
  const [tenseDisplay, setTenseDisplay] = useState(tense[initialRandomTense])

  const [polite, setPolite] = useState(politeForm[initialRandom])
  const [simplePasts, setSimplePasts] = useState(simplePast[initialRandom])
  const [teForms, setTeForms] = useState(teForm[initialRandom])
  const [simpleNegatives, setSimpleNegatives] = useState(
    simpleNegative[initialRandom]
  )

  // const [transformHiragana, setTransformHiragana] = useState()

  function dictionaryForm() {
    console.log(japaneseWord)
    if (tenseDisplay === 'polite') {
      checker(polite)
    }
    if (tenseDisplay === 'simple Past') {
      checker(simplePasts)
    }
    if (tenseDisplay === 'Te-form') {
      checker(teForms)
    }
    if (tenseDisplay === 'simple Negative') {
      checker(simpleNegatives)
    }

    setInput('')
  }

  function backToDefault() {
    setWrong(false)
    setCorrect(false)
  }

  function setRandom() {
    setPolite(politeForm[initialRandom])
    setSimplePasts(simplePast[initialRandom])
    setTeForms(teForm[initialRandom])
    setSimpleNegatives(simpleNegative[initialRandom])

    setTenseDisplay(tense[initialRandomTense])
    setJapaneseWord(dictionaryJapanese[initialRandom])
    setEnglishWord(dictionaryEnglish[initialRandom])
  }

  function checker(tenseParam) {
    if (input.toLowerCase() === tenseParam) {
      setCorrect(true)
      setTimeout(backToDefault, 700)
      setRandom()
    } else {
      setWrong(true)
      setTimeout(backToDefault, 500)
    }
  }

  function giveUp() {
    // setRandom()
    if (tenseDisplay === 'polite') {
      setInput(polite)
    }
    if (tenseDisplay === 'simple Past') {
      setInput(simplePasts)
    }
    if (tenseDisplay === 'Te-form') {
      setInput(teForms)
    }
    if (tenseDisplay === 'simple Negative') {
      setInput(simpleNegatives)
    }
  }

  function onChange(e) {
    setInput(e.target.value)
    // setTransformHiragana(toHiragana(e.target.value))
  }

  const handleKeyDown = (event) => {
    // enter key
    if (event.keyCode === 13) {
      dictionaryForm()
      event.preventDefault()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div className='inner-background'>
      <div className='main-body'>
        <h1 style={{ color: wrong ? '#B10046' : correct && 'green' }}>
          Verb Conjugation Practice
        </h1>
        <div
          className='random'
          style={{
            border: wrong ? '5px #B10046 solid' : correct && '5px green solid',
          }}
        >
          <div className='random-icon-parent'>
            <div className='random-icon' onClick={giveUp}>
              <FiHelpCircle size={'1.9em'} />
            </div>
          </div>

          <h1>{japaneseWord}</h1>
          <h3>{englishWord}</h3>
          <h2>{tenseDisplay}</h2>

          <div className='random-form'>
            <input
              onChange={onChange}
              autoFocus='autofocus'
              value={input}
            ></input>{' '}
            <br></br>
            <button onClick={dictionaryForm}>submit</button>
          </div>
        </div>
        {/* <button onClick={giveUp}>I give up</button> */}
      </div>

      <Footer />
    </div>
  )
}

export default Random
