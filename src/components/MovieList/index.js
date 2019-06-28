import React, { useState, useEffect } from 'react'
import request from 'superagent'
import MoviesListTable from './MoviesListTable';

export default function MovieList () {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    request
      .get('http://localhost:5000/api/movies')
      .then(res => setMovieList(res.body))
  }, [])

  return (
    <div>
      <MoviesListTable movieList={movieList}/>
    </div>
  )
}
