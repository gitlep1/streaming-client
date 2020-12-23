import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import edEddEddyImage from '../../../../../ImagesVideos/EdEddEddy/ed edd eddy image.png'
import S1E12 from '../../../../../ImagesVideos/EdEddEddy/Season 1 Episode 12.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const edEddEddyEpisode12 = () => (
  <div>
    <Player
      playsInline
      src={S1E12}
    />
    <div>
      <p className="episodeTitle">
        Episode 12: Eds-Aggerate / Oath to an Ed
      </p>
    </div>
    <div>
      <img src={edEddEddyImage} />
      <div className="descriptionField">
        <p>
        Ed, Edd n Eddy is an original animated television series<br></br> created by Danny Antonucci and produced by<br></br> Canadian-based a.k.a. Cartoon. It premiered on<br></br> Cartoon Network in 1998. Ed, Edd n Eddy is one<br></br> of Cartoon Network’s longest running and most<br></br> successful franchises[2][3] and the <br></br>longest-running of the channel’s original Cartoon <br></br>Cartoons. The series revolves around three adolescent <br></br>boys collectively known as “the Eds,” who hang <br></br>around in a suburban cul-de-sac. Unofficially led <br></br>by Eddy, the Eds constantly scheme to make money <br></br>off their peers, in order to purchase their <br></br>favorite confectionery: jawbreakers. However, their <br></br>plans usually fail, leaving them in various <br></br>predicaments.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/ed-edd-eddy/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-13">Episode 13</Link><br/>
        </div>
      </NavDropdown>
      <Link to="/playlists" className="btn btn-primary playlistButton" style={buttonStyle}>Playlists</Link>
      {/* <NavDropdown title={
        <span className="addToPlaylist">Add to playlist</span>
      }
      id="nav-dropdown"
      className="playListDropdown">
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

export default edEddEddyEpisode12
