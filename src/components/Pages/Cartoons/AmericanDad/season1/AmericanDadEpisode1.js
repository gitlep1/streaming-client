import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import americanDadImage from '../../../../../ImagesVideos/AmericanDad/american dad image.png'
import S1E1 from '../../../../../ImagesVideos/AmericanDad/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const americanDadEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: Pilot
      </p>
    </div>
    <div>
      <img src={americanDadImage} />
      <div className="descriptionField">
        <p>
        American Dad! is an American animated television series<br></br> created by Seth MacFarlane and owned by <br></br>Underdog Productions and Fuzzy Door Productions. <br></br>It is produced in association with 20th Century <br></br>Fox Television. Creators and main directors, <br></br>MacFarlane (creator of Family Guy) as well as two <br></br>former Family Guy writers, Mike Barker and Matt <br></br>Weitzman aired the pilot episode in the United <br></br>States on Fox on February 6, 2005, thirty minutes <br></br>after the end of Super Bowl XXXIX; the regular <br></br>series began May 1, 2005, after the season <br></br>premiere of Family Guy. American Dad! follows the <br></br>events of CIA agent Stan Smith and his family. Unlike <br></br>Family Guy, American Dad! does not contain <br></br>cutaway gags, but relies more on situational humor and <br></br>non sequiturs.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/american-dad/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/american-dad/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/american-dad/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/american-dad/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/american-dad/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/american-dad/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/american-dad/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/american-dad/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/american-dad/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/american-dad/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/american-dad/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/american-dad/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/american-dad/episode-13">Episode 13</Link><br/>
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

export default americanDadEpisode1
