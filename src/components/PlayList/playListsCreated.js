import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'

import { playListIndex, playListDelete } from '../../api/playList'

import './playList.scss'

class PlayListsCreated extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playlists: [],
      playlist: {
        title: ''
      }
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })
  componentDidMount () {
    const { user } = this.props
    playListIndex(user)
      .then(res => {
        this.setState({ playlists: res.data.playlists })
      })
  }

  handleInputChange = (event) => {
    event.persist()

    this.setState(prevState => {
      const updatedField = {
        [event.target.name]: event.target.value
      }
      const updatedData = Object.assign({}, prevState.playlist, updatedField)
      return { playlist: updatedData }
    })
  }

  onPlaylistDelete = (event, id) => {
    event.preventDefault()

    // const { msgAlert } = this.props

    playListDelete(this.props.user, id)
      .then(() => {
        this.setState({ text: '' })
        this.props.msgAlert({
          heading: 'Playlist Deleted!',
          message: messages.deletePlaylistSuccess,
          variant: 'success'
        })
      })
      .then(props => {
        playListIndex(this.props.user)
          .then(res => {
            this.setState({ playlists: res.data.playlists })
          })
      })
      .catch(error => {
        this.props.msgAlert({
          heading: 'Playlist delete failed ' + error.message,
          message: messages.deletePlaylistFailure,
          variant: 'danger'
        })
      })
  }

  handlePlaylistUpdate = (event) => {
    event.persist()

    this.setState(prevState => {
      const uField = {
        'text': event.target.value
      }
      const uData = Object.assign({}, prevState.playlist, uField)
      return { title: uData }
    })
  }

  render () {
    const playlists = this.state.playlists.map(playlist => (
      <li key={playlist._id}>
        <Link to={`/playListUpdate/${playlist._id}`}>{playlist.title}</Link>
        <button className="btn btn-secondary deleteButton" name={playlist._id} onClick={(event) => this.onPlaylistDelete(event, playlist._id)} >Delete</button>
        <Link to={'/playListUpdate/' + playlist._id} className="btn btn-primary editButton">Edit</Link>
      </li>
    ))
    return (
      <div>
        <p className="userCreatedPlaylists">
          {playlists}
        </p>
        <Link to="/playlists" className="btn btn-secondary backButton">Back</Link>
      </div>
    )
  }
}

export default withRouter(PlayListsCreated)
