import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiev } from 'components/services/themoviedbAPI';
import css from './MovieReviews.module.css';

const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieRewiev(Number(movieId))
      .then(({ results }) => setFilmReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);


  if (filmReviews.length === 0) {
    return <p>We don't have any rewievs for this movie</p>;
  }
  return (
    <ul className={css.reviewsList}>
      {filmReviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author name: {author} </h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
