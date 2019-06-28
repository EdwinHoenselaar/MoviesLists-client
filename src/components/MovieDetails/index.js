import React, { useState, useEffect } from 'react'
import request from 'superagent'

export default function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState('Loading...')
  
  useEffect(() => {
    request
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovieDetails(res.body))
  }, [])

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{'Uitgekomen in: '+movieDetails.year}</p>
      <p>{'Speelduur: '+movieDetails.runtime}</p>
      <p>{'Cijfer: '+movieDetails.grade}</p>
    </div>
  )
}
