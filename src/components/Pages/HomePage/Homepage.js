import React from 'react'
import { Link } from 'react-router-dom'

import americanDadImage from '../../../ImagesVideos/American Dad/american dad image.png'
import avatarTheLastAirBenderImage from '../../../ImagesVideos/Avatar The Last Airbender/avatar the last airbender image.png'
import brickleBerryImage from '../../../ImagesVideos/Brickleberry/brickleberry image.webp'
import catDogImage from '../../../ImagesVideos/CatDog/catdog image.png'
import catScratchImage from '../../../ImagesVideos/Catscratch/catsctrach image.webp'
import courageTheCowardlyDogImage from '../../../ImagesVideos/CourageTheCowardlyDog/Courage The Cowardly Dog image.png'
import edEddEddyImage from '../../../ImagesVideos/EdEddEddy/ed edd eddy image.png'
import familyGuyImage from '../../../ImagesVideos/Family Guy/family guy image.png'

import './Homepage.scss'

const homePage = () => (
  <div>
    <Link to="/cartoons" className="btn btn-secondary cartoonsList">{'Cartoons List ->'}</Link>
    <Link to="/cartoons/american-dad/episode-1" className="btn btn-primary americanDadLink" >American Dad
      <img src={americanDadImage} className="americanDadImage" />
    </Link>
    <Link to="/cartoons/avatar-the-last-air-bender/episode-1" className="btn btn-primary avatarTheLastAirBenderLink" >Avatar The Last Air Bender
      <img src={avatarTheLastAirBenderImage} className="avatarTheLastAirBenderImage" />
    </Link>
    <Link to="/cartoons/brickleberry/episode-1" className="btn btn-primary brickleBerryLink" >Brickleberry
      <img src={brickleBerryImage} className="brickleBerryImage" />
    </Link>
    <Link to="/cartoons/catdog/episode-1" className="btn btn-primary catDogLink" >CatDog
      <img src={catDogImage} className="catDogImage" />
    </Link>
    <Link to="/cartoons/catscratch/episode-1" className="btn btn-primary catScratchLink" >Catscratch
      <img src={catScratchImage} className="catScratchImage" />
    </Link>
    <Link to="/cartoons/courage-the-cowardly-dog/episode-1" className="btn btn-primary courageTheCowardlyDogLink" >Courage The Cowardly Dog
      <img src={courageTheCowardlyDogImage} className="courageTheCowardlyDogImage" />
    </Link>
    <Link to="/cartoons/ed-edd-eddy/episode-1" className="btn btn-primary edEddEddyLink">Ed Edd Eddy
      <img src={edEddEddyImage} className="edEddEddyImage" />
    </Link>
    <Link to="/cartoons/family-guy/episode-1" className="btn btn-primary familyGuyLink" >Family Guy
      <img src={familyGuyImage} className="familyGuyImage" />
    </Link>
  </div>
)

export default homePage
