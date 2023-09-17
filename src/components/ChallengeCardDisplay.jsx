import React from 'react'

function ChallengeCardDisplay(props) {
  return (
    <div>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600', color: props.warning && '#711029'}}>Day {props.day}</h1>
           

        <table className='content-table challenge-card' style={{backgroundColor: props.warning ? '#711029' : 'rgb(71, 69, 69)'}}>
                    {/* <thead>
                        <tr>                        
                            <th className='day-counter' colSpan='3'>{props.day}</th>                     
                        </tr>
                    </thead> */}

                    
                    <tr>
                        {/* <th className='number'>1</th> */}
                        <th>{props.nihongo1}</th>
                        <th>{props.english1}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>2</th> */}
                        <th>{props.nihongo2}</th>
                        <th>{props.english2}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>3</th> */}
                        <th>{props.nihongo3}</th>
                        <th>{props.english3}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>4</th> */}
                        <th>{props.nihongo4}</th>
                        <th>{props.english4}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>5</th> */}
                        <th>{props.nihongo5}</th>
                        <th>{props.english5}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>6</th> */}
                        <th>{props.nihongo6}</th>
                        <th>{props.english6}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>7</th> */}
                        <th>{props.nihongo7}</th>
                        <th>{props.english7}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>8</th> */}
                        <th>{props.nihongo8}</th>
                        <th>{props.english8}</th>
                    </tr>

                    <tr>
                        {/* <th className='number'>9</th> */}
                        <th>{props.nihongo9}</th>
                        <th>{props.english9}</th>
                    </tr>
                    
                    <tr>
                        {/* <th className='number'>10</th> */}
                        <th>{props.nihongo10}</th>
                        <th>{props.english10}</th>
                    </tr>

                    
                </table>
    </div>
    
  )
}

export default ChallengeCardDisplay