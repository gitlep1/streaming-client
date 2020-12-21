import React from 'react'
import { Link } from 'react-router-dom'

import './Firstpage.scss'

const Firstpage = () => (
  <div className="container">
    <p className="title">Streaming Cartoons</p>
    <Link to="/sign-up" className="signUp">Sign Up</Link>
    <Link to="/sign-in" className="signIn">Sign In</Link>
    <Link to="/homepage" className="guest">Sign in as guest</Link>
  </div>
)

export default Firstpage
