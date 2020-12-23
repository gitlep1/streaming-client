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
// import Playlists from './components/PlayList/playList'
import PlayListIndex from './components/PlayList/playListIndex'
import UpdatePlayList from './components/PlayList/playListUpdate'
import edEddEddyEpisode1 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode1'
import edEddEddyEpisode2 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode2'
import edEddEddyEpisode3 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode3'
import edEddEddyEpisode4 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode4'
import edEddEddyEpisode5 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode5'
import edEddEddyEpisode6 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode6'
import edEddEddyEpisode7 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode7'
import edEddEddyEpisode8 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode8'
import edEddEddyEpisode9 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode9'
import edEddEddyEpisode10 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode10'
import edEddEddyEpisode11 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode11'
import edEddEddyEpisode12 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode12'
import edEddEddyEpisode13 from './components/Pages/Cartoons/EdEddEddy/season1/EdEddEddyEpisode13'

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
          {/* <AuthenticatedRoute user={user} path='/playlists' render={() => (
            <Playlists msgAlert={this.msgAlert} user={user} />
          )}/> */}
          <AuthenticatedRoute user={user} path='/playlists' render={() => (
            <div>
              <PlayListIndex msgAlert={this.msgAlert} user={user} />
            </div>
          )}/>
          <AuthenticatedRoute user={user} exact path='/playListUpdate/:playlistId' render={({ match, history }) => (
            <UpdatePlayList
              match={match}
              history={history}
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <Route exact path='/' component={FirstPage} />
          <Route exact path='/Homepage' component={homePage} />
          <Route exact path='/cartoons' component={CartoonsPage} />
          {/* <AuthenticatedRoute user={user} exact path='/cartoons/ed-edd-eddy/episode-1' render={() => (
            <Playlists msgAlert={this.msgAlert} user={user} />
          )}/> */}
          <Route exact path="/cartoons/ed-edd-eddy/episode-1" component={edEddEddyEpisode1} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-2" component={edEddEddyEpisode2} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-3" component={edEddEddyEpisode3} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-4" component={edEddEddyEpisode4} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-5" component={edEddEddyEpisode5} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-6" component={edEddEddyEpisode6} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-7" component={edEddEddyEpisode7} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-8" component={edEddEddyEpisode8} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-9" component={edEddEddyEpisode9} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-10" component={edEddEddyEpisode10} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-11" component={edEddEddyEpisode11} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-12" component={edEddEddyEpisode12} />
          <Route exact path="/cartoons/ed-edd-eddy/episode-13" component={edEddEddyEpisode13} />
        </main>
      </Fragment>
    )
  }
}

export default App
