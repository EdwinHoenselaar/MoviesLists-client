import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route exact path={`/`} component={MovieList} />
    <Route exact path={`/movieDetails/:id`} component={MovieDetails} />
    <Route exact path={`/new`} component={MovieForm} />
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
