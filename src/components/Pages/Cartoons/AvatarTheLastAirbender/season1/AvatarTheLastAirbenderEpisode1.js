import React from 'react'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { NavDropdown } from 'react-bootstrap'

import avatarTheLastAirbenderImage from '../../../../../ImagesVideos/AvatarTheLastAirbender/avatar the last airbender image.png'
import S1E1 from '../../../../../ImagesVideos/AvatarTheLastAirbender/Season 1 Episode 1.mp4'

import '../../videoPlayer.scss'

const buttonStyle = {
  outline: 'none'
}

const avatarTheLastAirbenderEpisode1 = () => (
  <div>
    <Player
      playsInline
      src={S1E1}
    />
    <div>
      <p className="episodeTitle">
        Episode 1: The Boy in the Iceberg
      </p>
    </div>
    <div>
      <img src={avatarTheLastAirbenderImage} />
      <div className="descriptionField">
        <p>
          Watch Avatar The Last Airbender Book 1 Water online, you <br></br>can find Avatar The Last Airbender Book 1 Water <br></br>episodes English dubbed online for free. Plot: <br></br>A century prior to the series’ opening, when <br></br>Aang was 12 years old, he was frozen into a <br></br>state of suspended animation for 100 years. <br></br>After being awoken by two children from the <br></br>Southern Water Tribe, he finds the world at war<br></br> with the Fire Nation. As the Avatar, he <br></br>sets out to master the elements and ultimately <br></br>defeat the Fire Lord and end the war. Each <br></br>generation yields one person who is capable of <br></br>Bending all four elements. This being is <br></br>referred to as the Avatar, the spirit of the planet <br></br>manifested in human form. When an Avatar dies, <br></br>they are reincarnated into the next nation in <br></br>the Avatar Cycle. The Avatar Cycle parallels <br></br>the seasons: winter for The Water Tribes, <br></br>spring for the Earth Kingdom, summer for the Fire <br></br>Nation, and autumn for the Air Nomads. Legend <br></br>holds the Avatar must master each bending art <br></br>in order, starting with their native element. <br></br>This can sometimes be compromised when the <br></br>situation requires it, as Aang demonstrates in <br></br>the show. For the Avatar, learning to bend the <br></br>element opposite their native element can be <br></br>extremely difficult. This is because opposing <br></br>Bending arts are based on opposing fighting <br></br>styles and disciplines. Firebending and <br></br>Waterbending are opposites, as are Earthbending and <br></br>Airbending.
        </p>
      </div>
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/cartoons/avatar-the-last-airbender/episode-1">Episode 1</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-2">Episode 2</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-3">Episode 3</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-4">Episode 4</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-5">Episode 5</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-6">Episode 6</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-7">Episode 7</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-8">Episode 8</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-9">Episode 9</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-10">Episode 10</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-11">Episode 11</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-12">Episode 12</Link><br/>
          <Link to="/cartoons/avatar-the-last-airbender/episode-13">Episode 13</Link><br/>
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

export default avatarTheLastAirbenderEpisode1
