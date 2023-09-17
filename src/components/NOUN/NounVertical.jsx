import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function NounVertical() {
  


  return (
    <div>
        
        <div></div>
        <NavLink className='node' exact to='/pos/noun/intro' activeClassName="active"><div className='node-content'>NOUN</div></NavLink>
        
       
        <NavLink className='node' exact to='/pos/noun/numbers' activeClassName="active"><div className='node-content'>Numbers</div></NavLink>
      
        
        <NavLink className='node' exact to='/pos/noun/time' activeClassName="active"><div className='node-content'>Time</div></NavLink>


        <NavLink className='node' exact to='/pos/noun/counters' activeClassName="active"><div className='node-content'>Counters</div></NavLink>


        <NavLink className='node' exact to='/pos/noun/family-words' activeClassName="active"><div className='node-content'>Family Words</div></NavLink>
       
    </div>
  )
}

export default NounVertical