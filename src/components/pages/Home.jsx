// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }
import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/admin/log">Login</Nav.Link>
            <Nav.Link as={Link} to="/admin/reg">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>LOGO</div>
    </div>
  )
}