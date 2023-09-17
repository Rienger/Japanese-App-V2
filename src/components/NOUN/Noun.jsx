import React from 'react'
import Footer from '../Footer'
import Navbar from '../NAVBAR/Navbar'
import levi from '../../images/levi-final.jpg'
import leviSound2 from '../../audio/levi-sound.mp3'
import leviSound3 from '../../audio/giveup.mp3'
import leviSound1 from '../../audio/shingeki.mp3'
import { useNavigate } from 'react-router-dom'
import NounVertical from './NounVertical'

function Noun() {
  let navigate = useNavigate()

  let audio1 = new Audio(leviSound1)
  let audio2 = new Audio(leviSound2)
  let audio3 = new Audio(leviSound3)

  const soundArray = [audio1, audio2, audio3]

  const start = () => {
    soundArray[Math.floor(Math.random() * 3)].play()
    audio1.volume = 0.3
    audio2.volume = 0.6
    audio3.volume = 1
  }

  return (
    <div className='inner-background'>
      <Navbar />

      <div className='topic-division'>
        <div className='vertical-topic'>
          <NounVertical />
        </div>

        <div className='noun-content'>
          <header className='header'>
            <img
              onClick={start}
              src={levi}
              width='150px'
              height='auto'
              alt=''
            ></img>
            <h1>NOUNS</h1>
            <p className='adv-p'>
              A noun is a word that refers to a person, place, thing, event,
              etc. In general, nouns are used as subjects of verbs, objects of
              verbs, or complements of subjects. However, in Japanese, only a
              noun can become a sentence by attaching Hiragana: だ or です.
            </p>

            <p className='adv-p'>
              Although nouns may seem basic in nature and simple enough to
              master, there are many different types with very different
              functions.
            </p>

            <p className='adv-p'>
              It's also important to be aware that some words that aren't
              considered nouns in English can be classified as nouns in
              Japanese, and vice versa. So let's first take a look at the types
              of nouns there are in Japanese.
            </p>
          </header>
        </div>

        <div className='vertical-topic'></div>
      </div>

      <Footer />
    </div>
  )
}

export default Noun
