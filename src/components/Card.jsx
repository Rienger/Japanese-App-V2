import React from 'react'
import ReactCardFlip from 'react-card-flip'



function Card(props){ 

    

    return (
        <ReactCardFlip isFlipped={props.activating} flipDirection={'vertical'} flipSpeedFrontToBack='0.45' flipSpeedBackToFront='0.45' >
            <div>
                
                <div onClick={props.flip} className='flashcard-display'>
                <p>{}</p>
                <h1>{props.front}</h1>
                </div>  
                  
            </div>

            <div>
                <h1 onClick={props.flip} className='flashcard-display'>{props.back}</h1>         
            </div>
        </ReactCardFlip>
    )
}



export default Card
