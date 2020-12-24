import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import brickleBerryImage from '../../../../../ImagesVideos/Brickleberry/brickleberry image.webp'
import S1E1 from '../../../../../ImagesVideos/Brickleberry/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const brickleBerryEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Welcome to Brickleberry
      </p>
    </div>
    <div>
      <img src={brickleBerryImage} />
      <div className="descriptionField">
        <p>
        The series follows a group of never-do-well forest rangers<br></br> who are facing the shut down of their <br></br>National Park when a new ranger arrives to help <br></br>transform them and save the park.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/brickleberry/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/brickleberry/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/brickleberry/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/brickleberry/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/brickleberry/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/brickleberry/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/brickleberry/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/brickleberry/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/brickleberry/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/brickleberry/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/brickleberry/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/brickleberry/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/brickleberry/episode-13">Episode 13</Link><br/>
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

export default brickleBerryEpisode1
