import React, { useState } from 'react'
import Footer from './Footer'
// import { useNavigate } from 'react-router-dom'
import Card from './Card'
import {
  arrayEnglish,
  arrayHiraganaN4,
  arrayHiraganaN5,
  arrayKanjiN4,
  arrayKanjiN5,
  arrayNihongo,
} from '../card-content'
import Navbar from './NAVBAR/Navbar'

function Flashcard() {
  const [arrayRange, setArrayRange] = useState(arrayEnglish.length)

  const [random, setRandom] = useState(Math.floor(Math.random() * arrayRange))
  const [active, setActive] = useState(false)
  const [counter, setCounter] = useState(0)

  const [selectedFront, setSelectedFront] = useState(arrayNihongo)
  const [selectedBack, setSelectedBack] = useState(arrayEnglish)

  const [back, setBack] = useState(selectedBack[counter])
  const [front, setFront] = useState(selectedFront[counter])
  const [title, setTitle] = useState('title')

  const [arrayChecker, setArrayChecker] = useState([])
  //ensures not to repeat randomized value until all data are shown

  function transform() {
    setActive(!active)
  }

  // const prevTrigger = (counterParam, selectedBackParam, selectedFrontParam, arrayRangeParam) => {
  //     if (counterParam > 0) {
  //         setCounter(counterParam - 1)
  //         setBack(selectedFrontParam[counterParam-1])
  //         setFront(selectedBackParam[counterParam-1])

  //     }  else if (counterParam <= 0) {
  //         setCounter(arrayRangeParam-1)
  //         setBack(selectedFrontParam[arrayRangeParam-1])
  //         setFront(selectedBackParam[arrayRangeParam-1])
  //     }
  // }

  function previousCard() {
    if (active === true) {
      if (counter > 0) {
        setCounter(counter - 1)
        setBack(selectedFront[counter - 1])
        setFront(selectedBack[counter - 1])
      } else if (counter <= 0) {
        setCounter(arrayRange - 1)
        setBack(selectedFront[arrayRange - 1])
        setFront(selectedBack[arrayRange - 1])
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1)
        setBack(selectedBack[counter - 1])
        setFront(selectedFront[counter - 1])
      } else if (counter <= 0) {
        setCounter(arrayRange - 1)
        setBack(selectedBack[arrayRange - 1])
        setFront(selectedFront[arrayRange - 1])
      }
    }
  }

  function nextCard() {
    if (active === true) {
      if (counter < arrayRange - 1) {
        setCounter(counter + 1)
        setBack(selectedFront[counter + 1])
        setFront(selectedBack[counter + 1])
      } else if (counter >= arrayRange - 1) {
        setCounter(0)
        setBack(selectedFront[0])
        setFront(selectedBack[0])
      }
    } else if (active === false) {
      if (counter < arrayRange - 1) {
        setCounter(counter + 1)
        setBack(selectedBack[counter + 1])
        setFront(selectedFront[counter + 1])
      } else if (counter >= arrayRange - 1) {
        setCounter(0)
        setBack(selectedBack[0])
        setFront(selectedFront[0])
      }
    }
  }

  function generateRandomNumber() {
    setRandom(Math.floor(Math.random() * arrayRange))
    setCounter(random)
    setFront(selectedFront[random])
    setBack(selectedBack[random])

    if (active === true) {
      setBack(selectedFront[random])
      setFront(selectedBack[random])
    } else if (active === false) {
      setBack(selectedBack[random])
      setFront(selectedFront[random])
    }

    // need to create an array checker to show all randomize data
    // to avoid callback function must learn how to use promise
    console.log(random + 1)
    arrayChecker.push(random + 1)
    console.log(arrayChecker)

    // if(arrayChecker.includes(random+1)){
    //     generateRandomNumber()
    // }
    // else{
    //     arrayChecker.push(random+1)
    // }
  }

  const handleKeyDown = (event) => {
    // right arrow
    if (event.keyCode === 39) {
      console.log('A key was pressed', event.keyCode)
      nextCard()
    }
    // left arrow
    if (event.keyCode === 37) {
      previousCard()
    }
    // enter key
    if (event.keyCode === 13) {
      transform()
      event.preventDefault()
    }
    // R key
    if (event.keyCode === 82) {
      generateRandomNumber()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const setCategory = (showFront, showBack, e) => {
    if (active === true) {
      setFront(showBack[0])
      setBack(showFront[0])
    } else {
      setFront(showFront[0])
      setBack(showBack[0])
    }
    setCounter(0)
    setArrayRange(showFront.length)
    setSelectedFront(showFront)
    setSelectedBack(showBack)
    setRandom(Math.floor(Math.random() * showFront.length))
    console.log(arrayRange)
  }

  const category = (e) => {
    let cat = e.target.id

    if (cat === 'vocab') {
      setCategory(arrayNihongo, arrayEnglish)
    } else if (cat === 'kanji-n5') {
      setCategory(arrayKanjiN5, arrayHiraganaN5)
    } else if (cat === 'kanji-n4') {
      setCategory(arrayKanjiN4, arrayHiraganaN4)
    } else if (cat === 'kanji-n3') {
      alert('soon')
    } else if (cat === 'kanji-n2') {
      alert('soon')
    } else if (cat === 'kanji-n1') {
      alert('soon')
    }
    console.log(cat)
  }

  return (
    <div className='inner-background'>
      <div className='flashcard-body'>
        <div className='flashcard-all-button'>
          {/* <h1 className={`flashcard-display ${defaultNihongo ? 'flip' : ''}`} onClick={transform}> {active ? back : front}</h1>   */}
          <div className='flashcard-align-button'>
            <div className='flashcard-category-button'>
              <nav>
                <ul>
                  <div className='menu'>
                    <p>Category</p>
                    <ul className='ani-menu'>
                      <p onClick={category} id='vocab'>
                        Vocab
                      </p>
                      <p onClick={category} id='kanji-n5'>
                        Kanji N5
                      </p>
                      <p onClick={category} id='kanji-n4'>
                        Kanji N4
                      </p>
                      <p onClick={category} id='kanji-n3'>
                        Kanji N3
                      </p>
                      <p onClick={category} id='kanji-n2'>
                        Kanji N2
                      </p>
                      <p onClick={category} id='kanji-n1'>
                        Kanji N1
                      </p>
                    </ul>
                  </div>
                </ul>
              </nav>

              {/* <button onClick={category} id='vocab'>VOCAB</button> */}
              {/* <button onClick={category} id='kanji-n5'>kanji n5</button>
                        <button onClick={category} id='kanji-n4'>kanji n4</button> */}
            </div>

            <div className='flashcard-random-button'>
              <button onClick={generateRandomNumber}>Start Random</button>
            </div>
          </div>
        </div>

        <Card
          back={back}
          front={front}
          // title={title}
          flip={transform}
          activating={active}
        />

        <div className='span'>
          <span className='arrow' onClick={previousCard}>
            ᐊ
          </span>
          <span className='flashcard-count'>
            {' '}
            {counter + 1}/{arrayRange}{' '}
          </span>
          <span className='arrow' onClick={nextCard}>
            ᐅ
          </span>
        </div>
      </div>

      <div className='shortcut-key'>
        <div className='keys'>
          <p>
            <span className='keyboard'>R</span>{' '}
          </p>
          <p>
            <span className='keyboard'>enter</span>{' '}
          </p>
          <p>
            <span className='keyboard'>left arrow</span> /{' '}
            <span className='keyboard'>right arrow</span>{' '}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Flashcard
