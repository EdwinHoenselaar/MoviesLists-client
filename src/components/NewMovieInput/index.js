import React, { useState } from 'react'
import MovieForm from '../MovieForm'
import { useSelector, useDispatch } from 'react-redux'
import { createMovie } from '../../actions/movie'

export default function NewMovieInput() {
  const dispatch = useDispatch()
  
  const [newMovie, setNewMovie] = useState({})

  const onChange = event => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    const object = {...newMovie, [name]: value}
    console.log('name test:', name)
    console.log('value test:', value)
    console.log('object test:', object)
    setNewMovie(object)
    console.log("onChange check", newMovie)
  }

  const onSubmit = (event) => {
    console.log('onsubmit test', newMovie)
    event.preventDefault()
    const thunk = createMovie(newMovie)
    dispatch(thunk)
  }

  return (
    <div>
      <MovieForm values={newMovie} onChange={onChange} onSubmit={onSubmit}/>
    </div>
  )
}
