import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { getFilmsDetails } from 'components/services/themoviedbAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';



export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());



  useEffect(() => {
    getFilmsDetails(Number(movieId))
      .then(setFilmDetails)
      .catch(error => console.log(error));
  }, [movieId]);





  return (
    <main>
      <Link to={location.current.state?.from ?? '/'}>Go back</Link>
      {filmDetails ? <MovieCard movie={filmDetails} /> : <p>NO MOVIES</p>}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
