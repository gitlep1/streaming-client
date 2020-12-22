import apiUrl from '../apiConfig'
import axios from 'axios'

export const playlistCreate = (playlist, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/cartoons',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { playlist }
  })
}

export const playlistIndex = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/cartoons',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playlistDelete = (user, playlistId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/cartoons/' + playlistId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playlistShow = (user, playlistId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/cartoons/' + playlistId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const playlistUpdate = (user, playlist, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/cartoons/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { playlist: playlist }
  })
}
