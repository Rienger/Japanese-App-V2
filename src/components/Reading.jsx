import React, { useState } from 'react'
import readingContent from '../reading-content'

function Reading() {
  const [number, setNumber] = useState(2)
  const [level, setLevel] = useState('hiragana')
  const [random, setRandom] = useState(Math.floor(Math.random() * 3))
  const [translation, setTranslation] = useState()

  const randomPicker = () => {
    // setLevel(choice)
    setRandom(Math.floor(Math.random() * 3))
  }

  return (
    <div className='inner-background'>
      <div className='reading-container'>
        <div className='reading-btn-container'>
          <button
            className='reading-button'
            style={
              number > 6
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              // setLevel('kanjiN1')
              // setNumber(7)
              // randomPicker()
              alert('バカ　じゃないの？!!')
            }}
          >
            Kanji N1
          </button>

          <button
            className='reading-button'
            style={
              number > 5
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              // setLevel('kanjiN2')
              // setNumber(6)
              // randomPicker()
              alert(
                'what the fuck!? you gotta study your ass out if you wanna reach on my level'
              )
            }}
          >
            Kanji N2
          </button>

          <button
            className='reading-button'
            style={
              number > 4
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              // setLevel('kanjiN3')
              // setNumber(5)
              // randomPicker()
              alert('too soon for you son')
            }}
          >
            Kanji N3
          </button>

          <button
            className='reading-button'
            style={
              number > 3
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              // setLevel('kanjiN4')
              // setNumber(4)
              // randomPicker()
              alert('get better')
            }}
          >
            Kanji N4
          </button>

          <button
            className='reading-button'
            style={
              number > 2
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              setLevel('kanjiN5')
              setNumber(3)
              randomPicker()
            }}
          >
            Kanji N5
          </button>

          {/* <button className='reading-button'
            style={number>2 ? {backgroundColor:  'rgb(67, 97, 63)', color: 'tan'}: {}}
            onClick={()=> {
                setLevel('katakana')
                setNumber(3)
                randomPicker()}}
            >Katakana</button> */}

          <button
            className='reading-button'
            style={
              number > 1
                ? { backgroundColor: 'rgb(67, 97, 63)', color: 'tan' }
                : {}
            }
            onClick={() => {
              setLevel('hiragana')
              setTranslation('hiraganaTranslation')
              setNumber(2)
              randomPicker()
            }}
          >
            Hira | Kata
          </button>

          <p
            style={{
              color: 'black',
              opacity: '0.7',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            select your current level
          </p>
        </div>

        <div className='reading-content'>
          {readingContent.map((value) => (
            <div>
              <h1>{value[level][0]}</h1>
              <p>{value[level][1]}</p>
              <p>{value[level][2]}</p>
              <p>{value[level][3]}</p>
              <p>{value[level][4]}</p>
              <p>{value[level][5]}</p>
            </div>
          ))}
          {/* <p>{readingContent[0][translation]}</p>
            <button style={{}}>romaji and translation</button> */}
        </div>
      </div>

    
    </div>
  )
}

export default Reading
