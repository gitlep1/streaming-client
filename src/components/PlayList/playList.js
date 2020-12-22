import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import { NavDropdown } from 'react-bootstrap'

import PlaylistForm from './playListForm'
import { playlistCreate } from '../../api/playList'

// import './playList.scss'
// import messages from '../AutoDismissAlert/messages'
// // // import Form from 'react-bootstrap/Form'

class PlaylistCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playlist: {
        title: ''
      },
      createdPlaylistId: null
    }
  }

  handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }

    const playlistEdit = Object.assign(this.state.playlist, updatedField)

    this.setState({ playlist: playlistEdit })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, playlist } = this.props

    playlistCreate(user, playlist)
      .then(
        res => this.setState({ createdPlaylistId: res.data.playlist._id })
      )
      .then(() => msgAlert({
        heading: 'Playlist Created Sucessfully',
        message: '',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Playlist Creation Failed',
        message: '' + err.message,
        variant: 'danger'
      }))
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdPlaylistId, playlist } = this.state

    if (createdPlaylistId) {
      return <Redirect to={`/playlist/${createdPlaylistId}`} />
    }

    return (
      <PlaylistForm
        playlist={playlist}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancel="/homepage"
      />
    )
  }
}

export default PlaylistCreate
