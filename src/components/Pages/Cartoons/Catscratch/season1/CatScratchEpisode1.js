import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import catScratchImage from '../../../../../ImagesVideos/CatScratch/catscratch image.webp'
import S1E1 from '../../../../../ImagesVideos/CatScratch/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const catScratchEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: To the Moon
      </p>
    </div>
    <div>
      <img src={catScratchImage} />
      <div className="descriptionField">
        <p>
        When their owner passes away, three cats, who brothers who <br></br>don’t resemble each other, inherits a large <br></br>amount of fortune along with a giant mansion and a very <br></br>sarcastic butler named Hovis.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/catscratch/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/catscratch/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/catscratch/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/catscratch/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/catscratch/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/catscratch/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/catscratch/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/catscratch/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/catscratch/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/catscratch/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/catscratch/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/catscratch/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/catscratch/episode-13">Episode 13</Link><br/>
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

export default catScratchEpisode1
