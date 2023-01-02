import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const genreList = [];

  genres.forEach(({ name }) => genreList.push(name));

  return (
    <div className={css.cardDiv}>
      <img
        src={`${BASE_IMG_URL}${poster_path}`}
        alt={title}
        width="360px"
        height="auto"
      />
      <div className={css.cardFilmInfo}>
        <ul>
          <li>
            <h2>
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p>Vote average: {vote_average}</p>
          </li>
          <li>
            <h3>Overview:</h3>
            <p> {overview}</p>
          </li>
          <li>
            <h3>Genres:</h3>
            <p> {genreList.join(', ')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
