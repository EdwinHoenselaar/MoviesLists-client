import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MoviesListTable from './MoviesListTable'
import { getMovies } from '../../actions/movie'

export default function MovieList () {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const thunk = getMovies();
    dispatch(thunk);
  }, [dispatch])

  const moviesListTable = 
    movies && 
    <MoviesListTable movieList={movies}/>
    
  return (
    <div>
      {moviesListTable}
    </div>
  )
}
