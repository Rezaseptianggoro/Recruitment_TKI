import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class DetailUser extends Component {
  
  render() {
    return (
      <div>
        <Container>
          <Link to={"/"}>
            <Button color="dark" className="mr-2 mb-3">
              Back
            </Button>
          </Link>
          <h1>Detail User</h1>
        </Container>
      </div>
    )
  }
}
