import React from 'react'
import Verify from './Verify'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
import Display from './Display'
import Flashcard from './Flashcard'
import Card from './Card'
import Random from './Random'
import Reading from './Reading'
import Home from './Home'
import Challenge from './Challenge'
import Quotes from './Quotes'
import Kana from './Kana'
import Partsofspeech from './Partsofspeech'
import ScrollToTop from './ScrollToTop'

import Noun from './NOUN/Noun'
import Numbers from './NOUN/Numbers'
import Time from './NOUN/Time'
import Counters from './NOUN/Counters'
import FamilyWords from './NOUN/FamilyWords'

import Verb from './VERB/Verb'

import Adjective from './ADJECTIVE/Adjective'

import Adverb from './ADVERB/Adverb'

import Kanji from './KANJI/Kanji'
import KanaTest from './KanaTest'
import Navbar from './NAVBAR/Navbar'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* <Route path='/' element={<Verify />}></Route> */}

          {/* <Route path='/home' element={<Home />}></Route> */}

          <Route path='/' element={<Home />}></Route>
          <Route path='/table' element={<Display />}></Route>
          <Route path='/flashcard' element={<Flashcard />}></Route>
          <Route path='/card' element={<Card />}></Route>
          <Route path='/random' element={<Random />}></Route>
          <Route path='/reading' element={<Reading />}></Route>
          <Route path='/challenge' element={<Challenge />}></Route>

          <Route path='/kana' element={<Kana />}></Route>
          <Route path='/kana/test' element={<KanaTest />}></Route>

          <Route path='/quotes' element={<Quotes />}></Route>
          <Route path='/pos' element={<Partsofspeech />}></Route>

          <Route path='/pos/noun/intro' element={<Noun />}></Route>
          <Route path='/pos/noun/numbers' element={<Numbers />}></Route>
          <Route path='/pos/noun/time' element={<Time />}></Route>
          <Route path='/pos/noun/counters' element={<Counters />}></Route>
          <Route
            path='/pos/noun/family-words'
            element={<FamilyWords />}
          ></Route>

          <Route path='/pos/verb' element={<Verb />}></Route>

          <Route path='/pos/adjective' element={<Adjective />}></Route>

          <Route path='/pos/adverb' element={<Adverb />}></Route>

          <Route path='/kanji' element={<Kanji />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
