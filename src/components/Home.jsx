import React from 'react'

import Footer from './Footer'
import studyImage from '../images/study.jpg'

function Home() {
  return (
    <div className='home-component'>
      <div className='home-body container'>
        <div className='home-mission'>
          <h1>Yana Nihongo</h1>

          <p className='w-4/5 mx-auto'>
            The goal of Yana Nihongo is to be able to provide study resources
            and introduce challenges to make learning more fun and interactive.
            We desire to lay the main foundation of your Japanese learning
            framework and also impart guides on how to start as a beginner.
          </p>
          {/*  */}
        </div>

        <div className=' w-3/4 mx-auto'>
          <h2 className='font-bold mt-16 mb-5 text-xl'>
            I WANT TO LEARN JAPANESE!
          </h2>

          <p>
            If you follow the instructions in this over the top, step-by-step
            guide, you will reach your goal of Japanese fluency.
          </p>

          <p>
            But you'll have to put in a lot of time and effort to make this
            journey successful. Anyone who claims that picking up a new language
            will be simple is either mistaken or trying to sell you something.
            Progress eventually feels slower once the initial excitement of
            learning wears off. Burnout occurs. The fan blows up. You understand
            exactly what I'm talking about if you've ever tried to learn
            something new.
          </p>

          <p>
            Instead, you need to do things the hard way (i.e. the correct way)
            right from the start.
          </p>
          <div className=' w-6/7 mx-auto mt-5'>
            <img
              src={studyImage}
              alt='benkyou'
              className='rounded-md mx-auto'
            ></img>
          </div>

          <h2 className='font-bold mt-4 mb-5 text-xl'>
            JUST BECAUSE WE'RE DOING IT RIGHT DOESN'T MEAN IT HAS TO BE
            INEFFICIENT.
          </h2>

          <p>
            This method for learning Japanese starts at the very beginning. I
            assume you have zero knowledge of the Japanese language and guide
            you through each step. I'll cover reading, writing, speaking, and
            listening. And we explain what you should use, when, and why.
          </p>

          <p>
            This should be everything you need to progress, that way you don't
            use all of that fresh enthusiasm you're feeling on planning how to
            learn, and instead spend it on actual learning.
          </p>

          <p>
            Our goal is to reach Japanese fluency as directly as possible.
            Unlike a teacher or a textbook, we have the freedom to be ruthless
            in the path we take to get there.
          </p>

          <h2 className='font-bold mt-16 mb-5 text-xl'>
            ZERO KNOWLEDGE OF JAPANESE
          </h2>

          <p>
            Welcome to learning Japanese! This section is for the true beginner.
            You know little-to-no Japanese. Maybe a "konnichiwa" here and a
            "baka" there. These first steps you take are especially important
            because they're going to set a foundation you can build off of.
          </p>

          <p>
            The more deliberate your steps, the easier everything that follows
            will be.
          </p>

          <p>
            Carefully completing this section is going to be necessary if you
            want to avoid the thing that takes down most learners: the
            intermediate wall. Instead, take your time on these foundational
            steps. What feels slow now is actually speed later on.
          </p>
        </div>
        <div className='home-summary'>
          {/* <div className='home-summary-banner'>
              
              <p>STEPS to FOLLOW</p>
              <img src='http://assets.stickpng.com/images/58582c01f034562c582205ff.png' alt='' 
              style={{opacity: '1', height: '270px'}}></img>
              </div> */}

          <div className='w-3/4 mx-auto pt-10'>
            <div className='home-summary-component '>
              <h2 className='font-bold mt-16 mb-5'>Hiragana</h2>
              <p>
                The ability to read hiragana is going to be a prerequisite for
                most beginner Japanese textbooks and resources. It's the first
                thing you learn in a traditional classroom. Surprisingly, I
                agree with everyone else. This is a good place to start.
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>Katakana</h2>
              <p>
                Katakana tends to give learners more trouble than hiragana. This
                is because it seems to be used less than hiragana and kanji,
                especially at the beginning stages. Later on, katakana will
                appear more frequently, but for now simply being able to read
                katakana is enough.
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>5000 Vocabulary</h2>
              <p>What Is The Magic Vocabulary Number?</p>
              <p>
                When you think about the rather small amount of words that are
                needed on a day to day basis for communication, you begin to
                realize that fluency is vastly different from an adult level
                command of a native language.
              </p>
              <p>
                Think about a four year old kid who can communicate with friends
                and family with few problems. They know approximately 5,000
                words [source] and even though they still make the occasional
                grammar mistake, for all intents and purposes they are fluent!
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>Parts of Speech</h2>
              <p>
                Most people go into a textbook with zero knowledge and wind up
                spending a large chunk of their time looking up words they don't
                know. How much of a sentence is vocabulary? Depending on the
                length, it's easy to answer "more than 80%."
              </p>
              <p>
                So when you're learning grammar with a textbook, coming into it
                with prior vocabulary knowledge knowing <span>nouns</span>,{' '}
                <span>verbs</span>, <span>adjectives</span>,{' '}
                <span>adverbs</span> and its <span>conjugation</span> brings you
                to that 80%.
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>Sentence Structure</h2>
              <p>
                Most people find Japanese sentence structure to be difficult and
                confusing. This is completely understandable considering how
                fundamentally different it is to other languages, but the truth
                is that Japanese grammar is actually incredibly logical, it just
                needs to be looked at from the right angle.
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>2000 Kanji</h2>
              <p>
                The most difficult thing about learning Japanese is kanji. At
                least, that's what people say. But trying to save it or brush it
                off until later isn't going to help you learn Japanese. Almost
                everything uses kanji, making it one of the most important
                aspects of learning this language. Your learning quality of life
                will drop drastically if you choose to ignore it.
              </p>

              <p>
                The jōyō kanji is the guide to kanji characters and their
                readings, announced officially by the Japanese Ministry of
                Education.
              </p>

              <p>The 2,136 kanji in the jōyō kanji consist of:</p>

              <p>
                <ul>
                  <li>1,026 kanji taught in primary school (Grade 1-6)</li>
                  <li>
                    1,110 additional kanji taught in secondary school (Grade
                    7-12)
                  </li>
                </ul>
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>Reading & Listening</h2>
              <p>
                As the old saying goes: If you can’t go to Japan, you’ll just
                have to bring Japan to you.
              </p>

              <p>
                I cannot emphasize of how important reading and listening is, in
                learning Japanese as it greatly expands your knowledge of the
                language faster. Either by listening to your favorite Japanese
                music or watching the latest anime. Make sure to make your
                learning journey interesting so it doesn't feel like a chore.
              </p>
            </div>

            <div className='home-summary-component'>
              <h2 className='font-bold mt-16 mb-5'>Speaking</h2>
              <p>
                By finding opportunities to speak Japanese every day, you can
                make sure that you’re able to reach or retain a high standard of
                fluency.
              </p>

              <p>
                Of course, you might think that it’s easier said than done—if
                so, good news! With a bit of careful planning, you can still
                have an active Japanese-speaking life, no matter where you are
                in the world from Luzon, Visayas to Mindanao.
              </p>

              <p>
                Thanks to our good friend 'technology', application exists that
                enables you to practice your speaking ability by conversing with
                native speakers without charge. Presenting the ultimate
                application <span>Hello Talk</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
