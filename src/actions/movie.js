import * as request from 'superagent'
import { baseUrl } from '../constants'

export const SET_MOVIES = 'SET_MOVIES'

const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
})

export const getMovies = () => (dispatch) => {
  request
    .get(`${baseUrl}movies`)
    .then(res => {
      dispatch(setMovies(res.body))
    })
    .catch(err => console.error(err))
}

export const deleteMovie = (movieId) => (dispatch) => {
  request
    .delete(`${baseUrl}movies/${movieId}`)
    .then(res => console.log(res))
    .catch(err => console.error(err))
}