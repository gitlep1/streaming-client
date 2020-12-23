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
      // event.target.reset()

      const { msgAlert, user, history } = this.props

      playListCreate(this.state.playlist, user)
        .then(response => {
          this.setState({
            createdId: response.data._id
          })
        })
        .then(props => {
          playListIndex(this.props.user)
            .then(res => {
              this.setState({ playlists: res.data.playlists })
            })
        })
        .then(() => this.setState({ playlist: {
          title: '' } }))
        .then(() => history.push('/playlists'))
        .then(() => msgAlert({
          heading: 'Playlist Created',
          message: messages.createPlaylistSuccess,
          variant: 'success'
        }))
        .catch(error => {
          this.setState({ title: '' })
          msgAlert({
            heading: 'Playlist Creation Failed ' + error.message,
            message: messages.createPlaylistFailure,
            variant: 'danger'
          })
        })
    }

    render () {
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
