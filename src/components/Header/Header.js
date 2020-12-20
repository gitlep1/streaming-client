import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password" className="changePasswordStyle">Change Password</Nav.Link>
    <Nav.Link href="#sign-out" className="signOutStyle">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    {/* <Nav.Link href="#sign-up" className="signUpStyle">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" className="signInStyle">Sign In</Nav.Link> */}
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar expand="md" varient="dark" className="navbarStyle">
    <Navbar.Brand href="#Homepage" className="homeStyle">
    Cartoon Streaming
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="mr-5 welcomeStyle">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
        {/* { guest && <span className="mr-5 welcomeStyle">Welcome, {guest}</span>}
        { guest ? authenticatedOptions : unauthenticatedOptions } */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
