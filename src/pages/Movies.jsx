import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getFilmsByKeyword } from 'components/services/themoviedbAPI';
import { MovieList } from 'components/MovieList/MovieList';



export const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getFilmsByKeyword(searchParams)
      .then(data => setSearchFilms(data.results))
      .catch(error => console.log(error));
  });

  const handleFilmName = film => {
    setSearchParams(film);
  };

  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <SearchMovie nameSaver={handleFilmName} />
      {searchFilms.length > 0 ? <MovieList movies={searchFilms} /> : <p>Nothing to show yet...</p>}
    </div>
  );
};
