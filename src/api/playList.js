import apiUrl from '../apiConfig'
import axios from 'axios'

export const playListCreate = (playlist, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/playlists',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { playlist }
  })
}

export const playListIndex = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/playlists',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playListDelete = (user, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/playlists/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playListShow = (user, playlistId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/playlists/' + playlistId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playListUpdate = (user, playlist, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/playlists/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { playlist: playlist }
  })
}
