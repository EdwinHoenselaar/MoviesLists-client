import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import NavBar from './components/NavBar'
import NewMovieInput from './components/NewMovieInput';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavBar />
      <Route exact path={`/`} component={MovieList} />
      <Route exact path={`/movieDetails/:id`} component={MovieDetails} />
      <Route exact path={`/new`} component={NewMovieInput} />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
