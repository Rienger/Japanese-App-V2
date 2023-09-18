import React, {useState} from 'react'
import kaguya from '../images/story-kaguya.jpg'
// import urashima from '../images/story-urashima.jpg'
import storyContent from '../story-content'
import Storyline from './StoryLine';

function ReadingUpdate(){

    const [counter, setCounter] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [translate, setTranslate] = useState()
    
    function showContent(){
        setToggle(!toggle)
        setTranslate(false)    
    }

    function showTranslation(e){      
        setCounter(!counter)
        setTranslate(e.currentTarget.id)    
    }

    return (<div className='inner-background'>

    
    <header className='header'>
        <h1>Reading Practice</h1>
        <p className='adv-p'>A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.</p>
    </header>


    <div className='story'>
        <h1>かぐや ひめ</h1>
        <img onClick={showContent} src={kaguya} alt='img'></img>   
        <div className={`story-content ${toggle && 'show-content'}`}>          

            {storyContent.map(function(item){
                return <Storyline 
                    japaneseStory = {item.japaneseKaguya}
                    englishStory = {item.englishKaguya}
                    showTranslation = {showTranslation}
                    translate = {translate}
                    counter = {counter}
                    id = {item.id}
                />
            })}         
            
        </div>
       
       
    </div>




    {/* <div className='story'>
        <h1>うらしま たろ</h1>
        <img onClick={showContent} src={urashima} alt='img'></img>   
        <div className={`story-content ${toggle && 'show-content'}`}>          

            {storyContent.map(function(item){
                return <Storyline 
                    japaneseStory = {item.japaneseUrashima}
                    englishStory = {item.englishUrashima}
                    showTranslation = {showTranslation}
                    translate = {translate}
                    counter = {counter}
                    id = {item.id}
                />
            })}         
            
        </div>
       
       
    </div> */}



    </div>
    )
}


export default ReadingUpdate;