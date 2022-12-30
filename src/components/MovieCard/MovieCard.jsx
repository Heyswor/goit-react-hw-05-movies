const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const genreList = [];

  genres.forEach(({ name }) => genreList.push(name));

  return (
    <>
      <img
        src={`${BASE_IMG_URL}${poster_path}`}
        alt={title}
        width="240px"
        height="auto"
      />
      <h2>
        {title}, Release date: {release_date}
      </h2>
      <p>Vote average: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genreList.join(', ')}</p>
    </>
  );
};
