import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { playListUpdate } from '../../api/playList'

import './playList.scss'

const UpdatePlayList = props => {
  const [playlist, setPlaylist] = useState({ title: '' })
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match } = props

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    setPlaylist(oldPlaylist => {
      const updatedPlaylist = { ...oldPlaylist, ...updatedField }
      return updatedPlaylist
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    playListUpdate(user, playlist, match.params.playlistId)
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Playlist Updated Successfully',
        message: 'Playlist title has been changed',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Playlist Update Failed',
        message: 'You do not own this playlist ' + err.message,
        variant: 'danger'
      }))
  }

  if (updated) {
    return (
      <Redirect to='/playlistsCreated'/>
    )
  }

  return (
    <React.Fragment>
      <div className="updatePlaylist">
        <h1>Change Playlist Name</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New Playlist Name"
            value={playlist.title}
            onChange={handleChange}
            name="title"
          />
          <button type="submit">Rename Playlist</button>
        </form>
      </div>
      <Link to="/playlistsCreated" className="btn btn-secondary backButton">Back</Link>
    </React.Fragment>
  )
}

export default UpdatePlayList
