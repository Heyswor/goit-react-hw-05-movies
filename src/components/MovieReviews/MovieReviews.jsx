import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiev } from 'components/services/themoviedbAPI';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

export const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieRewiev(Number(movieId))
      .then(({results})=>setFilmReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(filmReviews);
  return (
    <ul>
      {filmReviews.map(({ id, author, content }) => (
        <Link key={id}>
          <h4>Author name: {author} </h4>
          <p>{content}</p>
        </Link>
      ))}
    </ul>
  );
};
