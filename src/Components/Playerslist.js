import React from 'react'
import players from '../data/players'
import Playerscard from './Playerscard'


const Playerslist = () => {
  console.log(players)
    return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', marginTop:'200px', justifyContent:'space-around'}} >
{
    players.map((player) =>
    <Playerscard player={player} key={players.id} />
    )
    
    
}
    </div>
  )
}

export default Playerslist