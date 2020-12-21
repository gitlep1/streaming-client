import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import edEddEddyImage from '../../../../ImagesVideos/Ed-Edd-N-Eddy-crazy-faces.png'
import S1E1 from '../../../../ImagesVideos/EdEddEddy/Season 1 Episode 1.mp4'

import '../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const edEddEddyEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: The Ed-touchables / Nagged to Ed
      </p>
      <div className="addToPlaylist">
        <NavDropdown title={
          <span className="addToPlaylistTitle">Add to playlist</span>
        }
        id="nav-dropdown"
        className="addToPlaylistDropdown">
          <div>
            <button className="addToPlaylistButton" style={buttonStyle}>Create Playlist +</button>
          </div>
        </NavDropdown>
      </div>
    </div>
    <div>
      <img src={edEddEddyImage} />
      <div className="descriptionField">
        <p>
        Ed, Edd n Eddy is an original animated television series<br></br> created by Danny Antonucci and produced by<br></br> Canadian-based a.k.a. Cartoon. It premiered on<br></br> Cartoon Network in 1998. Ed, Edd n Eddy is one<br></br> of Cartoon Network’s longest running and most<br></br> successful franchises[2][3] and the <br></br>longest-running of the channel’s original Cartoon <br></br>Cartoons. The series revolves around three adolescent <br></br>boys collectively known as “the Eds,” who hang <br></br>around in a suburban cul-de-sac. Unofficially led <br></br>by Eddy, the Eds constantly scheme to make money <br></br>off their peers, in order to purchase their <br></br>favorite confectionery: jawbreakers. However, their <br></br>plans usually fail, leaving them in various <br></br>predicaments.
        </p>
      </div>
      <NavDropdown title={
        <span className="seasonTitle">Season 1</span>
      }
      id="nav-dropdown"
      className="seasonDropdown">
        <div className="seasonEpisodes">
          <Link to="/cartoons/ed-edd-eddy/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/ed-edd-eddy/episode-5">Episode 5</Link><br/>
        </div>
      </NavDropdown>
    </div>
  </div>
)

export default edEddEddyEpisode1
