import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import familyGuyImage from '../../../../../ImagesVideos/FamilyGuy/family guy image.png'
import S1E1 from '../../../../../ImagesVideos/FamilyGuy/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const familyGuyEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Death Has a Shadow
      </p>
    </div>
    <div>
      <img src={familyGuyImage} />
      <div className="descriptionField">
        <p>
        The November 14 episode of the American animated comedy <br></br>Family Guy, “Baby, You Knock Me Out,” features a <br></br>brief bit poking fun at anime. In the episode, <br></br>protagonist Peter tries to convince his wife Lois<br></br> not to quit boxing, saying that they’re <br></br>making money, which he needs “for bourbon and <br></br>anime.”
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/family-guy/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/family-guy/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/family-guy/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/family-guy/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/family-guy/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/family-guy/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/family-guy/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/family-guy/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/family-guy/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/family-guy/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/family-guy/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/family-guy/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/family-guy/episode-13">Episode 13</Link><br/>
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

export default familyGuyEpisode1
