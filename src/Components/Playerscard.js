import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Playerscard = ({player}) => {
  return (
    <div >
    <Card style={{ width: '18rem' , marginBottom:'20px' }}>
    <Card.Img variant="top" src={player.plimg} />
    <Card.Body>
      <Card.Title>{player.plname}</Card.Title>
      <Card.Text>
       {player.plnationality}
      </Card.Text>
      
    </Card.Body>
  </Card></div>
  )
}

export default Playerscard