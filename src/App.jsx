/* eslint-disable max-len */

import './App.scss';
// import moviesFromServer from './api/movies.json';
import movies from './api/movies.json';
// import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">

      <MovieList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);