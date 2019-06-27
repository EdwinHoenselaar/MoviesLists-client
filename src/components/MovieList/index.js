import React, { useState, useEffect } from 'react'
import request from 'superagent'

export default function MovieList (props) {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    request
      .get('http://localhost:5000/api/movies')
      .then(res => setMovieList(res.body))
  }, [movieList])

  return (
    <div>
      {movieList.map(movie => {
        return (
          <h3 key={movie.id}>{movie.title}</h3>
        )
      })}
    </div>
  )
}
