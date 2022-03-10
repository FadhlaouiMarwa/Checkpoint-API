import React from 'react'
import {Card} from 'react-bootstrap'
function UserCard({user}) {
  return (
    <div >
      <Card style={{ width: '18rem', height:'15rem' }}>
  <Card.Body>
    <Card.Title style={{color:"#3CF7E9" }}>Name:  {user.name}</Card.Title>
    <Card.Text>
     UserName:  {user.username}
    </Card.Text>
    <Card.Text>
     Email:  {user.email}
    </Card.Text>
    <Card.Text>
    Phone:   {user.phone}    </Card.Text>
    <Card.Text>Website:  {user.website} </Card.Text>

  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard