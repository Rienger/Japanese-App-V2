import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../Footer'
import { n5Kanji, n4Kanji } from './kanji-content'

function Kanji() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef()

  const [kanjiLevel, setKanjiLevel] = useState(n5Kanji)
  const [dropdownBtnActive, setDropdownBtnActive] = useState('N5 (beginner)')
  const [displayMouseOver, setDisplayMouseOver] = useState([])
  const [clickActive, setClickActive] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.body.addEventListener('click', handler)

    // return () => {
    //     document.removeEventListener('click', handler)
    // }
  }, [])

  return (
    <div className='inner-background'>
      <div className='kanji-component'>
        <div className='kanji-margin'>
          <div className='kanji-header'>
            <h1>JLPT Kanji List</h1>
            <h3>
              In the lists below which are organized kanji by JLPT level, you’ll
              see the kanji and the English meaning, followed by the onyomi and
              kunyomi readings.
            </h3>

            <div className='kanji-dropdown'>
              <h3>JLPT Level: </h3>

              <div className='kanji-dropdown-column'>
                <div
                  ref={btnRef}
                  className='kanji-dropdown-button'
                  onClick={() => setOpen(!open)}
                >
                  <div>{dropdownBtnActive}</div>
                  <div className='kanji-dropdown-icon'>
                    <ion-icon name='caret-down-outline'></ion-icon>
                  </div>
                </div>

                <div
                  className={open ? 'kanji-show' : 'kanji-hide'}
                  onClick={(e) => {
                    let id = e.target.id
                    if (id === 'n5') {
                      console.log('go to n5 component')
                      setKanjiLevel(n5Kanji)
                      setDropdownBtnActive('N5 (beginner)')
                    } else if (id === 'n4') {
                      console.log('go to  n4 component')
                      setKanjiLevel(n4Kanji)
                      setDropdownBtnActive('N4')
                    } else {
                      alert('coming soon')
                    }
                  }}
                >
                  <div>
                    <h2 id='n5'>N5</h2>
                  </div>
                  <div>
                    <h2 id='n4'>N4</h2>
                  </div>
                  <div>
                    <h2 id='n3'>N3</h2>
                  </div>
                  <div>
                    <h2 id='n2'>N2</h2>
                  </div>
                  <div>
                    <h2 id='n1'>N1</h2>
                  </div>
                </div>
              </div>

              {/* create a filter search */}
              <div className='kanji-input-filter'>
                <input placeholder='search...'></input>
              </div>
            </div>
          </div>

          <div className='kanji-content'>
            <div className='kanji-characters'>
              {kanjiLevel.map((value) => (
                <div>
                  <div className='kanji-column'>
                    {value.column.map((values) => (
                      <p
                        // onMouseClick={()=> {setDisplayMouseOver(values.explanation)
                        //                     console.log(clickActive)
                        // }}
                        onMouseOver={() =>
                          setDisplayMouseOver(values.explanation)
                        }
                        onMouseLeave={() => setDisplayMouseOver([])}
                      >
                        {values.kanji}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='kanji-explanation'>
              <div className='kanji-explanation-card'>
                <div className='kanji-upper-row'>
                  <div className='kanji-explanation-leftColumn'>
                    <div>meaning:</div>
                    <div>onyomi:</div>
                    <div>kunyomi:</div>
                  </div>
                  <div className='kanji-explanation-rightColumn'>
                    {displayMouseOver.map((value) => (
                      <div>
                        <div className='kanji-explanation-meaning'>
                          {value.meaning}
                        </div>
                        <div>{value.onyomi}</div>
                        <div>{value.kunyomi}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='kanji-lower-row'>
                  <div>Examples:</div>

                  <div>
                    {displayMouseOver.map((value) => (
                      <div>
                        {value.examples.map((values) => (
                          <div>{values}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Kanji
