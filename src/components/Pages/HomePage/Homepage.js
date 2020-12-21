import React from 'react'
import { Link } from 'react-router-dom'

import edEddEddyImage from '../../../ImagesVideos/Ed-Edd-N-Eddy-crazy-faces.png'

import './Homepage.scss'

const homePage = () => (
  <div>
    <Link to="/cartoons" className="btn btn-secondary cartoonsList">{'Cartoons List ->'}</Link>
    <Link to="/cartoons/ed-edd-eddy/episode-1" className="btn btn-primary edEddEddyLink">Ed Edd Eddy
      <img src={edEddEddyImage} className="edEddEddyimage" />
    </Link>
    <Link to="/cartoons/courage-the-cowardly-dog/episode-1">Courage The Cowardly Dog</Link>
    <Link to="/cartoons/avatar-the-last-air-bender/episode-1">Avatar The Last Air Bender</Link>
  </div>
)

export default homePage
