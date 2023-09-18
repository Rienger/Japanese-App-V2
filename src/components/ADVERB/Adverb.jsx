import React from 'react'
// import { useNavigate } from 'react-router-dom'
import howl from '../../images/howl.jpg'
import howlAudio from '../../audio/how-finale.mp3'


function Adverb() {
  let audio1 = new Audio(howlAudio)

  const start = () => {
    audio1.play()
    audio1.volume = 0.4
  }

  return (
    <div className='inner-background'>
   

      <header className='header'>
        <img
          onClick={start}
          src={howl}
          width='150px'
          height='auto'
          alt='howl'
        ></img>
        <h1>ADVERBS</h1>
        <p className='adv-p'>
          It’s impossible to explain something in detail without using adverbs.
          These are words which can efficiently express time, frequency, place,
          manner, degree, and more. When you want to boost your language skills,
          learning adverbs is important and inevitable.
        </p>
      </header>

      <h1 className='adv-head'>TIME</h1>
      <div className='table'>
        <table className='content-table'>
          <thead>
            <tr className='adv-header'>
              <th>Meaning</th>
              <th>Hiragana</th>
              <th>Reading</th>
            </tr>
          </thead>

          <tr>
            <th>today</th>
            <th>きょう</th>
            <th>kyou</th>
          </tr>

          <tr>
            <th>yesterday</th>
            <th>きのう</th>
            <th>kinou</th>
          </tr>

          <tr>
            <th>tomorrow</th>
            <th>あした</th>
            <th>ashita</th>
          </tr>

          <tr>
            <th>now</th>
            <th>いま</th>
            <th>ima</th>
          </tr>

          <tr>
            <th>later</th>
            <th>あと で</th>
            <th>ato de</th>
          </tr>

          <tr>
            <th>yet</th>
            <th>まだ</th>
            <th>mada</th>
          </tr>

          <tr>
            <th>recently</th>
            <th>さいきん</th>
            <th>saikin</th>
          </tr>
        </table>
      </div>

      <h1 className='adv-head'>FREQUENCY</h1>

      <div className='table'>
        <table className='content-table'>
          <thead>
            <tr className='adv-header'>
              <th>Meaning</th>
              <th>Hiragana</th>
              <th>Reading</th>
            </tr>
          </thead>

          <tr>
            <th>always</th>
            <th>いつも</th>
            <th>itsumo</th>
          </tr>

          <tr>
            <th>sometimes</th>
            <th>ときどき</th>
            <th>tokidoki</th>
          </tr>

          <tr>
            <th>often</th>
            <th>よく</th>
            <th>yoku</th>
          </tr>

          <tr>
            <th>rarely</th>
            <th>たまに</th>
            <th>tamani</th>
          </tr>

          <tr>
            <th>usually</th>
            <th>たいてい</th>
            <th>taitei</th>
          </tr>

          <tr>
            <th>everyday</th>
            <th>まいにち</th>
            <th>mainichi</th>
          </tr>

          <tr>
            <th>every week</th>
            <th>まいしゅう</th>
            <th>maishuu</th>
          </tr>

          <tr>
            <th>every year</th>
            <th>まいとし</th>
            <th>maitoshi</th>
          </tr>
        </table>
      </div>

      <h1 className='adv-head'>PLACE</h1>

      <div className='table'>
        <table className='content-table'>
          <thead>
            <tr className='adv-header'>
              <th>Meaning</th>
              <th>Hiragana</th>
              <th>Reading</th>
            </tr>
          </thead>

          <tr>
            <th>here</th>
            <th>ここ</th>
            <th>koko</th>
          </tr>

          <tr>
            <th>there</th>
            <th>そこ</th>
            <th>soko</th>
          </tr>

          <tr>
            <th>over there</th>
            <th>あそこ</th>
            <th>asoko</th>
          </tr>

          <tr>
            <th>somewhere</th>
            <th>どこか</th>
            <th>doko ka</th>
          </tr>

          <tr>
            <th>anywhere</th>
            <th>どこでも</th>
            <th>doko demo</th>
          </tr>
        </table>
      </div>

      <h1 className='adv-head'>MANNER</h1>

      <div className='table'>
        <table className='content-table'>
          <thead>
            <tr className='adv-header'>
              <th>Meaning</th>
              <th>Hiragana</th>
              <th>Reading</th>
            </tr>
          </thead>

          <tr>
            <th>slowly</th>
            <th>ゆっくり</th>
            <th>yukkuri</th>
          </tr>

          <tr>
            <th>fastly</th>
            <th>はやく</th>
            <th>hayaku</th>
          </tr>

          <tr>
            <th>quietly</th>
            <th>しずか に</th>
            <th>shizuka ni</th>
          </tr>

          <tr>
            <th>enjoyably</th>
            <th>たのしく</th>
            <th>tanoshiku</th>
          </tr>

          <tr>
            <th>strongly</th>
            <th>つよく</th>
            <th>tsuyoku</th>
          </tr>

          <tr>
            <th>easily</th>
            <th>かんたん に</th>
            <th>kantan ni</th>
          </tr>

          <tr>
            <th>conveniently</th>
            <th>べんり に</th>
            <th>benri ni</th>
          </tr>

          <tr>
            <th>cheaply</th>
            <th>やすく</th>
            <th>yasuku</th>
          </tr>
        </table>
      </div>

      <h1 className='adv-head'>DEGREE</h1>

      <div className='table'>
        <table className='content-table'>
          <thead>
            <tr className='adv-header'>
              <th>Meaning</th>
              <th>Hiragana</th>
              <th>Reading</th>
            </tr>
          </thead>

          <tr>
            <th>very</th>
            <th>とても</th>
            <th>totemo</th>
          </tr>

          <tr>
            <th>quite</th>
            <th>かなり</th>
            <th>kanari</th>
          </tr>

          <tr>
            <th>extremely</th>
            <th>すごく</th>
            <th>sugoku</th>
          </tr>

          <tr>
            <th>a little</th>
            <th>ちょっと</th>
            <th>chotto</th>
          </tr>

          <tr>
            <th>not much / not very</th>
            <th>あまり</th>
            <th>amari</th>
          </tr>
        </table>
      </div>

      <div>
        <header className='header'>
          <h1 className='adj-conjugation-head'>
            Transforming Adjective Into ADVERBS
          </h1>
          <p className='adv-p'>
            Changing an adjective to an adverb (slow → eat slowly) in Japanese
            is simple, although the rules differ between i-adjectives and
            na-adjectives. Ang ez naman nento, pang baby.
          </p>
        </header>

        <div className='table'>
          <table className='content-table'>
            <thead>
              <tr className='adv-header'>
                <th>i-adjective</th>
                <th>→→→</th>
                <th>adverb</th>
                <th></th>
                <th>na-adjective</th>
                <th>→→→</th>
                <th>adverb</th>
              </tr>
            </thead>

            <tr>
              <th className='adv-exp' colSpan='3'>
                simply replace i with ku
              </th>
              <th></th>
              <th className='adv-exp' colSpan='3'>
                simply replace na with ni
              </th>
            </tr>

            <tr>
              <th>やさしい</th>
              <th>→</th>
              <th>やさし く</th>

              <th></th>

              <th>きれい な</th>
              <th>→</th>
              <th>きれい に</th>
            </tr>

            <tr>
              <th>はやい</th>
              <th>→</th>
              <th>はやく</th>

              <th></th>

              <th>しずか な</th>
              <th>→</th>
              <th>しずか に</th>
            </tr>

            <tr>
              <th>あたらしい</th>
              <th>→</th>
              <th>あたらしく</th>

              <th></th>

              <th>べんり な</th>
              <th>→</th>
              <th>べんり に</th>
            </tr>

            <tr>
              <th>やさしい</th>
              <th>→</th>
              <th>やさしい く</th>

              <th></th>

              <th>せいじつ な</th>
              <th>→</th>
              <th>せいじつ に</th>
            </tr>

            <tr>
              <th>やわらかい</th>
              <th>→</th>
              <th>やわらかく</th>

              <th></th>

              <th>まじめ な</th>
              <th>→</th>
              <th>まじめ に</th>
            </tr>
          </table>
        </div>
      </div>

      <div>
        <h1 className='adv-head'>Sample Sentence</h1>
      </div>

    </div>
  )
}

export default Adverb
