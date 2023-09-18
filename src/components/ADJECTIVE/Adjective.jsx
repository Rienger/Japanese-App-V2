import React from 'react'
// import { useNavigate } from 'react-router-dom'
import chihiro from '../../images/chihiro-final.jpg'
import chihiroAudio from '../../audio/spirited-away-final.mp3'


function Adjective() {
  let audio1 = new Audio(chihiroAudio)

  const start = () => {
    audio1.play()
    audio1.volume = 0.7
  }

  return (
    <div className='inner-background'>
      <div className='adj-parent'>
        <header className='header'>
          <img
            onClick={start}
            src={chihiro}
            width='150px'
            height='auto'
            alt='chihiro'
          ></img>
          <h1>2 TYPES OF ADJECTIVES</h1>
          <p className='adv-p'>
            You’ll need to learn a bit of Japanese grammar with these
            adjectives, but I’ve saved that for the end. For now, as you look
            over these words, pay attention to which ones end in い and which
            ones end in な. These are the two main types of Japanese adjectives,
            and we’ll discuss how to use each one.
          </p>
        </header>

        <div className='adj-header'>
          <h1>い ADJECTIVE</h1>
          <h3>these are adjectives that ends with い</h3>
        </div>

        <div className='adj-table'>
          <table className='adj-content-table'>
            <tr>
              <th>よい (good)</th>
              <th>たのしい (fun)</th>
              <th>たかい (expensive)</th>
              <th>おいしい (delicious)</th>
            </tr>
            <tr>
              <th>はやい (fast / early)</th>
              <th>まずい (disgusting)</th>
              <th>あまい (sweet)</th>
              <th>いそがしい (busy)</th>
            </tr>
            <tr>
              <th>かしこい (clever)</th>
              <th>つまらない (boring)</th>
              <th>おそい (slow / late)</th>
              <th>さむい (cold)</th>
            </tr>
          </table>
        </div>

        <div className='adj-header'>
          <h1>な ADJECTIVE</h1>
          <h3>
            these are adjectives that ends with な when directly used to
            describe a noun
          </h3>
        </div>

        <div className='adj-table'>
          <table className='adj-content-table'>
            <tr>
              <th>しずか な (quiet)</th>
              <th>せいじつ な (honest / sincere)</th>
              <th>しんせつ な (kind)</th>
              <th>まじめ な (serious)</th>
            </tr>
            <tr>
              <th>ゆうかん な (brave)</th>
              <th>よわむし な (weak)</th>
              <th>いじわる な (mean)</th>
              <th>べんり な (convenient)</th>
            </tr>
            <tr>
              <th>しゃこうてき な (sociable)</th>
              <th>きれい な (pretty / clean)</th>
              <th>すき な (like)</th>
              <th>きらい な (dislike)</th>
            </tr>
          </table>
        </div>

        <div className='adj-header'>
          <h1>SOME EXCEPTIONS</h1>

          <h3>
            these are い ending adjectives but are considered as な-adjective
            -AND- there are adjectives that can be used as both い and
            な-adjective
          </h3>
        </div>

        <div className='adj-table'>
          <table className='adj-content-table'>
            <tr>
              <th>い ending but considered as な</th>
              <th>きれい (beautiful / clean)</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>can be used both as い and な</th>
              <th>おおきい (big)</th>
              <th>ちいさい (small)</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th>おおきい な(big)</th>
              <th>ちいさい な(small)</th>
              <th></th>
            </tr>
          </table>
        </div>

        <div className='adj-conjugation'>
          <div className='header'>
            <h1 className='adj-conjugation-head'>Adjective Conjugation</h1>
          </div>

          <div className='adj-header'>
            <h1>い Adjective</h1>
            <h3>negative form</h3>
            <p>replace the last letter い with くない</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>おおきい (big)</th>
                <th>→ おおき くない (not big) </th>
              </tr>
              <tr>
                <th>あつい (hot)</th>
                <th>→ あつ くない (not hot) </th>
              </tr>
              <tr>
                <th>たかい (expensive)</th>
                <th>→ たか くない (not expensive)</th>
              </tr>
            </table>
          </div>

          <div className='adj-header'>
            <h3>past form</h3>
            <p>replace the last letter い with かった</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>おおきい (big)</th>
                <th>→ おおき かった (was big)</th>
              </tr>
              <tr>
                <th>あつい (hot)</th>
                <th>→ あつ かった (was hot)</th>
              </tr>
              <tr>
                <th>たかい (expensive)</th>
                <th>→ たか かった (was expensive)</th>
              </tr>
            </table>
          </div>

          <div className='adj-header'>
            <h3>past negative form</h3>
            <p>replace the last letter い with くなかった</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>おおきい (big)</th>
                <th>→ おおき くなかった (was not big)</th>
              </tr>
              <tr>
                <th>あつい (hot)</th>
                <th>→ あつ くなかった (was not hot)</th>
              </tr>
              <tr>
                <th>たかい (expensive)</th>
                <th>→ たか くなかった (was not expensive)</th>
              </tr>
            </table>
          </div>

          <div className='adj-header'>
            <h1>な Adjective</h1>

            <h3>negative form</h3>
            <p>simply add じゃない</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>すき (like)</th>
                <th>→ すき じゃない (do not like) </th>
              </tr>
              <tr>
                <th>しずか (quiet)</th>
                <th>→ しずか じゃない(not quiet) </th>
              </tr>
              <tr>
                <th>しんせつ (kind)</th>
                <th>→ しんせつ じゃない(not kind)</th>
              </tr>
            </table>
          </div>

          <div className='adj-header'>
            <h3>past form</h3>
            <p>simply add でした</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>すき (like)</th>
                <th>→ すき でした (liked)</th>
              </tr>
              <tr>
                <th>しずか (quiet)</th>
                <th>→ しずか でした (was quiet)</th>
              </tr>
              <tr>
                <th>しんせつ (kind)</th>
                <th>→ しんせつ でした (was kind)</th>
              </tr>
            </table>
          </div>

          <div className='adj-header'>
            <h3>past negative form</h3>
            <p>simply add じゃなかった</p>
          </div>

          <div className='adj-table'>
            <table className='adj-content-table'>
              <tr>
                <th>すき (like)</th>
                <th>→ すき じゃなかった (did not like)</th>
              </tr>
              <tr>
                <th>しずか (quiet)</th>
                <th>→ しずか じゃなかった (was not quiet)</th>
              </tr>
              <tr>
                <th>しんせつ (kind)</th>
                <th>→ しんせつ じゃなかった (was not kind)</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adjective
