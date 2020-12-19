import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import './Homepage.scss'
import edEddEddyImage from '../../../ImagesVideos/Ed-Edd-N-Eddy-crazy-faces.png'

const Homepage = () => (
  <div>
    <div className="edEddEddyContent">
      <img className="edEddEddyImage" src={edEddEddyImage} />
      <NavDropdown title={
        <span className="edEddEddyTitle">Ed Edd Eddy</span>
      }
      id="nav-dropdown"
      className="edEddEddyDropdown">
        <div className="edEddEddyEpisodes">
          <Link to="/ed-edd-eddy/episode-1">Episode 1</Link><br/>
          <Link to="/ed-edd-eddy/episode-2">Episode 2</Link><br/>
          <Link to="/ed-edd-eddy/episode-3">Episode 3</Link><br/>
          <Link to="/ed-edd-eddy/episode-4">Episode 4</Link><br/>
          <Link to="/ed-edd-eddy/episode-5">Episode 5</Link><br/>
        </div>
      </NavDropdown>
    </div>
  </div>
)

export default Homepage
