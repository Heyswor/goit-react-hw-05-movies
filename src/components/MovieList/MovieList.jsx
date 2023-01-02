import { Link, useLocation } from 'react-router-dom';
import { Movies } from 'pages/Movies';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              element={<Movies />}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
