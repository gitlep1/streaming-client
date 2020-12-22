import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import FirstPage from './components/Pages/Firstpage/Firstpage'
import homePage from './components/Pages/HomePage/Homepage'
import CartoonsPage from './components/Pages/CartoonsPage/CartoonsPage'
import Playlists from './components/PlayList/playList'
import edEddEddyEpisode1 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode1'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          {/* <AuthenticatedRoute user={user} path='/cartoons' render={() => (
            <div>
              <playList msgAlert={this.msgAlert} user={user} />
            </div>
          )}/> */}
          <AuthenticatedRoute user={user} path='/playlists' render={() => (
            <Playlists msgAlert={this.msgAlert} user={user} />
          )}/>
          <Route exact path='/' component={FirstPage} />
          <Route exact path='/Homepage' component={homePage} />
          <Route exact path='/cartoons' component={CartoonsPage} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-1" component={edEddEddyEpisode1} />
        </main>
      </Fragment>
    )
  }
}

export default App
