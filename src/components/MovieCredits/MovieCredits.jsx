import { getMovieCredits } from 'components/services/themoviedbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(Number(movieId))
      .then(({ cast }) => setFilmCast(cast))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(filmCast);

  return (
    <ul>
      {filmCast.map(({ credit_id, profile_path, name, character }) => {
        return (
          <li key={credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="100px"
              height="150px"
            />
            <h3>Actor: {name}</h3>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
