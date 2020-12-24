import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import courageTheCowardlyDogImage from '../../../../../ImagesVideos/CourageTheCowardlyDog/Courage The Cowardly Dog image.png'
import S1E1 from '../../../../../ImagesVideos/CourageTheCowardlyDog/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const courageTheCowardlyDogEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: A Night at the Katz Motel
      </p>
    </div>
    <div>
      <img src={courageTheCowardlyDogImage} />
      <div className="descriptionField">
        <p>
        Courage the Cowardly Dog follows a dog named Courage, an <br></br>overly-frightened canine who lives in a farmhouse <br></br>with Muriel and Eustace near the fictional town <br></br>of Nowhere, Kansas. Abandoned as a puppy, Courage <br></br>was adopted by Muriel Bagge, a sweet-natured <br></br>Scottish woman, and her husband, Eustace, a <br></br>grumpy, greedy farmer who harasses Courage with a <br></br>large, bright green, bug-eyed mask, while saying, “Ooga <br></br>Booga Booga!” Courage, Eustace, and Muriel Bagge <br></br>constantly run into monsters, aliens, demons, mad <br></br>scientists, zombies, and other perils that <br></br>Courage must fend off to save his owners. Most of the <br></br>creatures Courage, Eustace and Muriel face are <br></br>scary or creepy, but they also can be sweet or in <br></br>distress.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/courage-the-cowardly-dog/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/courage-the-cowardly-dog/episode-13">Episode 13</Link><br/>
        </div>
      </NavDropdown>
      <Link to="/playlists" className="btn btn-primary playlistButton" style={buttonStyle}>Playlists</Link>
      {/* <NavDropdown title={
        <span className="addToPlaylist">Add to playlist</span>
      }
      id="nav-dropdown"
      className="playListDropdown">
        <output
          className="playListOutputBox"
          type="text"
        />
        <div className="insidePlayList">
          <button>Create Playlist +</button>
          <input
            placeholder="name of playlist"
          />
          <button type="submit" className="createPlaylistButton" style={buttonStyle}></button>
          <button className="cancelPlaylistButton" style={buttonStyle}></button>
        </div>
      </NavDropdown> */}
    </div>
  </div>
)

export default courageTheCowardlyDogEpisode1
