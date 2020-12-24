import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import liloAndStitchImage from '../../../../../ImagesVideos/LiloAndStitch/lilo and stitch image.png'
import S1E1 from '../../../../../ImagesVideos/LiloAndStitch/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const liloAndStitchEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Richter
      </p>
    </div>
    <div>
      <img src={liloAndStitchImage} />
      <div className="descriptionField">
        <p>
        Continuing where Stitch! The Movie left off, Lilo and <br></br>Stitch are given the task of collecting the rest <br></br>of Jumba’s missing experiments, changing them <br></br>from bad to good, and finding the one place where <br></br>they truly belong. Meanwhile, the former Captain <br></br>Gantu and his reluctant partner, Experiment 625 <br></br>(later named Reuben), try to capture the <br></br>experiments for the imprisoned Dr. Hämsterviel.<br></br>
        Running for two seasons, it had a total of 65 episodes. <br></br>The storyline of The Series concluded with the <br></br>Disney Channel broadcast of the television film <br></br>Leroy and Stitch on June 23, 2006.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/lilo-and-stitch/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/lilo-and-stitch/episode-13">Episode 13</Link><br/>
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

export default liloAndStitchEpisode1
