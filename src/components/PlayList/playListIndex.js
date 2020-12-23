import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import PlayListsCreated from './playListsCreated'
import { playListIndex, playListCreate } from '../../api/playList'
import './playList.scss'

const createPlayListStyle = {
  color: 'red'
}

const backButtonStyle = {
  height: '35px',
  position: 'absolute',
  top: '10vh',
  left: '0vw'
}

class Playlists extends Component {
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

    onPlayListCreate = (event) => {
      event.preventDefault()

      const { msgAlert, user } = this.props

      playListCreate(this.state.playlist, user)

        // giving playListIndex the parameters of (this.props.user)
        .then(() => playListIndex(this.props.user))

        // getting the res and setting the state of playlists to res.data.playlists
        .then(res => {
          console.log('setState playlists ', res.data.playlists)
          return this.setState({ playlists: res.data.playlists, playlist: { title: '' } })
        })

        // showing the message alert
        .then(() => msgAlert({
          heading: 'Playlist Created',
          message: messages.createPlaylistSuccess,
          variant: 'success'
        }))

        // in case of an error clear the form and show the rror message alert
        .catch(error => {
          this.setState({ playlist: {
            title: '' } })
          msgAlert({
            heading: 'Playlist Creation Failed ' + error.message,
            message: messages.createPlaylistFailure,
            variant: 'danger'
          })
        })

      // playListCreate(this.state.playlist, user)
      // // getting the response and setting the states createdId to that response I think?
      //   .then(response => {
      //     this.setState({
      //       createdId: response.data._id
      //     })
      //   })
      //   // giving playListIndex the parameters of (this.props.user) and getting the res and setting the state of playlists to res.data.playlists
      //   .then(() => {
      //     playListIndex(this.props.user)
      //       .then(res => {
      //         console.log('do we get the new list? ', res.data.playlists)
      //         this.setState({ playlists: res.data.playlists })
      //       })
      //   })
      //   // clearing the form
      //   .then(() => this.setState({ playlist: {
      //     title: '' } }))
      //   // after submitting pushes to the url path /playlists
      //   .then(() => history.push('/playlists'))
      //   // showing the message alert
      //   .then(() => msgAlert({
      //     heading: 'Playlist Created',
      //     message: messages.createPlaylistSuccess,
      //     variant: 'success'
      //   }))
      //   // in case of an error clear the form and show the rror message alert
      //   .catch(error => {
      //     this.setState({ playlist: {
      //       title: '' } })
      //     msgAlert({
      //       heading: 'Playlist Creation Failed ' + error.message,
      //       message: messages.createPlaylistFailure,
      //       variant: 'danger'
      //     })
      //   })
    }

    render () {
      console.log('render playlists ', this.state.playlists)
      return (
        <div className="row">
          <Link to="/homepage" className="btn btn-secondary backButton" style={backButtonStyle}>{'<-Back'}</Link>
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3 className="createPlaylistStyle" style={createPlayListStyle}>Create a playlist</h3>
            <Form onSubmit={this.onPlayListCreate}>
              <Form.Group controlId="title">
                <Form.Control
                  required
                  type="text"
                  name="title"
                  placeholder="Enter Your Playlist Name"
                  value={this.state.playlist.title}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <output
              className="playListOutput"
              type="text"
              name="title"
              value={this.state.playlist.title}
            >
              <PlayListsCreated
                user={this.props.user}
                msgAlert={this.props.msgAlert}
              />
            </output>
          </div>
        </div>
      )
    }
}

export default withRouter(Playlists)
