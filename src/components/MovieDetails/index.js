import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { Typography, Card, CardContent } from '@material-ui/core';

export default function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState('Loading...')
  const id = props.match.params.id;

  useEffect(() => {
    request
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovieDetails(res.body))
  }, [id])

  return (
    <Card>
      <CardContent>
        <Typography variant="h1">{movieDetails.title}</Typography>
        <Typography variant="h4">{'Uitgekomen in: '+movieDetails.year}</Typography>
        <Typography variant="h4">{'Speelduur: '+movieDetails.runtime}</Typography>
        <Typography variant="h4">{'Cijfer: '+movieDetails.grade}</Typography>
      </CardContent>
    </Card>
  )
}
