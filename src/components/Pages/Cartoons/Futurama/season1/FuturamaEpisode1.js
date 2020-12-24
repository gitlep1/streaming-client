import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import futuramaImage from '../../../../../ImagesVideos/Futurama/futurama image.png'
import S1E1 from '../../../../../ImagesVideos/Futurama/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const futuramaEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Space Pilot 3000
      </p>
    </div>
    <div>
      <img src={futuramaImage} />
      <div className="descriptionField">
        <p>
        Futurama is an American animated science fiction sitcom <br></br>created by Matt Groening and developed by <br></br>Groening and David X. Cohen for the Fox Broadcasting <br></br>Company. The series follows the adventures of a <br></br>late 20th-century New York City pizza delivery <br></br>boy, Philip J. Fry, who, after being unwittingly <br></br>cryogenically frozen for a thousand years, finds <br></br>employment at Planet Express, an interplanetary <br></br>delivery company in the retro-futuristic 31st <br></br>century. The series was envisioned by Groening in<br></br> the 1990s while working on The Simpsons, later<br></br> bringing Cohen aboard to develop storylines <br></br>and characters to pitch the show to Fox.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/futurama/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/futurama/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/futurama/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/futurama/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/futurama/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/futurama/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/futurama/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/futurama/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/futurama/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/futurama/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/futurama/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/futurama/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/futurama/episode-13">Episode 13</Link><br/>
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

export default futuramaEpisode1
