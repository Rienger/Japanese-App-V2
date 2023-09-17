import React, {useState} from 'react'
import levi from '../images/levi-final.jpg'
import leviSound1 from '../audio/shingeki.mp3'
import leviSound2 from '../audio/levi-sound.mp3'
import leviSound3 from '../audio/giveup.mp3'
import content from '../content'
import Table from './Table'

function Header(props){

    const [input, setInput] = useState('')
   
   let audio1 = new Audio(leviSound1)
   let audio2 = new Audio(leviSound2)
   let audio3 = new Audio(leviSound3)

   const soundArray = [audio1,  audio2, audio3]

   const start = () => {
       soundArray[Math.floor(Math.random()*3)].play()
       audio1.volume = 0.3
       audio2.volume = 0.6
       audio3.volume = 1

       props.backgroundToggle()
   }


   function filterInput(e){
        setInput(e.target.value)
   }

   const filter = content.filter(item =>     
        Object.values(item).join('').toLowerCase().includes(input.toLowerCase())   
    )
    

    return(
        <div>
            <div className='header'>
            <img onClick={start} src={levi} width='150px' height='auto' alt='levi'></img>
            <h1>さいこう の きりつ わ いたみだ と おもいます</h1>
            <input placeholder='search word...' onChange={filterInput}></input>
            </div>


            
            {filter.map((content) => (
            
            <Table day = {content.day}

                nihongo1 = {content.nihongo1}
                nihongo2 = {content.nihongo2}
                nihongo3 = {content.nihongo3}
                nihongo4 = {content.nihongo4}
                nihongo5 = {content.nihongo5}
                nihongo6 = {content.nihongo6}
                nihongo7 = {content.nihongo7}
                nihongo8 = {content.nihongo8}
                nihongo9 = {content.nihongo9}
                nihongo10 = {content.nihongo10}

                english1 = {content.english1}
                english2 = {content.english2}
                english3 = {content.english3}
                english4 = {content.english4}
                english5 = {content.english5}
                english6 = {content.english6}
                english7 = {content.english7}
                english8 = {content.english8}
                english9 = {content.english9}
                english10 = {content.english10}

                
            />
        ))}
        </div>
    )
}


export default Header;