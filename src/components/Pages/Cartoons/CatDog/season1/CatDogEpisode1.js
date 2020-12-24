import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import catDogImage from '../../../../../ImagesVideos/CatDog/catdog image.png'
import S1E1 from '../../../../../ImagesVideos/CatDog/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const catDogEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Dog Gone / All You Can’t Eat
      </p>
    </div>
    <div>
      <img src={catDogImage} />
      <div className="descriptionField">
        <p>
        The life and times of a cat and a dog with a unique twist:<br></br> they’re connected, literally. They share <br></br>one body with Dog’s head at one end and Cat’s <br></br>head on the other. Adding to their dilemma is <br></br>Cat’s annoyance with Dog, mainly caused by Dog’s <br></br>stupidity and Cat’s up-tight personality. Written <br></br>by James Delphi
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/catdog/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/catdog/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/catdog/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/catdog/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/catdog/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/catdog/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/catdog/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/catdog/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/catdog/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/catdog/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/catdog/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/catdog/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/catdog/episode-13">Episode 13</Link><br/>
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

export default catDogEpisode1
