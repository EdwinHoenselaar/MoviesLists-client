import React, { useState, useEffect } from 'react'
import request from 'superagent'
import MoviesListTable from './MoviesListTable'
import { getMovies } from '../../actions/movie'

export default function MovieList () {
  // const [movieList, setMovieList] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  // useEffect(() => {
  //   request
  //     .get('http://localhost:5000/api/movies')
  //     .then(res => setMovieList(res.body))
  // }, [])

  return (
    <div>
      <MoviesListTable/>
    </div>
  )
}
