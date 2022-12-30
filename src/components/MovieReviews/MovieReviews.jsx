import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiev } from 'components/services/themoviedbAPI';

export const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieRewiev(Number(movieId))
      .then(({results})=>setFilmReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(filmReviews);
  return <div>Hello Reviews</div>;
};
