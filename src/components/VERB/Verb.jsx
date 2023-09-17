import React from 'react'
// import { useNavigate } from 'react-router-dom'
import chise from '../../images/chise-hatori.jpg'
import Footer from '../Footer'
import magus from '../../audio/magus.mp3'
import Navbar from '../NAVBAR/Navbar'

function Verb() {
  let audio1 = new Audio(magus)

  const start = () => {
    audio1.play()
    audio1.volume = 0.6
  }

  return (
    <div className='inner-background'>
      <Navbar />

      <div className='verb-parent'>
        <header className='header'>
          <img
            onClick={start}
            src={chise}
            width='150px'
            height='auto'
            alt='gojo'
          ></img>
          <h1>3 TYPES OF VERBS</h1>
          <p className='adv-p'>
            Verbs are one of the most important parts of speech, and it’s said
            that verbs are the second most frequently used words (26%, next to
            nouns at 42%) among all other categories of words in daily Japanese
            conversations.{' '}
          </p>
        </header>

        <div>
          <h1 className='verb-head'>TYPE 1 / U Ending Verbs</h1>
        </div>

        <div className='table'>
          <table className='content-table'>
            <tr>
              <th>あらう (to wash)</th>
              <th>うたう (to sing)</th>
              <th>おどる (to dance)</th>
              <th>ゆるす (to forgive)</th>
            </tr>
            <tr>
              <th>みがく (to brush)</th>
              <th>たたかう (to fight)</th>
              <th>きく (to listen)</th>
              <th>いう (to say)</th>
            </tr>
            <tr>
              <th>あう (to meet)</th>
              <th>のぞく (to peek)</th>
              <th>さそう (to invite)</th>
              <th>けす (to turn off)</th>
            </tr>
          </table>
        </div>

        <div>
          <h1 className='verb-head'>TYPE 2 / IRU & ERU Ending Verbs</h1>
        </div>

        <div className='table'>
          <table className='content-table'>
            <tr>
              <th>たべる (to eat)</th>
              <th>しゃべる (to chat)</th>
              <th>ささえる (to support)</th>
              <th>みる (to see)</th>
            </tr>
            <tr>
              <th>でかれる (to leave)</th>
              <th>かんじる (to feel)</th>
              <th>かりる (to borrow)</th>
              <th>おちる (to fall down)</th>
            </tr>
            <tr>
              <th>こたえる (to answer)</th>
              <th>とめる (to stop)</th>
              <th>みせる (to show)</th>
              <th>しんじる (to believe)</th>
            </tr>
          </table>
        </div>

        <div>
          <h1 className='verb-head'>TYPE 3 / Suru & Kuru</h1>
        </div>

        <div className='table'>
          <table className='content-table'>
            <tr>
              <th>する (to do)</th>
              <th>くる (to come)</th>
            </tr>
          </table>
        </div>

        <div className='header'>
          <h1 className='adj-conjugation-head'>Verb Conjugation</h1>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Verb
