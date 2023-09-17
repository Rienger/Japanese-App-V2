import React from 'react'
import Navbar from './NAVBAR/Navbar'
import Footer from './Footer'
import hiragana from '../images/hiragana_chart.jpg'
import katakana from '../images/katakana_chart.jpg'
import { useNavigate } from 'react-router-dom'

function Kana() {
  const navigate = useNavigate()

  return (
    <div className='inner-background'>
      <div className='kana-parent'>
        <div className='kana-div'>
          <h1>LEARN YOUR HIRAGANA</h1>

          <iframe
            width='896'
            height='508'
            src='https://www.youtube.com/embed/6p9Il_j0zjc'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen='true'
          ></iframe>

          <img src={hiragana} width='900' alt='hiragana'></img>

          <button
            onClick={() => {
              navigate('/kana/test')
            }}
          >
            HIRAGANA TEST
          </button>
        </div>

        <div className='kana-div'>
          <h1>LEARN YOUR KATAKANA</h1>

          <iframe
            width='896'
            height='508'
            src='https://www.youtube.com/embed/s6DKRgtVLGA'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen='true'
          ></iframe>

          <img src={katakana} width='900' alt='katakana'></img>

          <button
            onClick={() => {
              navigate('/kana/test')
            }}
          >
            KATAKANA TEST
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Kana
