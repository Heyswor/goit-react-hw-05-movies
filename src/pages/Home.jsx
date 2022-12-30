import { useState, useEffect } from 'react';
import { getTrends } from 'components/services/themoviedbAPI';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    getTrends()
      .then(data => setTrendFilms(data.results))
      .catch(error => console.log(error));
  });

  return (
    <div>
      <h2>Tranding Films</h2>
      <MovieList movies={trendFilms} />
    </div>
  );
};
